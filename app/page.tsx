import Button from "@/components/Button";
import Footer from "@/components/Footer";
import GrainDissolve from "@/components/GrainDissolve";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import Nav from "@/components/Nav";
import PixelGlyph from "@/components/PixelGlyph";
import ScrollReveal from "@/components/ScrollReveal";
import SectionTag from "@/components/SectionTag";
import { BOOKING_URL, CASE_STUDIES, FOUNDER_PHOTO, bookingHref, marketingHref } from "@/lib/site";
import { TOOLS } from "@/lib/tools";

const TOTAL = "10";
const tag = (n: number) => `${String(n).padStart(2, "0")} / ${TOTAL}`;

const PAINS = [
  {
    who: "Founders",
    line: "Most founders have the tools, not the pipeline.",
    body: "You're still the whole sales team. Every deal depends on your calendar, and nothing runs when you stop.",
  },
  {
    who: "Growing teams",
    line: "Your team has AI licenses. Not AI results.",
    body: "Everyone has access to the tools. Almost nobody has changed how the work actually gets done.",
  },
];

// Founder's personal track record (before Levedge), not Levedge client results.
const STATS = [
  { n: "$10M", caption: "per year in B2B revenue, as lead sales", signal: true },
  { n: "50+", caption: "B2B deals personally led", signal: false },
  { n: "3x", caption: "retail brand growth, $500K → $1.5M / month", signal: false },
  { n: "20M+", caption: "impressions on a creator × IP campaign, ~5% sales lift", signal: false },
];

const AUDIENCES = [
  {
    tag: "For founders & solo operators",
    title: "From founder-led everything to systems that run without you.",
    engines: [
      {
        name: "Revenue Engine",
        line: "growth",
        body: "Turn founder-led sales into a repeatable pipeline: ICP and messaging, outbound, CRM, an AI SDR, and a dashboard you actually check.",
      },
      {
        name: "One-Person Company OS",
        line: "operations",
        body: "The AI operating stack for a company of one: agents and automations for admin, finance, content and client work.",
      },
    ],
  },
  {
    tag: "For growing teams",
    title: "Your team already sells and operates. Make it AI-native.",
    engines: [
      {
        name: "AI-native GTM",
        line: "growth",
        body: "Redesign your go-to-market workflows around AI: agents where they move the number, people where judgment matters.",
      },
      {
        name: "Human-AI Collaboration",
        line: "operations",
        body: "Decide what goes to agents and what stays human, then drive adoption until the new way of working sticks.",
      },
    ],
  },
];

const STEPS = [
  {
    n: "01",
    title: "Audit",
    when: "2 weeks",
    body: "Diagnose your ICP, pitch, pipeline and workflows. Rank what AI can actually move.",
    output: "90-day plan",
    glyph: ["11100", "10100", "11100", "00010", "00001"],
  },
  {
    n: "02",
    title: "Build",
    when: "Weeks 2–8",
    body: "Build the engine inside your stack: process, CRM, agents and dashboards.",
    output: "A running system",
    glyph: ["11011", "11011", "00000", "11011", "11011"],
  },
  {
    n: "03",
    title: "Activate",
    when: "Ongoing",
    body: "Redesign who does what between people and agents, train your team, and coach until it sticks.",
    output: "Team adoption",
    glyph: ["00100", "01110", "10101", "00100", "00100"],
  },
  {
    n: "04",
    title: "Measure",
    when: "Weekly",
    body: "Track the number we agreed on. Scale what moves it. Cut what doesn't.",
    output: "Live dashboard",
    glyph: ["00001", "00101", "10101", "10101", "10101"],
  },
];

const COMPARE = {
  cols: ["Agency", "Big consultancy", "Levedge"],
  rows: [
    { label: "Who does the work", cells: ["A junior account team", "Analysts, with a partner on top", "A senior operator, hands-on"] },
    { label: "What you get", cells: ["Campaigns and reports", "A strategy deck and roadmap", "A running system in your stack"] },
    { label: "How AI shows up", cells: ["Bolt-on tools", "Slides about AI", "Agents built into your workflows"] },
    { label: "Time to first result", cells: ["Months", "Quarters", "Weeks"] },
    { label: "Built for", cells: ["Brands with big budgets", "Large enterprises", "Founders and growing teams"] },
  ],
};

