import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutPages({ children }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 70) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  });

  return (
    <>
      <header
        className={`w-full fixed z-50 top-0 h-20 flex justify-center items-center ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
