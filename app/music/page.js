export default function MusicPage() {
  const BASE = "https://quadlibet-media.s3.amazonaws.com";
  const tracks = [
    { title: "Guess It's Time (Club Edit)", key: "quadlibetmusic.com/Music/Guess It's Time (Club Edit).mp3" },
    { title: "Home for Christmas (Artie Rodriguez Mix)", key: "quadlibetmusic.com/Music/Home for Christmas (Artie Rodriguez Mix).mp3" },
    { title: "Home for Christmas (Artistik Family feat. William Valentin, Synthia Figueroa, Lilly Rose, Brittney Alexander and Quadlibét)", key: "quadlibetmusic.com/Music/Home for Christmas (Artistik Family feat. William Valentin, Synthia Figueroa, Lilly Rose, Brittney Alexander and Quadlibet).mp3" },
    { title: "Made For Me (JW CLUB MIX)", key: "quadlibetmusic.com/Music/Made For Me (JW CLUB MIX).mp3" },
    { title: "Made For Me", key: "quadlibetmusic.com/Music/Made For Me.mp3" }
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold">Music</h1>
      <p className="mt-2 text-zinc-300">Latest singles and classics from Quadlibét.</p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {tracks.map((t) => {
          const url = `${BASE}/${encodeURI(t.key)}`;
          return (
            <article key={t.key} className="rounded-2xl bg-white/5 border border-white/10 p-4">
              <h3 className="font-semibold">{t.title}</h3>
              <p className="text-xs text-zinc-400 mt-1">Quadlibét · Audio</p>
              <audio className="mt-3 w-full" controls preload="none" src={url} />
              <div className="mt-2 text-xs">
                <a className="underline text-zinc-300 hover:text-white" href={url} download>Download</a>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}
