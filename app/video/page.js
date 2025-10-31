import list from '../data/videos.json';

const PLACEHOLDER_POSTER =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 675'>
  <rect width='100%' height='100%' fill='#111'/>
  <text x='50%' y='50%' fill='#bbb' font-size='40' text-anchor='middle' font-family='sans-serif'>Quadlibét • Video</text>
</svg>`);

// Turn either strings or objects into a uniform video item
function toItem(entry) {
  if (typeof entry === 'string') {
    return {
      src: entry,
      title: humanTitle(entry),
      poster: null
    };
  }
  return {
    src: entry.src,
    title: entry.title || humanTitle(entry.src),
    poster: entry.poster || null
  };
}

function humanTitle(url) {
  const file = url.split('?')[0].split('/').pop() || '';
  return file
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function guessPoster(url) {
  // Try same path but .jpg as a best-effort poster
  const base = url.split('?')[0];
  return base.replace(/\.[^.]+$/, '.jpg');
}

export default function VideoPage() {
  const videos = (Array.isArray(list) ? list : []).map(toItem);

  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold">Video</h1>
      <p className="mt-2 text-zinc-300">Official videos, live sessions, and behind-the-scenes.</p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {videos.map((v, i) => {
          const poster = v.poster || guessPoster(v.src) || PLACEHOLDER_POSTER;
          return (
            <figure key={v.src} className="rounded-2xl overflow-hidden border border-white/10 bg-black">
              <video className="w-full h-full" controls preload="none" poster={poster}>
                <source src={`${v.src}?v=${Date.now()}`} type={v.src.toLowerCase().endsWith('.mov') ? 'video/quicktime' : 'video/mp4'} />
                Your browser does not support the video tag.
              </video>
              <figcaption className="px-4 py-3 text-sm text-zinc-300 border-t border-white/10">
                {v.title}
              </figcaption>
            </figure>
          );
        })}
      </div>
    </main>
  );
}
'use client';
import list from '../data/videos.json';

// ... your helpers (PLACEHOLDER_POSTER, toItem, humanTitle, guessPoster) ...

export default function VideoPage() {
  // Pause all other media when any video starts
  const handlePlay = (e) => {
    document.querySelectorAll('video').forEach(v => { if (v !== e.currentTarget) v.pause(); });
    document.querySelectorAll('audio').forEach(a => a.pause());
  };

  const videos = (Array.isArray(list) ? list : []).map(toItem);

  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      {/* ... */}
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {videos.map((v) => {
          const poster = v.poster || guessPoster(v.src) || PLACEHOLDER_POSTER;
          return (
            <figure key={v.src} className="rounded-2xl overflow-hidden border border-white/10 bg-black">
              <video
                className="w-full h-full"
                controls
                preload="none"
                poster={poster}
                onPlay={handlePlay}
              >
                <source
                  src={`${v.src}?v=${Date.now()}`}
                  type={v.src.toLowerCase().endsWith('.mov') ? 'video/quicktime' : 'video/mp4'}
                />
                Your browser does not support the video tag.
              </video>
              <figcaption className="px-4 py-3 text-sm text-zinc-300 border-t border-white/10">
                {v.title}
              </figcaption>
            </figure>
          );
        })}
      </div>
    </main>
  );
}

