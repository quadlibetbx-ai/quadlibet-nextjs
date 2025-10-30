export default function VideoPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold">Video</h1>
      <p className="mt-2 text-zinc-300">Official videos, live sessions, and behind-the-scenes.</p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
          <iframe className="w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Quadlibét Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
        <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
          <iframe className="w-full h-full" src="https://www.youtube.com/embed/ysz5S6PUM-U" title="Quadlibét Live" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
      </div>
    </main>
  );
}
