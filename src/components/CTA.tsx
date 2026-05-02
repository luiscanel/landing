"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <div id="contacto" style={{ background: 'linear-gradient(to bottom, #111B2E, #162038)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '100px 6%', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 50% 60% at 50% 100%, rgba(37,99,235,0.12) 0%, transparent 70%)' }} />
      
      <div style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)', borderRadius: '9999px', padding: '6px 16px', fontSize: '12px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#60A5FA', marginBottom: '24px' }}>
          ⚡ Diagnóstico gratuito sin compromiso
        </div>
        
        <h2 style={{ fontSize: 'clamp(30px, 4.5vw, 58px)', fontWeight: 800, letterSpacing: '-2px', lineHeight: 1.05, marginBottom: '16px', color: '#F8FAFF' }}>
          ¿Cuánto te cuesta<br />no tener soporte TI?
        </h2>
        
        <p style={{ fontSize: '17px', color: '#8BA3C7', maxWidth: '480px', margin: '0 auto 40px', lineHeight: 1.7 }}>
          Cada hora sin sistema es dinero perdido. No esperes a que ocurra el desastre para tomar acción.
        </p>
        
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            href="https://wa.me/50252836343"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#1FAD52',
              color: 'white',
              fontSize: '15px',
              fontWeight: 600,
              padding: '14px 24px',
              borderRadius: '12px',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Pedir diagnóstico gratis
          </Link>
        </div>
        
        <p style={{ fontSize: '13px', color: '#4A6585', marginTop: '20px' }}>
          Sin contratos. Sin compromisos. Solo resultados.
        </p>
      </div>
    </div>
  );
}