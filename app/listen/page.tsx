// app/listen/page.tsx
import styles from "./page.module.css";

export const metadata = {
  title: "Quadlibét — Listen",
  description:
    "Stream Quadlibét on Apple Music, Spotify, YouTube, Amazon Music, Deezer and more.",
};

type Links = {
  apple?: string;
  spotify?: string;
  amazon?: string;
  deezer?: string;
  youtube?: string;
};

type Release = {
  title: string;
  links: Links;
};

const ARTIST: Required<Pick<Links, "apple" | "spotify" | "youtube">> = {
  apple: "https://music.apple.com/us/album/mood-swings/1408256856",
  spotify: "https://open.spotify.com/artist/18ssdZ9dy9g4xSjBxQz3n4",
  // IMPORTANT: replace this with your REAL YouTube channel URL (see Step B)
  youtube: "https://www.youtube.com/playlist?list=OLAK5uy_klrxcS42VpwCdUAZ25AZEEKHPstahCxAY",
};

const FEATURED: Release[] = [
  {
    title: "Take Me I’m Yours — Song (Tazmania Freestyle Vol. 4: Still Goin)",
    links: {
      apple: "https://music.apple.com/us/song/take-me-im-yours/270944197",
    },
  },
  {
    title: "Take Me I’m Yours (Sexy Lady 2022 Remix) — Single",
    links: {
      apple: "https://music.apple.com/us/album/take-me-im-yours-sexy-lady-2022-remix/1707401898",
    },
  },
  {
    title: "Made for Me — Single",
    links: {
      apple: "https://music.apple.com/us/album/made-for-me-single/1774374018",
    },
  },
  {
    title: "Nothing Left to Say — Single",
    links: {
      apple: "https://music.apple.com/us/album/nothing-left-to-say-single/1813530189",
    },
  },
  {
    title: "Set Me Free — Single",
    links: {
      apple: "https://music.apple.com/us/album/set-me-free-single/1364295167",
    },
  },
  {
    title: "Take Me I’m Yours (2022 Remix) — Single",
    links: {
      apple:
        "https://music.apple.com/us/album/take-me-im-yours-sexy-lady-2022-remix-single/1648940177",
    },
  },
  {
    title: "Tainted Love — Single",
    links: {
      apple: "https://music.apple.com/us/album/tainted-love-single/1067457524",
    },
  },
  {
    title: "Mood Swings",
    links: {
      apple: "https://music.apple.com/us/album/mood-swings/1408256856",
    },
  },
];

const MORE_RELEASES: { label: string; href: string; platform: keyof Links }[] = [
  // Amazon albums
  { platform: "amazon", label: "Amazon • Album • B0F87MPH7R", href: "https://amazon.com/music/player/albums/B0F87MPH7R?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_Fk3eU8a1lYSOlnmlzm5OULfdb" },
  { platform: "amazon", label: "Amazon • Album • B07F9MLL2T", href: "https://amazon.com/music/player/albums/B07F9MLL2T?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_alwHoo9b79oWdNhz8iGBaXZrl" },
  { platform: "amazon", label: "Amazon • Album • B0DK6HL4J4", href: "https://amazon.com/music/player/albums/B0DK6HL4J4?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_ot8VCbHrGU0BZEac14AbYLASZ" },
  { platform: "amazon", label: "Amazon • Album • B01AR13DLO", href: "https://amazon.com/music/player/albums/B01AR13DLO?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_qVP8NK6cjSRYFvp7XwDsmfeMz&trackAsin=B01AR13E4A" },
  { platform: "amazon", label: "Amazon • Album • B08CHGPW4H", href: "https://amazon.com/music/player/albums/B08CHGPW4H?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_4ag2gLSwYEHuoko0G5mCIZsN7" },
  { platform: "amazon", label: "Amazon • Album • B08RSPZR4Y", href: "https://amazon.com/music/player/albums/B08RSPZR4Y?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_H5nMATLzcA3cvs3IENCBQc0v6" },
  { platform: "amazon", label: "Amazon • Album • B0BHLSW3WK", href: "https://amazon.com/music/player/albums/B0BHLSW3WK?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_EDuZeBx0scC3Dd88ppxEmXQjh" },
  { platform: "amazon", label: "Amazon • Album • B01N5EKDS3", href: "https://amazon.com/music/player/albums/B01N5EKDS3?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_PlgS8VfUeV2tHThLqKwxVleW8" },

  // Spotify albums
  { platform: "spotify", label: "Spotify • Album", href: "https://open.spotify.com/album/4ZqVuNFmaFAxRbtyHXyXRv?si=ro1QfIuiScGNcgb5iilm_w" },
  { platform: "spotify", label: "Spotify • Album", href: "https://open.spotify.com/album/2SZ0G9oe09tedqCT5Fpjt8?si=fV_apwAkTgmTn0KAcZX-Iw" },
  { platform: "spotify", label: "Spotify • Album", href: "https://open.spotify.com/album/6x9n39awNyrvL6pDCCbpUv?si=qsaxC2NQSnO6lWJTUmv-MQ" },
  { platform: "spotify", label: "Spotify • Album", href: "https://open.spotify.com/album/0U5whadEjWNVFrd9cY16Hr?si=T9qtvcf8ThSL5CtWKZQrHQ" },
  { platform: "spotify", label: "Spotify • Album", href: "https://open.spotify.com/album/6290DVe71mpBxzMB2rYP3J?si=vGg34qkHRiS7_qP2W0YwCg" },
  { platform: "spotify", label: "Spotify • Album", href: "https://open.spotify.com/album/5wBOuOS6GR0XXT4yo42p8d?si=qclHVbZvQCeXDXJq5Mew6Q" },
  { platform: "spotify", label: "Spotify • Album", href: "https://open.spotify.com/album/4F0Qvf8MgzyehfkrUEctJ8?si=kbfaBdyPQ5GHpZrQgGjQ8w" },

  // Deezer links
  { platform: "deezer", label: "Deezer", href: "https://link.deezer.com/s/31wzr6GR8ESjSz0mD4z91" },
  { platform: "deezer", label: "Deezer", href: "https://link.deezer.com/s/31wzssOUUhZDIhTzJv6uC" },
  { platform: "deezer", label: "Deezer", href: "https://link.deezer.com/s/31wzsWA1jAWuMfaQk2rmz" },
  { platform: "deezer", label: "Deezer", href: "https://link.deezer.com/s/31wztrVM8GdbFccAKavJz" },
  { platform: "deezer", label: "Deezer", href: "https://link.deezer.com/s/31wztLpsfZ3yjwo3InQIy" },
  { platform: "deezer", label: "Deezer", href: "https://link.deezer.com/s/31wzub6niPNZqdIEkS5os" },
];

