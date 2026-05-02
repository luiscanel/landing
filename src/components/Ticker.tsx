"use client";

const brands = [
  { name: "HPE", color: "#00A9CE" },
  { name: "Dell", color: "#007DB8" },
  { name: "VMware", color: "#607078" },
  { name: "Proxmox", color: "#E58C00" },
  { name: "Veeam", color: "#082D62" },
  { name: "Malwarebytes", color: "#F2C942" },
  { name: "ESET", color: "#F5592F" },
  { name: "Microsoft", color: "#00A4EF" },
  { name: "Cisco", color: "#0496D3" },
  { name: "Ubiquiti", color: "#4E8D6D" },
];

export default function Ticker() {
  const items = [...brands, ...brands];

  return (
    <div style={{ overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', backgroundColor: '#111B2E', padding: '18px 0' }}>
      <div style={{ display: 'flex', gap: '30px', whiteSpace: 'nowrap', animation: 'scroll 35s linear infinite' }}>
        {items.map((brand, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '8px',
              backgroundColor: 'rgba(22,32,56,0.3)',
              border: '1px solid rgba(255,255,255,0.04)',
            }}
          >
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: brand.color, boxShadow: `0 0 8px ${brand.color}60` }} />
            <span style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#8BA3C7' }}>
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}