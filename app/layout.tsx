import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Mynav from "./navbar/navbar";
import { metadata as Sitemetadata} from "./metadata"; 
import Footer from "./footer/footer";
export const metadata = Sitemetadata; 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Mynav />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
