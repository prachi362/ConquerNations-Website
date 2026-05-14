import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { QuoteButton } from "@/components/QuoteButton";
import { services } from "@/data/services";
import heroImg from "@/assets/truck-highway.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services , Conquer Nation Logistics" },
      { name: "description", content: "Fulfillment, transloading, warehousing, drayage, transportation and 3PL services for shippers of every size." },
      { property: "og:title", content: "Services , Conquer Nation Logistics" },
      { property: "og:description", content: "Six logistics services. One trusted partner." },
    ],
  }),
  component: ServicesPage,
});

const points: Record<string, string[]> = {
  fulfillment: ["Same-day pick & pack", "Returns processing", "Kitting & assembly", "Branded packaging"],
  transloading: ["Container-to-truck", "Rail-to-warehouse", "Cross-dock services", "Reduced dwell time"],
  warehousing: ["Food-grade & hazmat certified", "24/7 surveillance", "Live inventory dashboard", "Flexible terms"],
  drayage: ["Major US ports", "Dedicated chassis fleet", "Hazmat & overweight", "Imports / exports / bonded"],
  transportation: ["48 states + cross-border", "Live GPS tracking", "FTL, LTL & intermodal", "Hazmat certified"],
  "3pl": ["Dedicated account team", "Custom KPIs", "Quarterly reviews", "Tech integrations"],
};

function ServicesPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative isolate overflow-hidden text-primary-foreground">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="" loading="lazy" className="h-full w-full object-cover scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-deep/85 via-deep/70 to-deep/90" />
          <div className="absolute inset-0 grid-pattern opacity-15" aria-hidden />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow">Services</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-3 max-w-3xl text-5xl font-semibold leading-[1.05] sm:text-6xl">
              Everything you need <span className="text-shimmer">under one roof.</span>
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-6 max-w-2xl text-lg text-white/80">
              From the loading dock to the front door , we run the network so you can run your business.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-8"><QuoteButton variant="ghost" /></div>
          </Reveal>
        </div>
      </section>

      {/* Cards */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group block h-full overflow-hidden rounded-3xl border border-border bg-card p-8 hover-lift relative"
              >
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25" />
                <div className="relative flex items-start gap-5">
                  <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    <s.icon className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold">{s.title}</h2>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{s.short}</p>
                    <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {(points[s.slug] ?? []).map((p) => (
                        <li key={p} className="flex items-center gap-2 text-sm text-foreground/85">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-transform duration-500 group-hover:translate-x-1">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="rounded-3xl border border-border bg-gradient-sky p-10 sm:p-14 text-center">
              <h2 className="text-3xl font-semibold sm:text-4xl">Need a service we didn't list?</h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                We've probably done it. Tell us what you need and we'll put a plan together.
              </p>
              <div className="mt-8 flex justify-center"><QuoteButton /></div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
