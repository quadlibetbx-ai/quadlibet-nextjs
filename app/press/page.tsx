export const metadata = {
  title: "Quadlibét — Press Kit",
  description:
    "Official press kit for Quadlibét. Bio, music highlights, and contact information.",
};

export default function PressPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-zinc-100">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
        Quadlibét — Press Kit
      </h1>

      <p className="text-zinc-300 mb-10">
        Bronx-born Freestyle / Dance / Electronic
      </p>

      {/* Short Bio */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">Short Bio</h2>
        <p className="text-zinc-300 leading-relaxed">
          Quadlibét is a Bronx-born freestyle group blending classic Latin
          freestyle energy with modern dance and electronic production. Founded
          in the mid-1980s and rooted in New York’s club culture, the group
          delivers melodic hooks, emotional storytelling, and rhythms built to
          move crowds.
        </p>
      </section>

      {/* Full Bio */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">Full Bio</h2>
        <p className="text-zinc-300 leading-relaxed mb-4">
          Formed in the Bronx in 1985, Quadlibét emerged from the heart of New
          York’s freestyle movement. Founded by cousins Roger Alexander and
          Darryl Alexander, the group first gained attention with early demo
          recordings including “Take Me I’m Yours,” produced by Ancil Cox.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          Today, Quadlibét is led by Roger Alexander alongside Moses Lopez and
          Bruce Ortiz, continuing the group’s legacy while expanding its sound
          into modern dance and electronic spaces. Longtime collaborator Rogelio
          Aponte contributes to production, songwriting, and melodic
          arrangements.
        </p>
      </section>

      {/* Music Highlights */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">Music Highlights</h2>
        <ul className="list-disc list-inside text-zinc-300 space-y-1">
          <li>Mood Swings (Album)</li>
          <li>Take Me I’m Yours</li>
          <li>Take Me I’m Yours (Sexy Lady 2022 Remix)</li>
          <li>Tainted Love</li>
          <li>Set Me Free</li>
          <li>Nothing Left to Say</li>
        </ul>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-2xl font-bold mb-3">Contact</h2>
        <p className="text-zinc-300">
          Booking & Press: <br />
          <strong>Email:</strong> your@email.com
        </p>
      </section>
    </main>
  );
}
