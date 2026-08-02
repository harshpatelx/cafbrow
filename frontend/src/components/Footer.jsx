import { Instagram, Facebook, Twitter, Coffee, ArrowUpRight } from "lucide-react";
import { useLenis, scrollToSection } from "./SmoothScroll";
import { FadeUp } from "./Reveal";

export default function Footer() {
  const lenisRef = useLenis();
  const go = (href) => scrollToSection(lenisRef, href);

  return (
    <footer id="contact" className="bg-charcoal pt-24 text-cream" data-testid="footer-section">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp>
          <button
            data-testid="footer-reserve-cta"
            onClick={() => go("#reserve")}
            className="group flex w-full items-center justify-between border-b border-cream/15 pb-10 text-left"
          >
            <span className="font-display text-4xl font-black tracking-tight transition-colors duration-300 group-hover:text-mustard sm:text-6xl lg:text-7xl">
              See you at <span className="italic text-terracotta">CafBrow.</span>
            </span>
            <ArrowUpRight className="h-10 w-10 flex-none text-terracotta transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:h-14 sm:w-14" />
          </button>
        </FadeUp>

        <div className="grid grid-cols-1 gap-12 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="flex items-center gap-2 font-display text-2xl font-black">
              <Coffee className="h-5 w-5 text-terracotta" /> CafBrow
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
              Ahmedabad's neighborhood coffee house and kitchen. Slow mornings, honest
              food, coffee roasted with care.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-mustard">Visit</p>
            <p className="mt-4 text-sm leading-relaxed text-cream/70">
              21 Shree Krishna Complex, C.G. Road<br />Ahmedabad, Gujarat 380009<br />+91 98765 01420<br />hello@cafbrow.in
            </p>
          </div>
          <div>
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-mustard">Explore</p>
            <div className="mt-4 flex flex-col gap-2.5 text-sm">
              {[
                ["Menu", "#menu", "footer-link-menu"],
                ["About", "#about", "footer-link-about"],
                ["Gallery", "#gallery", "footer-link-gallery"],
                ["Reservations", "#reserve", "footer-link-reserve"],
              ].map(([label, href, testid]) => (
                <button
                  key={href}
                  data-testid={testid}
                  onClick={() => go(href)}
                  className="w-fit text-cream/70 transition-colors duration-300 hover:text-terracotta"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-mustard">Follow</p>
            <div className="mt-4 flex gap-3">
              {[
                [Instagram, "footer-social-instagram", "Instagram"],
                [Facebook, "footer-social-facebook", "Facebook"],
                [Twitter, "footer-social-twitter", "Twitter"],
              ].map(([Icon, testid, label]) => (
                <a
                  key={testid}
                  href="#contact"
                  data-testid={testid}
                  aria-label={label}
                  onClick={(e) => e.preventDefault()}
                  className="rounded-full border border-cream/25 p-3 transition-colors duration-300 hover:border-terracotta hover:bg-terracotta"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-cream/15 py-8 text-xs text-cream/50 sm:flex-row">
          <p data-testid="footer-copyright">© {new Date().getFullYear()} CafBrow Coffee House. All rights reserved.</p>
          <p>Brewed with care, served with love.</p>
        </div>
      </div>
    </footer>
  );
}
