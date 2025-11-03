import './globals.css';

export const metadata = {
  title: 'Quadlibét — Official Site',
  description: 'Bronx-born Freestyle. Passion. Legacy.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
