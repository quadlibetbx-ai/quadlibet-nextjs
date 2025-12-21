'use client';

import { useEffect, useMemo, useState } from 'react';
import photos from '../data/photos.json';

export default function PhotosPage() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Stable cache-buster per deploy session (not per render)
  const cacheBust = useMemo(() => Date.now(), []);

  const openAt = (i) => {
    setActiveIndex(i);
    setOpen(true);
  };

  const close = () => setOpen(false);

  const prev = () => setActiveIndex((i) => (i - 1 + photos.length) % photos.length);
  const next = () => setActiveIndex((i) => (i + 1) % photos.length);

  // Keyboard controls + lock body scroll
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };

    document.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const activeSrc = photos[activeIndex];

  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold">Photos</h1>
      <p className="mt-2 text-zinc-300">Studio, stage, and NYC moments.</p>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
        {photos.map((src, i) => (
          <button
            key={i}
            type="button"
            onClick={() => openAt(i)}
            className="relative group aspect-square overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-white/40"
            aria-label={`Open photo ${i + 1}`}
          >
            <img
              alt={`Quadlibét photo ${i + 1}`}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition"
              src={`${src}?v=${cacheBust}`}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onMouseDown={(e) => {
            // close only if user clicks the dark overlay (not the image)
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="relative w-full max-w-5xl">
            {/* Close */}
            <button
              type="button"
              onClick={close}
              className="absolute -top-3 right-0 md:right-2 translate-y-[-100%] px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white"
              aria-label="Close"
            >
              ✕ Close
            </button>

            {/* Prev */}
            <button
              type="button"
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:translate-x-0 h-12 w-12 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white flex items-center justify-center"
              aria-label="Previous photo"
            >
              ‹
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-0 h-12 w-12 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white flex items-center justify-center"
              aria-label="Next photo"
            >
              ›
            </button>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-black">
              <img
                src={`${activeSrc}?v=${cacheBust}`}
                alt={`Quadlibét photo ${activeIndex + 1}`}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>

            <div className="mt-3 text-center text-white/80 text-sm">
              {activeIndex + 1} / {photos.length} — click outside or press Esc to close
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
