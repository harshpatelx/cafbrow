import { FadeUp, SectionLabel } from "./Reveal";

const STATS = [
  { value: "07", label: "House roasts" },
  { value: "48", label: "Cozy seats" },
  { value: "12k", label: "Cups a month" },
];

export default function Intro() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 lg:px-12 lg:py-36" data-testid="intro-section">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <FadeUp>
            <SectionLabel>Welcome to CafBrow</SectionLabel>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              A cafe built for the ones who{" "}
              <span className="italic text-terracotta">linger</span> over the cup.
            </h2>
          </FadeUp>
        </div>
        <div className="flex flex-col justify-end lg:col-span-5">
          <FadeUp delay={0.2}>
            <p className="text-lg leading-relaxed text-ink">
              We opened CafBrow in Ahmedabad with one rule: nothing leaves the counter
              unless we'd proudly serve it to family. Beans roasted in small batches,
              bread baked before sunrise, and a room designed to slow your day down.
            </p>
            <p className="mt-6 font-accent text-2xl italic leading-snug text-charcoal">
              "Come for the coffee. Stay for the quiet."
            </p>
          </FadeUp>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {STATS.map((stat, i) => (
          <FadeUp key={stat.label} delay={0.1 + i * 0.12}>
            <div
              className="rounded-3xl border border-charcoal/10 bg-white p-10 shadow-sm transition-shadow duration-300 hover:shadow-md"
              data-testid={`intro-stat-${i}`}
            >
              <p className="font-display text-5xl font-black text-terracotta">{stat.value}</p>
              <p className="mt-2 text-xs font-bold tracking-[0.25em] uppercase text-ink">{stat.label}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
