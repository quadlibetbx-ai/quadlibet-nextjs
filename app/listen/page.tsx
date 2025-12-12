// app/listen/page.tsx
import type { ReactNode } from "react";
import styles from "./page.module.css";

export const metadata = {
  title: "Quadlibét — Listen",
  description:
    "Stream Quadlibét on Apple Music, Spotify, YouTube, Amazon Music, Tidal, and more.",
};

/* ------------ Artist pages (top buttons) ------------ */
const ARTISTS = {
  apple:   "https://music.apple.com/us/artist/quadlibèt/1521608593",
  spotify: "https://open.spotify.com/artist/2QumB3PuOFMtHvrWbh5DIJ?si=aeCAbTRTTAKbfReOQIQYiA",
  youtube: "https://www.youtube.com/@quadlibetmusic",
};

/* ------------ Featured Singles (Apple titles) ------------ */
/* We’ll keep this small & curated for a polished hero row */
const FEATURED = [
  {
    title: "Made for Me — Single",
    apple: "https://music.apple.com/us/album/made-for-me-single/1774374018",
  },
  {
    title: "Nothing Left to Say — Single",
    apple: "https://music.apple.com/us/album/nothing-left-to-say-single/1813530189",
  },
  {
    title: "Set Me Free — Single",
    apple: "https://music.apple.com/us/album/set-me-free-single/1364295167",
  },
  {
    title: "Take Me I’m Yours (2022 Remix) — Single",
    apple: "https://music.apple.com/us/album/take-me-im-yours-sexy-lady-2022-remix-single/1648940177",
  },
  {
    title: "Tainted Love — Single",
    apple: "https://music.apple.com/us/album/tainted-love-single/1067457524",
  },
  {
    title: "Mood Swings",
    apple: "https://music.apple.com/us/album/mood-swings/1408256856",
  },
];

/* ------------ Full link lists you already provided (unchanged) ------------ */
type Release = { label: string; href: string; platform: "amazon" | "apple" | "spotify" | "deezer" };

