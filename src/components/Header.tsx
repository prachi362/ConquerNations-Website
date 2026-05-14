import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { QuoteButton } from "./QuoteButton";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-60" />
            <img
              src={logo}
              alt="Conquer Nation Logistics logo"
              className="relative h-10 w-auto rounded-md bg-gradient-deep p-1.5 transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="hidden sm:block leading-tight">
            <div className="text-base font-semibold tracking-tight text-foreground">Conquer Nation</div>
            <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">Logistics</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="underline-grow text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              activeProps={{ className: "underline-grow text-sm font-medium text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <QuoteButton />
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden rounded-lg p-2 text-foreground hover:bg-secondary transition"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-background/95 backdrop-blur-xl border-b border-border`}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-secondary transition"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2">
            <QuoteButton className="w-full justify-center" />
          </div>
        </div>
      </div>
    </header>
  );
}
