"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-transparent`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-heading font-bold text-2xl tracking-tighter hover:text-accent transition-colors">
          Xratch<span className="text-accent">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#work" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            Work
          </Link>
          <Link
            href="#connect"
            className="group relative px-5 py-2.5 text-sm font-medium border border-accent text-accent overflow-hidden rounded-full transition-transform hover:scale-105"
          >
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">Let&apos;s Connect</span>
            <div className="absolute inset-0 bg-accent transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out z-0"></div>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black/95 backdrop-blur-lg border-b border-white/10 flex flex-col px-6 py-6 gap-6">
          <Link href="#work" onClick={toggleMenu} className="text-xl font-medium tracking-tight">Work</Link>
          <Link href="#connect" onClick={toggleMenu} className="text-xl font-medium tracking-tight text-accent">Let&apos;s Connect</Link>
        </div>
      )}
    </motion.nav>
  );
}
