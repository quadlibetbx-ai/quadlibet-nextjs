import videos from '../data/videos.json';

function mimeFrom(url) {
  const lower = url.split('?')[0].toLowerCase();
  if (lower.endsWith('.mp4')) return 'video/mp4';
  if (lower.endsWith('.mov')) return 'video/quicktime';
  return 'video/mp4';
}

export default function VideoPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold">Video</h1>
      <p className="mt-2 text-zinc-300">Official videos, live sessions, and behind-the-scenes.</p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {videos.map((src, i) => (
          <div key={i} className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black">
            <video className="w-full h-full" controls preload="none" poster="" key={src}>
              <source src={`${src}?v=${Date.now()}`} type={mimeFrom(src)} />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </main>
  );
}
