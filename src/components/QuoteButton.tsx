import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function QuoteButton({
  variant = "primary",
  className = "",
  label = "Get a Quote",
}: {
  variant?: "primary" | "ghost" | "light";
  className?: string;
  label?: string;
}) {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const styles = {
    primary:
      "bg-gradient-primary text-primary-foreground shadow-soft hover:shadow-glow hover:-translate-y-0.5",
    light:
      "bg-background text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5",
    ghost:
      "bg-white/10 text-primary-foreground backdrop-blur border border-white/20 hover:bg-white/20",
  }[variant];

  return (
    <Link to="/quote" className={`${base} ${styles} ${className}`}>
      <span>{label}</span>
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}
