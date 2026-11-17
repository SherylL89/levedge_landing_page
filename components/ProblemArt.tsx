// Small diagrams that show each problem at a glance.

// Founders: every lead funnels through one person, and few deals come out.
export function BottleneckArt() {
  const leads = [14, 34, 54, 74, 94, 114];
  const deals = [50, 78];
  return (
    <figure className="pain-art" role="img" aria-label="Many leads funnel through one founder, and only a few deals come out">
      <svg viewBox="0 0 360 128" aria-hidden="true">
        {leads.map((y) => (
          <g key={y}>
            <path d={`M30 ${y} C 110 ${y}, 120 64, 162 64`} className="pain-line" />
            <circle cx="24" cy={y} r="6" className="pain-dot" />
          </g>
        ))}
        {deals.map((y) => (
          <g key={y}>
            <path d={`M198 64 C 250 64, 260 ${y}, 330 ${y}`} className="pain-line pain-line--out" />
            <circle cx="336" cy={y} r="6" className="pain-dot pain-dot--win" />
          </g>
        ))}
        <circle cx="180" cy="64" r="24" className="pain-hub" />
        <text x="180" y="68" textAnchor="middle" className="pain-hub-text">You</text>
      </svg>
      <figcaption>
        <span>Every lead</span>
        <span>One calendar</span>
        <span>Few deals</span>
      </figcaption>
    </figure>
  );
}

// Growing teams: pilots pile up, production stays empty.
export function PilotArt() {
  return (
    <figure className="pain-art" role="img" aria-label="Three pilots completed, nothing in production">
      <div className="pilot-row" aria-hidden="true">
        <span className="pilot-chip">Pilot</span>
        <span className="pilot-chip">Pilot</span>
        <span className="pilot-chip">Pilot</span>
        <span className="pilot-arrow">→</span>
        <span className="pilot-chip pilot-chip--empty">Production</span>
      </div>
      <figcaption>
        <span>Lots of demos</span>
        <span>Nothing in daily use</span>
      </figcaption>
    </figure>
  );
}
