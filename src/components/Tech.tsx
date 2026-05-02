"use client";

const tech = [
  { name: "HPE", color: "#00A9CE", bg: "#00A9CE20" },
  { name: "Dell", color: "#007DB8", bg: "#007DB820" },
  { name: "VMware", color: "#607078", bg: "#60707820" },
  { name: "Proxmox", color: "#E58C00", bg: "#E58C0020" },
  { name: "Veeam", color: "#082D62", bg: "#082D6220" },
  { name: "Malwarebytes", color: "#F2C942", bg: "#F2C94220" },
  { name: "ESET", color: "#F5592F", bg: "#F5592F20" },
  { name: "Microsoft", color: "#00A4EF", bg: "#00A4EF20" },
  { name: "Cisco", color: "#0496D3", bg: "#0496D320" },
  { name: "Ubiquiti", color: "#4E8D6D", bg: "#4E8D6D20" },
];

export default function Tech() {
  return (
    <section id="tecnologias" style={{ padding: '110px 6%', backgroundColor: '#06090F' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <div style={{ width: '20px', height: '2px', backgroundColor: '#60A5FA', borderRadius: '2px' }} />
          <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#60A5FA' }}>
            Tecnologías
          </span>
        </div>
        <h2 style={{ fontSize: 'clamp(32px, 4vw, 54px)', fontWeight: 800, letterSpacing: '-1.5px', lineHeight: 1.05, color: '#F8FAFF' }}>
          Las mejores herramientas,<br />en las mejores manos
        </h2>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
        {tech.map((t, i) => (
          <div
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 20px',
              borderRadius: '12px',
              border: `1px solid ${t.color}40`,
              backgroundColor: t.bg,
            }}
          >
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: t.color, boxShadow: `0 0 8px ${t.color}` }} />
            <span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '1px', color: t.color }}>{t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}