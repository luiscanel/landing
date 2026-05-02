"use client";

const steps = [
  { num: "01", title: "Diagnóstico", desc: "Evaluamos tu infraestructura y detectamos vulnerabilidades y oportunidades de mejora sin costo." },
  { num: "02", title: "Propuesta", desc: "Solución 100% personalizada con presupuesto claro, sin letra pequeña ni costos sorpresa." },
  { num: "03", title: "Implementación", desc: "Ejecutamos con mínimo impacto. Tu equipo trabaja con normalidad mientras lo hacemos." },
  { num: "04", title: "Soporte continuo", desc: "Monitoreo proactivo, soporte técnico dedicado y mejora continua de toda tu tecnología." },
];

export default function Process() {
  return (
    <section id="proceso" style={{ padding: '110px 6%', backgroundColor: '#06090F' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <div style={{ width: '20px', height: '2px', backgroundColor: '#60A5FA', borderRadius: '2px' }} />
          <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#60A5FA' }}>
            Cómo trabajamos
          </span>
        </div>
        <h2 style={{ fontSize: 'clamp(32px, 4vw, 54px)', fontWeight: 800, letterSpacing: '-1.5px', lineHeight: 1.05, color: '#F8FAFF' }}>
          Sencillo, rápido<br />y sin interrupciones
        </h2>
        <p style={{ fontSize: '17px', color: '#8BA3C7', marginTop: '12px', maxWidth: '520px', margin: '12px auto 0', lineHeight: 1.7 }}>
          Un proceso probado en cientos de empresas guatemaltecas. Tu operación nunca se detiene.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginTop: '72px', position: 'relative' }}>
        {/* Connector line - hidden on mobile */}
        <div style={{ display: 'none', position: 'absolute', top: '28px', left: '12.5%', right: '12.5%', height: '1px', background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)', pointerEvents: 'none' }} />

        {steps.map((step, i) => (
          <div
            key={i}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 16px', position: 'relative', zIndex: 10 }}
          >
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: i === 0 ? 'rgba(37,99,235,0.1)' : '#111B2E',
              border: i === 0 ? '1.5px solid rgba(37,99,235,0.5)' : '1px solid rgba(255,255,255,0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              fontWeight: 800,
              color: '#60A5FA',
              marginBottom: '20px',
              boxShadow: i === 0 ? '0 0 0 6px rgba(37,99,235,0.06)' : 'none',
            }}>
              {step.num}
            </div>
            <h3 style={{ fontSize: '17px', fontWeight: 800, marginBottom: '8px', color: '#F8FAFF' }}>{step.title}</h3>
            <p style={{ fontSize: '13px', color: '#8BA3C7', lineHeight: 1.6 }}>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}