"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#planes", label: "Planes" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 200,
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 6%',
    transition: 'all 0.3s',
    backgroundColor: scrolled ? 'rgba(6,9,15,0.95)' : 'transparent',
    backdropFilter: scrolled ? 'blur(20px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
    boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.3)' : 'none',
  };

  const logoStyle: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: 900,
    letterSpacing: '2px',
    textDecoration: 'none',
  };

  const logoTekStyle: React.CSSProperties = {
    color: '#2563EB',
  };

  const logoNaoStyle: React.CSSProperties = {
    color: '#F8FAFF',
  };

  const linkContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
  };

  const linkStyle: React.CSSProperties = {
    fontSize: '14px',
    fontWeight: 500,
    color: '#8BA3C7',
    textDecoration: 'none',
    transition: 'color 0.2s',
  };

  const waButtonStyle: React.CSSProperties = {
    backgroundColor: '#2563EB',
    color: 'white',
    fontSize: '14px',
    fontWeight: 600,
    padding: '10px 20px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.2s',
  };

  return (
    <nav role="navigation" aria-label="Navegación principal" style={navStyle}>
      <Link href="/" style={logoStyle} aria-label="Teknao - Ir al inicio">
        <span style={logoTekStyle}>TEK</span><span style={logoNaoStyle}>NAO</span>
      </Link>
      <MobileMenu />
      <div style={linkContainerStyle} role="menubar" className="nav-links">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            role="menuitem"
            style={linkStyle}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="https://wa.me/50252836343"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactarnos por WhatsApp"
          style={waButtonStyle}
        >
          Contáctanos
        </Link>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .nav-links {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}