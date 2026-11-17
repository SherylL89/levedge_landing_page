import Link from "next/link";

type ButtonProps = {
  href: string;
  variant?: "primary" | "light" | "outline-dark" | "outline-light";
  size?: "sm" | "md" | "lg";
  arrow?: boolean;
  children: React.ReactNode;
};

export default function Button({
  href,
  variant = "outline-dark",
  size = "md",
  arrow = false,
  children,
}: ButtonProps) {
  return (
    <Link href={href} className={`btn btn--${variant} btn--${size}`}>
      {children}
      {arrow && <span className="btn-arrow" aria-hidden="true">→</span>}
    </Link>
  );
}