const OFFERS = [
  {
    name: "Revenue Engine Audit",
    price: "$1,500",
    unit: "one-time · 2 weeks",
    body: "ICP, pitch, pipeline and channel diagnosis with a 90-day action plan.",
    featured: false,
  },
  {
    name: "Revenue Engine Build",
    price: "From $3,000",
    unit: "per month",
    body: "We build and run your engine: outbound, CRM, AI SDR, dashboard, and weekly deal coaching.",
    featured: true,
  },
  {
    name: "Founder Sales Advisory",
    price: "$200",
    unit: "per hour",
    body: "Pitch reviews, negotiation prep and live deal strategy, one-on-one.",
    featured: false,
  },
];

// DRAFT answers — Sheryl to review. Items in [brackets] need a decision.
const FAQ = [
  {
    q: "How fast will I see results?",
    a: "The audit gives you a prioritized plan in two weeks. In a Build engagement, the first pieces of the engine (outbound, CRM, AI SDR) are usually live within the first month. Sales cycles vary, so we agree up front on leading indicators like replies, meetings booked and qualified pipeline, and track them weekly.",
  },
  {
    q: "Do I need a technical team?",
    a: "No. We build, connect and maintain everything ourselves, and train whoever on your side will own it day to day. If you do have engineers, we work alongside them.",
  },
  {
    q: "What tools do you use?",
    a: "We start with what you already have. Typical stacks include HubSpot or Attio for CRM, Clay for research and enrichment, n8n or Zapier for automation, and Claude or OpenAI models for the agents. We only recommend a new tool when it clearly earns its place.",
  },
  {
    q: "What happens to my data?",
    a: "Your data stays yours. We build inside your accounts and tools: your CRM, your workspace, your API keys. Your data never leaves your environment, and it's never used to train anything.",
  },
  {
    q: "What if it doesn't work?",
    a: "Every engagement starts with a number we agree on. We review it weekly, and if something isn't moving it, we change course or cut it. [Retainer terms, e.g. month-to-month after the first 3 months.]",
  },
  {
    q: "How is this different from hiring a full-time salesperson?",
    a: "A first sales hire works best when there's a repeatable process to hand them. We build that process, plus the AI that does the research and outreach, for a fraction of a full-time salary. When you're ready to hire, we help you onboard them into a system that already works.",
  },
  {
    q: "Do you only work with tech companies?",
    a: "No. We work with B2B companies and with consumer brands selling into retail, wholesale or partnerships. For brand, creator and IP campaigns, see Levedge Marketing.",
  },
  {
    q: "Who will I actually work with?",
    a: "Sheryl, directly. No hand-off to a junior team.",
  },
];

