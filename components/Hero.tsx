import Button from "./Button";
import GravityGrid from "./GravityGrid";
import { bookingHref } from "@/lib/site";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-canvas">
        <GravityGrid intensity={1} ambient={0.4} gridSize={56} style={{ width: "100%", height: "100%" }} />
      </div>
      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="pulse-dot" />
          <span>AI-native growth &amp; operations</span>
        </div>

        <div className="hero-stack reveal">
          <h1 className="hero-title">
            Leverage AI
            <br />
            to create an <em>edge</em>.
          </h1>
          <div className="hero-copy">
            <p className="hero-lede">
              Everyone has the same models. The edge is in how you use them.
            </p>
            <p className="hero-sub">
              We embed with founders and growing teams to build AI-native engines for growth
              and operations, and stay until they run.
            </p>
          </div>
          <div className="hero-ctas">
            <Button href={bookingHref} variant="primary" size="lg" arrow>
              Book an intro call
            </Button>
            <Button href="#how" variant="outline-dark" size="lg">
              See how we work
            </Button>
          </div>
          <p className="hero-proof">
            Ex-$10M/yr B2B sales lead <span>·</span> 3x retail brand growth <span>·</span> 20M+
            impression creator campaigns
          </p>
        </div>

        <div className="hero-foot" />
      </div>
    </section>
  );
}
