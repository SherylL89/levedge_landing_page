"use client";

import { useEffect, useRef, useState } from "react";

// GravityGrid — hairline grid that warps toward the cursor as if pulled into a
// gravity well. Quiet ambient motion when idle, strong lens-distortion on
// hover. Lime hue tints the pull center. Ported from the design handoff's
// gravity-grid.jsx; falls back to a static CSS grid when WebGL is unavailable.

const gridVert = `
attribute vec2 a_pos;
varying vec2 v_uv;
void main() {
  v_uv = a_pos * 0.5 + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}`;

const gridFrag = `
precision highp float;
varying vec2 v_uv;
uniform vec2  u_res;       // device px
uniform vec2  u_mouse;     // device px, (-1,-1) when away
uniform float u_t;
uniform float u_intensity; // pull strength
uniform float u_ambient;   // idle pulse strength
uniform float u_grid;      // grid cell size in device px
uniform float u_active;    // 0..1 — fades pull in/out

// Distance-warp gravity well. Returns the position at which the grid
// should be sampled — bent toward the well so straight lines curve in.
vec2 gravityWarp(vec2 p, vec2 well, float strength) {
  vec2 d = p - well;
  float r = length(d) + 1.0;
  // Inverse-distance falloff with finite radius
  float falloff = 1.0 / (1.0 + r * r * 0.00012);
  // Pull toward well — sample from farther out as r decreases
  return p - normalize(d + vec2(0.0001)) * falloff * strength * r;
}

// Antialiased grid lines at p with cell size c.
// Returns line intensity (0..1).
float gridMask(vec2 p, float c) {
  vec2 g = abs(fract(p / c - 0.5) - 0.5) * c;
  vec2 fw = fwidth(p) * 0.85;
  vec2 line = 1.0 - smoothstep(vec2(0.0), fw, g);
  return max(line.x, line.y);
}

void main() {
  vec2 px = v_uv * u_res;

  // Two gravity wells: cursor (active) + slow ambient one
  vec2 cursor = u_mouse;
  vec2 ambientWell = u_res * 0.5 + vec2(
    sin(u_t * 0.25) * u_res.x * 0.18,
    cos(u_t * 0.22) * u_res.y * 0.12
  );

  // Warp grid coords by both wells
  vec2 warped = px;
  warped = gravityWarp(warped, ambientWell, 70.0 * u_ambient);
  warped = gravityWarp(warped, cursor,     260.0 * u_intensity * u_active);

  // Two layers: fine grid + coarse accent every 4 cells
  float fine   = gridMask(warped, u_grid);
  float coarse = gridMask(warped, u_grid * 4.0);

  // Distance to the cursor well in screen px — drives lime glow and brightness
  float dCursor = length(px - cursor);
  float glow    = exp(-dCursor * dCursor / (160.0 * 160.0)) * u_active;
  float halo    = exp(-dCursor / 220.0) * u_active * 0.6;

  // Ambient well also gets a quieter glow
  float dAmb  = length(px - ambientWell);
  float ambGlow = exp(-dAmb / 280.0) * u_ambient * 0.35;

  // Palette — deep ink page, lime accent
  vec3 ink   = vec3(0.027, 0.031, 0.039);
  vec3 line  = vec3(1.0);
  vec3 lime  = vec3(0.839, 0.949, 0.294);   // #D6F24B

  // Base background: subtle radial near the cursor pulls toward lime tint
  vec3 col = ink;
  col += lime * 0.10 * halo;
  col += lime * 0.04 * ambGlow;

  // Fine grid — low alpha, tints lime near cursor
  vec3 fineCol = mix(line * 0.06, lime * 0.45, clamp(halo * 1.8, 0.0, 1.0));
  col += fineCol * fine;

  // Coarse grid — slightly stronger
  vec3 coarseCol = mix(line * 0.10, lime * 0.65, clamp(halo * 2.0, 0.0, 1.0));
  col += coarseCol * coarse * 0.8;

  // Bright cursor pin — pure lime point glow
  col += lime * glow * 1.4;
  // Wider lime halo
  col += lime * halo * 0.35;

  // Vignette so type reads
  vec2 v = (v_uv - 0.5) * 2.0;
  float vig = 1.0 - smoothstep(0.6, 1.4, dot(v, v));
  col *= mix(0.55, 1.0, vig);

  gl_FragColor = vec4(col, 1.0);
}`;

type GravityGridProps = {
  className?: string;
  style?: React.CSSProperties;
  intensity?: number;
  ambient?: number;
  gridSize?: number;
};

export default function GravityGrid({
  className,
  style,
  intensity = 1,
  ambient = 0.35,
  gridSize = 56,
}: GravityGridProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const gl = canvas.getContext("webgl", {
      antialias: false,
      premultipliedAlpha: false,
      alpha: false,
    });
    if (!gl) {
      setFallback(true);
      return;
    }
    // Enable derivatives for fwidth() in the grid mask
    gl.getExtension("OES_standard_derivatives");

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.error("grid shader compile", gl.getShaderInfoLog(s));
      }
      return s;
    };
    const fragSrc = "#extension GL_OES_standard_derivatives : enable\n" + gridFrag;
    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, gridVert));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, fragSrc));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );
    const loc = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "u_res");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");
    const uT = gl.getUniformLocation(prog, "u_t");
    const uI = gl.getUniformLocation(prog, "u_intensity");
    const uAmb = gl.getUniformLocation(prog, "u_ambient");
    const uGrid = gl.getUniformLocation(prog, "u_grid");
    const uActive = gl.getUniformLocation(prog, "u_active");

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouseTarget = [-9999, -9999];
    const mouseSmoothed = [-9999, -9999];
    let activeTarget = 0;
    let activeSmoothed = 0;
    let raf = 0;
    const t0 = performance.now();

    const onMove = (e: MouseEvent) => {
      const rect = wrap.getBoundingClientRect();
      mouseTarget[0] = (e.clientX - rect.left) * dpr;
      // flip y to match GL coords
      mouseTarget[1] = (rect.height - (e.clientY - rect.top)) * dpr;
      activeTarget = 1;
    };
    const onLeave = () => {
      activeTarget = 0;
    };
    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(wrap.clientWidth * dpr);
      canvas.height = Math.floor(wrap.clientHeight * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uGrid, gridSize * dpr);
    };
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);
    resize();

    const tick = (now: number) => {
      const t = (now - t0) / 1000;
      const lerp = (a: number, b: number, k: number) => a + (b - a) * k;
      mouseSmoothed[0] = lerp(mouseSmoothed[0], mouseTarget[0], 0.18);
      mouseSmoothed[1] = lerp(mouseSmoothed[1], mouseTarget[1], 0.18);
      activeSmoothed = lerp(activeSmoothed, activeTarget, 0.08);

      gl.uniform2f(uMouse, mouseSmoothed[0], mouseSmoothed[1]);
      gl.uniform1f(uT, t);
      gl.uniform1f(uI, intensity);
      gl.uniform1f(uAmb, ambient);
      gl.uniform1f(uActive, activeSmoothed);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
    };
  }, [intensity, ambient, gridSize]);

  return (
    <div
      ref={wrapRef}
      className={className}
      style={{ position: "relative", background: "#07080A", ...style }}
      aria-hidden="true"
    >
      {fallback ? (
        <div className="grid-fallback" />
      ) : (
        <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />
      )}
    </div>
  );
}
