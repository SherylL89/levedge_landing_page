// A small pixel-grid icon. `rows` is a list of strings of 0/1.
export default function PixelGlyph({ rows, size = 6, gap = 2 }: { rows: string[]; size?: number; gap?: number }) {
  const w = rows[0].length * (size + gap) - gap;
  const h = rows.length * (size + gap) - gap;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} aria-hidden="true" className="pixel-glyph">
      {rows.flatMap((r, y) =>
        r.split("").map((c, x) => (
          <rect
            key={`${x}-${y}`}
            x={x * (size + gap)}
            y={y * (size + gap)}
            width={size}
            height={size}
            rx={1}
            className={c === "1" ? "px-on" : "px-off"}
          />
        ))
      )}
    </svg>
  );
}
