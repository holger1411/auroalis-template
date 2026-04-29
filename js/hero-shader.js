/* ===== Auroalis hero — WebGL2 shader gradient with in-shader grain =====
 * Architecture borrowed from Framer's State of Sites 2026 hero:
 *   - 5-stop sRGB palette interpolated in OKLab for perceptually-smooth
 *     transitions without grey midtones
 *   - Iterative turbulence (4 outer × 4 inner sin/cos passes) seeded
 *     by a hashed PCG seed and offset by the golden angle
 *   - In-shader film-grain dither: quickNoise(floor(fragCoord)) shifts
 *     the per-pixel palette-lookup parameter by ±u_dither/2 — coloured
 *     grain that follows the gradient + kills banding in one pass
 * Palette is the Auroalis aurora spectrum (deep, navy, arctic blue,
 * violet, aurora green). One canvas, one program, one draw per frame.
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', initHero);

  function initHero() {
    var canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    var gl = canvas.getContext('webgl2', { antialias: false, premultipliedAlpha: false });
    if (!gl) {
      // No WebGL2 — leave the section's bg-[#1C1917] as the static fallback.
      canvas.style.display = 'none';
      return;
    }

    var VERT_SRC = [
      '#version 300 es',
      'precision highp float;',
      'in vec2 a_position;',
      'in vec2 a_texCoord;',
      'out vec2 v_uv;',
      'void main() {',
      '  v_uv = a_texCoord;',
      '  gl_Position = vec4(a_position, 0.0, 1.0);',
      '}'
    ].join('\n');

    var FRAG_SRC = [
      '#version 300 es',
      'precision highp float;',
      'in vec2 v_uv;',
      'out vec4 fragColor;',
      '',
      '#define NUM_COLORS 8',
      '',
      'uniform vec3  u_colors[NUM_COLORS];',
      'uniform int   u_colorsLength;',
      'uniform float u_time;',
      'uniform vec2  u_resolution;',
      'uniform float u_pixelRatio;',
      'uniform float u_seed;',
      'uniform float u_speed;',
      'uniform float u_scale;',
      'uniform float u_turbAmp;',
      'uniform float u_turbFreq;',
      'uniform float u_waveFreq;',
      'uniform float u_dither;',
      'uniform float u_contrast;',
      'uniform float u_exposure;',
      '',
      'const float TAU = 6.28318530;',
      'const float GOLDEN_ANGLE = 2.3999632;',
      '',
      '// PCG hash — high-quality 3D integer hash',
      'uvec3 hash3(uvec3 v) {',
      '  v = v * 1664525u + 1013904223u;',
      '  v.x += v.y * v.z; v.y += v.z * v.x; v.z += v.x * v.y;',
      '  v ^= v >> 16u;',
      '  v.x += v.y * v.z; v.y += v.z * v.x; v.z += v.x * v.y;',
      '  return v;',
      '}',
      'vec3 seedRandom(float seedVal) {',
      '  uvec3 s = uvec3(',
      '    floatBitsToUint(seedVal),',
      '    floatBitsToUint(seedVal * 1.5 + 7.31),',
      '    floatBitsToUint(seedVal * 2.7 + 13.37)',
      '  );',
      '  s = hash3(s);',
      '  return vec3(s) / float(0xFFFFFFFFu);',
      '}',
      '',
      '// sRGB <-> linear and OKLab utilities',
      'vec3 toLinear(vec3 c) { return pow(c, vec3(2.2)); }',
      'vec3 toSrgb(vec3 c)   { return pow(clamp(c, 0.0, 1.0), vec3(0.4545)); }',
      'vec3 linearToOklab(vec3 c) {',
      '  float l = 0.4122214708*c.r + 0.5363325363*c.g + 0.0514459929*c.b;',
      '  float m = 0.2119034982*c.r + 0.6806995451*c.g + 0.1073969566*c.b;',
      '  float s = 0.0883024619*c.r + 0.2817188376*c.g + 0.6299787005*c.b;',
      '  l = pow(max(l, 0.0), 1.0/3.0);',
      '  m = pow(max(m, 0.0), 1.0/3.0);',
      '  s = pow(max(s, 0.0), 1.0/3.0);',
      '  return vec3(',
      '    0.2104542553*l + 0.7936177850*m - 0.0040720468*s,',
      '    1.9779984951*l - 2.4285922050*m + 0.4505937099*s,',
      '    0.0259040371*l + 0.7827717662*m - 0.8086757660*s',
      '  );',
      '}',
      'vec3 oklabToLinear(vec3 c) {',
      '  float l = c.x + 0.3963377774*c.y + 0.2158037573*c.z;',
      '  float m = c.x - 0.1055613458*c.y - 0.0638541728*c.z;',
      '  float s = c.x - 0.0894841775*c.y - 1.2914855480*c.z;',
      '  l = l*l*l; m = m*m*m; s = s*s*s;',
      '  return vec3(',
      '    +4.0767416621*l - 3.3077115913*m + 0.2309699292*s,',
      '    -1.2684380046*l + 2.6097574011*m - 0.3413193965*s,',
      '    -0.0041960863*l - 0.7034186147*m + 1.7076147010*s',
      '  );',
      '}',
      '',
      '// Palette lookup — segmented OKLab interpolation across u_colors',
      'vec3 paletteN(float t, int count) {',
      '  if (count < 2) return toLinear(u_colors[0]);',
      '  float seg = 1.0 / float(count - 1);',
      '  t = clamp(t, 0.0, 1.0);',
      '  int idx = min(int(floor(t / seg)), count - 2);',
      '  float local = clamp((t - float(idx) * seg) / seg, 0.0, 1.0);',
      '  vec3 a = linearToOklab(toLinear(u_colors[idx]));',
      '  vec3 b = linearToOklab(toLinear(u_colors[idx + 1]));',
      '  return oklabToLinear(mix(a, b, local));',
      '}',
      '',
      '// Film-grain hash — pixel-stable, fed into the palette lookup',
      'float quickNoise(vec2 I) {',
      '  return fract(sin(dot(I, vec2(12.9898, 78.233))) * 43758.5453);',
      '}',
      '',
      'void main() {',
      '  vec2 fragCoord = v_uv * u_resolution;',
      '  vec2 r = u_resolution;',
      '  vec2 p = (fragCoord * 2.0 - r) / r.y;',
      '',
      '  float t = u_time * 0.3 * u_speed;',
      '',
      '  // Seed-based offsets and golden-angle rotation',
      '  vec3 seedOff  = seedRandom(u_seed);',
      '  vec3 seedOff2 = seedRandom(u_seed + 100.0);',
      '  float seedAngle = u_seed * GOLDEN_ANGLE;',
      '  vec2 seedPhase = (seedOff2.xy - 0.5) * TAU;',
      '  float cs = cos(seedAngle);',
      '  float sn = sin(seedAngle);',
      '  p = mat2(cs, -sn, sn, cs) * p;',
      '',
      '  // Quantise sample coords to device pixels so the grain stays crisp',
      '  float dither = quickNoise(floor(fragCoord / u_pixelRatio));',
      '',
      '  // Iterative turbulence — outer ramps the inner depth/weight',
      '  float total = 0.0;',
      '  float totalW = 0.0;',
      '  float freq = 1.0 / max(u_turbFreq, 0.01);',
      '  for (float i = 0.0; i < 4.0; i++) {',
      '    float eph = i / 4.0;',
      '    vec2 q = p * u_scale;',
      '    float a = seedPhase.x;',
      '    float d = seedPhase.y;',
      '    for (int j = 2; j < 6; j++) {',
      '      float fj = float(j);',
      '      q += u_turbAmp * sin(q.yx / freq * fj + t + vec2(a, d) + seedOff.xy * fj) / fj;',
      '      a += cos(fj + d * 1.2 + q.x * 2.0 - t + seedOff2.z);',
      '      d += sin(fj * q.y + a + seedOff.z + t + seedOff2.y);',
      '    }',
      '    float v = 0.5 + 0.5 * sin(length(q.yx + vec2(a, d) * 0.2) * u_waveFreq + i * i + seedOff.x);',
      '    float w = smoothstep(0.0, 0.5, eph) * smoothstep(1.0, 0.5, eph);',
      '    total  += v * w;',
      '    totalW += w;',
      '  }',
      '',
      '  float val = total / totalW;',
      '  val = clamp((val - 0.3) / 0.4, 0.0, 1.0);',
      '',
      '  // Apply grain to the gradient lookup parameter, not the colour:',
      '  // each pixel shifts ±u_dither/2 along the palette ramp, so the',
      '  // grain takes on the surrounding colour and also dithers banding.',
      '  val = clamp(val + (dither - 0.5) * u_dither, 0.0, 1.0);',
      '',
      '  vec3 col = paletteN(val, u_colorsLength);',
      '  col *= u_exposure;',
      '  col = (col - 0.5) * u_contrast + 0.5;',
      '  col = max(col, 0.0);',
      '  col = toSrgb(col);',
      '  fragColor = vec4(col, 1.0);',
      '}'
    ].join('\n');

    function compile(type, src) {
      var sh = gl.createShader(type);
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
        console.error('hero-shader: compile error', gl.getShaderInfoLog(sh));
        return null;
      }
      return sh;
    }

    var vs = compile(gl.VERTEX_SHADER, VERT_SRC);
    var fs = compile(gl.FRAGMENT_SHADER, FRAG_SRC);
    if (!vs || !fs) { canvas.style.display = 'none'; return; }

    var prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error('hero-shader: link error', gl.getProgramInfoLog(prog));
      canvas.style.display = 'none';
      return;
    }
    gl.useProgram(prog);

    // Fullscreen quad: pos.x pos.y u v
    var quadBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quadBuf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1,  0, 0,
       1, -1,  1, 0,
      -1,  1,  0, 1,
       1,  1,  1, 1
    ]), gl.STATIC_DRAW);

    var aPos = gl.getAttribLocation(prog, 'a_position');
    var aUV  = gl.getAttribLocation(prog, 'a_texCoord');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 16, 0);
    gl.enableVertexAttribArray(aUV);
    gl.vertexAttribPointer(aUV, 2, gl.FLOAT, false, 16, 8);

    function loc(name) { return gl.getUniformLocation(prog, name); }
    var u_colors        = loc('u_colors');
    var u_colorsLength  = loc('u_colorsLength');
    var u_time          = loc('u_time');
    var u_resolution    = loc('u_resolution');
    var u_pixelRatio    = loc('u_pixelRatio');
    var u_seed          = loc('u_seed');
    var u_speed         = loc('u_speed');
    var u_scale         = loc('u_scale');
    var u_turbAmp       = loc('u_turbAmp');
    var u_turbFreq      = loc('u_turbFreq');
    var u_waveFreq      = loc('u_waveFreq');
    var u_dither        = loc('u_dither');
    var u_contrast      = loc('u_contrast');
    var u_exposure      = loc('u_exposure');

    // === Auroalis palette — sRGB 0..1 ===
    // 8 weighted stops, heavily biased toward dark + blue. Black gets
    // three slots so the page reads as polar night first; violet and
    // green each get a single small region near the top of t:
    //
    //   t=0.000  #000000   deep
    //   t=0.143  #000000   deep  ┐
    //   t=0.286  #000000   deep  ┘ tripled — large dark anchor
    //   t=0.429  #0A1A4A   deep navy
    //   t=0.571  #1E3A8A   arctic blue  ┐
    //   t=0.714  #1E3A8A   arctic blue  ┘ doubled — long blue plateau
    //   t=0.857  #6B2EC7   aurora violet (single — narrow violet band)
    //   t=1.000  #FB923C   warm amber-orange (single — narrow accent at peak)
    var palette = new Float32Array([
      0.000,   0.000,   0.000,
      0.000,   0.000,   0.000,
      0.000,   0.000,   0.000,
      10/255,  26/255,  74/255,
      30/255,  58/255,  138/255,
      30/255,  58/255,  138/255,
      107/255, 46/255,  199/255,
      251/255, 146/255, 60/255
    ]);
    gl.uniform3fv(u_colors, palette);
    gl.uniform1i(u_colorsLength, 8);

    // === Tasteful defaults — slow, soft, just enough grain ===
    gl.uniform1f(u_seed,     23.0);
    gl.uniform1f(u_speed,    0.32);
    gl.uniform1f(u_scale,    0.85);
    gl.uniform1f(u_turbAmp,  1.0);
    gl.uniform1f(u_turbFreq, 0.18);
    gl.uniform1f(u_waveFreq, 2.4);
    gl.uniform1f(u_dither,   0.18);
    gl.uniform1f(u_contrast, 1.15);
    gl.uniform1f(u_exposure, 1.0);

    function resize() {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      var cssW = canvas.clientWidth || canvas.parentElement.clientWidth;
      var cssH = canvas.clientHeight || canvas.parentElement.clientHeight;
      var w = Math.max(1, Math.floor(cssW * dpr));
      var h = Math.max(1, Math.floor(cssH * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      gl.viewport(0, 0, w, h);
      gl.uniform2f(u_resolution, w, h);
      gl.uniform1f(u_pixelRatio, dpr);
    }
    resize();
    window.addEventListener('resize', resize);

    var reduced = window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    var start = performance.now();
    var rafId = 0;
    function frame(now) {
      gl.uniform1f(u_time, (now - start) / 1000);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      if (!reduced) rafId = requestAnimationFrame(frame);
    }
    rafId = requestAnimationFrame(frame);

    // Pause when tab is hidden, resume when visible — saves the GPU.
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      } else if (!rafId && !reduced) {
        rafId = requestAnimationFrame(frame);
      }
    });
  }
})();
