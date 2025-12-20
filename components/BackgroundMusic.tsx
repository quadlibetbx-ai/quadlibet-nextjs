"use client";

import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";

type BgmContextValue = {
  enabled: boolean;
  toggle: () => void;
  play: () => void;
  pause: () => void;
};

const BgmContext = createContext<BgmContextValue | null>(null);

const STORAGE_KEY = "qb_bgm_enabled";

export default function BackgroundMusicProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Load preference on first client render
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      setEnabled(saved === "1");
    } catch {}
    setHydrated(true);
  }, []);

  // Persist preference
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, enabled ? "1" : "0");
    } catch {}
  }, [enabled, hydrated]);

  const play = async () => {
    const a = audioRef.current;
    if (!a) return;
    a.loop = true;
    a.volume = 0.35;
    try {
      await a.play();
    } catch {
      // Autoplay without a click will be blocked. This play() is intended to be called from a user click.
    }
  };

  const pause = () => {
    const a = audioRef.current;
    if (!a) return;
    a.pause();
  };

  // If enabled is true and user navigates pages, keep audio playing
  useEffect(() => {
    if (!hydrated) return;
    if (!enabled) {
      pause();
      return;
    }
    // Try to resume (may still require a user gesture the first time)
    play();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, hydrated]);

  const value = useMemo<BgmContextValue>(
    () => ({
      enabled,
      toggle: () => setEnabled((v) => !v),
      play,
      pause,
    }),
    [enabled]
  );

  return (
    <BgmContext.Provider value={value}>
      <audio ref={audioRef} src="/audio/background.mp3" preload="none" />
      {children}
    </BgmContext.Provider>
  );
}

export function useBgm() {
  const ctx = useContext(BgmContext);
  if (!ctx) throw new Error("useBgm must be used inside BackgroundMusicProvider");
  return ctx;
}
