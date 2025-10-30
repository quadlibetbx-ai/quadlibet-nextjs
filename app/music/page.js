export default function MusicPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold">Music</h1>
      <p className="mt-2 text-zinc-300">Latest singles and classics from Quadlibét.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {[1,2,3].map((i) => (
          <article key={i} className="group rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
            <div className="h-40 bg-[url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
            <div className="p-4">
              <h3 className="font-semibold">Track Title {i}</h3>
              <p className="text-sm text-zinc-400">Quadlibét · Single</p>
              <div className="mt-3 flex items-center gap-3">
                <button className="px-3 py-2 rounded-xl bg-[#0096FF] hover:bg-[#0c82d8] text-xs font-semibold">Play</button>
                <a href="#" className="text-xs text-zinc-300 hover:text-white">Add to playlist</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
