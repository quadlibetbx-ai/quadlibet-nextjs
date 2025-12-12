'use client';

const BASE = "https://quadlibet-media.s3.amazonaws.com";
const enc = (k) => k.split('/').map(encodeURIComponent).join('/');
const urlFor = (k) => `${BASE}/${enc(k)}?v=${Date.now()}`;
export default function MusicPage() {
  // Pause any other audio/video when one starts
  const handlePlay = (e) => {
    const me = e.currentTarget;
    document.querySelectorAll('audio').forEach(a => { if (a !== me) a.pause(); });
    document.querySelectorAll('video').forEach(v => v.pause());
  };

  // === Track sources ===
  // For the two problematic tracks we provide 2 candidate keys each.
  const tracks = [
    {
      title: "Take Me I'm Yours",
      keys: [
        "quadlibetmusic.com/Music/Mood Swings/17. Bonus Track.mp3",
        "quadlibetmusic.com/Music/Mood Swings/17. Take Me.mp3"
      ]
    },
    { title: "Made For Me (Radio)", keys: ["quadlibetmusic.com/Music/Made For Me.mp3"] },
    { title: "Nothing Left to Say (Freestyle Mix)", keys: ["quadlibetmusic.com/Music/Nothing Left to Say (Freestyle Mix).mp3"] },
    { title: "Take Me I'm Yours (Sexy Lady Freestyle Mix)", keys: ["quadlibetmusic.com/Music/Take Me I'm Yours (Sexy Lady_Latin Freestyle Club Mix).mp3"] },
    {
      title: "Tainted Love",
      keys: [
        // Put the ORIGINAL here if you know it; leaving a likely plain-name fallback:
        "quadlibetmusic.com/Music/Tainted Love.mp3",
        // (Keep the remix as last resort. Browser will prefer the first that loads.)
        "quadlibetmusic.com/Music/Mood Swings/10. Tainted Love (Flipzide Remix).mp3"
      ]
    }
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold">Music</h1>
      <p className="mt-2 text-zinc-300">Quadlibét · Freestyle Energy, Bronx Legacy.</p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {tracks.map((t) => (
          <article key={t.title} className="rounded-2xl bg-white/5 border border-white/10 p-4">
            <h3 className="font-semibold">{t.title}</h3>
            <p className="text-xs text-zinc-400 mt-1">Quadlibét · Audio</p>

            <audio className="mt-3 w-full" controls preload="none" onPlay={handlePlay} onError={(e)=>{ /* noop: next <source> will be tried */ }}>
              {t.keys.map((k) => (
                <source key={k} src={urlFor(k)} type="audio/mpeg" />
              ))}
              Your browser does not support the audio element.
            </audio>

            <div className="mt-2 text-[11px] text-zinc-500">
              {t.keys.slice(0,1).map(k => (
                <a key={k} className="underline hover:text-zinc-300" href={urlFor(k)} target="_blank" rel="noreferrer">Open source URL</a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}'use client';

export default function MusicPage() {
  const artist = 'Quadlibét';
  const tracks = [
    { title: "Take Me I'm Yours" },
    { title: 'Made For Me (Radio)' },
    { title: 'Nothing Left to Say (Freestyle Mix)' },
    { title: "Take Me I'm Yours (Sexy Lady Freestyle Mix)" },
    { title: 'Tainted Love' }
  ];

  const linkFor = (platform, q) => {
    const term = encodeURIComponent(`${artist} ${q}`);
    switch (platform) {
      case 'spotify':
        return `https://open.spotify.com/search/${term}`;
      case 'apple':
        return `https://music.apple.com/us/search?term=${term}`;
      case 'ytm':
        return `https://music.youtube.com/search?q=${term}`;
      case 'amazon':
        return `https://music.amazon.com/search/${term}`;
      default:
        return '#';
    }
  };

  const placeholderCover =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'>
      <rect width='100%' height='100%' fill='#111'/>
      <text x='50%' y='52%' fill='#bbb' font-size='22' text-anchor='middle' font-family='sans-serif'>${artist}</text>
      <text x='50%' y='70%' fill='#666' font-size='14' text-anchor='middle' font-family='sans-serif'>Listen on your platform</text>
    </svg>`);

  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold">Music</h1>
      <p className="mt-2 text-zinc-300">
        Stream Quadlibét on your favorite platform. Tap a service below each track.
      </p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {tracks.map((t) => (
          <article key={t.title} className="rounded-2xl bg-white/5 border border-white/10 p-4 flex gap-4">
            <img
              src={placeholderCover}
              alt={`${t.title} cover`}
              width={72}
              height={72}
              className="w-18 h-18 min-w-18 min-h-18 rounded-lg object-cover border border-white/10"
            />
            <div className="flex-1">
              <h3 className="font-semibold">{t.title}</h3>
              <p className="text-xs text-zinc-400 mt-1">{artist} · Available on all major platforms</p>

              <div className="mt-3 flex flex-wrap gap-2">
                <a className="px-3 py-2 rounded-xl bg-[#1DB954]/90 hover:bg-[#1DB954] text-xs font-semibold text-white"
                   href={linkFor('spotify', t.title)} target="_blank" rel="noreferrer">Spotify</a>
                <a className="px-3 py-2 rounded-xl bg-white text-black hover:bg-zinc-200 text-xs font-semibold"
                   href={linkFor('apple', t.title)} target="_blank" rel="noreferrer">Apple Music</a>
                <a className="px-3 py-2 rounded-xl bg-red-600/90 hover:bg-red-600 text-xs font-semibold text-white"
                   href={linkFor('ytm', t.title)} target="_blank" rel="noreferrer">YouTube Music</a>
                <a className="px-3 py-2 rounded-xl bg-amber-500/90 hover:bg-amber-500 text-xs font-semibold text-black"
                   href={linkFor('amazon', t.title)} target="_blank" rel="noreferrer">Amazon Music</a>
              </div>

              <p className="mt-2 text-[11px] text-zinc-500">
                Tip: These use search links so fans can find your official releases fast.
                If you prefer direct track URLs, send them to me and I’ll wire them in.
              </p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

