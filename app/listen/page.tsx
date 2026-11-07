"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";


type Track = {
  id: string;
  title: string;
  file: string;
  collection: string;
  number?: number;
};

const CDN = "https://ddjb9raagwzmf.cloudfront.net";

function audioUrl(file: string) {
  return `${CDN}/${file.split("/").map(encodeURIComponent).join("/")}`;
}

const singles: Track[] = [
  { id: "guess", title: "Guess Its Time (Radio Edit)", file: "Guess Its Time (Radio Edit).mp3", collection: "Singles" },
  { id: "christmas-artie", title: "Home for Christmas (Artie Rodriguez Mix)", file: "Home for Christmas (Artie Rodriguez Mix).mp3", collection: "Singles" },
  { id: "christmas-family", title: "Home for Christmas (Artistik Family)", file: "Home for Christmas (Artistik Family feat. William Valentin, Synthia Figueroa, Lilly Rose, Brittney Alexander and Quadlibet).mp3", collection: "Singles" },
  { id: "made-for-me", title: "Made For Me", file: "Made For Me.mp3", collection: "Singles" },
  { id: "nothing-left", title: "Nothing Left to Say (Freestyle Mix)", file: "Nothing Left to Say (Freestyle Mix).mp3", collection: "Singles" },
  { id: "sitting-cali", title: "Sitting Here (Kenny-Freestyle-Moulton Cali-Mix)", file: "Sitting Here (A Kenny-Freestyle-Moulton Cali-Mix).mp3", collection: "Singles" },
  { id: "sitting-freestyle", title: "Sitting Here (Freestyle Mix)", file: "Sitting Here (Freestyle Mix).mp3", collection: "Singles" },
  { id: "sitting-original", title: "Sitting Here", file: "Sitting Here.mp3", collection: "Singles" },
  { id: "spread-cliff", title: "Spread Your Wings (Cliff Potts Mix Edit)", file: "Spread Your Wings (Cliff Potts Mix Edit).mp3", collection: "Singles" },
  { id: "spread-original", title: "Spread Your Wings", file: "Spread Your Wings.mp3", collection: "Singles" },
  { id: "take-me-original", title: "Take Me I'm Yours", file: "Take Me I'm Yours.mp3", collection: "Singles" },
  { id: "take-me-2022", title: "Take Me I'm Yours (Sexy Lady 2022 Remix)", file: "Take Me I'm Yours (Sexy Lady 2022 Remix).mp3", collection: "Singles" },
  { id: "take-me-latin", title: "Take Me I'm Yours (Sexy Lady Latin Freestyle Club Mix)", file: "Take Me I'm Yours (Sexy Lady_Latin Freestyle Club Mix).mp3", collection: "Singles" },
];


const singleArtwork: Record<string, string> = {
  "guess": "/images/releases/guess-its-time.png",
  "christmas-artie": "/images/releases/home-for-christmas-artie.png",
  "christmas-family": "/images/releases/home-for-christmas.png",
  "made-for-me": "/images/releases/made-for-me.png",
  "nothing-left": "/images/releases/nothing-left-to-say.png",
  "sitting-freestyle": "/images/releases/sitting-here.png",
  "sitting-original": "/images/releases/sitting-here.png",
  "spread-cliff": "/images/releases/spread-your-wings.png",
  "spread-original": "/images/releases/spread-your-wings.png",
  "take-me-original": "/images/releases/take-me-im-yours-original.png",
  "take-me-2022": "/images/releases/take-me-im-yours-sexy-lady.png",
  "take-me-latin": "/images/releases/take-me-im-yours-sexy-lady.png",
};
const releaseGroups = [
  {
    id: "guess",
    title: "Guess It's Time",
    trackIds: ["guess"],
  },
  {
    id: "christmas-artie",
    title: "Home for Christmas",
    subtitle: "Artie Rodriguez Mix",
    trackIds: ["christmas-artie"],
  },
  {
    id: "christmas-family",
    title: "Home for Christmas",
    subtitle: "Artistik Family",
    trackIds: ["christmas-family"],
  },
  {
    id: "made-for-me",
    title: "Made For Me",
    trackIds: ["made-for-me"],
  },
  {
    id: "nothing-left",
    title: "Nothing Left to Say",
    trackIds: ["nothing-left"],
  },
  {
    id: "sitting-here",
    title: "Sitting Here",
    trackIds: ["sitting-original", "sitting-freestyle", "sitting-cali"],
    memorialTrackId: "sitting-cali",
  },
  {
    id: "spread-your-wings",
    title: "Spread Your Wings",
    trackIds: ["spread-original", "spread-cliff"],
  },
  {
    id: "take-me-original",
    title: "Take Me I'm Yours",
    subtitle: "Original Recording",
    trackIds: ["take-me-original"],
  },
  {
    id: "sexy-lady",
    title: "Take Me I'm Yours",
    subtitle: "Sexy Lady Remixes",
    trackIds: ["take-me-2022", "take-me-latin"],
  },
];

