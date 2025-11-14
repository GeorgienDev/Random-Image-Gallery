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
     
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet"/>


<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>


      </head>
      <body>
        <Mynav />
        <Gallery/>
        <Footer />
      </body>
    </html>
  );
}
