import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Unused imports can be removed
import "../globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Mynav from "./navbar/navbar";
import { metadata as Sitemetadata } from "./metadata"; 
import Footer from "./footer/footer";
import Gallery from "./gallery/gallery";

export const metadata = Sitemetadata; 

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        />
      </head>
      <body>
        <Mynav />
        <Gallery/>
        <Footer />
      </body>
    </html>
  );
}
