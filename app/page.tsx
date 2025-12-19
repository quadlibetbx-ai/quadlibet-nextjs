export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
  <div
    className="h-full w-full bg-[url('/images/home/home-1.jpg')] bg-cover bg-[position:75%_50%] opacity-35"
    style={{ filter: "brightness(0.85) contrast(1.05)" }}
    />
  <div className="<div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-black/15" />
</div>
        <div className="max-w-6xl mx-auto px-4 py-28 md:py-36">
  <div className="max-w-xl pt-10 md:pt-14">
          <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-zinc-300">Born in the Bronx · Built on rhythm</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-[1.05]">Freestyle. Passion. Legacy.<br className="hidden md:block"/> This is <span className="gradient-text">Quadlibét</span>.</h1>
          <p className="mt-5 text-zinc-300 max-w-2xl">Bronx-born Freestyle energy, reimagined for today. New music, classic spirit, and a legacy that keeps the dance floor alive.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="/music" className="px-5 py-3 rounded-2xl bg-[#0096FF] hover:bg-[#0c82d8] font-semibold shadow-lg shadow-blue-500/20">Listen Now</a>
            <a href="/video" className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/15 font-semibold">Watch Video</a>
          </div>
        </div>
      </div>
      
      </section>
      {/* About Snippet */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold">About Quadlibét</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4 text-zinc-300 leading-relaxed">
            <p>
              Born in the Bronx in 1985, <strong>Quadlibét</strong> emerged from the heart of the Freestyle movement. Founded by cousins <strong>Roger</strong> and <strong>Darryl Alexander</strong>, the group first lit up the scene with an early demo of <em>“Take Me I’m Yours”</em> produced by <strong>Ancil Cox</strong>.
            </p>
            <p>
              Today, <strong>Roger Alexander</strong>, <strong>Moses Lopez</strong>, and <strong>Bruce Ortiz</strong> remain the heart of Quadlibét.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="/about" className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15">Read full bio</a>
              <a href="/press" className="px-4 py-2 rounded-xl bg-[#0096FF] hover:bg-[#0c82d8] font-semibold">Press kit</a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <img
  alt="Quadlibét promo"
  className="w-full h-full object-cover brightness-90 contrast-95"
  src="/images/home/home-2.jpg"
/>
          </div>
        </div>
      </section>
    </main>
  );
}
