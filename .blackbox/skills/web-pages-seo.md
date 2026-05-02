# Web Pages Generation + SEO Skill
**Generación de páginas web optimizadas para SEO y posicionamiento en buscadores**
## Arquitectura de Página SEO
### Estructura HTML Semántica
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <!-- Meta Tags SEO Críticos -->
  <title>[KEYWORD PRINCIPAL] | [Marca] (50-60 chars)</title>
  <meta name="description" content="[KEYWORD] + [beneficio único] (150-160 chars)">
  <meta name="keywords" content="[keyword1], [keyword2], [long-tail]">
  <meta name="robots" content="index, follow">
  
  <!-- Open Graph para Redes Sociales -->
  <meta property="og:title" content="[TITLE 50-60]">
  <meta property="og:description" content="[DESC 150-160]">
  <meta property="og:image" content="/og-image.jpg">
  <meta property="og:url" content="https://dominio.com/[slug]">
  <meta property="og:type" content="website">
  
  <!-- Canonical -->
  <link rel="canonical" href="https://dominio.com/[slug]">
  
  <!-- Schema.org JSON-LD -->
  <script type="application/ld+json">[SCHEMA_DATA]</script>
</head>
<body>
  <!--skip-link para accesibilidad -->
  <a href="#main-content" class="skip-link">Saltar al contenido principal</a>
  
  <header role="banner">
    <nav role="navigation" aria-label="Navegación principal">
      <ul>
        <li><a href="/" aria-current="page">Inicio</a></li>
        <li><a href="/[slug]">Página</a></li>
      </ul>
    </nav>
  </header>
  
  <main id="main-content" role="main">
    <article>
      <!-- H1: keyword + beneficio (único por página) -->
      <h1>[KEYWORD PRINCIPAL] + [Verbo de acción]</h1>
      
      <!-- Contenido con jerarquía H2-H6 -->
      <section>
        <h2>[KEYWORD] + [categoría]</h2>
        <p>Contenido optimizado con [LSI keywords]...</p>
        
        <h3>[Variante keyword] + [subtema]</h3>
        <p>Más contenido...</p>
      </section>
      
      <!-- FAQ Schema -->
      <section aria-labelledby="faq-heading">
        <h2 id="faq-heading">Preguntas Frecuentes sobre [KEYWORD]</h2>
        <dl>
          <dt>[Pregunta SEO]</dt>
          <dd>[Respuesta con keyword]</dd>
        </dl>
      </section>
    </article>
    
    <!-- Sidebar con CTAs -->
    <aside role="complementary">
      <div class="cta-box" itemscope itemtype="https://schema.org/Product">
        <h3>[CTA con keyword]</h3>
        <button>[CTA]</button>
      </div>
    </aside>
  </main>
  
  <footer role="contentinfo">
    <nav aria-label="Navegación del pie">
      <a href="/sitemap.xml">Mapa del sitio</a>
    </nav>
  </footer>
