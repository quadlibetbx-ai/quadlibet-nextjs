'use client';
export default function SubscribePage() {
  const onSubmit = (e) => { e.preventDefault(); e.target.reset(); alert('Thanks for subscribing!'); };
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl md:text-4xl font-extrabold">Get updates from Quadlibét</h1>
      <p className="mt-2 text-zinc-300">New releases, shows, and exclusive content straight to your inbox.</p>
      <form onSubmit={onSubmit} className="mt-6 mx-auto max-w-xl flex flex-col sm:flex-row gap-3">
        <input type="email" placeholder="Your email address" required className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#0096FF] placeholder:text-zinc-400" />
        <button className="px-6 py-3 rounded-xl bg-[#0096FF] hover:bg-[#0c82d8] font-semibold">Subscribe</button>
      </form>
    </main>
  );
}
