import BrandMark from "./BrandMark";
import Button from "./Button";
import { bookingHref } from "@/lib/site";

const NAV_ITEMS = [
  { label: "How we work", href: "#how" },
  { label: "What we build", href: "#build" },
  { label: "Why Levedge", href: "#why" },
  { label: "Offers", href: "#offers" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  return (
    <header className="nav">
      <a href="#" className="nav-brand" aria-label="Levedge — home">
        <BrandMark size={26} />
        <span>Levedge</span>
      </a>
      <nav className="nav-links">
        {NAV_ITEMS.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <Button href={bookingHref} variant="light" size="sm">
        Book a call
      </Button>
    </header>
  );
}
