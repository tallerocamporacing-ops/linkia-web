import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins, Roboto_Mono } from 'next/font/google'
import { faqs } from '@/lib/faqs'
import { INSTAGRAM_URL, TIKTOK_URL } from '@/lib/constants'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-roboto-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.linkia.com.ar'),
  title: {
    default: 'LINKIA — Software de gestión para talleres mecánicos en Argentina | $54.000/mes',
    template: '%s | LINKIA',
  },
  description:
    'Software para talleres mecánicos en Argentina. Ordená tu taller con LINKIA: órdenes de trabajo digitales, presupuestos con firma, kanban con semáforo de demora, portal del cliente, recordatorios de VTV y service, control de repuestos y turnos online. Prueba con reembolso 7 días. Desde $54.000/mes sin permanencia.',
  keywords: [
    // núcleo
    'software taller mecánico',
    'software para taller mecánico',
    'programa para taller mecánico',
    'sistema gestión taller',
    'sistema para taller mecánico argentina',
    'app taller mecánico',
    'gestión de taller mecánico',
    // funciones
    'órdenes de trabajo taller',
    'orden de trabajo digital taller',
    'presupuestos taller mecánico',
    'presupuesto online taller',
    'CRM taller mecánico',
    'facturación taller mecánico',
    'kanban taller',
    'agenda turnos taller',
    'turnos online taller mecánico',
    'gestión de repuestos taller',
    'control de stock repuestos',
    'firma digital orden trabajo',
    'portal cliente taller',
    'recordatorio VTV',
    'recordatorio service',
    // marca / geo
    'linkia',
    'linkia software taller',
    'software taller mecánico Argentina',
    'programa gestión taller Buenos Aires',
    'sistema taller mecánico multimarca',
  ],
  authors: [{ name: 'Agustín Ocampo', url: 'https://www.linkia.com.ar' }],
  creator: 'LINKIA',
  publisher: 'LINKIA',
  category: 'business',
  alternates: {
    canonical: 'https://www.linkia.com.ar',
    languages: {
      'es-AR': 'https://www.linkia.com.ar',
      'es': 'https://www.linkia.com.ar',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://www.linkia.com.ar',
    siteName: 'LINKIA',
    title: 'LINKIA — Software de gestión para talleres mecánicos',
    description:
      'Órdenes de trabajo, kanban con semáforo, portal para el cliente, firma digital, presupuestos, agenda y control de repuestos. Todo por $54.000/mes.',
    images: [
      {
        url: '/images/dashboard-mockup.png',
        width: 1200,
        height: 630,
        alt: 'LINKIA — dashboard del software de gestión para talleres mecánicos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LINKIA — Tu taller, conectado',
    description:
      'Sistema de gestión para talleres mecánicos. $54.000/mes con reembolso de 7 días.',
    images: ['/images/dashboard-mockup.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  generator: 'v0.app',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon-180.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: [{ url: '/favicon.ico' }],
  },
}

const SITE = 'https://www.linkia.com.ar'

const jsonLdSoftware = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `${SITE}/#software`,
  name: 'LINKIA',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Automotive Repair Shop Management Software',
  operatingSystem: 'Web, iOS, Android',
  browserRequirements: 'Requires JavaScript. Requires HTML5.',
  softwareVersion: '2026',
  inLanguage: 'es-AR',
  url: SITE,
  image: `${SITE}/images/dashboard-mockup.png`,
  screenshot: `${SITE}/images/dashboard-mockup.png`,
  description:
    'Sistema de gestión para talleres mecánicos con órdenes de trabajo, kanban, portal del cliente, firma digital, presupuestos, turnos, control de repuestos y recordatorios de VTV y service.',
  featureList: [
    'Órdenes de trabajo digitales',
    'Presupuestos con firma digital',
    'Kanban de OT con semáforo de demora',
    'Portal del cliente con historial',
    'Turnos online sincronizados con Google Calendar',
    'Control de repuestos y stock',
    'Gestión de proveedores',
    'Recordatorios automáticos de VTV y service',
    'Alertas por email y WhatsApp al cliente',
    'Reportes de finanzas y ganancia real',
  ],
  offers: {
    '@type': 'Offer',
    price: '54000',
    priceCurrency: 'ARS',
    availability: 'https://schema.org/InStock',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: '54000',
      priceCurrency: 'ARS',
      unitCode: 'MON',
      referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' },
    },
  },
  provider: { '@id': `${SITE}/#organization` },
  brand: { '@id': `${SITE}/#organization` },
}

const jsonLdOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE}/#organization`,
  name: 'LINKIA',
  url: SITE,
  logo: `${SITE}/images/linkia-logo-full.png`,
  description:
    'LINKIA — software de gestión para talleres mecánicos en Argentina. Órdenes de trabajo, kanban, portal del cliente, firma digital, presupuestos, agenda, repuestos y recordatorios.',
  areaServed: { '@type': 'Country', name: 'Argentina' },
  sameAs: [INSTAGRAM_URL, TIKTOK_URL],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      areaServed: 'AR',
      availableLanguage: ['Spanish'],
      url: `${SITE}/#precio`,
    },
  ],
}

const jsonLdWebsite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE}/#website`,
  url: SITE,
  name: 'LINKIA',
  inLanguage: 'es-AR',
  publisher: { '@id': `${SITE}/#organization` },
}

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const jsonLdGraph = {
  '@context': 'https://schema.org',
  '@graph': [jsonLdOrganization, jsonLdWebsite, jsonLdSoftware, jsonLdFaq],
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f4f7fc' },
    { media: '(prefers-color-scheme: dark)', color: '#011638' },
  ],
}

const themeInitScript = `(function () {
  try {
    var stored = localStorage.getItem('linkia-theme');
    var isDark =
      stored === 'dark' ||
      (stored !== 'light' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('dark', isDark);
  } catch (e) {}
})();`

// Google Tag Manager — carga el contenedor GTM-T2Z656ZQ (dispara pageviews y eventos custom
// desde GTM sin tener que redeployar la landing para cambiar tags de Analytics/Ads/etc).
const gtmScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T2Z656ZQ');`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`bg-background ${inter.variable} ${poppins.variable} ${robotoMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: gtmScript }} />
        {/* End Google Tag Manager */}
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) — fallback para navegadores sin JS */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T2Z656ZQ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
