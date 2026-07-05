import Button from "@/components/Button";
import Footer from "@/components/Footer";
import GrainDissolve from "@/components/GrainDissolve";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import ScrollReveal from "@/components/ScrollReveal";
import SectionTag from "@/components/SectionTag";

const STATS = [
  { n: "90", caption: "day median ship", signal: false },
  { n: "$4.2M", caption: "lift · median 12mo", signal: true },
  { n: "14", caption: "engagements shipped", signal: false },
  { n: "0", caption: "pilots that stayed pilots", signal: false },
];

const MOVES = [
  {
    n: "01",
    title: "Scope",
    when: "2 weeks",
    body: "Embed with your team. Map workflows AI can meaningfully move. Rank by lift and feasibility.",
  },
  {
    n: "02",
    title: "Ship",
    when: "12 weeks",
    body: "Build, integrate, deploy the top bet end-to-end. You own code and model from day one.",
  },
  {
    n: "03",
    title: "Measure",
    when: "Quarterly",
    body: "Track lift against the KPI we agreed on. If the model moves the number, scale. If not, kill it.",
  },
];

const POSTS = [
  { date: "Apr 22", title: "Three monitors every prod model needs from day one." },
  { date: "Mar 14", title: "Why we kill more bets than we ship." },
  { date: "Feb 02", title: "Pulse postmortem: 6 months of voice-matching at scale." },
];

export default function Home() {
  return (
    <ScrollReveal>
      <Nav />
      <Hero />
      <GrainDissolve />

      <section className="numbers reveal" id="numbers">
        <SectionTag index="01 / 04" name="Numbers · To date" />
        <div className="numbers-grid">
          {STATS.map((s) => (
            <div key={s.caption} className="stat">
              <div className={`stat-n${s.signal ? " stat-n--signal" : ""}`}>{s.n}</div>
              <div className="stat-caption">{s.caption}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="approach reveal" id="approach">
        <SectionTag index="02 / 04" name="Approach" />
        <div className="approach-intro">
          <h2>
            Three moves.
            <br />
            Scope. Ship. Measure.
          </h2>
          <p>
            No retainer. No pilot purgatory. Every engagement ends with a number on a
            dashboard.
          </p>
        </div>
        <div className="approach-cols">
          {MOVES.map((m) => (
            <div key={m.n} className="approach-col">
              <div className="approach-col-meta">
                <span>{m.n}</span>
                <span>{m.when}</span>
              </div>
              <h3>{m.title}</h3>
              <p>{m.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pulse-callout reveal" id="pulse">
        <div className="pulse-grid">
          <div>
            <SectionTag index="03 / 04" name="Product · Pulse" />
            <h2>
              The consulting thesis,
              <br />
              shipped as a product.
            </h2>
            <p className="pulse-body">
              Pulse drafts in your voice, schedules across LinkedIn / X / Threads, and
              reports lift against a benchmark you pick.
            </p>
            <div className="pulse-ctas">
              <Button href="#pulse" variant="primary" size="md" arrow>
                See Pulse
              </Button>
              <Button href="#contact" variant="outline-light" size="md">
                Request access
              </Button>
            </div>
          </div>
          {/* Hatched placeholder — real product screenshot to come */}
          <div className="placeholder">
            <span className="placeholder-label">[ Pulse · UI screenshot ]</span>
            <span className="placeholder-sublabel">composer · scheduled queue</span>
          </div>
        </div>
      </section>

      <section className="journal reveal" id="journal">
        <SectionTag index="04 / 04" name="Journal" />
        <div className="journal-grid">
          {POSTS.map((p) => (
            <a key={p.title} href="#" className="journal-card">
              <div className="journal-date">{p.date}</div>
              <h4>{p.title}</h4>
              <div className="journal-read">Read →</div>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </ScrollReveal>
  );
}