function iconFor(platform: keyof Links) {
  switch (platform) {
    case "apple":
      return "";
    case "spotify":
      return "◍";
    case "amazon":
      return "a";
    case "deezer":
      return "≋";
    case "youtube":
      return "▶";
    default:
      return "•";
  }
}

function PlatformButton({
  platform,
  href,
}: {
  platform: keyof Links;
  href: string;
}) {
  return (
    <a className={styles.platformBtn} href={href} target="_blank" rel="noreferrer">
      <span className={styles.platformIcon} aria-hidden="true">
        {iconFor(platform)}
      </span>
      <span className={styles.platformText}>
        {platform === "apple"
          ? "Apple Music"
          : platform === "spotify"
          ? "Spotify"
          : platform === "amazon"
          ? "Amazon"
          : platform === "deezer"
          ? "Deezer"
          : platform === "youtube"
          ? "YouTube"
          : "Link"}
      </span>
    </a>
  );
}

export default function ListenPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <h1 className={styles.h1}>Listen to Quadlibét</h1>
        <p className={styles.sub}>
          Choose a platform, or pick a featured single. Clean, simple, and event-ready.
        </p>

        <div className={styles.artistRow}>
          <PlatformButton platform="apple" href={ARTIST.apple} />
          <PlatformButton platform="spotify" href={ARTIST.spotify} />
          <PlatformButton platform="youtube" href={ARTIST.youtube} />
        </div>
      </header>

      <section className={styles.section}>
        <h2 className={styles.h2}>Featured Singles</h2>

        <div className={styles.cards}>
          {FEATURED.map((r) => (
            <article key={r.title} className={styles.card}>
              <div className={styles.cardTitle}>{r.title}</div>

              <div className={styles.cardBtns}>
                {r.links.apple && <PlatformButton platform="apple" href={r.links.apple} />}
                {r.links.spotify && <PlatformButton platform="spotify" href={r.links.spotify} />}
                {r.links.amazon && <PlatformButton platform="amazon" href={r.links.amazon} />}
                {r.links.deezer && <PlatformButton platform="deezer" href={r.links.deezer} />}
                {r.links.youtube && <PlatformButton platform="youtube" href={r.links.youtube} />}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <details className={styles.details}>
          <summary className={styles.summary}>More releases</summary>

          <div className={styles.moreGrid}>
            {MORE_RELEASES.map((x, i) => (
              <a
                key={`${x.platform}-${i}`}
                className={styles.moreItem}
                href={x.href}
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.moreIcon} aria-hidden="true">
                  {iconFor(x.platform)}
                </span>
                <span className={styles.moreLabel}>{x.label}</span>
              </a>
            ))}
          </div>
        </details>
      </section>
    </main>
  );
}
