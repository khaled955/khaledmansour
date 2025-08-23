/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect, useMemo, useRef, useState } from "react";
import { DATA } from "../../data/Data";

type Item = (typeof DATA)["testimonials"][number];

const AUTOPLAY_MS = 4500;      // autoplay interval
const SWIPE_THRESHOLD = 48;    // px to trigger swipe

export default function Testimonials({ items }: { items?: Item[] }) {
  const slides = useMemo<Item[]>(() => {
    const source = items ?? DATA.testimonials ?? [];
    return Array.isArray(source) ? source : [];
  }, [items]);

  const [index, setIndex] = useState(0);

  // Autoplay: advances and loops forever
  useEffect(() => {
    if (slides.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [slides.length]);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  // Touch swipe
  const startX = useRef(0);
  const deltaX = useRef(0);
  const onTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    startX.current = e.touches[0].clientX;
    deltaX.current = 0;
  };
  const onTouchMove: React.TouchEventHandler<HTMLDivElement> = (e) => {
    deltaX.current = e.touches[0].clientX - startX.current;
  };
  const onTouchEnd: React.TouchEventHandler<HTMLDivElement> = () => {
    if (Math.abs(deltaX.current) > SWIPE_THRESHOLD) {
      deltaX.current < 0 ? next() : prev();
    }
  };

  if (!slides.length) return null;

  return (
    <section id="testimonials" aria-label="Testimonials" className="relative">
      <header className="mb-4 flex items-end justify-between gap-3">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          What people say
        </h2>
        <div className="hidden sm:flex items-center gap-2">
          <IconButton label="Previous" onClick={prev}>
            <ArrowLeft />
          </IconButton>
          <IconButton label="Next" onClick={next}>
            <ArrowRight />
          </IconButton>
        </div>
      </header>

      <div
        role="region"
        aria-roledescription="carousel"
        aria-live="polite"
        className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm ring-1 ring-black/5 dark:border-neutral-800 dark:bg-zinc-900"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((t, i) => (
            <article
              key={`${t.name}-${i}`}
              className="w-full shrink-0 p-6 sm:p-8 grid items-center gap-6 sm:grid-cols-[96px,1fr]"
            >
              <img
                src={t.avatar}
                alt={`${t.name} avatar`}
                className="mx-auto size-20 sm:size-24 rounded-full object-cover ring-2 ring-neutral-200 dark:ring-neutral-700"
                loading="lazy"
              />
              <div>
                <p className="text-neutral-700 dark:text-neutral-300">
                  <span className="text-4xl leading-none align-[-0.35em]">“</span>
                  {t.quote}
                  <span className="text-4xl leading-none align-[-0.35em]">”</span>
                </p>
                <div className="mt-4">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">
                    {t.title}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* mobile arrows */}
      <div className="mt-3 flex sm:hidden justify-center gap-3">
        <IconButton label="Previous" onClick={prev}>
          <ArrowLeft />
        </IconButton>
        <IconButton label="Next" onClick={next}>
          <ArrowRight />
        </IconButton>
      </div>

      {/* dots */}
      <div className="mt-3 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2.5 rounded-full transition-all ${
              index === i
                ? "w-6 bg-neutral-900 dark:bg-white"
                : "w-2.5 bg-neutral-300 dark:bg-neutral-700"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

function IconButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white p-2 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md
                 dark:border-neutral-700 dark:bg-neutral-900"
    >
      {children}
    </button>
  );
}

function ArrowLeft() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M15.5 4.5 8 12l7.5 7.5-1.5 1.5L5 12l9-9 1.5 1.5Z" />
    </svg>
  );
}
function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M8.5 19.5 16 12 8.5 4.5 10 3l9 9-9 9-1.5-1.5Z" />
    </svg>
  );
}