const RELEASES: Release[] = [
  // Amazon Music
  { platform: "amazon", label: "Album • B0F87MPH7R", href: "https://amazon.com/music/player/albums/B0F87MPH7R?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_Fk3eU8a1lYSOlnmlzm5OULfdb" },
  { platform: "amazon", label: "Album • B07F9MLL2T", href: "https://amazon.com/music/player/albums/B07F9MLL2T?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_alwHoo9b79oWdNhz8iGBaXZrl" },
  { platform: "amazon", label: "Album • B0DK6HL4J4", href: "https://amazon.com/music/player/albums/B0DK6HL4J4?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_ot8VCbHrGU0BZEac14AbYLASZ" },
  { platform: "amazon", label: "Album • B01AR13DLO", href: "https://amazon.com/music/player/albums/B01AR13DLO?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_qVP8NK6cjSRYFvp7XwDsmfeMz&trackAsin=B01AR13E4A" },
  { platform: "amazon", label: "Album • B08CHGPW4H", href: "https://amazon.com/music/player/albums/B08CHGPW4H?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_4ag2gLSwYEHuoko0G5mCIZsN7" },
  { platform: "amazon", label: "Album • B08RSPZR4Y", href: "https://amazon.com/music/player/albums/B08RSPZR4Y?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_H5nMATLzcA3cvs3IENCBQc0v6" },
  { platform: "amazon", label: "Album • B0BHLSW3WK", href: "https://amazon.com/music/player/albums/B0BHLSW3WK?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_EDuZeBx0scC3Dd88ppxEmXQjh" },
  { platform: "amazon", label: "Album • B01N5EKDS3", href: "https://amazon.com/music/player/albums/B01N5EKDS3?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_PlgS8VfUeV2tHThLqKwxVleW8" },

  // Apple Music (kept as-is)
  { platform: "apple", label: "Tainted Love — Single", href: "https://music.apple.com/us/album/tainted-love-single/1067457524" },
  { platform: "apple", label: "Mood Swings", href: "https://music.apple.com/us/album/mood-swings/1408256856" },
  { platform: "apple", label: "Home for Christmas (feat. Willie Valentin & Synthia Figueroa)", href: "https://music.apple.com/us/album/home-for-christmas-feat-willie-valentin-synthia-figueroa/1184885974" },
  { platform: "apple", label: "Home for Christmas (feat. Brittney) — Single", href: "https://music.apple.com/us/album/home-for-christmas-feat-brittney-single/1547021153" },
  { platform: "apple", label: "Made for Me — Single", href: "https://music.apple.com/us/album/made-for-me-single/1774374018" },
  { platform: "apple", label: "Nothing Left to Say — Single", href: "https://music.apple.com/us/album/nothing-left-to-say-single/1813530189" },
  { platform: "apple", label: "Set Me Free — Single", href: "https://music.apple.com/us/album/set-me-free-single/1364295167" },
  { platform: "apple", label: "Take Me I’m Yours — Song", href: "https://music.apple.com/us/song/take-me-im-yours/270944197" },
  { platform: "apple", label: "You Don’t Know the Pain — Song", href: "https://music.apple.com/us/song/you-dont-know-the-pain/526304781" },

  // Spotify
  { platform: "spotify", label: "Album • 4ZqVuNF…", href: "https://open.spotify.com/album/4ZqVuNFmaFAxRbtyHXyXRv?si=ro1QfIuiScGNcgb5iilm_w" },
  { platform: "spotify", label: "Album • 2SZ0G9…", href: "https://open.spotify.com/album/2SZ0G9oe09tedqCT5Fpjt8?si=fV_apwAkTgmTn0KAcZX-Iw" },
  { platform: "spotify", label: "Album • 6x9n39…", href: "https://open.spotify.com/album/6x9n39awNyrvL6pDCCbpUv?si=qsaxC2NQSnO6lWJTUmv-MQ" },
  { platform: "spotify", label: "Album • 0U5wha…", href: "https://open.spotify.com/album/0U5whadEjWNVFrd9cY16Hr?si=T9qtvcf8ThSL5CtWKZQrHQ" },
  { platform: "spotify", label: "Album • 6290DV…", href: "https://open.spotify.com/album/6290DVe71mpBxzMB2rYP3J?si=vGg34qkHRiS7_qP2W0YwCg" },
  { platform: "spotify", label: "Album • 5wBOuO…", href: "https://open.spotify.com/album/5wBOuOS6GR0XXT4yo42p8d?si=qclHVbZvQCeXDXJq5Mew6Q" },
  { platform: "spotify", label: "Album • 4F0Qvf…", href: "https://open.spotify.com/album/4F0Qvf8MgzyehfkrUEctJ8?si=kbfaBdyPQ5GHpZrQgGjQ8w" },
  { platform: "spotify", label: "Album • 5wBOuO…", href: "https://open.spotify.com/album/5wBOuOS6GR0XXT4yo42p8d?si=mS5zJDS8Qp6RnH0d3JOnXA" },

  // Deezer
  { platform: "deezer", label: "Deezer Link 1", href: "https://link.deezer.com/s/31wzr6GR8ESjSz0mD4z91" },
  { platform: "deezer", label: "Deezer Link 2", href: "https://link.deezer.com/s/31wzssOUUhZDIhTzJv6uC" },
  { platform: "deezer", label: "Deezer Link 3", href: "https://link.deezer.com/s/31wzsWA1jAWuMfaQk2rmz" },
  { platform: "deezer", label: "Deezer Link 4", href: "https://link.deezer.com/s/31wztrVM8GdbFccAKavJz" },
  { platform: "deezer", label: "Deezer Link 5", href: "https://link.deezer.com/s/31wztLpsfZ3yjwo3InQIy" },
  { platform: "deezer", label: "Deezer Link 6", href: "https://link.deezer.com/s/31wzub6niPNZqdIEkS5os" },
];

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

/* ------------ Small badge button ---------- */
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
      title={label}
    >
      <span className={styles.logo}>{logo}</span>
      <span className={styles.label}>{label}</span>
    </a>
  );
}

/* ------------ Helpers for the big “More releases” grid ---------- */
function logoLabel(p: Release["platform"]): string {
  switch (p) {
    case "amazon":  return "Amazon •";
    case "apple":   return "Apple •";
    case "spotify": return "Spotify •";
    case "deezer":  return "Deezer •";
    default:        return "";
  }
}
function logoFor(p: Release["platform"]) {
  switch (p) {
    case "amazon":  return <Amazon />;
    case "apple":   return <Apple />;
    case "spotify": return <Spotify />;
    case "deezer":  return <Deezer />;
    default:        return <Apple />;
  }
}

