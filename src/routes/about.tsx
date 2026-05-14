import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { QuoteButton } from "@/components/QuoteButton";
import port from "@/assets/port-containers.jpg";
import { Heart, Compass, Sparkles, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About , Conquer Nation Logistics" },
      { name: "description", content: "Conquer Nation is a family-built logistics company moving freight across North America with precision and care." },
      { property: "og:title", content: "About , Conquer Nation Logistics" },
      { property: "og:description", content: "Built by operators. Run by people who care." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Heart, t: "People first", d: "Our drivers, our team, your team , everyone in the chain matters." },
  { icon: Compass, t: "Straight talk", d: "Honest timelines, honest pricing, every single time." },
  { icon: Sparkles, t: "Quietly modern", d: "Smart tools that work , without making your day more complicated." },
  { icon: Users, t: "In it together", d: "Long-term partnerships, not transactions." },
];

function AboutPage() {
  return (
    <PageShell>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={port} alt="" loading="lazy" width={1600} height={1000} className="h-full w-full object-cover scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-deep/70 via-deep/55 to-deep/85" />
          <div className="absolute inset-0 grid-pattern opacity-15" aria-hidden />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 text-primary-foreground">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" /> About us
                </span>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.05] text-white sm:text-6xl">
                  Twenty-five years of <span className="text-shimmer">moving things the right way.</span>
                </h1>
              </Reveal>
              <Reveal delay={220}>
                <p className="mt-6 max-w-2xl text-lg text-white/85 leading-relaxed">
                  Conquer Nation started with one warehouse and a promise: never let a customer down.
                  Today we run a national network that still operates by the same rule.
                </p>
              </Reveal>
              <Reveal delay={320}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <QuoteButton />
                  <a
                    href="#our-story"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
                  >
                    Read our story
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={260}>
              <dl className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { k: "25+", v: "Years in logistics" },
                  { k: "50", v: "States served" },
                  { k: "1.2M", v: "Shipments handled" },
                  { k: "98%", v: "On-time delivery" },
                ].map((s) => (
                  <div
                    key={s.v}
                    className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-md transition hover:bg-white/10"
                  >
                    <dt className="font-display text-3xl font-semibold text-white sm:text-4xl">{s.k}</dt>
                    <dd className="mt-1 text-xs uppercase tracking-[0.14em] text-white/70">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="our-story" className="py-24 scroll-mt-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our story</p>
              <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">Built by operators, <span className="text-gradient">run by people who care.</span></h2>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                What began as a small warehouse in Los Angeles is now a full-service logistics partner to importers, e-commerce brands, and manufacturers all over America. We're proud of how far we've come, but prouder of the people who got us here.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                From inbound issues solved by warehouse leads before they even hit your inbox to experts in customs, FTZ compliance and last-mile delivery, everyone on our floor brings decades of hands-on experience to the table.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Partner with Conquer Nation and you don't get a checklist of services. You get a team that answers the phone, knows your account by name, and runs your supply chain like it's their own.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="grid grid-cols-2 gap-4">
              {values.map((v, i) => (
                <div
                  key={v.t}
                  className="rounded-2xl border border-border bg-card p-6 hover-lift"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 font-semibold">{v.t}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{v.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="rounded-3xl bg-gradient-deep p-10 sm:p-14 text-center text-primary-foreground">
              <h2 className="text-3xl font-semibold sm:text-4xl">Let's see if we're a fit.</h2>
              <p className="mx-auto mt-3 max-w-xl text-white/75">Send us your shipment details , we'll come back with a clear, no-pressure quote.</p>
              <div className="mt-8 flex justify-center"><QuoteButton variant="ghost" /></div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
