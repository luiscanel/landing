"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#planes", label: "Planes" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const overlayStyle: React.CSSProperties = {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(6, 9, 15, 0.98)",
    zIndex: 150,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "32px",
    opacity: isOpen ? 1 : 0,
    visibility: isOpen ? "visible" : "hidden",
    transition: "all 0.3s ease",
  };

  const linkStyle: React.CSSProperties = {
    fontSize: "28px",
    fontWeight: 700,
    color: "#F8FAFF",
    textDecoration: "none",
    letterSpacing: "-0.5px",
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#2563EB",
    color: "white",
    fontSize: "16px",
    fontWeight: 600,
    padding: "14px 28px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
    marginTop: "16px",
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
        style={{
          display: "none",
          flexDirection: "column",
          justifyContent: "center",
          gap: "5px",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "8px",
          zIndex: 201,
        }}
        className="mobile-toggle"
      >
        <span
          style={{
            width: "24px",
            height: "2px",
            backgroundColor: "#F8FAFF",
            borderRadius: "2px",
            transition: "all 0.3s",
            transform: isOpen ? "rotate(45deg) translateY(7px)" : "none",
          }}
        />
        <span
          style={{
            width: "24px",
            height: "2px",
            backgroundColor: "#F8FAFF",
            borderRadius: "2px",
            transition: "all 0.3s",
            opacity: isOpen ? 0 : 1,
          }}
        />
        <span
          style={{
            width: "24px",
            height: "2px",
            backgroundColor: "#F8FAFF",
            borderRadius: "2px",
            transition: "all 0.3s",
            transform: isOpen ? "rotate(-45deg) translateY(-7px)" : "none",
          }}
        />
      </button>

      {/* Mobile Menu Overlay */}
      <div style={overlayStyle}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={linkStyle}
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="https://wa.me/50252836343"
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
          onClick={() => setIsOpen(false)}
        >
          Contáctanos
        </Link>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}