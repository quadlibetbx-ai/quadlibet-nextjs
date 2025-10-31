export default function MediaSingleton() {
  useEffect(() => {
    const onPlay = (e) => {
      const t = e.target;
      if (!(t instanceof HTMLMediaElement)) return;
      document.querySelectorAll('audio,video').forEach((el) => {
        if (el !== t) el.pause();
      });
    };
    // useCapture=true so it catches play on all descendants
    document.addEventListener('play', onPlay, true);
    return () => document.removeEventListener('play', onPlay, true);
  }, []);
  return null;
}
