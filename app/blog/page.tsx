import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFloatButton } from "@/components/whatsapp-float-button"
import { posts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Blog para talleres mecánicos: gestión, presupuestos y clientes",
  description:
    "Guías prácticas para talleres mecánicos en Argentina: cómo elegir un software de gestión, órdenes de trabajo digitales, presupuestos que se aprueban, recordatorios de VTV y control de repuestos.",
  alternates: { canonical: "https://www.linkia.com.ar/blog" },
  openGraph: {
    title: "Blog LINKIA — Guías para talleres mecánicos",
    description:
      "Gestión, presupuestos, clientes y repuestos: guías prácticas para talleres mecánicos.",
    url: "https://www.linkia.com.ar/blog",
    type: "website",
  },
}

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export default function BlogIndex() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog LINKIA",
    url: "https://www.linkia.com.ar/blog",
    inLanguage: "es-AR",
    isPartOf: { "@id": "https://www.linkia.com.ar/#website" },
    hasPart: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `https://www.linkia.com.ar/blog/${p.slug}`,
      datePublished: p.date,
    })),
  }

  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteNav />
      <main className="flex-1 bg-background">
        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-widest text-brand">
            Blog
          </p>
          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-navy sm:text-5xl dark:text-foreground">
            Guías para talleres mecánicos
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Cómo ordenar el taller, presupuestar mejor, hacer que los clientes
            vuelvan y dejar de perder plata en repuestos. Escrito desde un
            taller, para talleres.
          </p>

          <div className="mt-12 flex flex-col gap-4">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md sm:p-8"
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground">
                  <span className="rounded-full bg-brand/10 px-2.5 py-0.5 font-semibold text-brand">
                    {post.category}
                  </span>
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span>· {post.readMinutes} min de lectura</span>
                </div>
                <h2 className="mt-3 font-heading text-2xl font-bold text-navy dark:text-foreground">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="transition-colors hover:text-brand"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-brand hover:underline hover:underline-offset-4"
                >
                  Leer artículo
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFloatButton />
    </div>
  )
}
