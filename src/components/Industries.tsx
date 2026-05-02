"use client";

import { IconBuilding, IconHospital, IconGraduationCap, IconShoppingCart, IconFactory, IconHardHat, IconTruck, IconRestaurant } from "./Icon";

const industries = [
  { icon: <IconRestaurant size={24} />, name: "Restaurantes" },
  { icon: <IconBuilding size={24} />, name: "Banca" },
  { icon: <IconHospital size={24} />, name: "Salud" },
  { icon: <IconGraduationCap size={24} />, name: "Educación" },
  { icon: <IconShoppingCart size={24} />, name: "Retail" },
  { icon: <IconFactory size={24} />, name: "Manufactura" },
  { icon: <IconHardHat size={24} />, name: "Construcción" },
  { icon: <IconTruck size={24} />, name: "Logística" },
];

export default function Industries() {
  return (
    <section id="industrias" style={{ padding: '110px 6%', backgroundColor: '#0D1422' }} className="industries-section">
      <div style={{ marginBottom: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
          <div style={{ width: '20px', height: '2px', backgroundColor: '#60A5FA', borderRadius: '2px' }} />
          <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#60A5FA' }}>
            Sectores
          </span>
        </div>
        <h2 style={{ fontSize: 'clamp(32px, 4vw, 54px)', fontWeight: 900, letterSpacing: '-1.5px', lineHeight: 1.05, color: '#F8FAFF' }}>
          Experiencia en<br />tu industria
        </h2>
        <p style={{ fontSize: '17px', color: '#8BA3C7', marginTop: '14px', maxWidth: '520px', lineHeight: 1.7 }}>
          Conocemos los retos tecnológicos específicos de cada sector empresarial en Guatemala.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '12px', marginTop: '48px' }}>
        {industries.map((ind, i) => (
          <div
            key={i}
            style={{
              backgroundColor: '#111B2E',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '14px',
              padding: '22px 16px',
              textAlign: 'center',
            }}
          >
            <div style={{ width: '40px', height: '40px', margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60A5FA' }}>
              {ind.icon}
            </div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#8BA3C7' }}>{ind.name}</div>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 768px) {
          .industries-section {
            padding: 80px 5% !important;
          }
        }
      `}</style>
    </section>
  );
}