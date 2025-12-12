import photos from '../data/photos.json';

export default function PhotosPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold">Photos</h1>
      <p className="mt-2 text-zinc-300">Studio, stage, and NYC moments.</p>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
        {photos.map((src, i) => (
          <div key={i} className="relative group aspect-square overflow-hidden rounded-xl">
            <img
              alt={`Quadlibét photo ${i+1}`}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition"
              src={`${src}?v=${Date.now()}`}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
          </div>
        ))}
      </div>
    </main>
  );
}