</body>
</html>
```
## Next.js 14+ App Router SEO Patterns
### Estructura de Archivos
```
app/
├── [slug]/
│   ├── page.tsx          # Página principal
│   ├── loading.tsx       # Loading state
│   ├── error.tsx         # Error boundary
│   └── not-found.tsx     # 404 personalizado
├── sitemap.ts            # Sitemap dinámico
├── robots.ts             # Robots.txt dinámico
└── metadata.ts           # Metadata export
```
### metadata.ts Completo
```tsx
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = await getPage(slug)
  
  return {
    // Title: [KEYWORD] | [MARCA]
    title: `${page.title} | Teknao`,
    
    // Description: 150-160 chars con keyword
    description: page.metaDescription,
    
    // Keywords (opcional, Google no lo usa)
    keywords: [page.mainKeyword, ...page.lsiKeywords],
    
    // Authors
    authors: [{ name: 'Teknao', url: 'https://teknao.com' }],
    
    // Robots
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
    },
    
    // Open Graph
    openGraph: {
      type: 'website',
      locale: 'es_ES',
      url: `https://teknao.com/${slug}`,
      siteName: 'Teknao',
      title: page.title,
      description: page.metaDescription,
      images: [
        {
          url: page.ogImage,
          width: 1200,
          height: 630,
          alt: page.title
        }
      ]
    },
    
    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.metaDescription,
      images: [page.ogImage],
      creator: '@teknao'
    },
    
    // Alternates para i18n
    alternates: {
      canonical: `https://teknao.com/${slug}`,
      languages: {
        'es': `https://teknao.com/${slug}`,
        'en': `https://teknao.com/en/${slug}`
      }
    }
  }
}
```
### Página Completa con SEO
```tsx
import { getPage } from '@/lib/pages'
import { Metadata } from 'next'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = await getPage(slug)
  return {
    title: page.title,
    description: page.metaDescription,
    openGraph: {
      images: [{ url: page.ogImage }]
    }
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const page = await getPage(slug)
  
  return (
    <main id="main-content">
      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(page.schema) }}
      />
      
      {/* H1: Keyword + Verbo */}
      <h1>{page.h1}</h1>
      
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb">
        <ol>
          <li><a href="/">Inicio</a></li>
          <li aria-current="page">{page.title}</li>
        </ol>
      </nav>
      
      {/* Contenido Principal */}
      <article>
        <section>
          <h2>{page.h2}</h2>
          <div dangerouslySetInnerHTML={{ __html: page.content }} />
        </section>
      </article>
      
      {/* FAQ Section con Schema FAQPage */}
      <section aria-labelledby="faq">
        <h2 id="faq">Preguntas Frecuentes</h2>
        <dl>
          {page.faqs.map((faq) => (
            <Fragment key={faq.id}>
              <dt>{faq.question}</dt>
              <dd>{faq.answer}</dd>
            </Fragment>
          ))}
        </dl>
      </section>
    </main>
  )
}
```
## Posicionamiento: Keywords y Contenido
### Keyword Strategy
| Posición | Keyword | Densidad |
|----------|---------|----------|
| Title (H1) | Keyword principal | 1x |
| Meta description | Keyword + beneficio | 1x |
| Primer párrafo (100 words) | Keyword principal | 1-2x |
| H2 headings | Keyword + variantes | 1x cada |
| Body content | LSI keywords | 2-3% total |
| Alt images | Keyword descriptivo | 1x |
| URL slug | Keyword hyphenated | exacto |
### Contenido SEO Checklist
```markdown
- [ ] Title tag: 50-60 chars, keyword al inicio
- [ ] Meta description: 150-160 chars, CTA incluido
- [ ] H1: 1 por página, keyword + verbo
- [ ] H2-H6: estructura jerárquica clara
- [ ] URL: /keyword-principal/ ( lowercase, guiones)
- [ ] Primer párrafo: keyword en primeras 100 palabras
- [ ] Internals links: 2-3 por página
- [ ] Externals links: a fuentes authoritative
- [ ] Imágenes: alt text con keywords
- [ ] LSI keywords: sinónimos naturales
- [ ] FAQ section: schema FAQPage
- [ ] CTAs: visibles, keyword en botones
```
## Schema.org para Posicionamiento
### Article Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[H1 keyword]",
  "description": "[Meta description]",
  "image": "https://dominio.com/og-image.jpg",
  "author": {
    "@type": "Organization",
    "name": "Teknao"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Teknao",
    "logo": {
      "@type": "ImageObject",
      "url": "https://dominio.com/logo.png"
    }
  },
  "datePublished": "2026-04-29",
  "dateModified": "2026-04-29"
}
```
### FAQPage Schema
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿[Keyword pregunta]?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Respuesta con keyword]"
      }
    }
  ]
}
```
### WebPage Schema
```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "[H1 keyword]",
  "description": "[Meta description]",
  "url": "https://dominio.com/[slug]",
  "mainEntity": {
    "@type": "WebPage",
    "name": "[H1]"
  }
}
```
## Sitemap Dinámico
```tsx
// app/sitemap.ts
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await getAllPages()
  
  return pages.map((page) => ({
    url: `https://teknao.com/${page.slug}`,
    lastModified: page.updatedAt,
    changeFrequency: page.changeFrequency,
    priority: page.priority
  }))
}
```
## Componentes SEO Reutilizables
### Breadcrumbs
```tsx
export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "name": item.name,
      "position": index + 1,
      "item": `https://teknao.com${item.href}`
    }))
  }
  
  return (
    <nav aria-label="Breadcrumb">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ol>
        {items.map((item, index) => (
          <li key={item.href}>
            {index > 0 && <span aria-hidden="true">/</span>}
            {item.current ? (
              <span aria-current="page">{item.name}</span>
            ) : (
              <Link href={item.href}>{item.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
```
### FAQAccordion
```tsx
export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
  
  return (
    <section aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <h2 id="faq-heading">Preguntas Frecuentes</h2>
      <dl>
        {faqs.map((faq) => (
          <Accordion key={faq.id} question={faq.question}>
            <dd>{faq.answer}</dd>
          </Accordion>
        ))}
      </dl>
    </section>
  )
}
```
## Core Web Vitals para SEO
| Métrica | Target | Implementación |
|--------|--------|---------------|
| **LCP** < 2.5s | next/image priority, preload | |
| **FID** < 100ms | code splitting, defer JS | |
| **CLS** < 0.1 | font-display: swap, dimensions | |
## Checklist SEO Final
```markdown
## On-Page SEO
- [ ] Title tag: 50-60 chars
- [ ] Meta description: 150-160 chars
- [ ] H1: único, keyword + verbo
- [ ] H2-H6: jerarquía correcta
- [ ] URL slug: keyword hyphenated
- [ ] Alt images: keyword + descripción
- [ ] Internal links: 2-3 por página
- [ ] External links: fuentes autoridad

## Schema.org
- [ ] WebPage schema
- [ ] BreadcrumbsList schema
- [ ] FAQPage schema (si aplica)
- [ ] Organization schema (layout)
- [ ] Product/Article schema (si aplica)

## Técnico SEO
- [ ] Canonical URL
- [ ] Open Graph tags
- [ ] Twitter Card tags
- [ ] robots.txt
- [ ] sitemap.xml
- [ ] SSL/HTTPS
- [ ] 404 personalizado
- [ ] hreflang (i18n)

## Performance
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] Mobile responsive
- [ ] Images optimized
```
## Herramientas de Verificación
| Herramienta | URL |
|------------|-----|
| Google Rich Results Test | search.google.com/test/rich-results |
| Schema Markup Validator | https://validator.schema.org |
| PageSpeed Insights | pagespeed.web.dev |
| Lighthouse SEO Audit | DevTools Chrome |
| Screaming Frog SEO Spider | screamingfrog.co.uk/seo-spider |
| Semrush Site Audit | semrush.com |
| Ahrefs Webmaster Tools | ahrefs.com/webmaster-tools |