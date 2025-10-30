export default function MusicPage() {
  const BASE = "https://quadlibet-media.s3.amazonaws.com";
  const urlFor = (key) => `${BASE}/${key.split('/').map(encodeURIComponent).join('/')}?v=${Date.now()}`;

  const tracks = [
    // 1) Display stays "Take Me I'm Yours" but source is the BONUS track from Mood Swings
    { title: "Take Me I'm Yours", key: "quadlibetmusic.com/Music/Mood Swings/17. Bonus Track.mp3" },

    // 2) Made For Me (Radio)
    { title: "Made For Me (Radio)", key: "quadlibetmusic.com/Music/Made For Me.mp3" },

    // 3) Nothing Left to Say (Freestyle Mix)
    { title: "Nothing Left to Say (Freestyle Mix)", key: "quadlibetmusic.com/Music/Nothing Left to Say (Freestyle Mix).mp3" },

    // 4) Take Me I'm Yours (Sexy Lady Freestyle Mix)
    { title: "Take Me I'm Yours (Sexy Lady Freestyle Mix)", key: "quadlibetmusic.com/Music/Take Me I'm Yours (Sexy Lady_Latin Freestyle Club Mix).mp3" },

    // 5) Tainted Love (original, not Flipzide Remix)
    { title: "Tainted Love", key: "quadlibetmusic.com/Music/Mood Swings/3. Tainted Love.mp3" }
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
            <audio className="mt-3 w-full" controls preload="none" src={urlFor(t.key)} />
          </article>
        ))}
      </div>
    </main>
  );
}
