export const metadata = {
  title: "Quadlibét — Press Kit",
  description: "Download the Quadlibét press kit and one-sheet.",
};

export default function PressPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold">Press Kit</h1>
      <p className="mt-3 text-zinc-300">
        Download the official Quadlibét press materials.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <a
          href="/press/Quadlibet-Press-Kit.pdf"
          className="block rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10"
          target="_blank"
          rel="noreferrer"
        >
          <div className="text-lg font-semibold">Full Press Kit (PDF)</div>
          <div className="mt-1 text-sm text-zinc-300">
            Artist bio, highlights, and media-ready info.
          </div>
        </a>

        <a
          href="/press/Quadlibet-One-Sheet.pdf"
          className="block rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10"
          target="_blank"
          rel="noreferrer"
        >
          <div className="text-lg font-semibold">One-Sheet (PDF)</div>
          <div className="mt-1 text-sm text-zinc-300">
            Quick overview for promoters and venues.
          </div>
        </a>
      </div>

      <p className="mt-10 text-sm text-zinc-400">
        Contact:{" "}
        <a className="underline" href="mailto:quadlibetmusic@gmail.com">
          quadlibetmusic@gmail.com
        </a>
      </p>
    </main>
  );
}
