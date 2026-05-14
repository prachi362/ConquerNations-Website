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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={port} alt="" loading="lazy" width={1600} height={1000} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-deep/90 via-deep/80 to-background" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36 text-primary-foreground">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow">About us</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-3 max-w-3xl text-5xl font-semibold leading-[1.05] sm:text-6xl">
              Twenty-five years of <span className="text-shimmer">moving things the right way.</span> 
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-6 max-w-2xl text-lg text-primary font-medium">
              Conquer Nation started with one truck and a promise: never let a customer down.
              Today we run a national network that still operates by the same rule.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our story</p>
              <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">Built by operators, <span className="text-gradient">run by people who care.</span></h2>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                We've been on the dock at 4 a.m. We've sweated the tight delivery windows. That's why our network was designed by people who know what's at stake when freight is late.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Modern tools, generational experience, and a team that picks up the phone , that's the whole formula.
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
