import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { QuoteButton } from "@/components/QuoteButton";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact , Conquer Nation Logistics" },
      { name: "description", content: "Reach a real person at Conquer Nation. Call, email or stop by , we respond fast." },
      { property: "og:title", content: "Contact , Conquer Nation Logistics" },
      { property: "og:description", content: "Talk to a real human about your freight." },
    ],
  }),
  component: ContactPage,
});

const items = [
  { icon: Phone, t: "Call us", v: "(310) 651-5555", sub: "Mon - Fri, 7am - 7pm PT" },
  { icon: Mail, t: "Email", v: "info@conquernation.com", sub: "We reply within a few hours" },
  { icon: MapPin, t: "Visit", v: "2651 E. 12th St., Los Angeles, CA 90023", sub: "Tours by appointment" },
  { icon: Clock, t: "Hours", v: "24 / 7 dispatch", sub: "Real humans on shift" },
];

function ContactPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-gradient-deep text-primary-foreground">
        <div className="absolute inset-0 grid-pattern opacity-10" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow">Contact</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-3 max-w-3xl text-5xl font-semibold leading-[1.05] sm:text-6xl">
              Talk to a <span className="text-shimmer">real person.</span>
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              No bots, no phone trees. Reach our team directly , we'll help you figure out the next step.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-8"><QuoteButton variant="ghost" /></div>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 80}>
              <a
                href={it.t === "Call us" ? `tel:+1${it.v.replace(/\D/g, "")}` : it.t === "Email" ? `mailto:${it.v}` : "#"}
                className="group block h-full rounded-2xl border border-border bg-card p-7 hover-lift"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <it.icon className="h-6 w-6" />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{it.t}</p>
                <p className="mt-1 text-lg font-semibold text-foreground">{it.v}</p>
                <p className="mt-1 text-sm text-muted-foreground">{it.sub}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="rounded-3xl border border-border bg-gradient-sky p-10 sm:p-14 text-center">
              <h2 className="text-3xl font-semibold sm:text-4xl">Have a shipment in mind?</h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Skip the phone tag , get an itemized quote you can act on.</p>
              <div className="mt-8 flex justify-center"><QuoteButton /></div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
