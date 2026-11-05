
export const metadata = {
  title: "My Love Is True | Quadlibét",
  description:
    "My Love Is True — the new four-track release from Quadlibét featuring Roger. Presale November 6, 2026.",
};

const tracks = [
  "My Love Is True (Radio)",
  "My Love Is True (Club Mix)",
  "My Love Is True (Bonus Beats)",
  "Guess Its Time (Club Edit_Bonus Track)",
];

export default function MyLoveIsTruePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070510] text-white">
      {/* Neon background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-[130px]" />
        <div className="absolute -right-40 top-80 h-96 w-96 rounded-full bg-cyan-500/20 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(236,72,153,0.07),transparent_40%,rgba(34,211,238,0.07))]" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <a
            href="/"
            className="text-xl font-black tracking-[0.25em] text-white"
          >
            QUADLIBÉT
          </a>
          <span className="text-xs font-semibold tracking-[0.25em] text-cyan-300">
            NEW RELEASE
          </span>
        </div>
      </header>

      {/* Main release section */}
      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">

        {/* Cover artwork */}
        <div className="mx-auto w-full max-w-xl">
          <div className="rounded-2xl border border-fuchsia-400/30 bg-fuchsia-500/10 p-2 shadow-[0_0_60px_rgba(217,70,239,0.20)]">
            <img
              src="/images/releases/my-love-is-true-cover.png"
              alt="My Love Is True — Quadlibét featuring Roger"
              className="aspect-square w-full rounded-xl object-cover"
            />
          </div>
          <p className="mt-5 text-center text-xs font-semibold tracking-[0.35em] text-zinc-400">
            QUADLIBÉT FEATURING ROGER
          </p>
        </div>

        {/* Release information */}
        <div className="text-center md:text-left">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.4em] text-cyan-300">
            A New Freestyle Experience
          </p>

          <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
            MY LOVE
            <span className="block bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
              IS TRUE
            </span>
          </h1>

          <p className="mt-6 text-lg text-zinc-300">
            Quadlibét featuring Roger
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-fuchsia-400/40 bg-fuchsia-500/10 p-5">
              <p className="text-xs font-bold tracking-[0.2em] text-fuchsia-300">
                PRESALE
              </p>
              <p className="mt-2 text-2xl font-black">NOVEMBER 6</p>
              <p className="mt-1 text-sm text-zinc-400">2026</p>
            </div>

            <div className="rounded-xl border border-cyan-400/40 bg-cyan-500/10 p-5">
              <p className="text-xs font-bold tracking-[0.2em] text-cyan-300">
                OFFICIAL RELEASE
              </p>
              <p className="mt-2 text-2xl font-black">NOVEMBER 20</p>
              <p className="mt-1 text-sm text-zinc-400">2026</p>
            </div>
          </div>

       <div className="mt-10">
  <a
    href="https://payhip.com/b/gmDHc"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block w-full rounded-full border border-fuchsia-400/50 bg-gradient-to-r from-fuchsia-600 to-cyan-500 px-8 py-4 text-center font-bold tracking-[0.15em] text-white shadow-lg transition hover:scale-105 hover:shadow-fuchsia-500/30 sm:w-auto"
  >
    PRE-ORDER NOW — $4.99
  </a>
  <p className="mt-3 text-xs text-zinc-400">
    Reserve your copy today. Downloads available November 20, 2026.
  </p>
</div>
        </div>
      </section>

      {/* Track listing */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-24">
        <div className="mb-8 text-center">
          <p className="text-sm font-bold tracking-[0.35em] text-fuchsia-300">
            THE COLLECTION
          </p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            FOUR TRACKS. ONE LOVE.
          </h2>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
          {tracks.map((track, index) => (
            <div
              key={track}
              className="flex items-center gap-5 border-b border-white/10 px-6 py-6 last:border-b-0"
            >
              <span className="text-xl font-black text-fuchsia-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-semibold text-zinc-100">
                {track}
              </span>
              <span className="ml-auto text-xs tracking-widest text-cyan-400">
                QB
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 px-6 py-10 text-center">
        <p className="text-lg font-black tracking-[0.3em]">
          QUADLIBÉT
        </p>
        <p className="mt-3 text-sm text-zinc-500">
          Freestyle · Dance · Electronic
        </p>
        <p className="mt-5 text-xs text-zinc-600">
          © 2026 Quadlibét. All rights reserved.
        </p>
        <a
          href="/"
          className="mt-5 inline-block text-sm text-cyan-300 hover:text-fuchsia-300"
        >
          Return to Home
        </a>
      </footer>
    </main>
  );
}
