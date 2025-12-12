export const metadata = {
  title: "Quadlibét — Official Site",
  description: "Official site for Quadlibét. Listen, explore releases, and watch videos.",
};

export default function HomePage() {
  return (
    <main style={{ minHeight: "100vh", padding: "48px 24px", maxWidth: 960, margin: "0 auto" }}>
      <h1 style={{ fontSize: 44, margin: 0 }}>Quadlibét</h1>
      <p style={{ opacity: 0.8, marginTop: 8 }}>Official site.</p>

      <div style={{ display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
        <a
          href="/listen"
          style={{
            padding: "12px 16px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(255,255,255,0.06)",
            textDecoration: "none",
            color: "inherit",
            fontWeight: 600,
          }}
        >
          🎧 Listen
        </a>

        <a
          href="https://music.apple.com/us/artist/quadlib%C3%A8t/1521608593"
          target="_blank"
          rel="noreferrer"
          style={{
            padding: "12px 16px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(255,255,255,0.06)",
            textDecoration: "none",
            color: "inherit",
            fontWeight: 600,
          }}
        >
           Apple Music Artist
        </a>
      </div>

      <p style={{ marginTop: 24, opacity: 0.7 }}>
        Tip: Bookmark <b>/listen</b> — that’s where all your platforms live.
      </p>
    </main>
  );
}
