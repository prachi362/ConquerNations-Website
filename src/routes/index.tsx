import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Truck, Warehouse, Boxes, Ship, PackageCheck, Network,
  ShieldCheck, Clock, Globe2, ArrowRight, CheckCircle2,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { QuoteButton } from "@/components/QuoteButton";
import hero from "@/assets/hero-warehouse.jpg";
import truck from "@/assets/truck-highway.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Conquer Nation Logistics , Freight, Fulfillment & 3PL" },
      { name: "description", content: "Move freight across North America with precision. Fulfillment, transloading, warehousing, drayage and transportation built for modern shippers." },
      { property: "og:title", content: "Conquer Nation Logistics" },
      { property: "og:description", content: "Futuristic logistics, human service." },
    ],
  }),
  component: HomePage,
});

const services = [
  { slug: "fulfillment", icon: PackageCheck, title: "Fulfillment", desc: "Pick, pack, and ship , accurately and on time, every time." },
  { slug: "transloading", icon: Boxes, title: "Transloading", desc: "Seamlessly transfer freight between modes to cut delays and cost." },
  { slug: "warehousing", icon: Warehouse, title: "Warehousing", desc: "Short and long-term storage with real-time inventory visibility." },
  { slug: "3pl", icon: Network, title: "3PL", desc: "End-to-end logistics partnership tailored to your supply chain." },
  { slug: "drayage", icon: Ship, title: "Drayage", desc: "Port-to-warehouse moves handled with speed and certainty." },
  { slug: "transportation", icon: Truck, title: "Transportation", desc: "Reliable nationwide trucking with live tracking from pickup to drop." },
];

const stats = [
  { v: "25+", k: "Years moving freight" },
  { v: "98.7%", k: "On-time delivery" },
  { v: "1.2M", k: "Shipments handled" },
  { v: "48", k: "States served" },
];

function HomePage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={hero}
            alt=""
            width={1920}
            height={1280}
            className="h-full w-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep/85 via-deep/70 to-background" />
          <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden />
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-40 pb-32 sm:pt-48 sm:pb-44">
          <div className="max-w-3xl text-primary-foreground">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-glow opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-glow" />
                </span>
                Live across North America
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-6 text-5xl font-semibold leading-[1.05] sm:text-7xl">
                Logistics that <span className="text-shimmer">moves</span> with you.
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-6 max-w-xl text-lg text-white/80 sm:text-xl">
                Fulfillment, warehousing, drayage and transportation under one roof ,
                engineered for clarity, built for speed, delivered with a human touch.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <QuoteButton />
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white/15"
                >
                  Explore services
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Stats */}
          <Reveal delay={500}>
            <div className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.k}
                  className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-md transition hover:bg-white/10"
                >
                  <div className="font-display text-3xl font-semibold text-white sm:text-4xl">{s.v}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.12em] text-white/65">{s.k}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Marquee */}
        <div className="relative border-y border-border bg-background/80 backdrop-blur">
          <div className="overflow-hidden py-5">
            <div className="flex w-max animate-marquee gap-16 whitespace-nowrap text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="flex gap-16 pr-16">
                  {["Fulfillment", "Transloading", "Warehousing", "Drayage", "3PL", "Transportation", "Same-day Quotes", "Real-time Tracking"].map((w) => (
                    <span key={w} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {w}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">What we do</p>
                <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">
                  Six services. <span className="text-gradient">One partner.</span>
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Whether you ship a pallet a week or a thousand a day, we've got the network and the people to make it simple.
                </p>
              </div>
              <Link to="/services" className="underline-grow text-sm font-semibold text-primary">
                See full service list →
              </Link>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group relative block h-full overflow-hidden rounded-2xl border border-border bg-card p-7 hover-lift"
                >
                  <div className="absolute inset-x-0 -top-px h-px bg-gradient-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
                  <div className="relative">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
                    <div className="mt-6 inline-flex items-center text-sm font-semibold text-primary transition-transform duration-500 group-hover:translate-x-1">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT FEATURE */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-mesh opacity-70" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Why Conquer Nation</p>
              <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">
                Modern logistics, <br /><span className="text-gradient">refreshingly simple.</span>
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                We pair seasoned operators with smart software so you always know where your freight is , and what it costs.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  { icon: ShieldCheck, t: "Carrier-vetted, fully insured", d: "Every move is covered, end to end." },
                  { icon: Clock, t: "Quotes back the same day", d: "Often within the hour during business days." },
                  { icon: Globe2, t: "Coast-to-coast network", d: "48 states, major ports, and cross-border ready." },
                ].map((f) => (
                  <li key={f.t} className="flex items-start gap-4">
                    <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <f.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">{f.t}</p>
                      <p className="text-muted-foreground">{f.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <QuoteButton />
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-primary opacity-25 blur-3xl" aria-hidden />
              <div className="relative overflow-hidden rounded-3xl border border-border shadow-deep">
                <img
                  src={truck}
                  alt="Blue cargo truck on highway at dusk"
                  width={1600}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep/90 to-transparent p-6 text-primary-foreground">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-primary-glow" />
                    Tracking 1,284 active shipments right now
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-deep p-10 text-center text-primary-foreground sm:p-16">
              <div className="absolute inset-0 grid-pattern opacity-10" aria-hidden />
              <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary-glow opacity-30 blur-3xl" aria-hidden />
              <div className="relative">
                <h2 className="text-4xl font-semibold sm:text-5xl">Ready to move?</h2>
                <p className="mx-auto mt-4 max-w-xl text-white/75">
                  Tell us where it needs to go. We'll come back with a quote you can act on.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <QuoteButton />
                  <Link to="/contact" className="text-sm font-semibold text-white/90 hover:text-white underline-grow">
                    Or talk to a person
                  </Link>
                </div>
                <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/70">
                  {["No commitment", "Free quote", "Same-day response"].map((p) => (
                    <span key={p} className="inline-flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary-glow" /> {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
