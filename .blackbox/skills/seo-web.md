# SEO Web Development Skill

## Meta Tags Esenciales

```html
<head>
  <title>Título SEO | Brand (50-60 chars)</title>
  <meta name="description" content="Descripción única (150-160 chars)">
  <meta name="keywords" content="palabra1, palabra2, palabra3">
  <meta name="author" content="Nombre">
  <meta name="robots" content="index, follow">
  
  <!-- Open Graph -->
  <meta property="og:title" content="Título para redes">
  <meta property="og:description" content="Descripción para redes">
  <meta property="og:image" content="/images/share.jpg">
  <meta property="og:url" content="https://dominio.com">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="es_ES">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Título">
  <meta name="twitter:description" content="Descripción">
  <meta name="twitter:image" content="/images/share.jpg">
  
  <!-- Canonical -->
  <link rel="canonical" href="https://dominio.com/pagina">
</head>
```

## Structured Data (Schema.org)

```json
// Organization
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Nombre Empresa",
  "url": "https://dominio.com",
  "logo": "https://dominio.com/logo.png",
  "sameAs": [
    "https://facebook.com/empresa",
    "https://twitter.com/empresa"
  ]
}

// LocalBusiness
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Nombre",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Dirección",
    "addressLocality": "Ciudad",
    "addressRegion": "Región",
    "postalCode": "CP",
    "addressCountry": "ES"
  },
  "telephone": "+34912345678",
  "openingHours": "Mo-Fr 09:00-18:00"
}

// Product
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Producto",
  "description": "Descripción",
  "image": "https://dominio.com/imagen.jpg",
  "offers": {
    "@type": "Offer",
    "price": "99.99",
    "priceCurrency": "EUR"
  }
}

// FAQ
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Pregunta frecuente?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Respuesta detallada."
      }
    }
  ]
}
```

## Best Practices SEO

### Títulos y Headings
- **H1:** Solo 1 por página, incluye keyword principal
- **H2-H6:** Estructura jerárquica lógica (3+ por página)
- Título: 50-60 caracteres, unique y descriptivo
- Meta description: 150-160 caracteres, call-to-action

### Contenido SEO
```markdown
# Keyword placement estratégico
- Title tag: al inicio
- H1: exact keyword
- H2: keyword + variantes
- Primeros 100 palabras: keyword principal
- Densidad: 1-2% (no spam)
- LSI keywords: sinónimos y variaciones
- Links internos: 2-3 por página
- Imágenes: alt text descriptivo
```

### URLs Amigables
```javascript
// ✅ Correcto
"https://dominio.com/blog/guia-seo-2026"
"https://dominio.com/productos/zapatillas-nike-air"

// ❌ Incorrecto
"https://dominio.com/p?id=12345"
"https://dominio.com/categoria/123/subcat/456"
```

### Imágenes Optimizadas
```html
<img src="imagen.jpg" 
     alt="Descripción con keyword [resolución]" 
     width="800" 
     height="600"
     loading="lazy"
     decoding="async">
```

### Core Web Vitals Targets
| Métrica | Target | Optimización |
|--------|--------|-------------|
| LCP | < 2.5s | Preload imágenes hero, CDN, next/image |
| FID | < 100ms | Code splitting, defer JS pesado |
| CLS | < 0.1 | Dimensiones explícitas, font-display: swap |

### Sitemap XML
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://dominio.com/</loc>
    <lastmod>2026-04-29</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://dominio.com/pagina</loc>
    <lastmod>2026-04-29</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

### Robots.txt
```text
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /carrito/
Disallow: /checkout/

Sitemap: https://dominio.com/sitemap.xml
```

## Next.js SEO Patterns

```tsx
// app/layout.tsx
export const metadata = {
  title: {
    default: 'Título Default',
    template: '%s | Brand',
    absolute: 'Título Absoluto'
  },
  description: 'Descripción SEO',
  keywords: ['keyword1', 'keyword2'],
  openGraph: {
    title: 'OG Title',
    description: 'OG Description',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'es_ES',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Twitter Title',
    images: ['/twitter-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

// Dynamic metadata
export async function generateMetadata({ params }) {
  const product = await getProduct(params.id)
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      images: [{ url: product.image }]
    }
  }
}
```

## Checklist SEO Final

- [ ] Title tag único (< 60 chars)
- [ ] Meta description única (< 160 chars)
- [ ] H1 con keyword principal
- [ ] URLs amigables
- [ ] Schema markup válido
- [ ] Open Graph tags
- [ ] Canonical URL
- [ ] sitemap.xml en raíz
- [ ] robots.txt configurado
- [ ] Imágenes con alt text
- [ ] SSL (HTTPS)
- [ ] Mobile responsive
- [ ] Page speed < 3s
- [ ] Structured data validado (Google Rich Results Test)
- [ ] Google Search Console verificado

## Herramientas de Testing

| Herramienta | URL |
|-------------|-----|
| Google Rich Results Test | https://search.google.com/test/rich-results |
| PageSpeed Insights | https://pagespeed.web.dev |
| Lighthouse | DevTools Chrome |
| Screaming Frog | screamingfrog.co.uk |
| Semrush | semrush.com |
| Ahrefs | ahrefs.com |