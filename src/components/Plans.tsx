"use client";

import Link from "next/link";

const plans = [
  {
    tier: "Plan Básico",
    name: "Tranquilidad TI",
    pitch:
      "Protección esencial y soporte confiable para empresas que están empezando a ordenar su TI.",
    features: [
      "Soporte remoto ilimitado (L–V 8am–5pm)",
      "Monitoreo proactivo de infraestructura",
      "Backup automático — datos siempre seguros",
      "Reporte mensual con recomendaciones",
    ],
    featured: false,
  },
  {
    tier: "Plan Pro",
    name: "Protección Total",
    pitch:
      "Para empresas que necesitan seguridad avanzada, presencia física y tiempo de respuesta garantizado.",
    features: [
      "Todo lo del plan Básico",
      "2 visitas técnicas presenciales al mes",
      "Blindaje total contra ciberataques",
      "Actualizaciones de seguridad gestionadas",
      "Soporte prioritario con SLA garantizado",
    ],
    featured: true,
    ribbon: "Más elegido",
  },
  {
    tier: "Plan Premium",
    name: "TI Sin Límites",
    pitch:
      "Para empresas que exigen disponibilidad total y soporte enterprise sin ninguna restricción.",
    features: [
      "Todo lo del plan Pro",
      "Soporte 24/7 sin límite de horas",
      "Capacitación continua para tu equipo",
      "Infraestructura virtual nivel enterprise",
      "SLA premium con penalidades económicas",
    ],
    featured: false,
  },
];

export default function Plans() {
  return (
    <section id="planes" style={{ padding: '110px 6%', backgroundColor: '#0D1422' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <div style={{ width: '20px', height: '2px', backgroundColor: '#60A5FA', borderRadius: '2px' }} />
          <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#60A5FA' }}>
            Planes de soporte
          </span>
        </div>
        <h2 style={{ fontSize: 'clamp(32px, 4vw, 54px)', fontWeight: 800, letterSpacing: '-1.5px', lineHeight: 1.05, marginBottom: '16px', color: '#F8FAFF' }}>
          Elige el nivel de<br />protección que necesitas
        </h2>
        <p style={{ fontSize: '17px', color: '#8BA3C7', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
          Sin contratos de largo plazo. Sin costos ocultos. Cancela cuando quieras.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '64px' }} className="plans-grid">
        {plans.map((plan, i) => (
          <div
            key={i}
            style={{
              backgroundColor: plan.featured ? '#162038' : '#111B2E',
              border: plan.featured ? '1.5px solid rgba(37,99,235,0.5)' : '1px solid rgba(255,255,255,0.06)',
              borderRadius: '20px',
              padding: '36px',
              position: 'relative',
            }}
          >
            {plan.featured && plan.ribbon && (
              <div style={{
                position: 'absolute',
                top: '-13px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: '#2563EB',
                color: 'white',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                padding: '4px 16px',
                borderRadius: '9999px',
                whiteSpace: 'nowrap',
              }}>
                {plan.ribbon}
              </div>
            )}
            <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#60A5FA', marginBottom: '8px' }}>
              {plan.tier}
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: '8px', color: '#F8FAFF' }}>{plan.name}</h3>
            <p style={{ fontSize: '13.5px', color: '#8BA3C7', marginBottom: '28px', lineHeight: 1.6 }}>{plan.pitch}</p>
            <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.06)', marginBottom: '24px' }} />
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '11px', marginBottom: '32px' }}>
              {plan.features.map((feat, j) => (
                <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: '#8BA3C7' }}>
                  <span style={{
                    width: '19px',
                    height: '19px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '10px',
                    backgroundColor: plan.featured ? 'rgba(37,99,235,0.25)' : 'rgba(37,99,235,0.15)',
                    color: '#60A5FA',
                    flexShrink: 0,
                  }}>✓</span>
                  {feat}
                </li>
              ))}
            </ul>
            <Link
              href="https://wa.me/50252836343"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                width: '100%',
                padding: '12px',
                borderRadius: '12px',
                textAlign: 'center',
                fontSize: '14.5px',
                fontWeight: 600,
                textDecoration: 'none',
                backgroundColor: plan.featured ? '#2563EB' : 'transparent',
                border: plan.featured ? 'none' : '1px solid rgba(37,99,235,0.3)',
                color: '#60A5FA',
                cursor: 'pointer',
              }}
            >
              {i === 0 ? "Cotizar sin compromiso" : i === 1 ? "Solicitar información" : "Hablar con un asesor"}
            </Link>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 768px) {
          .plans-grid {
            grid-template-columns: 1fr !important;
            margin-top: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}