"use client";

const kpis = [
  { value: "10+", label: "Años en Guatemala" },
  { value: "<2h", label: "Respuesta SLA" },
  { value: "99.9%", label: "Uptime garantizado" },
  { value: "40%", label: "Ahorro vs contratar" },
];

const alerts = [
  { dot: "#22C55E", text: "Servidor principal — operando normalmente", time: "Ahora" },
  { dot: "#3B82F6", text: "Backup automático completado con éxito", time: "14 min" },
  { dot: "#22C55E", text: "Firewall — sin amenazas detectadas", time: "1 hr" },
  { dot: "#EAB308", text: "Actualización de seguridad en progreso", time: "2 hr" },
];

export default function Hero() {
  return (
    <section style={{ minHeight: '100vh', padding: '100px 6% 80px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '60px', alignItems: 'center', position: 'relative', overflow: 'hidden', backgroundColor: '#06090F' }} className="hero-section">
      {/* Backgrounds */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, background: 'radial-gradient(ellipse 60% 80% at 75% 50%, rgba(37,99,235,0.12) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(14,165,233,0.06) 0%, transparent 60%)' }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, backgroundImage: 'linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)', backgroundSize: '80px 80px', maskImage: 'radial-gradient(ellipse 70% 70% at 70% 50%, black 30%, transparent 100%)' }} />

      {/* LEFT */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
          <div style={{ width: '32px', height: '2px', backgroundColor: '#3B82F6', borderRadius: '2px' }} />
          <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#60A5FA' }}>Soporte TI para PYMES · Guatemala</span>
        </div>

        <h1 style={{ fontSize: 'clamp(44px, 5.5vw, 78px)', fontWeight: 900, lineHeight: 0.97, letterSpacing: '-2.5px', marginBottom: '28px', color: '#F8FAFF' }} className="hero-title">
          Tu negocio<br />no puede<br />
          <span style={{ background: 'linear-gradient(100deg, #3B82F6 0%, #BAE6FD 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>pararse.</span>
        </h1>

        <p style={{ fontSize: '17px', color: '#8BA3C7', maxWidth: '460px', lineHeight: 1.7, marginBottom: '40px' }} className="hero-text">
          Soporte TI profesional con respuesta garantizada en menos de 2 horas. Servidores, redes y ciberseguridad que funcionan 24/7 para que tú te concentres en crecer.
        </p>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '52px' }}>
          <a href="https://wa.me/50252836343" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', backgroundColor: '#1FAD52', color: 'white', fontSize: '15px', fontWeight: 600, padding: '14px 26px', borderRadius: '10px', textDecoration: 'none', cursor: 'pointer' }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767-.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            WhatsApp
          </a>
          <a href="tel:+50252836343" style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', backgroundColor: 'transparent', color: 'white', fontSize: '15px', fontWeight: 500, padding: '14px 26px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.15)', textDecoration: 'none', cursor: 'pointer' }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
            Llamar ahora
          </a>
          <a href="#planes" style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', backgroundColor: 'transparent', color: 'white', fontSize: '15px', fontWeight: 500, padding: '14px 26px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.15)', textDecoration: 'none', cursor: 'pointer' }}>Ver planes →</a>
        </div>

        {/* KPIs */}
        <div style={{ display: 'flex', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '14px', overflow: 'hidden', backgroundColor: '#111B2E' }} className="hero-kpis">
          {kpis.map((kpi, i) => (
            <div key={i} style={{ padding: '18px 22px', flex: 1, borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }} className="hero-kpi">
              <div style={{ fontSize: '26px', fontWeight: 900, color: '#60A5FA', lineHeight: 1, marginBottom: '4px' }}>{kpi.value}</div>
              <div style={{ fontSize: '11px', color: '#4A6585', fontWeight: 500 }}>{kpi.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT - Monitor Card */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ backgroundColor: '#111B2E', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '20px', padding: '32px', position: 'relative', overflow: 'hidden' }} className="hero-monitor">
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #2563EB, #0EA5E9, #60A5FA)' }} />
          <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#60A5FA', marginBottom: '16px' }}>Monitor de infraestructura</div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
            {alerts.map((alert, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: '#162038', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px', padding: '12px 14px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', flexShrink: 0, backgroundColor: alert.dot, boxShadow: `0 0 6px ${alert.dot}` }} />
                <span style={{ flex: 1, fontSize: '13.5px', color: '#8BA3C7' }}>{alert.text}</span>
                <span style={{ fontSize: '11px', color: '#4A6585' }}>{alert.time}</span>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)', borderRadius: '10px', padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '13px', color: '#8BA3C7' }}>Tiempo de respuesta promedio</span>
            <span style={{ backgroundColor: '#2563EB', color: 'white', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '6px' }}>47 minutos</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-section {
            grid-template-columns: 1fr !important;
            padding: 90px 5% 50px !important;
            gap: 30px !important;
          }
          .hero-monitor {
            padding: 16px !important;
            border-radius: 14px !important;
          }
          .hero-title {
            font-size: 38px !important;
            line-height: 1.1 !important;
          }
          .hero-text {
            font-size: 15px !important;
            margin-bottom: 28px !important;
          }
          .hero-kpis {
            flex-direction: column !important;
            gap: 0 !important;
          }
          .hero-kpi {
            padding: 14px !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.06) !important;
          }
        }
        @media (max-width: 600px) {
          .hero-section {
            padding: 80px 5% 40px !important;
          }
          .hero-monitor {
            padding: 12px !important;
          }
          .hero-title {
            font-size: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}