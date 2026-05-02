import type { Metadata, Viewport } from "next";
import NotFound from "./not-found";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#06090F",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://teknao.gt"),
  title: {
    default: "Teknao — Soporte TI para PYMES en Guatemala",
    template: "%s | Teknao",
  },
  description:
    "Soporte TI profesional con respuesta garantizada en menos de 2 horas. Servidores, redes y ciberseguridad que funcionan 24/7 para que tu negocio nunca se detenga.",
  keywords: [
    "soporte TI Guatemala",
    "soporte informático PYMES",
    "servidores Guatemala",
    "ciberseguridad Guatemala",
    "redes y cableado",
    "outsourcing IT",
    "mantenimiento de equipos",
    "backup y recuperación",
    "firewall seguridad",
    "soporte técnico 24/7",
  ],
  authors: [{ name: "Teknao" }],
  creator: "Teknao",
  publisher: "Teknao",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://teknao.gt",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "es_GT",
    alternateLocale: "en_US",
    url: "https://teknao.gt",
    siteName: "Teknao",
    title: "Teknao — Soporte TI para PYMES en Guatemala",
    description: "Soporte TI profesional con respuesta garantizada en menos de 2 horas. Servidores, redes y ciberseguridad 24/7.",
    images: [
      {
        url: "https://teknao.gt/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Teknao - Soporte TI para PYMES en Guatemala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teknao — Soporte TI para PYMES",
    description: "Tu negocio no puede pararse. Soporte TI profesional en Guatemala.",
    images: ["https://teknao.gt/og-image.svg"],
  },
  category: "technology",
  classification: "Business Services",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Teknao",
  description: "Soporte TI profesional para PYMES en Guatemala. Servidores, redes y ciberseguridad 24/7.",
  url: "https://teknao.gt",
  logo: "https://teknao.gt/og-image.svg",
  image: "https://teknao.gt/og-image.svg",
  telephone: "+50252836343",
  email: "contacto@teknao.com.gt",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ciudad de Guatemala",
    addressLocality: "Guatemala",
    addressCountry: "GT",
  },
  areaServed: {
    "@type": "Country",
    name: "Guatemala",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  sameAs: [
    "https://www.facebook.com/teknao",
    "https://www.instagram.com/teknao",
    "https://wa.me/50252836343",
  ],
  potentialAction: {
    "@type": "ContactAction",
    name: "Solicitar cotización",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://wa.me/50252836343",
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Teknao",
  url: "https://teknao.gt",
  logo: "https://teknao.gt/og-image.svg",
  image: "https://teknao.gt/og-image.svg",
  description: "Empresa de soporte tecnológico para PYMES en Guatemala con más de 10 años de experiencia.",
  foundingLocation: "Guatemala",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 5,
    maxValue: 20,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+50252836343",
    contactType: "customer service",
    availableLanguage: ["Spanish", "English"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body style={{ backgroundColor: '#06090F', color: '#F8FAFF', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>{children}</body>
    </html>
  );
}