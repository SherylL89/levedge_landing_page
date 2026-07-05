import Button from "./Button";
import GravityGrid from "./GravityGrid";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-canvas">
        <GravityGrid intensity={1} ambient={0.4} gridSize={56} style={{ width: "100%", height: "100%" }} />
      </div>
      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="pulse-dot" />
          <span>AI Consulting · Est. 2024</span>
        </div>

        <div className="hero-stack reveal">
          <h1 className="hero-title">
            We give companies
            <br />
            an <em>edge</em>.
          </h1>
          <p className="hero-sub">
            AI consulting that ships in 90 days. Operational models, in production, measured
            against your existing P&amp;L.
          </p>
          <div className="hero-ctas">
            <Button href="#contact" variant="primary" size="lg" arrow>
              Book a scoping call
            </Button>
            <Button href="#approach" variant="outline-dark" size="lg">
              Read the approach
            </Button>
          </div>
        </div>

        <div className="hero-foot" />
      </div>
    </section>
  );
}
