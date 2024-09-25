"use client";

import "./globals.css";
import "./mediaquery.css";
import "./fonts.css";
import HeadComponent from "./components/HeadComponent";
import Footer from "./components/Footer";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("./components/Header"), {
  ssr: false, // Prevent server-side rendering for the Header component
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <HeadComponent />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
