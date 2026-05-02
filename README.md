# Teknao Landing Page

Landing page para Teknao - Soporte TI para PYMES en Guatemala.

## Deploy en Vercel

### Opción 1: GitHub (Recommended)

1. Subir proyecto a GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TU_USER/teknao-landing.git
git push -u origin main
```

2. Ir a [vercel.com](https://vercel.com) e importar el repositorio

3. Configurar dominio `teknao.gt` en Vercel Dashboard

### Opción 2: CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

## Configuración

### Variables de Entorno (Vercel Dashboard)

```
NEXT_PUBLIC_SITE_URL=https://teknao.gt
NEXT_PUBLIC_CONTACT_EMAIL=contacto@teknao.com.gt
NEXT_PUBLIC_CONTACT_PHONE=+50252836343
NEXT_PUBLIC_WHATSAPP=https://wa.me/50252836343
```

### Dominio Personalizado

- Dominio: `teknao.gt`
- Configurar en Vercel: Settings → Domains → Add

## Seguridad

Headers de seguridad incluidos:
- X-Frame-Options: DENY
- X-XSS-Protection
- X-Content-Type-Options
- Referrer-Policy
- Strict-Transport-Security (HSTS)

## Desarrollo Local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Estructura

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
└── components/
    ├── Hero.tsx
    ├── Services.tsx
    ├── Guarantees.tsx
    ├── Plans.tsx
    ├── Industries.tsx
    ├── Tech.tsx
    ├── CTA.tsx
    ├── Footer.tsx
    ├── Navbar.tsx
    ├── Ticker.tsx
    ├── Process.tsx
    ├── WhatsAppFloat.tsx
    └── Icon.tsx
```

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion

## SEO

- Sitemap automático: `/sitemap-0.xml`
- Meta tags configurados
- Open Graph tags

## Contacto

- WhatsApp: +502 5283-6343
- Email: contacto@teknao.com.gt