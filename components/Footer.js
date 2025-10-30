export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-zinc-200 to-zinc-500 flex items-center justify-center text-black font-black">QB</div>
            <span className="text-lg font-extrabold tracking-wide">QUADLIBÉT</span>
          </div>
          <p className="mt-3 text-sm text-zinc-400 max-w-md">The heartbeat of Bronx Freestyle. Booking, press, and collaborations welcome.</p>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            <li><a href="mailto:info@quadlibetmusic.com" className="hover:text-white">info@quadlibetmusic.com</a></li>
            <li><a href="#" className="hover:text-white">Instagram</a></li>
            <li><a href="#" className="hover:text-white">YouTube</a></li>
            <li><a href="#" className="hover:text-white">Spotify</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            <li><a href="/music" className="hover:text-white">Music</a></li>
            <li><a href="/video" className="hover:text-white">Video</a></li>
            <li><a href="/photos" className="hover:text-white">Photos</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
          </ul>
        </div>
      </div>
      <div className="text-xs text-zinc-500 text-center pb-8">© {new Date().getFullYear()} Quadlibét. All rights reserved.</div>
    </footer>
  );
}
