"use client";

import { useState } from "react";
import Link from "next/link";
import "@/app/styles/header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <h1 className="logo">Digiverse Solution</h1>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
        <div className="search-bar">
          <input
            type="text"
            name="text"
            id="text"
            className="text"
            placeholder="Search"
          />
          <button className="search-btn">Search</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
