// Site-wide settings. Fill these in before deploying.

// TODO(Sheryl): paste your Calendly / Cal.com link, e.g.
// "https://calendly.com/your-handle/intro". Until it's set, every
// "Book a call" button scrolls to the contact section instead.
export const BOOKING_URL = "";

// TODO(Sheryl): drop a square photo at /public/sheryl.jpg and set this to
// "/sheryl.jpg". Until then the About section shows an initial.
export const FOUNDER_PHOTO = "";

// TODO(Sheryl): set to "/marketing" (or a separate domain) once the
// Levedge Marketing landing page is live. Until then its CTA goes to contact.
export const MARKETING_URL = "";

// TODO(Sheryl): "Founder Sales Advisory" ($200/hr, 1:1 pitch and deal coaching) was
// removed from this page. Add it to the Levedge Marketing site when that is built.

export const bookingHref = BOOKING_URL || "#contact";
export const marketingHref = MARKETING_URL || bookingHref;

// ---------------------------------------------------------------------------
// Logo bar under the hero. Hidden until at least one entry exists.
// Only list clients who have agreed to be named, and partner programs you
// have actually joined. `src` is a logo file in /public (SVG preferred).
export type Logo = { name: string; src?: string; href?: string };

export const CLIENT_LOGOS: Logo[] = [
  // { name: "Acme Robotics", src: "/logos/acme.svg" },
];

export const PARTNERS: Logo[] = [
  // { name: "Claude Partner Network", src: "/logos/claude-partner.svg" },
];

// ---------------------------------------------------------------------------
// Case studies. While this is empty, the "Selected work" section shows a
// sample audit deliverable instead.
export type CaseStudy = {
  client: string; // or an anonymized description, e.g. "Series A robotics company"
  industry: string;
  result: string; // the headline number, e.g. "3.2x qualified pipeline"
  title: string;
  body: string;
};

export const CASE_STUDIES: CaseStudy[] = [];
