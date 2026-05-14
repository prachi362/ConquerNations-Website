import { Link } from "@tanstack/react-router";
import { useState } from "react";
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
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-4 group">
          <img
            src={logo}
            alt="Conquer Nation Logistics logo"
            className="h-20 w-auto sm:h-24 transition-transform duration-500 group-hover:scale-105 [filter:brightness(0)_invert(1)] drop-shadow-lg"
          />
          <span className="hidden sm:block text-2xl font-semibold tracking-tight text-white drop-shadow-md">
            Conquer Nation
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <nav className="flex items-center gap-9">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-base font-medium text-white/90 hover:text-white transition-colors drop-shadow-md"
                activeProps={{ className: "text-base font-semibold text-white drop-shadow-md" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <QuoteButton />
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden rounded-lg p-2 text-white hover:bg-white/10 transition"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-deep/95 backdrop-blur-md border-t border-white/15`}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-white hover:bg-white/10 transition"
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
