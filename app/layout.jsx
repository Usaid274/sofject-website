import localFont from "next/font/local";
import { Montserrat } from "next/font/google"
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import "./globals.css";

const modern20 = localFont({
  src: './fonts/MOD20.ttf',
  weight: '400',
  variable: '--font-secondary',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-primary',
});

export const metadata = {
  title: "Sofject",
  description: "Crafting Custom Software Solutions for Your Business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${modern20.variable} scroll-smooth selection:bg-primary selection:text-white`}>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
