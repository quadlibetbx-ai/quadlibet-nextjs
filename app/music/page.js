export default function MusicPage() {
  const BASE = "https://quadlibet-media.s3.amazonaws.com";
  const placeholderCover =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'>
    <rect width='100%' height='100%' fill='#111'/>
    <text x='50%' y='52%' fill='#bbb' font-size='22' text-anchor='middle' font-family='sans-serif'>Quadlibét</text>
    <text x='50%' y='70%' fill='#666' font-size='14' text-anchor='middle' font-family='sans-serif'>Music</text>
  </svg>`);

  const urlFor = (key) => `${BASE}/${key.split('/').map(encodeURIComponent).join('/')}?v=${Date.now()}`;

  const tracks = [
    { title: "Take Me I'm Yours", key: "quadlibetmusic.com/Music/Mood Swings/17. Take Me.mp3", cover: null },
    { title: "Made For Me (Radio)", key: "quadlibetmusic.com/Music/Made For Me.mp3", cover: null },
    { title: "Nothing Left to Say (Freestyle Mix)", key: "quadlibetmusic.com/Music/Nothing Left to Say (Freestyle Mix).mp3", cover: null },
    { title: "Take Me I'm Yours (Sexy Lady Freestyle Mix)", key: "quadlibetmusic.com/Music/Take Me I'm Yours (Sexy Lady_Latin Freestyle Club Mix).mp3", cover: null },
    { title: "Tainted Love", key: "PUT/CORRECT/ORIGINAL/TAINTED/KEY.mp3", cover: null }
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold">Music</h1>
      <p className="mt-2 text-zinc-300">Quadlibét · Freestyle Energy, Bronx Legacy.</p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {tracks.map((t) => {
          const audioUrl = urlFor(t.key);
          const cover = t.cover || placeholderCover;
          return (
            <article key={t.title} className="rounded-2xl bg-white/5 border border-white/10 p-4 flex gap-4">
              <img
                src={cover}
                alt={`${t.title} cover`}
                width={72}
                height={72}
                className="w-18 h-18 min-w-18 min-h-18 rounded-lg object-cover border border-white/10"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{t.title}</h3>
                <p className="text-xs text-zinc-400 mt-1">Quadlibét · Audio</p>
                <audio className="mt-3 w-full" controls preload="none" src={audioUrl} />
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}
'use client';

export default function MusicPage() {
  // Pause every other media element when one starts
  const handlePlay = (e) => {
    document.querySelectorAll('audio').forEach(a => { if (a !== e.currentTarget) a.pause(); });
    document.querySelectorAll('video').forEach(v => v.pause());
  };

  // ... your existing const BASE / urlFor / tracks ...

  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      {/* ... */}
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {tracks.map((t) => {
          const audioUrl = /* your existing URL logic */;
          return (
            <article key={t.title} className="rounded-2xl bg-white/5 border border-white/10 p-4 flex gap-4">
              {/* ... cover/title ... */}
              <audio
                className="mt-3 w-full"
                controls
                preload="none"
                src={audioUrl}
                onPlay={handlePlay}        {/* <-- add this */}
              />
            </article>
          );
        })}
      </div>
    </main>
  );
}

