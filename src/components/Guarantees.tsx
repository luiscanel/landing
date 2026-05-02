"use client";

import { IconShield, IconClock, IconServer, IconZap } from "./Icon";

const guarantees = [
  {
    icon: <IconShield size={20} />,
    title: "Protección Integral",
    desc: "Ransomware, virus, phishing y pérdida de datos. Backup automático con recuperación garantizada.",
  },
  {
    icon: <IconServer size={20} />,
    title: "Backup Verificado",
    desc: "Probamos copias de seguridad diariamente. Si no podemos restaurar, tú no pagas ese mes.",
  },
  {
    icon: <IconClock size={20} />,
    title: "Respuesta en 2 Horas",
    desc: "Tiempo de respuesta crítico en menos de 2 horas durante horario laboral.",
  },
  {
    icon: <IconZap size={20} />,
    title: "Precio Fijo",
    desc: "Sin cargos ocultos. Sabes exactamente lo que facturamos cada mes.",
  },
];

export default function Guarantees() {
  return (
    <section id="garantias" style={{ padding: '110px 6%', backgroundColor: '#06090F', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: '-200px', top: '-200px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '80px', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <div style={{ width: '20px', height: '2px', backgroundColor: '#60A5FA', borderRadius: '2px' }} />
            <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#60A5FA' }}>
              Ciberseguridad
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 54px)', fontWeight: 900, letterSpacing: '-1.5px', lineHeight: 1.05, marginBottom: '14px', color: '#F8FAFF' }}>
            Protegemos tu Negocio<br />Contra Amenazas Reales
          </h2>
          <p style={{ fontSize: '17px', color: '#8BA3C7', marginTop: '14px', maxWidth: '520px', lineHeight: 1.7 }}>
            Ransomware, virus, phishing y pérdida de datos. Tu información segura con monitoreo 24/7 y recuperación garantizada.
          </p>
          <div style={{ marginTop: '36px' }}>
            <a
              href="https://wa.me/50252836343"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '9px',
                backgroundColor: '#2563EB',
                color: 'white',
                fontSize: '15px',
                fontWeight: 600,
                padding: '14px 26px',
                borderRadius: '10px',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              Hablar con un asesor
            </a>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
          {guarantees.map((item, i) => (
            <div
              key={i}
              style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '24px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '14px', backgroundColor: '#111B2E' }}
            >
              <div style={{ width: '44px', height: '44px', flexShrink: 0, borderRadius: '10px', backgroundColor: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60A5FA' }}>
                {item.icon}
              </div>
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '4px', color: '#F8FAFF' }}>{item.title}</h4>
                <p style={{ fontSize: '13px', color: '#8BA3C7', lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}