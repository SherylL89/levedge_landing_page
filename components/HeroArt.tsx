"use client";

import { useEffect, useRef } from "react";

// Abstract hero art built from the logo: three interlocking rings with lime
// nodes inside faint orbits. On devices with a pointer, the layers shift with
// the cursor and the three nodes "tether" to it. Without a pointer (or with
// reduced motion) it stays a slow ambient drift.
const NODES = [
  [260, 168],
  [180, 306],
  [340, 306],
] as const;

export default function HeroArt() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const hero = svg?.closest<HTMLElement>(".hero");
    if (!svg || !hero) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cursor = svg.querySelector<SVGCircleElement>(".cursor");
    const halo = svg.querySelector<SVGCircleElement>(".cursor-halo");
    const tethers = svg.querySelectorAll<SVGLineElement>(".tether");
    let frame = 0;

    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const h = hero.getBoundingClientRect();
        const r = svg.getBoundingClientRect();
        // Pointer position relative to the hero centre, -1..1
        const px = ((e.clientX - h.left) / h.width - 0.5) * 2;
        const py = ((e.clientY - h.top) / h.height - 0.5) * 2;
        svg.style.setProperty("--px", px.toFixed(3));
        svg.style.setProperty("--py", py.toFixed(3));
        // Pointer in SVG units, clamped to the artwork, minus the node layer's own shift
        const clamp = (v: number) => Math.max(20, Math.min(500, v));
        const x = clamp(((e.clientX - r.left) / r.width) * 520) - px * 14;
        const y = clamp(((e.clientY - r.top) / r.height) * 520) - py * 14;
        [cursor, halo].forEach((c) => {
          c?.setAttribute("cx", x.toFixed(1));
          c?.setAttribute("cy", y.toFixed(1));
        });
        tethers.forEach((t) => {
          t.setAttribute("x2", x.toFixed(1));
          t.setAttribute("y2", y.toFixed(1));
        });
        svg.classList.add("is-live");
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(frame);
      svg.classList.remove("is-live");
      svg.style.setProperty("--px", "0");
      svg.style.setProperty("--py", "0");
    };

    hero.addEventListener("pointermove", onMove);
    hero.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      hero.removeEventListener("pointermove", onMove);
      hero.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  const faint = "rgba(238,240,232,0.1)";
  const line = "rgba(238,240,232,0.3)";
  return (
    <svg ref={svgRef} viewBox="0 0 520 520" aria-hidden="true" className="hero-art">
      <g className="layer layer--back">
        <circle cx="260" cy="260" r="250" fill="none" stroke={faint} />
        <circle cx="260" cy="260" r="190" fill="none" stroke={faint} strokeDasharray="2 8" />
        <g className="orbit orbit--a">
          <ellipse cx="260" cy="260" rx="250" ry="96" fill="none" stroke={faint} transform="rotate(-28 260 260)" />
          <circle cx="481" cy="142" r="5" className="node" />
          <circle cx="58" cy="402" r="4" fill="#EEF0E8" opacity="0.7" />
        </g>
        <g className="orbit orbit--b">
          <ellipse cx="260" cy="260" rx="250" ry="96" fill="none" stroke={faint} transform="rotate(32 260 260)" />
          <circle cx="438" cy="424" r="3" fill="#EEF0E8" opacity="0.5" />
          <circle cx="92" cy="118" r="3" className="node" opacity="0.7" />
        </g>
      </g>
      <g className="layer layer--mid">
        {NODES.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="92" fill="none" stroke={line} strokeWidth="1.2" />
        ))}
        <path d="M260 168 180 306H340Z" fill="none" stroke={faint} />
        <circle cx="260" cy="260" r="46" fill="none" className="ring" strokeWidth="1.5" />
      </g>
      <g className="layer layer--front">
        {NODES.map(([x, y]) => (
          <line key={`t-${x}`} className="tether" x1={x} y1={y} x2={x} y2={y} />
        ))}
        <circle cx="260" cy="168" r="22" className="node glow" />
        <circle cx="260" cy="168" r="9" className="node" />
        <circle cx="180" cy="306" r="18" className="node glow" />
        <circle cx="180" cy="306" r="7" className="node" />
        <circle cx="340" cy="306" r="18" className="node glow" />
        <circle cx="340" cy="306" r="7" className="node" />
        <circle cx="260" cy="260" r="4" className="node" />
        <circle className="cursor-halo node" cx="260" cy="260" r="16" />
        <circle className="cursor node" cx="260" cy="260" r="5" />
      </g>
    </svg>
  );
}
