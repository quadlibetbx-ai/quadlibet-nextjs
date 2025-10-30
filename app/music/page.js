export default function MusicPage() {
  const BASE = "https://quadlibet-media.s3.amazonaws.com";

  // Selected tracks
  const tracks = [
    { title: "Take Me I'm Yours", key: "quadlibetmusic.com/Music/Take Me I'm Yours (Sexy Lady 2022 Remix).mp3" },
    { title: "Made For Me (Radio)", key: "quadlibetmusic.com/Music/Made For Me.mp3" },
    { title: "Nothing Left to Say (Freestyle Mix)", key: "quadlibetmusic.com/Music/Nothing Left to Say (Freestyle Mix).mp3" },
    { title: "Take Me I'm Yours (Sexy Lady Freestyle Mix)", key: "quadlibetmusic.com/Music/Take Me I'm Yours (Sexy Lady_Latin Freestyle Club Mix).mp3" },
    { title: "Tainted Love", key: "PUT/CORRECT/KEY/HERE.mp3" }
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold">Music</h1>
      <p className="mt-2 text-zinc-300">Quadlibét · Freestyle Energy, Bronx Legacy.</p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {tracks.map((t) => {
          const url = `${BASE}/${encodeURI(t.key)}`;
          return (
            <article key={t.key} className="rounded-2xl bg-white/5 border border-white/10 p-4">
              <h3 className="font-semibold">{t.title}</h3>
              <p className="text-xs text-zinc-400 mt-1">Quadlibét · Audio</p>
              <audio className="mt-3 w-full" controls preload="none" src={url} />
            </article>
          );
        })}
      </div>
    </main>
  );
}
