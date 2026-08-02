import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CATEGORIES, MENU_ITEMS } from "../data/menu";
import { FadeUp, SectionLabel } from "./Reveal";

export default function MenuSection() {
  const [active, setActive] = useState(CATEGORIES[0]);
  const items = MENU_ITEMS.filter((item) => item.category === active);

  return (
    <section id="menu" className="bg-charcoal py-28 text-cream lg:py-36" data-testid="menu-section">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <FadeUp>
              <SectionLabel light>The Menu</SectionLabel>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Poured, plated <span className="italic text-mustard">&</span> proud of it.
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <p className="max-w-sm text-base leading-relaxed text-cream/70">
              Five chapters of flavor — from dawn espresso to the chef's evening plate.
              Everything made in-house, every day.
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={0.15}>
          <div className="mt-14 flex flex-wrap gap-3" role="tablist" data-testid="menu-tabs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={active === cat}
                data-testid={`menu-tab-${cat.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setActive(cat)}
                className={`rounded-full border-2 px-6 py-2.5 text-sm font-bold tracking-wide transition-colors duration-300 ${
                  active === cat
                    ? "border-terracotta bg-terracotta text-cream"
                    : "border-cream/25 text-cream/70 hover:border-cream/60 hover:text-cream"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeUp>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            data-testid="menu-items-grid"
          >
            {items.map((item, i) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group overflow-hidden rounded-3xl border border-cream/15 bg-[#2A2A2A]"
                data-testid={`menu-item-${item.id}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span
                    className="absolute right-4 top-4 rounded-full bg-mustard px-4 py-1.5 font-display text-lg font-black text-charcoal"
                    data-testid={`menu-item-price-${item.id}`}
                  >
                    ₹{item.price}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl font-bold tracking-tight">{item.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/65">{item.desc}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
