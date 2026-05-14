import { createFileRoute } from "@tanstack/react-router";
import { Truck, Warehouse, Boxes, Ship, PackageCheck, Network, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { QuoteButton } from "@/components/QuoteButton";

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

const services = [
  {
    icon: PackageCheck,
    title: "Fulfillment",
    desc: "Pick, pack, and ship orders accurately and on time. Real-time inventory and order updates so your customers stay happy.",
    points: ["Same-day pick & pack", "Returns processing", "Kitting & assembly", "Branded packaging"],
  },
  {
    icon: Boxes,
    title: "Transloading",
    desc: "Move freight efficiently between trucks, rail, and containers , without unnecessary handling or downtime.",
    points: ["Container-to-truck", "Rail-to-warehouse", "Cross-dock services", "Reduced dwell time"],
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    desc: "Short and long-term storage with secure facilities and modern WMS for full visibility into every pallet.",
    points: ["Climate-controlled options", "24/7 security", "Live inventory dashboard", "Flexible terms"],
  },
  {
    icon: Ship,
    title: "Drayage",
    desc: "Port and rail drayage handled by carriers we know personally. Less waiting, fewer surprises.",
    points: ["Major US ports", "Live container status", "Demurrage management", "Chassis included"],
  },
  {
    icon: Truck,
    title: "Transportation",
    desc: "Nationwide trucking , LTL, FTL, and expedited , with tracking from pickup to drop.",
    points: ["48 states + cross-border", "Live GPS tracking", "Vetted carriers only", "Transparent pricing"],
  },
  {
    icon: Network,
    title: "3PL",
    desc: "End-to-end logistics partnership tailored to your supply chain , strategy, execution, and reporting in one place.",
    points: ["Dedicated account team", "Custom KPIs", "Quarterly reviews", "Tech integrations"],
  },
];

function ServicesPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-deep text-primary-foreground">
        <div className="absolute inset-0 grid-pattern opacity-10" aria-hidden />
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" aria-hidden />
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
              <article className="group h-full overflow-hidden rounded-3xl border border-border bg-card p-8 hover-lift relative">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25" />
                <div className="relative flex items-start gap-5">
                  <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    <s.icon className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold">{s.title}</h2>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
                    <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-center gap-2 text-sm text-foreground/85">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
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