export default function Home() {
  return (
    <ScrollReveal>
      <Nav />
      <Hero />
      <GrainDissolve />
      <LogoBar />

      {/* Problem */}
      <section className="problem reveal" id="problem">
        <SectionTag index={tag(1)} name="The problem" />
        <div className="problem-intro">
          <h2>The model isn&apos;t the moat.</h2>
          <p>
            Your data, your customers and your team are. Everyone can buy the same AI. The
            companies pulling ahead are the ones that build it into how they sell and operate.
          </p>
        </div>
        <div className="problem-grid">
          {PAINS.map((p) => (
            <div key={p.who} className="problem-card">
              <div className="problem-who">{p.who}</div>
              <h3>{p.line}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Track record */}
      <section className="numbers reveal" id="track-record">
        <SectionTag index={tag(2)} name="Founder track record" />
        <div className="numbers-grid">
          {STATS.map((s) => (
            <div key={s.caption} className="stat">
              <div className={`stat-n${s.signal ? " stat-n--signal" : ""}`}>{s.n}</div>
              <div className="stat-caption">{s.caption}</div>
            </div>
          ))}
        </div>
        <p className="numbers-note">
          Results from Sheryl&apos;s work before founding Levedge, across B2B sales consulting,
          consumer brand strategy and entertainment marketing.
        </p>
      </section>

      {/* Who we help */}
      <section className="who reveal" id="who">
        <SectionTag index={tag(3)} name="Who we help" />
        <div className="who-grid">
          {AUDIENCES.map((a) => (
            <div key={a.tag} className="who-card">
              <div className="who-tag">{a.tag}</div>
              <h3>{a.title}</h3>
              <div className="who-engines">
                {a.engines.map((e) => (
                  <div key={e.name} className={`engine engine--${e.line}`}>
                    <div className="engine-head">
                      <span className="engine-name">{e.name}</span>
                      <span className="engine-chip">{e.line} engine</span>
                    </div>
                    <p>{e.body}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How we work */}
      <section className="how reveal" id="how">
        <SectionTag index={tag(4)} name="How we work" />
        <div className="approach-intro">
          <h2>
            Four moves.
            <br />
            One engine.
          </h2>
          <p>
            We don&apos;t hand you a deck and leave. We embed, build the system with your team,
            make sure people actually use it, and measure it every week. No pilot purgatory.
          </p>
        </div>
        <div className="pipeline">
          <div className="pipeline-track" aria-hidden="true">
            <div className="pipeline-fill" />
          </div>
          {STEPS.map((s, i) => (
            <div key={s.n} className="pipe-step" style={{ ["--i" as string]: i }}>
              <div className="pipe-node" aria-hidden="true" />
              <div className="pipe-card">
                <div className="pipe-meta">
                  <span>{s.n}</span>
                  <span>{s.when}</span>
                </div>
                <PixelGlyph rows={s.glyph} />
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <div className="pipe-output">
                  <span>Output</span>
                  {s.output}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="tools reveal" aria-label="Tools we build with">
        <div className="tools-head">
          <span className="tools-label">Tools we build with</span>
          <span className="tools-note">
            We build on what you already use, and add new tools only when they earn their place.
          </span>
        </div>
        <ul className="tools-list">
          {TOOLS.map((t) => (
            <li key={t.name}>
              {t.path ? (
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                  <path d={t.path} />
                </svg>
              ) : (
                <span className="tools-mono" aria-hidden="true">
                  {t.name[0]}
                </span>
              )}
              <span>{t.name}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Why Levedge */}
      <section className="why reveal" id="why">
        <SectionTag index={tag(5)} name="Why Levedge" />
        <div className="approach-intro">
          <h2>We build alongside your team, not just advise.</h2>
          <p>
            Most firms either run your campaigns or hand you a strategy. We sit in between: a
            senior operator who has carried a number, building AI systems that your team keeps
            running.
          </p>
        </div>
        <div className="compare" role="table">
          <div className="compare-row compare-row--head" role="row">
            <div role="columnheader" />
            {COMPARE.cols.map((c, i) => (
              <div key={c} role="columnheader" className={i === 2 ? "is-us" : undefined}>
                {c}
              </div>
            ))}
          </div>
          {COMPARE.rows.map((r) => (
            <div key={r.label} className="compare-row" role="row">
              <div role="rowheader" className="compare-label">
                {r.label}
              </div>
              {r.cells.map((c, i) => (
                <div
                  key={i}
                  role="cell"
                  data-col={COMPARE.cols[i]}
                  className={i === 2 ? "is-us" : undefined}
                >
                  {c}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="trust">
          <div className="trust-mark" aria-hidden="true">
            <PixelGlyph rows={["01110", "10001", "11111", "11011", "11111"]} size={5} gap={2} />
          </div>
          <p>
            <strong>Your data stays yours.</strong> We build inside your accounts and tools.
            Nothing leaves your environment, and nothing is used to train a model.
          </p>
        </div>
      </section>

      {/* Selected work — sample deliverable until real case studies exist */}
      <section className="work reveal" id="work">
        <SectionTag index={tag(6)} name={CASE_STUDIES.length ? "Selected work" : "What you get"} />
        {CASE_STUDIES.length > 0 ? (
          <div className="cases-grid">
            {CASE_STUDIES.map((c) => (
              <article key={c.title} className="case">
                <div className="case-meta">
                  {c.client} · {c.industry}
                </div>
                <div className="case-result">{c.result}</div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </article>
            ))}
          </div>
        ) : (
          <div className="work-grid">
            <div className="work-copy">
              <h2>See the audit before you buy it.</h2>
              <p>
                Every Revenue Engine Audit ends with a document your team can act on the next
                morning: where your pipeline leaks, who to sell to, and exactly what to build
                in the next 90 days.
              </p>
              <ul className="work-list">
                <li>ICP and persona scorecard</li>
                <li>Pipeline and channel diagnosis</li>
                <li>Messaging and pitch teardown</li>
                <li>Ranked AI opportunities</li>
                <li>A 90-day build plan</li>
              </ul>
            </div>
            <div className="sample" aria-label="Illustrative sample of an audit report">
              <div className="sample-head">
                <span>Revenue Engine Audit</span>
                <span className="sample-badge">Sample · illustrative</span>
              </div>
              <div className="sample-block">
                <div className="sample-label">Pipeline by stage</div>
                <div className="sample-bars">
                  {[
                    ["Contacted", 100],
                    ["Replied", 34],
                    ["Meeting", 18],
                    ["Proposal", 9],
                    ["Won", 4],
                  ].map(([l, v]) => (
                    <div key={l as string} className="sample-bar">
                      <span>{l}</span>
                      <div>
                        <i style={{ width: `${v}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="sample-flag">Biggest leak: reply → meeting</div>
              </div>
              <div className="sample-block">
                <div className="sample-label">90-day plan</div>
                <div className="sample-plan">
                  <div>
                    <b>Days 1–30</b>
                    <span>Tighten ICP</span>
                    <span>Rewrite pitch</span>
                    <span>CRM cleanup</span>
                  </div>
                  <div>
                    <b>Days 31–60</b>
                    <span>Launch outbound</span>
                    <span>AI SDR live</span>
                  </div>
                  <div>
                    <b>Days 61–90</b>
                    <span>Weekly dashboard</span>
                    <span>Hand-off playbook</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Offers */}
      <section className="offers reveal" id="offers">
        <SectionTag index={tag(7)} name="Offers · Founders" />
        <div className="offers-intro">
          <h2>Start with an audit.</h2>
          <p>
            Most founders start with a two-week audit, then decide whether to build. Growing
            teams get a scoped engagement after an intro call.
          </p>
        </div>
        <div className="offers-grid">
          {OFFERS.map((o) => (
            <div key={o.name} className={`offer${o.featured ? " offer--featured" : ""}`}>
              <div className="offer-name">{o.name}</div>
              <div className="offer-price">{o.price}</div>
              <div className="offer-unit">{o.unit}</div>
              <p>{o.body}</p>
            </div>
          ))}
        </div>
        <div className="offers-cta">
          <Button href={bookingHref} variant="primary" size="md" arrow>
            Book an intro call
          </Button>
        </div>
      </section>

      {/* About */}
      <section className="about reveal" id="about">
        <SectionTag index={tag(8)} name="About" />
        <div className="about-grid">
          <div className="about-photo">
            {FOUNDER_PHOTO ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={FOUNDER_PHOTO} alt="Sheryl, founder of Levedge" />
            ) : (
              <span className="about-initial">S</span>
            )}
          </div>
          <div className="about-body">
            <h2>Hi, I&apos;m Sheryl.</h2>
            <p>
              I&apos;ve spent my career on the revenue side. I was the lead on a B2B sales team
              doing $10M a year and personally led 50+ deals. I led the brand and marketing
              strategy that took a retail brand from $500K to $1.5M a month. And I built
              celebrity, IP and creator campaigns that drove 20M+ impressions and moved sales.
            </p>
            <p>
              I&apos;m also a hands-on product builder. I lead product on an AI-powered platform
              and build my own agents and tools. Levedge is where those two sides meet: I help
              founders and teams build engines that use AI to grow, and I build them with you,
              not just advise.
            </p>
            <p className="about-sign">Founder, Levedge · Los Angeles</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq reveal" id="faq">
        <SectionTag index={tag(9)} name="FAQ" />
        <div className="faq-grid">
          <h2>Questions founders ask us.</h2>
          <div className="faq-list">
            {FAQ.map((f) => (
              <details key={f.q} className="faq-item">
                <summary>
                  <span>{f.q}</span>
                  <span className="faq-icon" aria-hidden="true">+</span>
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-brand + product strips */}
      <section className="mkt-strip reveal" id="marketing">
        <div className="strip-inner">
          <span className="strip-tag strip-tag--mkt">Levedge Marketing</span>
          <p>
            <strong>Entertainment-grade marketing for consumer brands.</strong> Celebrity, IP
            and creator campaigns, backed by a testing framework that proves what drives sales.
          </p>
          <Button href={marketingHref} variant="primary" size="sm" arrow>
            Explore
          </Button>
        </div>
      </section>
      <section className="pulse-strip reveal" id="pulse">
        <div className="strip-inner">
          <span className="strip-tag">Product · Pulse</span>
          <p>
            <strong>Pulse</strong> is our social growth tool: it drafts in your voice,
            schedules across LinkedIn, X and Threads, and tracks what works.
          </p>
          <Button href={bookingHref} variant="outline-light" size="sm">
            Request access
          </Button>
        </div>
      </section>

      {/* Contact */}
      <section className="contact" id="contact">
        <SectionTag index={tag(10)} name="Contact" />
        <div className="contact-inner">
          <h2>
            Let&apos;s find your <em>edge</em>.
          </h2>
          <p>
            Book a 30-minute intro call. We&apos;ll look at where you are today and whether an
            audit makes sense. No pitch deck required.
          </p>
          {BOOKING_URL ? (
            <Button href={BOOKING_URL} variant="primary" size="lg" arrow>
              Book an intro call
            </Button>
          ) : (
            <p className="contact-pending">Booking link coming soon.</p>
          )}
        </div>
      </section>

      <Footer />
    </ScrollReveal>
  );
}
