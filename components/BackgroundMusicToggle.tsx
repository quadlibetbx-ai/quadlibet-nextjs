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
    a.preload = 'none'; // don’t download until user clicks
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
    } catch {
      setError('Browser blocked playback — click again or interact with the page first.');
    }
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={toggle}
        disabled={!ready}
        className="px-3 py-2 rounded-xl border border-white/25 bg-black/40 text-white text-sm disabled:opacity-50"
        aria-label={playing ? 'Pause background music' : 'Play background music'}
      >
        {playing ? '⏸ Pause Music' : '▶ Play Music'}
      </button>

      <span className="text-xs text-white/70">
        {error ? error : 'Background music (loop)'}
      </span>
    </div>
  );
}
