import { FadeUp, SectionLabel } from "./Reveal";

const CHAPTERS = [
  {
    num: "01",
    title: "Our Story",
    text: "CafBrow began as a two-table espresso bar on C.G. Road in 2019. Today we're Ahmedabad's living room — same obsession, bigger oven.",
  },
  {
    num: "02",
    title: "The Craft",
    text: "Beans from four small farms, roasted in-house every Tuesday. Dough proofs overnight. Syrups are simmered, never poured from a bottle.",
  },
  {
    num: "03",
    title: "The Space",
    text: "Warm wood, low light, plants on every shelf and a window seat with your name on it. Laptops welcome — rushing is not.",
  },
  {
    num: "04",
    title: "The Promise",
    text: "If a cup isn't perfect, we remake it before you ask. Quality isn't a chapter of our story — it's the whole book.",
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-28 lg:px-12 lg:py-36" data-testid="about-section">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <FadeUp>
              <SectionLabel>About Us</SectionLabel>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                Four chapters, <span className="italic text-terracotta">one cafe.</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="mt-10 overflow-hidden rounded-[2rem] border border-charcoal/10 shadow-xl">
                <img
                  src="/assets/cafe-dark.jpg"
                  alt="Illustration of the CafBrow counter at night"
                  className="h-full w-full object-cover"
                  data-testid="about-illustration"
                />
              </div>
            </FadeUp>
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:col-span-7">
          {CHAPTERS.map((chapter, i) => (
            <FadeUp key={chapter.num} delay={i * 0.08}>
              <div
                className="group flex gap-8 rounded-3xl border border-charcoal/10 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-10"
                data-testid={`about-chapter-${chapter.num}`}
              >
                <span className="font-display text-6xl font-black leading-none text-terracotta/25 transition-colors duration-300 group-hover:text-terracotta sm:text-7xl">
                  {chapter.num}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">{chapter.title}</h3>
                  <p className="mt-3 max-w-lg leading-relaxed text-ink">{chapter.text}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
