
'use client';

import { useState } from 'react';
import type { SyntheticEvent } from 'react';
import list from '../data/videos.json';
import styles from './page.module.css';

const PLACEHOLDER_POSTER =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 675'>
    <rect width='100%' height='100%' fill='#111'/>
    <text x='50%' y='50%' fill='#bbb' font-size='40' text-anchor='middle' font-family='sans-serif'>Quadlibét • Video</text>
  </svg>`);

type InputItem =
  | string
  | { src: string; title?: string | null; poster?: string | null };

type VideoItem = {
  src: string;
  title: string;
  poster?: string;
};

function humanTitle(url: string) {
  const file = (url.split('?')[0] || '').split('/').pop() || '';
  return file
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function toItem(entry: InputItem): VideoItem {
  if (typeof entry === 'string') {
    return { src: entry, title: humanTitle(entry) };
  }

  const src = entry.src;
  const title = (entry.title ?? undefined) || humanTitle(src);
  const poster = entry.poster ?? undefined;

  return poster ? { src, title, poster } : { src, title };
}

export default function VideoPage() {
  const raw = (Array.isArray(list) ? list : []) as unknown as InputItem[];
  const videos: VideoItem[] = raw.map((entry) => toItem(entry));

  const [featuredIndex, setFeaturedIndex] = useState(
    Math.max(0, videos.length - 1)
  );

  const handlePlay = (e: SyntheticEvent<HTMLVideoElement>) => {
    const currentVideo = e.currentTarget;

    document.querySelectorAll('video').forEach((video) => {
      if (video !== currentVideo) {
        (video as HTMLVideoElement).pause();
      }
    });

    window.dispatchEvent(new Event('quadlibet:pause-background-music'));
  };

  if (videos.length === 0) {
    return (
      <main className={styles.page}>
        <h1>No videos available</h1>
      </main>
    );
  }

  const featured = videos[featuredIndex] ?? videos[0];
  const leftIndex = (featuredIndex - 1 + videos.length) % videos.length;
  const rightIndex = (featuredIndex + 1) % videos.length;

  const leftVideo = videos[leftIndex];
  const rightVideo = videos[rightIndex];

  const videoType = featured.src.toLowerCase().split('?')[0].endsWith('.mov')
    ? 'video/quicktime'
    : 'video/mp4';

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.brand}>QUADLIBÉT</div>
        <div>OFFICIAL VIDEO COLLECTION</div>
      </header>

      <section className={styles.stage}>
        <div className={styles.sideRail}>
          <button
            type="button"
            className={styles.sideCard}
            onClick={() => setFeaturedIndex(leftIndex)}
            aria-label={`Feature ${leftVideo.title}`}
          >
            <img
              src={leftVideo.poster || PLACEHOLDER_POSTER}
              alt={leftVideo.title}
            />
            <div className={styles.sideTitle}>{leftVideo.title}</div>
          </button>
        </div>

        <div className={styles.featured}>
          <h1 className={styles.featuredTitle}>{featured.title}</h1>

          <video
            key={featured.src}
            className={styles.featuredVideo}
            controls
            playsInline
            preload="metadata"
            poster={featured.poster || PLACEHOLDER_POSTER}
            onPlay={handlePlay}
          >
            <source src={featured.src} type={videoType} />
            Your browser does not support the video tag.
          </video>

          <p className={styles.featuredInfo}>
            Explore the Quadlibét video collection. Select either preview to
            discover another video.
          </p>
        </div>

        <div className={styles.sideRail}>
          <button
            type="button"
            className={styles.sideCard}
            onClick={() => setFeaturedIndex(rightIndex)}
            aria-label={`Feature ${rightVideo.title}`}
          >
            <img
              src={rightVideo.poster || PLACEHOLDER_POSTER}
              alt={rightVideo.title}
            />
            <div className={styles.sideTitle}>{rightVideo.title}</div>
          </button>
        </div>
      </section>
    </main>
  );
}
