import Button from "./Button";
import HeroArt from "./HeroArt";
import { bookingHref } from "@/lib/site";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="hero-pill">
          <span className="hero-dot" aria-hidden="true" />
          Forward-deployed AI for growth and operations
        </p>
        <h1 className="hero-title">
          Leverage AI to create an <em>edge</em>.
        </h1>
        <p className="hero-lede">Everyone has the same models. The edge is in how you use them.</p>
        <p className="hero-sub">
          We embed inside your team and your systems to build AI-native engines for growth and
          operations, and stay until they are in production and your people use them.
        </p>
        <div className="hero-ctas">
          <Button href={bookingHref} variant="primary" size="lg" arrow>
            Book an intro call
          </Button>
          <Button href="#how" variant="outline-dark" size="lg">
            See how we work
          </Button>
        </div>
        <p className="hero-proof">
          Audit in 2 weeks · Built in your stack · Your data stays yours
        </p>
      </div>
      <div className="hero-visual">
        <HeroArt />
      </div>
    </section>
  );
}