const albumTitles = [
  "If This Is Love",
  "We Can't Go On",
  "Tainted Love",
  "Set Me Free",
  "Can't Get Enough",
  "Just Want To",
  "I Believed in You",
  "I dream of you",
  "If I Told Ya",
  "Tainted Love (Flipzide Remix)",
  "Take Me",
  "Now Is the Time",
  "Never Gonna Give Up",
  "I Believed in You (Alexies DJ 87 Edit Mix)",
  "Thoughts of You",
  "Just Want To (Remix)",
  "Bonus Track",
];


const albumTracks: Track[] = albumTitles.map((title, index) => {
  const trackNumber = index + 1;

  const fileName =
    trackNumber === 2
      ? "2. We Can’t Go On.mp3"
      : trackNumber === 7
      ? "7. I Believed In You.mp3"
      : trackNumber === 9
      ? "9.  If I Told Ya.mp3"
      : `${trackNumber}. ${title}.mp3`;

  return {
    id: `mood-${trackNumber}`,
    title,
    file: `Mood Swings/${fileName}`,
    collection: "Mood Swings",
    number: trackNumber,
  };
});


const allTracks = [...singles, ...albumTracks];

export default function ListenPage() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTrack, setCurrentTrack] = useState<Track>(singles[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playRequested, setPlayRequested] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !playRequested) return;

    audio.load();
    audio.play()
      .then(() => setIsPlaying(true))
      .catch(() => {
        setIsPlaying(false);
        setPlayRequested(false);
      });
  }, [currentTrack, playRequested]);

  function playTrack(track: Track) {
    setCurrentTrack(track);
    setPlayRequested(true);
  }

  function togglePlayback() {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      setPlayRequested(true);
      audio.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }

  function skipTrack(direction: number) {
    const index = allTracks.findIndex((track) => track.id === currentTrack.id);
    const nextIndex = (index + direction + allTracks.length) % allTracks.length;
    playTrack(allTracks[nextIndex]);
  }

  function formatTime(seconds: number) {
    if (!Number.isFinite(seconds)) return "0:00";
    const minutes = Math.floor(seconds / 60);
    const remaining = Math.floor(seconds % 60);
    return `${minutes}:${remaining.toString().padStart(2, "0")}`;
  }

  const filteredReleaseGroups = releaseGroups.filter((group) =>
  group.title.toLowerCase().includes(search.toLowerCase()) ||
  group.trackIds.some((trackId) => {
    const track = singles.find((item) => item.id === trackId);
    return track?.title.toLowerCase().includes(search.toLowerCase()) ?? false;
  })
);

  const filteredAlbum = albumTracks.filter((track) =>
    track.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className={styles.page}>
      <audio
        ref={audioRef}
        src={audioUrl(currentTrack.file)}
        preload="metadata"
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => skipTrack(1)}
      />

      <header className={styles.hero}>
        <div className={styles.eyebrow}>QUADLIBÉT PRESENTS</div>
        <h1 className={styles.title}>THE MUSIC LOUNGE</h1>
        <p className={styles.subtitle}>
          Your place to discover, explore and enjoy the music of Quadlibét.
        </p>
        <div className={styles.heroAccent}>♫</div>
      </header>

      <section className={styles.welcome}>
        <div>
          <span className={styles.sectionEyebrow}>WELCOME TO</span>
          <h2>Our Digital Record Store</h2>
          <p>
            Explore our singles, remixes and the complete Mood Swings album.
            Pick a track and let the music take you away.
          </p>
        </div>
        <div className={styles.recordGraphic}>Q</div>
      </section>

      <div className={styles.catalogHeader}>
        <div>
          <span className={styles.sectionEyebrow}>EXPLORE THE COLLECTION</span>
          <h2>Music Library</h2>
        </div>
        <input
          className={styles.search}
          type="search"
          placeholder="Search tracks..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Search music"
        />
      </div>

      <section className={styles.albumSection}>
        <div className={styles.albumCard}>
          <div className={styles.albumArtwork}>
  <img
    src="/images/releases/mood-swings-cover.png"
    alt="Quadlibét - Mood Swings original album cover"
    className={styles.albumCover}
  />
