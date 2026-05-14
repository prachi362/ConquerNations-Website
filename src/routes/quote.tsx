import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Get a Quote , Conquer Nation Logistics" },
      { name: "description", content: "Tell us about your shipment and we'll send back a clear, no-pressure quote , usually the same day." },
      { property: "og:title", content: "Get a Quote , Conquer Nation Logistics" },
      { property: "og:description", content: "Same-day quotes from real humans." },
    ],
  }),
  component: QuotePage,
});

const services = ["Fulfillment", "Transloading", "Warehousing", "Drayage", "Transportation", "3PL", "Not sure"];

function QuotePage() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <PageShell>
      <section className="relative overflow-hidden bg-gradient-deep text-primary-foreground">
        <div className="absolute inset-0 grid-pattern opacity-10" aria-hidden />
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary-glow opacity-25 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-12 sm:pt-32">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow">Get a quote</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-3 max-w-3xl text-5xl font-semibold leading-[1.05] sm:text-6xl">
              Tell us where it's <span className="text-shimmer">going.</span>
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              A few quick details and we'll come back , usually same day , with a clear, itemized quote. No pressure, no surprises.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-10">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow animate-pulse-glow">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h2 className="mt-6 text-3xl font-semibold">Got it , talk soon.</h2>
                  <p className="mt-3 text-muted-foreground">
                    We've received your request. Expect a reply from a real human within a few hours during business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field label="Full name" name="name" required placeholder="Jane Doe" />
                    <Field label="Company" name="company" placeholder="Acme Co." />
                    <Field label="Email" name="email" type="email" required placeholder="jane@acme.com" />
                    <Field label="Phone" name="phone" type="tel" placeholder="(555) 555-5555" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground">Service needed</label>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {services.map((s) => (
                        <label
                          key={s}
                          className="cursor-pointer rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition has-[:checked]:border-primary has-[:checked]:bg-primary has-[:checked]:text-primary-foreground hover:border-primary"
                        >
                          <input type="radio" name="service" value={s} className="sr-only" defaultChecked={s === "Fulfillment"} />
                          {s}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field label="From (origin)" name="origin" required placeholder="Long Beach, CA" />
                    <Field label="To (destination)" name="destination" required placeholder="Dallas, TX" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground">Tell us about the shipment</label>
                    <textarea
                      name="details"
                      rows={4}
                      placeholder="Pallet count, weight, timing, special handling…"
                      className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:shadow-glow hover:-translate-y-0.5"
                  >
                    Send my request
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                  <p className="text-center text-xs text-muted-foreground">
                    By submitting, you agree to be contacted about your shipment. We never share your info.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <aside className="space-y-6">
              <div className="rounded-3xl bg-gradient-deep p-8 text-primary-foreground shadow-deep">
                <h3 className="text-xl font-semibold">What happens next?</h3>
                <ol className="mt-5 space-y-4 text-white/85">
                  {[
                    "We review your request , usually within an hour.",
                    "A logistics specialist reaches out with questions (if any).",
                    "You get a clear, itemized quote to act on.",
                  ].map((step, i) => (
                    <li key={step} className="flex gap-3">
                      <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/15 text-sm font-semibold">{i + 1}</span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-3xl border border-border bg-card p-8">
                <h3 className="text-lg font-semibold">Prefer to talk?</h3>
                <p className="mt-2 text-muted-foreground">A real person picks up , even on weekends for urgent freight.</p>
                <a href="tel:+13106515555" className="mt-4 inline-flex items-center gap-2 text-lg font-semibold text-primary underline-grow">
                  (310) 651-5555
                </a>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}

function Field({
  label, name, type = "text", required, placeholder,
}: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-foreground">
        {label}{required && <span className="text-primary"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
      />
    </div>
  );
}
