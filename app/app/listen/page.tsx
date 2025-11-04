// app/listen/page.tsx
import styles from "./page.module.css";

export const metadata = {
  title: "Quadlibét — Listen",
  description:
    "Stream Quadlibét on Apple Music, Spotify, YouTube, Amazon Music, Tidal, and more.",
  openGraph: {
    title: "Quadlibét — Listen",
    description:
      "Stream Quadlibét on Apple Music, Spotify, YouTube, Amazon Music, Tidal, and more.",
    url: "https://quadlibetmusic.com/listen",
    siteName: "Quadlibét",
  },
};

const LINKS = {
  apple:   "https://music.apple.com/artist/quadlibet",        // TODO: replace
  spotify: "https://open.spotify.com/artist/...",             // TODO: replace
  youtube: "https://www.youtube.com/@quadlibetmusic",         // TODO: replace
  amazon:  "https://music.amazon.com/artists/...",            // TODO: replace
  tidal:   "https://listen.tidal.com/artist/...",             // TODO: replace
  deezer:  "https://www.deezer.com/artist/...",               // TODO: replace
  soundcloud: "https://soundcloud.com/quadlibet",             // optional
  bandcamp:   "https://quadlibet.bandcamp.com/",              // optional
};

function Badge({
  href, logo, label, subtle,
}: {
  href: string; logo: React.ReactNode; label: string; subtle?: boolean;
}) {
  return (
    <a className={`${styles.badge} ${subtle ? styles.subtle : ""}`}
       href={href} target="_blank" rel="noopener noreferrer">
      <span className={styles.logo}>{logo}</span>
      <span className={styles.label}>{label}</span>
    </a>
  );
}

export default function Listen() {
  return (
    <main className={styles.wrap}>
      <header className={styles.header}>
        <h1 className={styles.title}>Listen to Quadlibét</h1>
        <p className={styles.tag}>Choose your platform.</p>
      </header>

      <section className={styles.grid}>
        <Badge href={LINKS.apple} label="Listen on Apple Music" logo={<Apple />} />
        <Badge href={LINKS.spotify} label="Play on Spotify" logo={<Spotify />} />
        <Badge href={LINKS.youtube} label="Watch on YouTube" logo={<YouTube />} />
        <Badge href={LINKS.amazon} label="Play on Amazon Music" logo={<Amazon />} subtle />
        <Badge href={LINKS.tidal} label="Play on TIDAL" logo={<Tidal />} subtle />
        <Badge href={LINKS.deezer} label="Play on Deezer" logo={<Deezer />} subtle />
        <Badge href={LINKS.soundcloud} label="Listen on SoundCloud" logo={<SoundCloud />} subtle />
        <Badge href={LINKS.bandcamp} label="Buy on Bandcamp" logo={<Bandcamp />} subtle />
      </section>

      <footer className={styles.footer}>© {new Date().getFullYear()} Quadlibét</footer>
    </main>
  );
}

/* ——— Simple inline SVG logos ——— */
function Apple() { return (<svg viewBox="0 0 24 24"><path fill="currentColor" d="M16.37 1.43c.02 1.02-.38 1.98-1.08 2.71-.7.73-1.83 1.27-2.87 1.19-.12-1.02.4-2.07 1.08-2.79.73-.78 1.95-1.34 2.87-1.11zM20.7 17.09c-.56 1.28-.84 1.86-1.56 3-1 1.55-2.39 3.48-4.13 3.5-1.53.03-1.94-1-4.04-.98-2.1.01-2.55 1.01-4.09.99-1.74-.02-3.07-1.78-4.07-3.31C.75 17.79-.31 13.55 1.7 10.9c1.11-1.5 2.87-2.46 4.87-2.5 1.9-.05 3.62 1.04 4.06 1.04.42 0 2.8-1.28 4.74-1.09.8.03 3.05.32 4.49 2.44-3.95 2.16-3.31 7.33.9 6.3z"/></svg>); }
function Spotify() { return (<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 1.5A10.5 10.5 0 1 0 22.5 12 10.5 10.5 0 0 0 12 1.5zm5.21 15.14c-.19.31-.6.41-.9.22-2.47-1.51-5.58-1.85-9.24-1.01a.75.75 0 1 1-.3-1.47c3.99-.9 7.4-.5 10.12 1.16.3.18.4.58.22.9zm1.26-2.82c-.24.39-.75.52-1.14.28-2.85-1.74-7.2-2.25-10.58-1.23a.75.75 0 1 1-.47-1.44c3.87-1.16 8.65-.6 11.87 1.35.39.24.52.74.32 1.18zm.11-3.05c-3.37-2-9.02-2.19-12.24-1.19a.75.75 0 0 1-.45-1.43c3.69-1.12 9.94-.9 13.74 1.33a.9.9 0 1 1-.93 1.55z"/></svg>); }
function YouTube() { return (<svg viewBox="0 0 24 24"><path fill="currentColor" d="M23.5 7.2s-.23-1.63-.94-2.34c-.9-.94-1.9-.94-2.36-.99C16.7 3.5 12 3.5 12 3.5s-4.7 0-8.2.37c-.46.05-1.46.05-2.36.99C.73 5.57.5 7.2.5 7.2S.25 9.1.25 11v1.99c0 1.9.25 3.8.25 3.8s.23 1.63.94 2.34c.9.94 2.08.91 2.61 1.01 1.9.18 8 .36 8 .36s4.7-.01 8.2-.37c.46-.05 1.46-.05 2.36-.99.71-.71.94-2.34.94-2.34s.25-1.9.25-3.8V11c0-1.9-.25-3.8-.25-3.8zM9.75 14.9V8.6l6.01 3.16-6.01 3.14z"/></svg>); }
function Amazon() { return (<svg viewBox="0 0 24 24"><path fill="currentColor" d="M20.29 18.22c-2.97 1.7-6.92 2.39-10.46 1.5-3.13-.79-5.99-2.86-7.12-4.5-.26-.37.11-.82.51-.63 3.04 1.43 7.8 3.07 13.95 2.12.5-.08.8.53.34.86l-.22.15zM10.5 9.1c.33-2.02 2.04-3.1 3.76-3.1 1.83 0 3.51 1.16 3.51 3.36v5.95c0 .5-.4.9-.9.9h-1.1a.9.9 0 0 1-.9-.9V10.7c0-.98-.63-1.6-1.5-1.6-.85 0-1.56.66-1.75 1.5V15.3c0 .5-.4.9-.9.9h-1.1a.9.9 0 0 1-.9-.9V6.49c0-.5.4-.9.9-.9h1.1c.5 0 .9.4.9.9v2.6z"/></svg>); }
function Tidal() { return (<svg viewBox="0 0 24 24"><path fill="currentColor" d="M6 6l6 6-3 3-6-6zm12 0l-3 3 3 3 3-3zM9 15l3 3 3-3-3-3z"/></svg>); }
function Deezer() { return (<svg viewBox="0 0 24 24"><path fill="currentColor" d="M2 15h3v3H2zm4-2h3v5H6zm4-4h3v9h-3zm4-3h3v12h-3zm4-3h3v15h-3z"/></svg>); }
function SoundCloud() { return (<svg viewBox="0 0 24 24"><path fill="currentColor" d="M18.5 10.5A3.5 3.5 0 1 1 22 14H8a3 3 0 1 1 0-6c.4 0 .8.07 1.16.2A4.5 4.5 0 0 1 18.5 10.5z"/></svg>); }
function Bandcamp() { return (<svg viewBox="0 0 24 24"><path fill="currentColor" d="M3 7h10l8 10H11z"/></svg>); }
