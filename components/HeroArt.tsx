// Abstract hero art built from the logo: three interlocking rings with
// lime nodes inside faint orbits. Nodes drift slowly (CSS, reduced-motion safe).
export default function HeroArt() {
  const faint = "rgba(238,240,232,0.1)";
  const line = "rgba(238,240,232,0.3)";
  return (
    <svg viewBox="0 0 520 520" aria-hidden="true" className="hero-art">
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
      <circle cx="260" cy="168" r="92" fill="none" stroke={line} strokeWidth="1.2" />
      <circle cx="180" cy="306" r="92" fill="none" stroke={line} strokeWidth="1.2" />
      <circle cx="340" cy="306" r="92" fill="none" stroke={line} strokeWidth="1.2" />
      <path d="M260 168 180 306H340Z" fill="none" stroke={faint} />
      <circle cx="260" cy="260" r="46" fill="none" className="ring" strokeWidth="1.5" />
      <circle cx="260" cy="168" r="22" className="node glow" />
      <circle cx="260" cy="168" r="9" className="node" />
      <circle cx="180" cy="306" r="18" className="node glow" />
      <circle cx="180" cy="306" r="7" className="node" />
      <circle cx="340" cy="306" r="7" fill="#EEF0E8" />
      <circle cx="260" cy="260" r="4" className="node" />
    </svg>
  );
}