/* ------------ Page ------------ */
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

      {/* Featured Singles (Apple titles for consistency) */}
      <h2 className={styles.title} style={{ marginTop: "28px", fontSize: "1.6rem" }}>
        Featured Singles
      </h2>
      <section className={styles.grid}>
        {FEATURED.map((f) => (
          <Badge key={f.title} href={f.apple} label={f.title} logo={<Apple />} />
        ))}
      </section>

      {/* Keep everything else but tuck it under a clean toggle */}
      <details style={{ marginTop: "28px" }} open>
        <summary className={styles.title} style={{ cursor: "pointer", fontSize: "1.3rem" }}>
          More releases
        </summary>
        <section className={styles.grid} style={{ marginTop: "12px" }}>
          {RELEASES.map((r, i) => (
            <Badge
              key={i}
              href={r.href}
              label={`${logoLabel(r.platform)} ${r.label}`}
              logo={logoFor(r.platform)}
              subtle
            />
          ))}
        </section>
      </details>

      {/* Videos */}
      <h2 className={styles.title} style={{ marginTop: "28px", fontSize: "1.6rem" }}>
        Featured Videos
      </h2>
      <section className={styles.grid}>
        {VIDEOS.map((v) => (
          <Badge key={v.href} href={v.href} label={v.label} logo={<YouTube />} subtle />
        ))}
      </section>

      <footer className={styles.footer}>© {new Date().getFullYear()} Quadlibét</footer>
    </main>
  );
}

/* ---------- Inline SVG icons (no explicit return types) ---------- */
function Apple() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M16.37 1.43c.02 1.02-.38 1.98-1.08 2.71-.7.73-1.83 1.27-2.87 1.19-.12-1.02.4-2.07 1.08-2.79.73-.78 1.95-1.34 2.87-1.11zM20.7 17.09c-.56 1.28-.84 1.86-1.56 3-1 1.55-2.39 3.48-4.13 3.5-1.53.03-1.94-1-4.04-.98-2.1.01-2.55 1.01-4.09.99-1.74-.02-3.07-1.78-4.07-3.31C.75 17.79-.31 13.55 1.7 10.9c1.11-1.5 2.87-2.46 4.87-2.5 1.9-.05 3.62 1.04 4.06 1.04.42 0 2.8-1.28 4.74-1.09.8.03 3.05.32 4.49 2.44-3.95 2.16-3.31 7.33.9 6.3z"
      />
    </svg>
  );
}
function Spotify() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 1.5A10.5 10.5 0 1 0 22.5 12 10.5 10.5 0 0 0 12 1.5zm5.21 15.14c-.19.31-.6.41-.9.22-2.47-1.51-5.58-1.85-9.24-1.01a.75.75 0 1 1-.3-1.47c3.99-.9 7.4-.5 10.12 1.16.3.18.4.58.22.9zm1.26-2.82c-.24.39-.75.52-1.14.28-2.85-1.74-7.2-2.25-10.58-1.23a.75.75 0 1 1-.47-1.44c3.87-1.16 8.65-.6 11.87 1.35.39.24.52.74.32 1.18zm.11-3.05c-3.37-2-9.02-2.19-12.24-1.19a.75.75 0 0 1-.45-1.43c3.69-1.12 9.94-.9 13.74 1.33a.9.9 0 1 1-.93 1.55z"
      />
    </svg>
  );
}
function YouTube() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M23.5 7.2s-.23-1.63-.94-2.34c-.9-.94-1.9-.94-2.36-.99C16.7 3.5 12 3.5 12 3.5s-4.7 0-8.2.37c-.46.05-1.46.05-2.36.99C.73 5.57.5 7.2.5 7.2S.25 9.1.25 11v1.99c0 1.9.25 3.8.25 3.8s.23 1.63.94 2.34c.9.94 2.08.91 2.61 1.01 1.9.18 8 .36 8 .36s4.7-.01 8.2-.37c.46-.05 1.46-.05 2.36-.99.71-.71.94-2.34.94-2.34s.25-1.9.25-3.8V11c0-1.9-.25-3.8-.25-3.8zM9.75 14.9V8.6l6.01 3.16-6.01 3.14z"
      />
    </svg>
  );
}
function Amazon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.29 18.22c-2.97 1.7-6.92 2.39-10.46 1.5-3.13-.79-5.99-2.86-7.12-4.5-.26-.37.11-.82.51-.63 3.04 1.43 7.8 3.07 13.95 2.12.5-.08.8.53.34.86l-.22.15zM10.5 9.1c.33-2.02 2.04-3.1 3.76-3.1 1.83 0 3.51 1.16 3.51 3.36v5.95c0 .5-.4.9-.9.9h-1.1a.9.9 0 0 1-.9-.9V10.7c0-.98-.63-1.6-1.5-1.6-.85 0-1.56.66-1.75 1.5V15.3c0 .5-.4.9-.9.9h-1.1a.9.9 0 0 1-.9-.9V6.49c0-.5.4-.9.9-.9h1.1c.5 0 .9.4.9.9v2.6z"
      />
    </svg>
  );
}
function Deezer() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M2 15h3v3H2zm4-2h3v5H6zm4-4h3v9h-3zm4-3h3v12h-3zm4-3h3v15h-3z" />
    </svg>
  );
}
