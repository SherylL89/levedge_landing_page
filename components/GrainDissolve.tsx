// Transition band between the dark hero and the light body: paper base,
// a dark wash fading downward, screen-blended fractal noise in the
// cross-over zone, and a 1px lime horizon continuing the signal across
// the seam.
export default function GrainDissolve() {
  return (
    <div className="dissolve" aria-hidden="true">
      <div className="dissolve-paper" />
      <div className="dissolve-dark" />
      <svg className="dissolve-grain" width="100%" height="100%" preserveAspectRatio="none">
        <defs>
          <filter id="lvg-noise" x="0" y="0" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix
              values="0 0 0 0 1
                      0 0 0 0 1
                      0 0 0 0 1
                      0 0 0 1.2 -0.4"
            />
          </filter>
          <linearGradient id="lvg-dither-mask" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="35%" stopColor="white" stopOpacity="1" />
            <stop offset="65%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="lvg-dm">
            <rect width="100%" height="100%" fill="url(#lvg-dither-mask)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" filter="url(#lvg-noise)" mask="url(#lvg-dm)" />
      </svg>
      <div className="dissolve-horizon" />
    </div>
  );
}
