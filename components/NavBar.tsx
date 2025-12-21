import Link from "next/link";
import BackgroundMusicToggle from "./BackgroundMusicToggle";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-3" aria-label="Go to homepage">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-zinc-200 to-zinc-500 flex items-center justify-center text-black font-black">
            QB
          </div>
          <span className="text-xl tracking-wide font-extrabold">QUADLIBÉT</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="/listen" className="hover:text-zinc-300">Listen</a>
          <a href="/video" className="hover:text-zinc-300">Video</a>
          <a href="/photos" className="hover:text-zinc-300">Photos</a>
          <a href="/about" className="hover:text-zinc-300">About</a>
          <a href="/contact" className="hover:text-zinc-300">Contact</a>
          <a href="/press" className="hover:text-zinc-300">Press</a>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <BackgroundMusicToggle compact />

          <a
            href="/subscribe"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl bg-[#0096FF] hover:bg-[#0c82d8] text-white text-sm font-semibold shadow-lg shadow-blue-500/20"
          >
            Subscribe
          </a>
        </div>
      </div>
    </header>
  );
}
