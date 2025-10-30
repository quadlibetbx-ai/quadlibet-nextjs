import './globals.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
export const metadata = {
  title: 'Quadlibét — Official Site',
  description: 'Bronx-born Freestyle. Freestyle. Passion. Legacy.'
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A] text-white">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
