import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import { QuoteButton } from "./QuoteButton";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-deep text-primary-foreground">
      <div className="absolute inset-0 grid-pattern opacity-[0.07]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Conquer Nation logo" className="h-16 w-auto" />
              <div>
                <div className="text-lg font-semibold">Conquer Nation</div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/60">Logistics</div>
              </div>
            </div>
            <p className="max-w-md text-white/75 leading-relaxed">
              Moving freight across the continent with precision, transparency, and a human touch.
              Built for shippers who refuse to accept "good enough."
            </p>
            <QuoteButton variant="ghost" label="Request a Quote" />
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">Explore</h3>
            <ul className="space-y-2 text-white/85">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition">Services</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
              <li><Link to="/quote" className="hover:text-white transition">Get a Quote</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">Reach Us</h3>
            <ul className="space-y-3 text-white/85 text-sm">
              <li className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" /><a href="tel:+13106515555" className="hover:text-white">(310) 651-5555</a></li>
              <li className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" /><a href="mailto:info@conquernation.com" className="hover:text-white">info@conquernation.com</a></li>
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" /><span>2651 E. 12th St., Los Angeles, CA 90023</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Conquer Nation Logistics. All rights reserved.</p>
          <p>Designed for clarity. Built for speed.</p>
        </div>
      </div>
    </footer>
  );
}
