const ITEMS = [
  "Freshly Brewed",
  "Artisan Roasts",
  "Homemade Desserts",
  "Cozy Corners",
  "Wood-Fired Kitchen",
  "Slow Mornings",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div
      className="relative overflow-hidden border-y-2 border-charcoal bg-mustard py-5"
      data-testid="editorial-marquee"
      aria-hidden
    >
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-10">
            {row.map((item, i) => (
              <span key={`${half}-${i}`} className="flex items-center gap-10">
                <span className="font-display text-2xl font-black uppercase tracking-tight text-charcoal sm:text-3xl">
                  {item}
                </span>
                <span className="h-3 w-3 rounded-full bg-terracotta" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
