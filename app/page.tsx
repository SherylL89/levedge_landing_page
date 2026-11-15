import Button from "@/components/Button";
import Footer from "@/components/Footer";
import GrainDissolve from "@/components/GrainDissolve";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import ScrollReveal from "@/components/ScrollReveal";
import SectionTag from "@/components/SectionTag";
import { BOOKING_URL, FOUNDER_PHOTO, bookingHref } from "@/lib/site";

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
        line: "Growth",
        body: "Turn founder-led sales into a repeatable pipeline: ICP and messaging, outbound, CRM, an AI SDR, and a dashboard you actually check.",
      },
      {
        name: "One-Person Company OS",
        line: "Operations",
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
        line: "Growth",
        body: "Redesign your go-to-market workflows around AI: agents where they move the number, people where judgment matters.",
      },
      {
        name: "Human-AI Collaboration",
        line: "Operations",
        body: "Decide what goes to agents and what stays human, then drive adoption until the new way of working sticks.",
      },
    ],
  },
];

const MOVES = [
  {
    n: "01",
    title: "Audit",
    when: "2 weeks",
    body: "We diagnose your ICP, pitch, pipeline and workflows, then hand you a ranked 90-day plan.",
  },
  {
    n: "02",
    title: "Build",
    when: "Monthly",
    body: "We embed with your team and build the engine end-to-end: process, CRM, agents, dashboards. You own all of it.",
  },
  {
    n: "03",
    title: "Measure",
    when: "Weekly",
    body: "Every engine ends with a number on a dashboard. If it moves the number, we scale it. If not, we cut it.",
  },
];

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

const MARKETING_OFFERS = [
  { name: "Creator Growth Audit", body: "Brand, creator and channel diagnosis with a test plan." },
  { name: "Campaign Build", body: "Creator and IP campaigns, from casting and briefs to tracking." },
  { name: "Creator Engine", body: "An always-on creator program, tested and optimized monthly." },
];

export default function Home() {
  return (
    <ScrollReveal>
      <Nav />
      <Hero />
      <GrainDissolve />

      <section className="numbers reveal" id="track-record">
        <SectionTag index="01 / 06" name="Founder track record" />
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

      <section className="who reveal" id="who">
        <SectionTag index="02 / 06" name="Who we help" />
        <div className="who-grid">
          {AUDIENCES.map((a) => (
            <div key={a.tag} className="who-card">
              <div className="who-tag">{a.tag}</div>
              <h3>{a.title}</h3>
              <div className="who-engines">
                {a.engines.map((e) => (
                  <div key={e.name} className="engine">
                    <div className="engine-head">
                      <span className="engine-name">{e.name}</span>
                      <span className="engine-line">{e.line}</span>
                    </div>
                    <p>{e.body}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="approach reveal" id="how">
        <SectionTag index="03 / 06" name="How we work" />
        <div className="approach-intro">
          <h2>
            Three moves.
            <br />
            Audit. Build. Measure.
          </h2>
          <p>
            We don&apos;t hand you a deck and leave. We embed, build the system with your team,
            and stay until it runs. No pilot purgatory: every engagement ends with a number on
            a dashboard.
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

      <section className="offers reveal" id="offers">
        <SectionTag index="04 / 06" name="Offers · Founders" />
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

      <section className="about reveal" id="about">
        <SectionTag index="05 / 06" name="About" />
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
              doing $10M a year and personally led 50+ deals. I led the brand and
              marketing strategy that took a retail brand from $500K to $1.5M a month. And I
              built celebrity, IP and creator campaigns that drove 20M+ impressions and moved
              sales.
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

      <section className="marketing reveal" id="marketing">
        <div className="marketing-grid">
          <div>
            <div className="marketing-tag">Levedge Marketing</div>
            <h2>Entertainment-grade marketing for consumer brands.</h2>
            <p className="marketing-body">
              Celebrity, IP and creator campaigns, backed by a testing framework that proves
              what actually drives sales.
            </p>
            <div className="marketing-ctas">
              <Button href={bookingHref} variant="primary" size="md" arrow>
                Talk about a campaign
              </Button>
            </div>
          </div>
          <ul className="marketing-list">
            {MARKETING_OFFERS.map((m) => (
              <li key={m.name}>
                <span className="marketing-item-name">{m.name}</span>
                <span className="marketing-item-body">{m.body}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pulse-strip reveal" id="pulse">
        <div className="pulse-strip-inner">
          <span className="pulse-strip-tag">Product · Pulse</span>
          <p>
            <strong>Pulse</strong> is our social growth tool: it drafts in your voice,
            schedules across LinkedIn, X and Threads, and tracks what works.
          </p>
          <Button href={bookingHref} variant="outline-light" size="sm">
            Request access
          </Button>
        </div>
      </section>

      <section className="contact" id="contact">
        <SectionTag index="06 / 06" name="Contact" />
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