</div>

          <div className={styles.albumInfo}>
            <span className={styles.sectionEyebrow}>FEATURED ALBUM</span>
            <h2>Mood Swings</h2>
            <p>17 tracks · Freestyle · Dance · Electronic</p>
            <button
              className={styles.primaryButton}
              onClick={() => playTrack(albumTracks[0])}
            >
              ▶ PLAY ALBUM
            </button>
          </div>
        </div>

        <div className={styles.trackPanel}>
          <div className={styles.trackPanelHeader}>
            <h3>Album Tracks</h3>
            <span>17 TRACKS</span>
          </div>

          {filteredAlbum.map((track) => (
            <button
              key={track.id}
              className={`${styles.trackRow} ${currentTrack.id === track.id ? styles.activeTrack : ""}`}
              onClick={() => playTrack(track)}
            >
              <span className={styles.trackNumber}>
                {currentTrack.id === track.id && isPlaying
                  ? "♫"
                  : track.number}
              </span>
              <span className={styles.trackName}>{track.title}</span>
              <span className={styles.trackPlay}>▶</span>
            </button>
          ))}
          {filteredAlbum.length === 0 && (
            <p className={styles.empty}>No matching album tracks.</p>
          )}
        </div>
      </section>

      <section className={styles.singlesSection}>
        <div className={styles.sectionHeading}>
          <div>
            <span className={styles.sectionEyebrow}>THE QUADLIBÉT COLLECTION</span>
            <h2>Singles & Remixes</h2>
          </div>
          <span className={styles.count}>{singles.length} TRACKS</span>
        </div>


<div className={styles.singlesGrid}>
  {filteredReleaseGroups.map((group, index) => {
    const groupTracks = group.trackIds
      .map((trackId) => singles.find((track) => track.id === trackId))
      .filter((track): track is Track => track !== undefined);

    const artwork = singleArtwork[group.trackIds[0]];
    const isSelected = group.trackIds.includes(currentTrack.id);

    return (
      <div
        key={group.id}
        className={`${styles.singleCard} ${isSelected ? styles.selectedCard : ""}`}
      >
        <span className={styles.singleArtwork}>
          {artwork ? (
            <img
              src={artwork}
              alt={`${group.title} artwork`}
              className={styles.singleArtworkImage}
            />
          ) : (
            <>
              <span className={styles.singleVinyl}>♫</span>
              <span className={styles.singleIndex}>
                {String(index + 1).padStart(2, "0")}
              </span>
            </>
          )}
        </span>

        <span className={styles.singleTitle}>{group.title}</span>

        {"subtitle" in group && group.subtitle && (
          <span className={styles.singleArtist}>{group.subtitle}</span>
        )}

        <span className={styles.singleArtist}>QUADLIBÉT</span>

        <div className={styles.versionList}>
          {groupTracks.map((track) => (
            <div key={track.id}>
              <button
                type="button"
                className={`${styles.versionButton} ${
                  currentTrack.id === track.id ? styles.selectedVersion : ""
                }`}
                onClick={() => playTrack(track)}
              >
                {track.id === "sitting-cali" && (
  <img
    src="/images/releases/kenny-moulton-tribute.png"
    alt="In memory of Kenny Moulton"
    className={styles.kennyArtwork}
  />
)}
<span>{track.title}</span>
                <span>
                  {currentTrack.id === track.id && isPlaying
                    ? "NOW PLAYING"
                    : "▶ PLAY"}
                </span>
              </button>

              {"memorialTrackId" in group && group.memorialTrackId === track.id && (
                <p className={styles.memorialNote}>
                  In memory of Kenny Moulton. Thank you for the music.
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  })}
</div>

{filteredReleaseGroups.length === 0 && (
  <p className={styles.empty}>No matching singles.</p>
)}

      </section>

      <footer className={styles.footer}>
        <p>THE MUSIC LOUNGE · BY QUADLIBÉT</p>
        <span>Independent music. Timeless sound.</span>
      </footer>

      <div className={styles.player}>
        <div className={styles.playerTrack}>
          <div className={styles.miniArtwork}>Q</div>
          <div className={styles.playerTrackInfo}>
            <strong>{currentTrack.title}</strong>
            <span>QUADLIBÉT · {currentTrack.collection}</span>
          </div>
        </div>

        <div className={styles.playerCenter}>
          <div className={styles.playerButtons}>
            <button onClick={() => skipTrack(-1)} aria-label="Previous track">
              |◀
            </button>
            <button
              className={styles.playButton}
              onClick={togglePlayback}
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? "Ⅱ" : "▶"}
            </button>
            <button onClick={() => skipTrack(1)} aria-label="Next track">
              ▶|
            </button>
          </div>

          <div className={styles.progressRow}>
            <span>{formatTime(currentTime)}</span>
            <input
              className={styles.progress}
              type="range"
              min="0"
              max={duration || 0}
              value={Math.min(currentTime, duration || 0)}
              onChange={(event) => {
                const audio = audioRef.current;
                if (audio) audio.currentTime = Number(event.target.value);
              }}
              aria-label="Playback progress"
            />
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <div className={styles.volumeControl}>
          <span>♫</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(event) => setVolume(Number(event.target.value))}
            aria-label="Volume"
          />
        </div>
      </div>
    </main>
  );
}
