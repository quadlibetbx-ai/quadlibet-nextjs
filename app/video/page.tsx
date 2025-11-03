'use client';
import list from '../data/videos.json';

const PLACEHOLDER_POSTER =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 675'>
  <rect width='100%' height='100%' fill='#111'/>
  <text x='50%' y='50%' fill='#bbb' font-size='40' text-anchor='middle' font-family='sans-serif'>Quadlibét • Video</text>
</svg>`);

/** Input from videos.json can be:
 * - a string URL, or
 * - an object with optional title/poster that might be null.
 */
type InputItem =
  | string
  | { src: string; title?: string | null; poster?: string | null };

/** Normalized item we render */
type VideoItem = { src: string; title: string; poster?: string };

function humanTitle(url: string) {
  const file = (url.split('?')[0] || '').split('/').pop() || '';
  return file.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim();
}

function toItem(entry: InputItem): VideoItem {
  if (typeof entry === 'string') {
    return { src: entry, title: humanTitle(entry) };
  }
  const src = entry.src;
  const title = (entry.title ?? undefined) || humanTitle(src);
  const poster = entry.poster ?? undefined; // normalize null -> undefined
  return poster ? { src, title, poster } : { src, title };
}

function guessPoster(url: string) {
  return (url.split('?')[0] || '').replace(/\.[^.]+$/, '.jpg');
}

export default function VideoPage() {
  // Pause other media when one starts
  const handlePlay = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const me = e.currentTarget;
    document.querySelectorAll('video').forEach((v) => {
      if (v !== me) (v as HTMLVideoElement).pause();
    });
    document.querySelectorAll('audio').forEach((a) => (a as HTMLAudioElement).pause());
  };

  // Cast JSON import to our relaxed input type before mapping
  const raw = (Array.isArray(list) ? (list as unknown as InputItem[]) : []);
  const videos: VideoItem[] = raw.map((entry) => toItem(entry));

  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold">Video</h1>
      <p className="mt-2 text-zinc-300">Official videos, live sessions, and behind-the-scenes.</p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {videos.map((v) => {
          const poster = v.poster || guessPoster(v.src) || PLACEHOLDER_POSTER;
          const type = v.src.toLowerCase().endsWith('.mov') ? 'video/quicktime' : 'video/mp4';
          return (
            <figure key={v.src} className="rounded-2xl overflow-hidden border border-white/10 bg-black">
              <video className="w-full h-full" controls preload="none" poster={poster} onPlay={handlePlay}>
                <source src={`${v.src}?v=${Date.now()}`} type={type} />
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
