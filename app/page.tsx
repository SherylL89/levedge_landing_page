import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import Nav from "@/components/Nav";
import ScrollReveal from "@/components/ScrollReveal";
import { BottleneckArt, PilotArt } from "@/components/ProblemArt";
import SectionTag from "@/components/SectionTag";
import Steps from "@/components/Steps";
import { BOOKING_URL, CASE_STUDIES, bookingHref, marketingHref } from "@/lib/site";
import { TOOLS } from "@/lib/tools";

const PAINS = [
  {
    who: "Founders",
    tag: "The bottleneck",
    art: "bottleneck",
    line: "Most founders have the tools, not the pipeline.",
    body: "You're still the whole sales team. Every deal depends on your calendar, and nothing runs when you stop.",
  },
  {
    who: "Growing teams",
    tag: "Pilot purgatory",
    art: "pilot",
    line: "Your team has AI licenses. Not AI results.",
    body: "Pilots that never reach production. No one owns the outcome. Tools that work in a demo and that nobody uses on Monday.",
  },
];

// Our founder's track record before Levedge, not Levedge client results.
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
    body: "We map how the work really gets done before proposing any AI.",
    points: [
      "Where your data lives and how it flows",
      "Who owns each workflow today",
      "Opportunities scored on data readiness, impact, feasibility and adoption",
    ],
    output: "A ranked 90-day plan",
  },
  {
    n: "02",
    title: "Build",
    when: "Weeks 2–8",
    body: "We build inside your stack, for production from day one, starting with one quick win.",
    points: [
      "Automation first, agents only where they earn it",
      "Verification steps and clear permission boundaries",
      "A person in the loop wherever judgment matters",
    ],
    output: "A system running in your tools",
  },
  {
    n: "03",
    title: "Activate",
    when: "Ongoing",
    body: "A system nobody uses is a failed project, so adoption is part of the build.",
    points: [
      "Designed around how your people actually work",
      "Piloted with one small team, then rolled out",
      "Training and a written handover so you can run it without us",
    ],
    output: "A team that uses it",
  },
  {
    n: "04",
    title: "Measure",
    when: "Weekly",
    body: "Every engagement is tied to one number we agree on up front.",
    points: [
      "A live dashboard, reviewed weekly",
      "Scale what moves the number",
      "Cut what doesn't",
    ],
    output: "A result you can point to",
  },
];

const BUILDS = [
  {
    name: "Workflow automation",
    line: "operations",
    body: "The work your team repeats every week: pulling data from five systems, re-keying it, checking it. Contracts, invoices and emails go in; clean records come out.",
  },
  {
    name: "Lead generation",
    line: "growth",
    body: "Account research, enrichment, scoring and first-draft outreach, so your sellers spend their hours on conversations.",
  },
  {
    name: "Content engines",
    line: "growth",
    body: "One long recording becomes a month of clips, carousels and posts, in your voice and on a schedule.",
  },
  {
    name: "Support triage",
    line: "operations",
    body: "AI answers the common questions and drafts the rest. Your people handle the edge cases, with a clean hand-off.",
  },
  {
    name: "Inbox and scheduling",
    line: "operations",
    body: "A sorted inbox, booked meetings and drafted follow-ups waiting for your leadership team each morning.",
  },
];

// ILLUSTRATIVE examples of typical engagements, not client results.
// TODO(Sheryl): replace with real case studies in CASE_STUDIES (lib/site.ts).
const EXAMPLES = [
  {
    client: "Telehealth provider",
    asked: "“A fully autonomous AI front desk.”",
    built: "A workflow that reads each intake form and routes the patient to the right clinician.",
    why: "The steps were clear and mistakes were costly, so a predictable automation beat an agent.",
  },
  {
    client: "B2B manufacturer",
    asked: "“An AI sales agent.”",
    built: "An assistant that turns inquiries, custom specs and sample requests into quotes and follow-ups, logged straight to the CRM.",
    why: "Sellers keep the relationship. The system takes the paperwork.",
  },
  {
    client: "B2B services firm",
    asked: "“More outbound, same headcount.”",
    built: "A research tool that takes a target list, profiles each company and stakeholder, and drafts a tailored first email for a seller to review and send.",
    why: "AI does the research and the first draft. People decide what goes out.",
  },
  {
    client: "Fintech operations team",
    asked: "“A fully agentic finance copilot.”",
    built: "A script that reconciles payment discrepancies before they reach the dispute queue.",
    why: "One model call and plain code: easy to audit, easy to explain to compliance.",
  },
];

const AGENT_CHECK = [
  { q: "Can you draw the process as clear steps?", a: "Then it's an automation." },
  { q: "More than five branches, with inputs you can't predict?", a: "It might need an agent." },
  { q: "Is a mistake expensive?", a: "Automation." },
  { q: "Will compliance get involved?", a: "Automation, no question." },
];

