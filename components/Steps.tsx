"use client";

import { useState } from "react";

export type Step = {
  n: string;
  title: string;
  when: string;
  body: string;
  points: string[];
  output: string;
};

// Expanding step cards: the active card opens to show its detail; hover,
// focus or tap another to switch. On narrow screens all cards are open.
export default function Steps({ steps }: { steps: Step[] }) {
  const [active, setActive] = useState(0);
  return (
    <ol className="steps">
      {steps.map((s, i) => (
        <li
          key={s.n}
          className={`step${i === active ? " is-active" : ""}`}
          onMouseEnter={() => setActive(i)}
        >
          <button
            type="button"
            className="step-head"
            aria-expanded={i === active}
            onClick={() => setActive(i)}
            onFocus={() => setActive(i)}
          >
            <span className="step-meta">
              <span className="step-tile">{s.n}</span>
              <span>{s.when}</span>
            </span>
            <span className="step-title">{s.title}</span>
          </button>
          <div className="step-detail">
            <p>{s.body}</p>
            <ul>
              {s.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </div>
          <div className="step-output">
            <span>Output</span>
            {s.output}
          </div>
        </li>
      ))}
    </ol>
  );
}
