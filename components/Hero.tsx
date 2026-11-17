import Button from "./Button";
import HeroArt from "./HeroArt";
import { bookingHref } from "@/lib/site";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="hero-pill">
          <span className="hero-dot" aria-hidden="true" />
          Hi, I&apos;m Sheryl. I build AI engines with founders.
        </p>
        <h1 className="hero-title">
          Leverage AI to create an <em>edge</em>.
        </h1>
        <p className="hero-lede">Everyone has the same models. The edge is in how you use them.</p>
        <p className="hero-sub">
          I embed with founders and growing teams to build AI-native engines for growth and
          operations, and stay until they run.
        </p>
        <div className="hero-ctas">
          <Button href={bookingHref} variant="primary" size="lg" arrow>
            Book an intro call
          </Button>
          <Button href="#how" variant="outline-dark" size="lg">
            See how it works
          </Button>
        </div>
        <p className="hero-proof">
          $10M/yr B2B sales lead · 3x retail brand growth · 20M+ impression campaigns
        </p>
      </div>
      <div className="hero-visual">
        <HeroArt />
      </div>
    </section>
  );
}