const COMPARE = {
  cols: ["Agency", "Big consultancy", "Levedge"],
  rows: [
    { label: "Who does the work", cells: ["A junior account team", "Analysts, with a partner on top", "A senior team, embedded with yours"] },
    { label: "What you get", cells: ["Campaigns and reports", "A strategy deck and roadmap", "A running system in your stack"] },
    { label: "How AI shows up", cells: ["Bolt-on tools", "Slides about AI", "Agents built into your workflows"] },
    { label: "Time to first result", cells: ["Months", "Quarters", "Weeks"] },
    { label: "When they leave", cells: ["You depend on them", "A roadmap you still have to build", "Your team runs it, with a handover"] },
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
    name: "Growing teams",
    price: "Scoped",
    unit: "after an intro call",
    body: "An embedded engagement for teams making go-to-market or operations AI-native, priced to the scope.",
    featured: false,
  },
];

// DRAFT answers — Sheryl to review. TODO(Sheryl): add retainer terms to "What if it doesn't work?"
// once decided (e.g. month-to-month after the first 3 months).
const FAQ = [
  {
    q: "How fast will I see results?",
    a: "The audit gives you a prioritized plan in two weeks. In a Build engagement, the first pieces of the engine (outbound, CRM, AI SDR) are usually live within the first month. Sales cycles vary, so we agree up front on leading indicators like replies, meetings booked and qualified pipeline, and track them weekly.",
  },
  {
    q: "Do I need a technical team?",
    a: "No. We build and connect everything, and train whoever on your side will own it day to day. If you do have engineers, we work alongside them.",
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
    a: "Every engagement starts with a number we agree on. We review it weekly, and if something isn't moving it, we change course or cut it.",
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
    q: "Do we need an AI agent?",
    a: "Often not. Most requests for an agent are better served by a simpler, predictable automation that is easier to trust and maintain. We recommend an agent only when the process truly has unpredictable inputs and many branches.",
  },
  {
    q: "What happens when the engagement ends?",
    a: "You keep running it. Handover is part of every engagement: documentation, training for the people who own the system, and a clear view of how to maintain it without us.",
  },
  {
    q: "Who will we work with?",
    a: "One accountable lead from audit to handover, working inside your tools and channels alongside your team. No hand-off to a junior account team.",
  },
];

