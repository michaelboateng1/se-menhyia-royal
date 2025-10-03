import { Roboto_Slab, Roboto_Condensed } from "next/font/google";
import "./globals.css";

import Header from "./component/Header";
import Footer from "./component/Footer";

const robotoSlab = Roboto_Slab({
  variable: "--font-heading",
  subsets: ["latin"],
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-paragraph",
  subsets: ["latin"],
});

export const metadata = {
  title: "Se-Menhyia Royal International School",
  description: "Website of Se-Menhyia Royal International School",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${robotoSlab.variable} ${robotoCondensed.variable} antialiased overflow-x-hidden`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

// Primary color: #660908
// Secondary color: #da9408
// Accent color: #2a0b5f
// Background color: #ffffff
