"use client";

import Link from "next/link";
import { IconPhone, IconMail, IconMapPin, IconClock } from "./Icon";

const footerLinks = {
  empresa: [
    { label: "Inicio", href: "#" },
    { label: "Servicios", href: "#servicios" },
    { label: "Planes", href: "#planes" },
    { label: "Contacto", href: "https://wa.me/50252836343" },
  ],
  servicios: [
    { label: "Infraestructura y Redes", href: "#" },
    { label: "Ciberseguridad", href: "#" },
    { label: "Desarrollo de Software", href: "#" },
    { label: "Outsourcing IT", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0D1422', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '72px 6% 36px' }}>
      {/* Main Grid - 4 columns like original */}
      <div style={{ display: 'grid', gridTemplateColumns: '2.2fr 1fr 1fr 1.6fr', gap: '48px', paddingBottom: '56px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        {/* Brand - Column 1 */}
        <div>
          <Link href="/" style={{ fontSize: '20px', fontWeight: 900, letterSpacing: '-0.5px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '7px', background: 'linear-gradient(135deg, #2563EB 0%, #0EA5E9 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 900, color: '#fff' }}>T</div>
            TEKNAO
          </Link>
          <p style={{ fontSize: '13.5px', color: '#4A6585', lineHeight: 1.75, maxWidth: '260px', marginTop: '14px' }}>
            Soluciones de soporte tecnológico para PYMES en Guatemala. Resolvemos problemas de red, servidores y ciberseguridad para que tu negocio nunca se detenga.
          </p>
        </div>

        {/* Empresa - Column 2 */}
        <div>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#4A6585', marginBottom: '18px' }}>Empresa</div>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {footerLinks.empresa.map((link, i) => (
              <li key={i}>
                <Link href={link.href} style={{ fontSize: '14px', color: '#8BA3C7', textDecoration: 'none' }}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Servicios - Column 3 */}
        <div>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#4A6585', marginBottom: '18px' }}>Servicios</div>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {footerLinks.servicios.map((link, i) => (
              <li key={i}>
                <Link href={link.href} style={{ fontSize: '14px', color: '#8BA3C7', textDecoration: 'none' }}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto - Column 4 */}
        <div>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#4A6585', marginBottom: '18px' }}>Contacto</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: '#8BA3C7' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60A5FA', flexShrink: 0 }}>
                <IconPhone size={13} />
              </div>
              <Link href="tel:+50252836343" style={{ color: '#8BA3C7', textDecoration: 'none' }}>+502 5283-6343</Link>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: '#8BA3C7' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60A5FA', flexShrink: 0 }}>
                <IconMail size={13} />
              </div>
              <Link href="mailto:contacto@teknao.com.gt" style={{ color: '#8BA3C7', textDecoration: 'none' }}>contacto@teknao.com.gt</Link>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: '#8BA3C7' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60A5FA', flexShrink: 0 }}>
                <IconMapPin size={13} />
              </div>
              <span>Ciudad de Guatemala</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: '#8BA3C7' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60A5FA', flexShrink: 0 }}>
                <IconClock size={13} />
              </div>
              <span>L–V 8:00 AM – 6:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', paddingTop: '28px', fontSize: '13px', color: '#4A6585' }}>
        <span>© 2026 Teknao. Todos los derechos reservados.</span>
        <span>Ciudad de Guatemala, Guatemala</span>
      </div>
    </footer>
  );
}