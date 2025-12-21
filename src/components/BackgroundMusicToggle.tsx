'use client';

import { useEffect, useRef, useState } from 'react';

export default function BackgroundMusicToggle() {
  const url = process.env.NEXT_PUBLIC_BG_MUSIC_URL;

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!url) {
      setError('Missing NEXT_PUBLIC_BG_MUSIC_URL');
      return;
    }

    const a = new Audio(url);
    a.loop = true;
    a.preload = 'none'; // don't download until user clicks
    a.volume = 0.35;

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onError = () => setError('Audio failed to load (check URL / permissions)');

    a.addEventListener('play', onPlay);
    a.addEventListener('pause', onPause);
    a.addEventListener('error', onError);

    audioRef.current = a;
    setReady(true);

    return () => {
      a.pause();
      a.removeEventListener('play', onPlay);
      a.removeEventListener('pause', onPause);
      a.removeEventListener('error', onError);
      audioRef.current = null;
    };
  }, [url]);

  const toggle = async () => {
    setError(null);
    const a = audioRef.current;
    if (!a) return;

    try {
      if (a.paused) {
        await a.play(); // requires user gesture
      } else {
        a.pause();
      }
    } catch (e) {
      setError('Browser blocked autoplay — click again or interact with the page first.');
    }
  };

  return (
    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
      <button
        onClick={toggle}
        disabled={!ready}
        style={{
          padding: '8px 12px',
          borderRadius: 10,
          border: '1px solid rgba(255,255,255,0.25)',
          background: 'rgba(0,0,0,0.35)',
          color: 'white',
          cursor: ready ? 'pointer' : 'not-allowed',
          fontSize: 14,
        }}
        aria-label={playing ? 'Pause background music' : 'Play background music'}
      >
        {playing ? '⏸ Pause Music' : '▶ Play Music'}
      </button>

      <span style={{ fontSize: 12, opacity: 0.8 }}>
        {error ? error : 'Background music (loop)'}
      </span>
    </div>
  );
}
