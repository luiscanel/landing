"use client";

import { IconServer, IconShield, IconCode, IconBuilding, IconUsers, IconCheck, IconArrowRight, IconClock, IconPhone, IconMail, IconMapPin, IconTrendingUp, IconZap, IconDollar } from "./Icon";

const services = [
  {
    num: "01",
    icon: <IconServer size={24} />,
    name: "Infraestructura y Redes",
    body: "Servidores, redes y cableado estructurado diseñados para la continuidad operativa de tu empresa. Sin tiempo de inactividad.",
    tags: ["Servidores", "LAN / WAN", "Cableado", "VPN"],
  },
  {
    num: "02",
    icon: <IconShield size={24} />,
    name: "Ciberseguridad",
    body: "Protección integral contra virus y pérdida de datos. Backup automático con recuperación en minutos.",
    tags: ["Anti-ransomware", "Backup", "Firewall", "Monitoreo 24/7"],
  },
  {
    num: "03",
    icon: <IconCode size={24} />,
    name: "Desarrollo de Software",
    body: "Sistemas a la medida que automatizan tus procesos. Escalables, intuitivos e integrados con las herramientas que ya usas.",
    tags: ["Apps a la medida", "Automatización", "Integraciones"],
  },
  {
    num: "04",
    icon: <IconBuilding size={24} />,
    name: "Outsourcing IT",
    body: "Tu departamento de TI completo sin contratar personal. Equipo dedicado que conoce tu negocio, hasta 40% más económico.",
    tags: ["Soporte dedicado", "Gestión proactiva", "Ahorro 40%"],
  },
];

export default function Services() {
  return (
    <section id="servicios" style={{ padding: '110px 6%', backgroundColor: '#0D1422', position: 'relative', overflow: 'hidden' }} className="services-section">
      <div style={{ position: 'absolute', top: 0, right: 0, width: '500px', height: '500px', borderRadius: '50%', background: 'rgba(37,99,235,0.03)', filter: 'blur(150px)', pointerEvents: 'none' }} />
      
      <div style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
          <div style={{ width: '20px', height: '2px', backgroundColor: '#60A5FA', borderRadius: '2px' }} />
          <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#60A5FA' }}>
            Lo que hacemos
          </span>
        </div>
        <h2 style={{ fontSize: 'clamp(32px, 4vw, 54px)', fontWeight: 900, letterSpacing: '-1.5px', lineHeight: 1.05, color: '#F8FAFF' }}>
          Soluciones TI completas<br />para tu empresa
        </h2>
        <p style={{ fontSize: '17px', color: '#8BA3C7', marginTop: '14px', maxWidth: '520px', lineHeight: 1.7 }}>
          Desde infraestructura hasta ciberseguridad, cubrimos cada aspecto tecnológico para que tú te concentres en lo que importa.
        </p>
      </div>

      <div style={{ position: 'relative', zIndex: 10, marginTop: '64px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', backgroundColor: 'rgba(59,130,246,0.12)', borderRadius: '18px', overflow: 'hidden' }} className="services-grid">
        {services.map((srv, i) => (
          <div
            key={i}
            style={{
              backgroundColor: '#0D1422',
              padding: '40px 36px',
              position: 'relative',
            }}
          >
            <div style={{ position: 'absolute', top: '36px', right: '32px', width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#162038', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4A6585' }}>
              <IconArrowRight size={14} />
            </div>
            <div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '1px', color: '#4A6585', marginBottom: '20px' }}>
              {srv.num}
            </div>
            <div style={{ width: '52px', height: '52px', borderRadius: '14px', backgroundColor: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60A5FA', marginBottom: '20px' }}>
              {srv.icon}
            </div>
            <h3 style={{ fontSize: '22px', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: '10px', color: '#F8FAFF' }}>
              {srv.name}
            </h3>
            <p style={{ fontSize: '14.5px', color: '#8BA3C7', lineHeight: 1.65, marginBottom: '18px' }}>
              {srv.body}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {srv.tags.map((tag, j) => (
                <span
                  key={j}
                  style={{
                    backgroundColor: 'rgba(37,99,235,0.08)',
                    border: '1px solid rgba(37,99,235,0.15)',
                    borderRadius: '9999px',
                    padding: '4px 12px',
                    fontSize: '12px',
                    color: '#8BA3C7',
                    fontWeight: 500,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 768px) {
          .services-section {
            padding: 60px 5% !important;
          }
          .services-grid {
            grid-template-columns: 1fr !important;
          }
          .services-card {
            padding: 28px 20px !important;
          }
          .services-icon {
            width: 44px !important;
            height: 44px !important;
          }
        }
      `}</style>
    </section>
  );
}