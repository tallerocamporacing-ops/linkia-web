import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins, Roboto_Mono } from 'next/font/google'
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
    default: 'LINKIA — Software de gestión para talleres mecánicos | $54.000/mes',
    template: '%s | LINKIA',
  },
  description:
    'Ordená tu taller mecánico con LINKIA: órdenes de trabajo, presupuestos con firma digital, kanban con semáforo de demora, portal para el cliente, recordatorios de VTV y service, control de repuestos y proveedores. Todo en un solo sistema por $54.000/mes.',
  keywords: [
    'software taller mecánico',
    'sistema gestión taller',
    'órdenes de trabajo taller',
    'presupuestos taller mecánico',
    'CRM taller',
    'facturación taller mecánico',
    'kanban taller',
    'agenda turnos taller',
    'linkia',
    'gestión de repuestos',
    'firma digital orden trabajo',
    'taller mecánico Argentina',
  ],
  authors: [{ name: 'Agustín Ocampo', url: 'https://www.linkia.com.ar' }],
  creator: 'LINKIA',
  publisher: 'LINKIA',
  category: 'business',
  alternates: { canonical: 'https://www.linkia.com.ar' },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://www.linkia.com.ar',
    siteName: 'LINKIA',
    title: 'LINKIA — Software de gestión para talleres mecánicos',
    description:
      'Órdenes de trabajo, kanban con semáforo, portal para el cliente, firma digital, presupuestos, agenda y control de repuestos. Todo por $54.000/mes.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LINKIA — Tu taller, conectado',
    description:
      'Sistema de gestión para talleres mecánicos. $54.000/mes con reembolso de 7 días.',
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
  icons: {
    icon: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-32x32-R8S54NU4yNV5hI3Zxl4oMCVE28u9W6.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apple-touch-icon-a5xAsmKWUHdcXSYFd7gD7mYHoZorIA.png',
      },
    ],
  },
}

const jsonLdSoftware = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'LINKIA',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '54000',
    priceCurrency: 'ARS',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: '54000',
      priceCurrency: 'ARS',
      unitCode: 'MON',
      referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' },
    },
  },
  description:
    'Sistema de gestión para talleres mecánicos con órdenes de trabajo, kanban, portal del cliente, firma digital, presupuestos, turnos y control de repuestos.',
  url: 'https://www.linkia.com.ar',
  inLanguage: 'es-AR',
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftware) }}
        />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
