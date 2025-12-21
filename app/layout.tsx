import "./globals.css";
import NavBar from "../components/NavBar";
import BackgroundMusicToggle from "../components/BackgroundMusicToggle";

export const metadata = {
  title: "Quadlibét — Official Site",
  description: "Bronx-born Freestyle. Passion. Legacy.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-zinc-100 antialiased">
        <NavBar />

        <div className="px-4 py-2 flex justify-end">
          <BackgroundMusicToggle />
        </div>

        {children}
      </body>
    </html>
  );
}
