import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu as MenuIcon, X, Coffee } from "lucide-react";
import { useLenis, scrollToSection } from "./SmoothScroll";

const LINKS = [
  { label: "Menu", href: "#menu", testid: "nav-link-menu" },
  { label: "About", href: "#about", testid: "nav-link-about" },
  { label: "Gallery", href: "#gallery", testid: "nav-link-gallery" },
  { label: "Contact", href: "#contact", testid: "nav-link-contact" },
];

export default function Navbar() {
  const lenisRef = useLenis();
  const [open, setOpen] = useState(false);

  const go = (href) => {
    setOpen(false);
    scrollToSection(lenisRef, href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-charcoal/10 bg-cream/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12" data-testid="main-nav">
        <button
          data-testid="nav-logo"
          onClick={() => go("#home")}
          className="flex items-center gap-2 font-display text-2xl font-black tracking-tight"
        >
          <Coffee className="h-6 w-6 text-terracotta" strokeWidth={2.4} />
          Caf<span className="text-terracotta">Brow</span>
        </button>

        <div className="hidden items-center gap-10 md:flex">
          {LINKS.map((link) => (
            <button
              key={link.href}
              data-testid={link.testid}
              onClick={() => go(link.href)}
              className="group relative text-sm font-semibold tracking-wide text-ink transition-colors duration-300 hover:text-charcoal"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-terracotta transition-[width] duration-300 group-hover:w-full" />
            </button>
          ))}
          <button
            data-testid="nav-reserve-button"
            onClick={() => go("#reserve")}
            className="rounded-full bg-charcoal px-6 py-2.5 text-sm font-bold text-cream transition-colors duration-300 hover:bg-terracotta"
          >
            Reserve a Table
          </button>
        </div>

        <button
          data-testid="nav-mobile-toggle"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-charcoal/10 md:hidden"
            data-testid="nav-mobile-panel"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {LINKS.map((link) => (
                <button
                  key={link.href}
                  data-testid={`${link.testid}-mobile`}
                  onClick={() => go(link.href)}
                  className="py-3 text-left font-display text-xl font-semibold"
                >
                  {link.label}
                </button>
              ))}
              <button
                data-testid="nav-reserve-button-mobile"
                onClick={() => go("#reserve")}
                className="mt-2 rounded-full bg-terracotta px-6 py-3 text-sm font-bold text-cream"
              >
                Reserve a Table
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
