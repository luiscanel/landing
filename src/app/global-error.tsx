"use client";

import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="es">
      <body style={{ backgroundColor: '#06090F', color: '#F8FAFF', fontFamily: 'system-ui, sans-serif', WebkitFontSmoothing: 'antialiased', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', padding: '24px', maxWidth: '400px' }}>
          <div style={{ fontSize: '60px', marginBottom: '24px' }}>⚠️</div>
          <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: '#F8FAFF' }}>Algo salió mal</h2>
          <p style={{ color: '#8BA3C7', marginBottom: '32px' }}>
            Lo sentimos, ocurrió un error. Por favor intenta de nuevo.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <button
              onClick={() => reset()}
              style={{ backgroundColor: '#2563EB', color: 'white', fontWeight: 600, padding: '12px 24px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}
            >
              Intentar de nuevo
            </button>
            <Link
              href="/"
              style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'white', fontWeight: 600, padding: '12px 24px', borderRadius: '8px', textDecoration: 'none' }}
            >
              Ir al inicio
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}