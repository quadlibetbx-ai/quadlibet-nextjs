// app/listen/page.tsx
import type { ReactNode } from "react";
import styles from "./page.module.css";

export const metadata = {
  title: "Quadlibét — Listen",
  description:
    "Stream Quadlibét on Apple Music, Spotify, YouTube, Amazon Music, Tidal, and more.",
};

// Primary artist pages
const ARTISTS = {
  apple:   "https://music.apple.com/us/artist/quadlibèt/1521608593",
  spotify: "https://open.spotify.com/artist/2QumB3PuOFMtHvrWbh5DIJ?si=aeCAbTRTTAKbfReOQIQYiA",
  youtube: "https://www.youtube.com/@quadlibetmusic",
};

// Featured audio releases
type Release = { label: string; href: string; platform: "amazon" | "apple" | "spotify" | "deezer" };
const RELEASES: Release[] = [
  /* Your Amazon and Apple & Spotify & Deezer links from earlier */
  { platform: "amazon", label: "Album • B0F87MPH7R", href: "https://amazon.com/music/player/albums/B0F87MPH7R?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_Fk3eU8a1lYSOlnmlzm5OULfdb" },
  // ... (include all those you already sent)
  // Apple ones
  { platform: "apple", label: "Tainted Love — Single", href: "https://music.apple.com/us/album/tainted-love-single/1067457524" },
  // Spotify ones
  { platform: "spotify", label: "Album • 4ZqVuNF…", href: "https://open.spotify.com/album/4ZqVuNFmaFAxRbtyHXyXRv?si=ro1QfIuiScGNcgb5iilm_w" },
  // Deezer ones
  { platform: "deezer", label: "Deezer Link 1", href: "https://link.deezer.com/s/31wzr6GR8ESjSz0mD4z91" },
];

// Featured video links (YouTube)
const VIDEOS: { label: string; href: string }[] = [
  { label: "YouTube Video 1", href: "https://youtu.be/4bIUpDUwBng?si=nqB09W79_GFCUTa6" },
  { label: "YouTube Video 2", href: "https://youtu.be/9VPABCfAGrw?si=XLxyXq1R8tx1q2DD" },
  { label: "YouTube Video 3", href: "https://youtu.be/Y6QODl-UDPI?si=mCO_0_tI-XUgVQIt" },
  { label: "YouTube Video 4", href: "https://youtu.be/R3TPwlW7bY8?si=DroE36ZZgqsldDm9" },
  { label: "YouTube Video 5", href: "https://youtu.be/pyrhYg2tSrw?si=tsaF-Xeo1PGGP8k8" },
  { label: "YouTube Video 6", href: "https://youtu.be/X55uhMsxESs?si=5wfpHRUBJTE8xvB-" },
  { label: "YouTube Video 7", href: "https://youtu.be/fyJajs8t5IU?si=xBDI6GiCtspElpKm" },
  { label: "YouTube Video 8", href: "https://youtu.be/cBkUaqNyVZs?si=r9_BL3Ps0OcDxZsK" },
];

type BadgeProps = {
  href: string;
  logo: ReactNode;
  label: string;
  subtle?: boolean;
};

function Badge({ href, logo, label, subtle }: BadgeProps) {
  return (
    <a
      className={`${styles.badge} ${subtle ? styles.subtle : ""}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
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
        <p className={styles.tag}>Choose a platform, explore releases or watch videos.</p>
      </header>

      {/* Artist pages */}
      <section className={styles.grid}>
        <Badge href={ARTISTS.apple} label="Apple Music – Artist" logo={<Apple />} />
        <Badge href={ARTISTS.spotify} label="Spotify – Artist" logo={<Spotify />} />
        <Badge href={ARTISTS.youtube} label="YouTube – Artist" logo={<YouTube />} subtle />
      </section>

      {/* Featured releases */}
      <h2 className={styles.title} style={{ marginTop: "2rem", fontSize: "1.6rem" }}>Featured Releases</h2>
      <section className={styles.grid}>
        {RELEASES.map((r, i) => (
          <Badge key={i} href={r.href} label={`${logoLabel(r.platform)} ${r.label}`} logo={logoFor(r.platform)} subtle />
        ))}
      </section>

      {/* Featured videos */}
      <h2 className={styles.title} style={{ marginTop: "2rem", fontSize: "1.6rem" }}>Featured Videos</h2>
      <section className={styles.grid}>
        {VIDEOS.map((v, i) => (
          <Badge key={i} href={v.href} label={v.label} logo={<YouTube />} subtle />
        ))}
      </section>

      <footer className={styles.footer}>© {new Date().getFullYear()} Quadlibét</footer>
    </main>
  );
}

/* Inline SVG icons unchanged */
function Apple(){ /* … */ }
function Spotify(){ /* … */ }
function YouTube(){ /* … */ }
function Amazon(){ /* … */ }
function Deezer(){ /* … */ }
