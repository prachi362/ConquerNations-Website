import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { QuoteButton } from "@/components/QuoteButton";
import { getService, services, type ServiceSection } from "@/data/services";

export const Route = createFileRoute("/services_/$slug")({
  beforeLoad: ({ params }) => {
    if (!getService(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const s = getService(params.slug);
    const title = s ? `${s.title} , Conquer Nation Logistics` : "Service , Conquer Nation Logistics";
    const description = s?.intro.body ?? "";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { slug } = Route.useParams();
  const service = getService(slug);

  if (!service) return null;

  const Icon = service.icon;
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-deep text-primary-foreground">
        <div className="absolute inset-0 grid-pattern opacity-10" aria-hidden />
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-24 sm:pt-48 sm:pb-28">
          <Reveal>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary-glow hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> All services
            </Link>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-6 flex items-center gap-4">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur ring-1 ring-white/20">
                <Icon className="h-7 w-7" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow">
                {service.title}
              </p>
            </div>
          </Reveal>
          <Reveal delay={180}>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] text-white sm:text-5xl">
              {service.intro.heading}
            </h1>
          </Reveal>
          <Reveal delay={260}>
            <p className="mt-5 max-w-2xl text-lg text-white/85 leading-relaxed">
              {service.intro.body}
            </p>
          </Reveal>
          <Reveal delay={340}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <QuoteButton />
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                Talk to our team
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Sections */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 space-y-16">
          {service.sections.map((sec, i) => (
            <Reveal key={`${sec.heading}-${i}`} delay={i * 60}>
              <SectionBlock section={sec} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Related services */}
      <section className="border-t border-border bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Keep exploring
                </p>
                <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
                  More ways we move your freight.
                </h2>
              </div>
              <Link to="/services" className="underline-grow text-sm font-semibold text-primary">
                See all services →
              </Link>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r, i) => {
              const RIcon = r.icon;
              return (
                <Reveal key={r.slug} delay={i * 70}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: r.slug }}
                    className="group block h-full rounded-2xl border border-border bg-card p-6 hover-lift"
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <RIcon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">{r.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.short}</p>
                    <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="rounded-3xl bg-gradient-deep p-10 sm:p-14 text-center text-primary-foreground">
              <h2 className="text-3xl font-semibold sm:text-4xl">Ready to put us to work?</h2>
              <p className="mx-auto mt-3 max-w-xl text-white/75">
                Tell us about your freight , we'll respond with a clear, no-pressure plan.
              </p>
              <div className="mt-8 flex justify-center">
                <QuoteButton variant="ghost" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}

function SectionBlock({ section }: { section: ServiceSection }) {
  return (
    <div>
      <h2 className="text-3xl font-semibold sm:text-4xl">{section.heading}</h2>
      {section.subheading && (
        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          {section.subheading}
        </p>
      )}
      {section.body && (
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{section.body}</p>
      )}
      {section.lead && (
        <p className="mt-6 text-base font-medium text-foreground/90">{section.lead}</p>
      )}
      {section.bullets && section.bullets.length > 0 && (
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {section.bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground/90"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
      )}
      {section.subsections && section.subsections.length > 0 && (
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {section.subsections.map((sub) => (
            <div
              key={sub.heading}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h3 className="text-xl font-semibold">{sub.heading}</h3>
              {sub.body && (
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{sub.body}</p>
              )}
              {sub.bullets && (
                <ul className="mt-4 space-y-2">
                  {sub.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-foreground/85">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
      {section.outro && (
        <p className="mt-6 text-base text-muted-foreground leading-relaxed">{section.outro}</p>
      )}
    </div>
  );
}
