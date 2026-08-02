import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { GALLERY_IMAGES } from "../data/menu";
import { FadeUp, SectionLabel } from "./Reveal";

export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section id="gallery" className="overflow-hidden bg-charcoal py-28 text-cream lg:py-36" data-testid="gallery-section">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <FadeUp>
              <SectionLabel light>Gallery</SectionLabel>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Scenes from <span className="italic text-mustard">the room.</span>
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <div className="flex items-center gap-3">
              <button
                data-testid="gallery-prev-button"
                onClick={() => emblaApi?.scrollPrev()}
                aria-label="Previous image"
                className="rounded-full border-2 border-cream/30 p-3 transition-colors duration-300 hover:border-terracotta hover:bg-terracotta"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                data-testid="gallery-next-button"
                onClick={() => emblaApi?.scrollNext()}
                aria-label="Next image"
                className="rounded-full border-2 border-cream/30 p-3 transition-colors duration-300 hover:border-terracotta hover:bg-terracotta"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </FadeUp>
        </div>
      </div>

      <FadeUp delay={0.2}>
        <div className="mt-14 cursor-grab active:cursor-grabbing" ref={emblaRef} data-testid="gallery-carousel">
          <div className="flex gap-6 pl-6 lg:pl-[max(3rem,calc((100vw-80rem)/2+3rem))]">
            {GALLERY_IMAGES.map((image, i) => (
              <figure
                key={image.src}
                className="relative w-[82vw] flex-none overflow-hidden rounded-3xl border border-cream/15 sm:w-[52vw] lg:w-[38vw]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.caption}
                    loading="lazy"
                    draggable={false}
                    className={`h-full w-full object-cover transition-all duration-700 ${
                      selected === i ? "scale-100 opacity-100" : "scale-[1.04] opacity-60"
                    }`}
                  />
                </div>
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/90 to-transparent p-6 pt-14">
                  <span className="text-xs font-bold tracking-[0.25em] uppercase text-mustard">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-1 font-display text-xl font-bold">{image.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </FadeUp>

      <div className="mx-auto mt-10 flex max-w-7xl justify-center gap-2 px-6" data-testid="gallery-dots">
        {GALLERY_IMAGES.map((_, i) => (
          <button
            key={i}
            data-testid={`gallery-dot-${i}`}
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Go to image ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              selected === i ? "w-8 bg-terracotta" : "w-2 bg-cream/30 hover:bg-cream/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
