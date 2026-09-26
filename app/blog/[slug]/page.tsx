import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFloatButton } from "@/components/whatsapp-float-button"
import { CHECKOUT_URL, PRICE_ARS_LABEL } from "@/lib/constants"
import { getPost, posts, type Block } from "@/lib/blog"

const SITE = "https://www.linkia.com.ar"

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  const url = `${SITE}/blog/${post.slug}`
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: ["LINKIA"],
      locale: "es_AR",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  }
}

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          key={i}
          className="mt-10 font-heading text-2xl font-bold text-navy dark:text-foreground"
        >
          {block.text}
        </h2>
      )
    case "p":
      return (
        <p
          key={i}
          className="mt-4 leading-relaxed text-foreground/85 [&_a]:font-semibold [&_a]:text-brand [&_a]:underline [&_a]:underline-offset-4"
          dangerouslySetInnerHTML={{ __html: block.html }}
        />
      )
    case "ul":
      return (
        <ul key={i} className="mt-4 list-disc space-y-2 pl-6 text-foreground/85">
          {block.items.map((item, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      )
    case "quote":
      return (
        <blockquote
          key={i}
          className="mt-6 border-l-4 border-brand bg-brand/5 px-5 py-4 font-heading text-lg font-medium text-navy dark:text-foreground"
        >
          {block.text}
        </blockquote>
      )
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const url = `${SITE}/blog/${post.slug}`
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3)

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.description,
        keywords: post.keywords.join(", "),
        datePublished: post.date,
        dateModified: post.date,
        inLanguage: "es-AR",
        mainEntityOfPage: url,
        url,
        image: `${SITE}/images/dashboard-mockup.png`,
        author: { "@id": `${SITE}/#organization` },
        publisher: { "@id": `${SITE}/#organization` },
        isPartOf: { "@id": `${SITE}/#website` },
        articleSection: post.category,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: SITE },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  }

  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteNav />
      <main className="flex-1 bg-background">
        <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <nav aria-label="Migas de pan" className="font-mono text-xs text-muted-foreground">
            <Link href="/" className="hover:text-brand">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-brand">Blog</Link>
          </nav>

          <header className="mt-6">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground">
              <span className="rounded-full bg-brand/10 px-2.5 py-0.5 font-semibold text-brand">
                {post.category}
              </span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span>· {post.readMinutes} min de lectura</span>
            </div>
            <h1 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl dark:text-foreground">
              {post.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {post.description}
            </p>
          </header>

          <div className="mt-8 border-t border-border pt-2">
            {post.blocks.map(renderBlock)}
          </div>

          <aside className="mt-14 rounded-2xl bg-navy p-6 text-white sm:p-8 dark:bg-card dark:border dark:border-border dark:text-foreground">
            <p className="font-mono text-xs uppercase tracking-widest text-brand">
              LINKIA
            </p>
            <h2 className="mt-2 font-heading text-2xl font-bold">
              Tu taller, ordenado y cobrando más
            </h2>
            <p className="mt-2 text-white/80 dark:text-muted-foreground">
              Órdenes de trabajo, presupuestos con firma, portal del cliente,
              turnos, repuestos y recordatorios automáticos. {PRICE_ARS_LABEL}/mes,
              sin permanencia, con reembolso de 7 días.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={CHECKOUT_URL}
                className="inline-flex items-center gap-2 rounded-full bg-electric px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105 hover:bg-brand"
              >
                Suscribirme ahora
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              <Link
                href="/#funciones"
                className="inline-flex items-center rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-white/10 dark:border-border"
              >
                Ver funciones
              </Link>
            </div>
          </aside>

          <section className="mt-14">
            <h2 className="font-heading text-xl font-bold text-navy dark:text-foreground">
              Seguí leyendo
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/blog/${r.slug}`}
                    className="block rounded-xl border border-border bg-card px-5 py-4 transition-colors hover:border-brand"
                  >
                    <span className="font-heading font-semibold text-navy dark:text-foreground">
                      {r.title}
                    </span>
                    <span className="mt-1 block text-sm text-muted-foreground">
                      {r.readMinutes} min · {r.category}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/blog"
              className="mt-6 inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-brand hover:underline hover:underline-offset-4"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Todos los artículos
            </Link>
          </section>
        </article>
      </main>
      <SiteFooter />
      <WhatsAppFloatButton />
    </div>
  )
}
