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
}
