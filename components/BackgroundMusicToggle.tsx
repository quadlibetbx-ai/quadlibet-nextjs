'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  compact?: boolean; // icon-only button for NavBar
};

export default function BackgroundMusicToggle({ compact = false }: Props) {
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

  const label = playing ? 'Pause music' : 'Play music';

  // Compact = icon-only, perfect for NavBar
  if (compact) {
    return (
      <button
        onClick={toggle}
        disabled={!ready}
        title={error ? error : label}
        aria-label={label}
        className="inline-flex items-center justify-center h-10 w-10 rounded-2xl border border-white/15 bg-white/10 hover:bg-white/15 text-white disabled:opacity-50"
      >
        <span className="text-lg leading-none">{playing ? '⏸' : '▶'}</span>
      </button>
    );
  }

  // Full = button + helper text
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={toggle}
        disabled={!ready}
        className="px-3 py-2 rounded-xl border border-white/25 bg-black/40 text-white text-sm disabled:opacity-50"
        aria-label={label}
      >
        {playing ? '⏸ Pause Music' : '▶ Play Music'}
      </button>

      <span className="text-xs text-white/70">
        {error ? error : 'Background music (loop)'}
      </span>
    </div>
  );
}