export default function Home() {
  return (
    <ScrollReveal>
      <Nav />
      <Hero />
      <LogoBar />

      {/* Problem */}
      <section className="problem reveal" id="problem">
        <SectionTag name="The problem" />
        <div className="problem-intro">
          <h2>The model isn&apos;t the moat.</h2>
          <p>
            Your data, your customers and your team are. Everyone can buy the same AI. The
            companies pulling ahead are the ones that get it into production and into how
            their people work.
          </p>
        </div>
        <div className="problem-grid">
          {PAINS.map((p) => (
            <div key={p.who} className="problem-card">
              <div className="problem-top">
                <span className="problem-who">{p.who}</span>
                <span className="problem-tag">{p.tag}</span>
              </div>
              {p.art === "bottleneck" ? <BottleneckArt /> : <PilotArt />}
              <h3>{p.line}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How we work */}
      <section className="how reveal" id="how">
        <SectionTag name="How we work" />
        <div className="approach-intro">
          <h2>
            Four moves. <em>One engine.</em>
          </h2>
          <p>
            We work forward-deployed: inside your team, your tools and your data, from the
            first audit to the day your people run it without us. No deck-and-leave, no pilot
            purgatory.
          </p>
        </div>
        <Steps steps={STEPS} />
      </section>

      {/* What you get */}
      <section className="work reveal" id="work">
        <SectionTag name="What you get" />
        <div className="work-grid">
          <div className="work-copy">
            <h2>An engine you can watch run.</h2>
            <p>
              Every engagement ends with a working system and a dashboard your team checks
              every week, not a slide deck.
            </p>
            <ul className="work-list">
              <li>A working system, live in your own tools</li>
              <li>The playbook: process, prompts and operating rules</li>
              <li>A weekly dashboard tied to one agreed number</li>
              <li>Training and a written handover</li>
            </ul>
          </div>
          <figure className="dash" aria-label="Illustrative engine dashboard">
            <div className="dash-head">
              <span>Revenue engine · this week</span>
              <span className="dash-badge">Sample</span>
            </div>
            <div className="dash-stats">
              {["Accounts researched", "Replies", "Meetings"].map((l) => (
                <div key={l}>
                  <span>{l}</span>
                  <b>—</b>
                </div>
              ))}
            </div>
            <div className="dash-bars">
              <div>
                <span>AI</span>
                <div>
                  <i style={{ width: "78%" }} />
                </div>
              </div>
              <div>
                <span>People</span>
                <div>
                  <i className="is-human" style={{ width: "22%" }} />
                </div>
              </div>
            </div>
            <figcaption>Illustrative: share of outreach hours, AI vs. people</figcaption>
          </figure>
        </div>
      </section>

      {/* What we build */}
      <section className="build reveal" id="build">
        <SectionTag name="What we build" />
        <div className="approach-intro">
          <h2>Five kinds of work that reliably pay off.</h2>
          <p>
            We stay away from AI theatre. These are the places where AI saves real hours or
            creates real pipeline today, across our Growth and Operations engines.
          </p>
        </div>
        <div className="build-grid">
          {BUILDS.map((b) => (
            <div key={b.name} className={`build-card engine--${b.line}`}>
              <span className="engine-chip">{b.line} engine</span>
              <h3>{b.name}</h3>
              <p>{b.body}</p>
            </div>
          ))}
          <div className="build-card build-card--note">
            <h3>What we won&apos;t build</h3>
            <p>
              AI that negotiates or closes for you, and fully autonomous agents with no one
              watching. Today, AI is a great researcher, qualifier and coordinator. People
              still close.
            </p>
          </div>
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

      {/* Engagements: real case studies when present, otherwise labeled examples */}
      <section className="examples reveal" id="engagements">
        <SectionTag name={CASE_STUDIES.length ? "Selected work" : "Example engagements"} />
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
          <>
            <div className="approach-intro">
              <h2>What they ask for. What actually works.</h2>
              <p>
                Illustrative examples of typical engagements. The request is usually an
                agent. The answer is usually something simpler that ships.
              </p>
            </div>
            <div className="examples-grid">
              {EXAMPLES.map((e) => (
                <article key={e.client} className="example">
                  <div className="example-head">
                    <span className="case-meta">{e.client}</span>
                    <span className="example-badge">Illustrative</span>
                  </div>
                  <dl>
                    <dt>They asked for</dt>
                    <dd className="example-asked">{e.asked}</dd>
                    <dt>We&apos;d build</dt>
                    <dd>{e.built}</dd>
                    <dt>Why</dt>
                    <dd>{e.why}</dd>
                  </dl>
                </article>
              ))}
            </div>
          </>
        )}
      </section>

      {/* Why Levedge */}
      <section className="why reveal" id="why">
        <SectionTag name="Why Levedge" />
        <div className="approach-intro">
          <h2>We build alongside your team, not just advise.</h2>
          <p>
            Most firms either run your campaigns or hand you a strategy. We sit in between:
            operators who have carried a number, building AI systems your team keeps running.
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
        <div className="agent-check">
          <div>
            <h3>Automation before agents.</h3>
            <p>
              Agents demo well and drift in production. Before we build one, we ask four
              questions.
            </p>
          </div>
          <ol>
            {AGENT_CHECK.map((c) => (
              <li key={c.q}>
                <span>{c.q}</span>
                <b>{c.a}</b>
              </li>
            ))}
          </ol>
        </div>
        <div className="trust">
          <span className="trust-mark" aria-hidden="true" />
          <p>
            <strong>Your data stays yours.</strong> We build inside your accounts and tools.
            Nothing leaves your environment, and nothing is used to train a model.
          </p>
        </div>
      </section>

      {/* Who we help */}
      <section className="who reveal" id="who">
        <SectionTag name="Who we help" />
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

      {/* Offers */}
      <section className="offers reveal" id="offers">
        <SectionTag name="Offers" />
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

      {/* Who we are */}
      <section className="about reveal" id="about">
        <SectionTag name="Who we are" />
        <div className="approach-intro">
          <h2>We&apos;ve carried the numbers we help you move.</h2>
          <p>
            Levedge comes from the operating side of the business: carrying revenue targets,
            scaling brands and shipping AI products. We bring that experience into your team
            and build with it.
          </p>
        </div>
        <div className="numbers-grid">
          {STATS.map((s) => (
            <div key={s.caption} className="stat">
              <div className={`stat-n${s.signal ? " stat-n--signal" : ""}`}>{s.n}</div>
              <div className="stat-caption">{s.caption}</div>
            </div>
          ))}
        </div>
        <p className="numbers-note">
          Results led by our founder, Sheryl, before Levedge, across B2B sales consulting,
          consumer brand strategy and entertainment marketing.
        </p>
      </section>

      {/* FAQ */}
      <section className="faq reveal" id="faq">
        <SectionTag name="FAQ" />
        <div className="faq-grid">
          <h2>Questions teams ask us.</h2>
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
        <SectionTag name="Contact" />
        <div className="contact-inner">
          <h2>
            Let&apos;s find your <em>edge</em>.
          </h2>
          <p>
            Book a 30-minute intro call. We&apos;ll look at where you are today and whether an
            audit makes sense.
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
