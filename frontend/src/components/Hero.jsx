import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import { KineticLine } from "./Reveal";
import { useLenis, scrollToSection } from "./SmoothScroll";

export default function Hero() {
  const lenisRef = useLenis();
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 700], [0, 130]);
  const textY = useTransform(scrollY, [0, 700], [0, -60]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28 lg:pt-32" data-testid="hero-section">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 pb-24 lg:grid-cols-12 lg:gap-8 lg:px-12">
        <motion.div style={{ y: textY }} className="relative z-10 lg:col-span-7">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mb-6 flex items-center gap-2 text-xs font-bold tracking-[0.3em] uppercase text-terracotta"
          >
            <MapPin className="h-4 w-4" />
            Est. 2019 — Coffee House & Kitchen, Ahmedabad
          </motion.p>

          <h1 className="font-display text-6xl font-black leading-[0.95] tracking-tighter sm:text-7xl lg:text-8xl" data-testid="hero-headline">
            <KineticLine delay={0.15}>Sip.</KineticLine>
            <KineticLine delay={0.3} innerClassName="text-terracotta italic">Savor.</KineticLine>
            <KineticLine delay={0.45}>Stay awhile.</KineticLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-md text-lg leading-relaxed text-ink"
            data-testid="hero-subtext"
          >
            CafBrow is Ahmedabad's cozy neighborhood cafe, built on slow mornings,
            honest food and coffee roasted with care. Pull up a chair — the first
            pour is on the house.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              data-testid="hero-explore-menu-button"
              onClick={() => scrollToSection(lenisRef, "#menu")}
              className="rounded-full bg-terracotta px-8 py-4 text-sm font-bold tracking-wide text-cream shadow-lg shadow-terracotta/30 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-charcoal"
            >
              Explore the Menu
            </button>
            <button
              data-testid="hero-reserve-button"
              onClick={() => scrollToSection(lenisRef, "#reserve")}
              className="rounded-full border-2 border-charcoal px-8 py-[14px] text-sm font-bold tracking-wide transition-colors duration-300 hover:bg-charcoal hover:text-cream"
            >
              Reserve a Table
            </button>
          </motion.div>
        </motion.div>

        <div className="relative lg:col-span-5">
          <motion.div
            style={{ y: imgY }}
            initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[2rem] border border-charcoal/10 shadow-2xl">
              <img
                src="/assets/cafe-bright.jpg"
                alt="Illustration of the CafBrow dining room"
                className="h-full w-full object-cover"
                data-testid="hero-illustration"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-charcoal/10 bg-white px-6 py-4 shadow-lg">
              <p className="font-display text-3xl font-black text-terracotta">4.9</p>
              <p className="text-xs font-bold tracking-widest uppercase text-ink">2,400+ happy reviews</p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        onClick={() => scrollToSection(lenisRef, "#menu")}
        data-testid="hero-scroll-indicator"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink lg:flex"
        aria-label="Scroll down"
      >
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce-soft" />
      </motion.button>
    </section>
  );
}
