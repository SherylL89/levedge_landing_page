import BrandMark from "./BrandMark";
import Button from "./Button";
import { bookingHref } from "@/lib/site";

const NAV_ITEMS = [
  { label: "Who we help", href: "#who" },
  { label: "How we work", href: "#how" },
  { label: "Offers", href: "#offers" },
  { label: "Marketing", href: "#marketing" },
  { label: "About", href: "#about" },
];

export default function Nav() {
  return (
    <header className="nav">
      <a href="#" className="nav-brand" aria-label="Levedge — home">
        <BrandMark size={22} />
        <span className="nav-brand-name">Levedge</span>
      </a>
      <nav className="nav-links">
        {NAV_ITEMS.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <Button href={bookingHref} variant="outline-dark" size="sm" arrow>
        Book a call
      </Button>
    </header>
  );
}
