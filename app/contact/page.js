export default function ContactPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold">Contact</h1>
      <p className="mt-2 text-zinc-300">For booking, press, or collaboration inquiries.</p>
      <form className="mt-8 max-w-2xl grid grid-cols-1 gap-4">
        <input className="px-4 py-3 rounded-xl bg-white/10 border border-white/10" type="text" placeholder="Your name" />
        <input className="px-4 py-3 rounded-xl bg-white/10 border border-white/10" type="email" placeholder="Your email" />
        <textarea className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 min-h-[140px]" placeholder="Your message" />
        <button className="px-6 py-3 rounded-xl bg-[#0096FF] hover:bg-[#0c82d8] font-semibold w-max">Send</button>
      </form>
      <p className="mt-6 text-sm text-zinc-400">Or email <a className="underline" href="mailto:info@quadlibetmusic.com">info@quadlibetmusic.com</a></p>
    </main>
  );
}
