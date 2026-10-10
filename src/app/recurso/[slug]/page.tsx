import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ProductCover } from '@/components/shop/ProductCover'
import { waLink, formatPrice } from '@/data/site'
import { publishedProducts, categoriaLabels, areaLabels, gradoLabels, type Resource } from '@/data/products'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return publishedProducts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = publishedProducts().find((p) => p.slug === slug)
  if (!product) return { title: 'Recurso no encontrado' }
  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: `${product.title} | Seño Cin`,
      description: product.description,
      images: product.images.length ? [{ url: product.images[0] }] : undefined,
    },
  }
}

function purchaseMessage(p: Resource) {
  const price = p.isFree ? 'Gratuito' : formatPrice(p.price)
  return `¡Hola, Seño Cin! Me interesa el recurso "${p.title}" (${categoriaLabels[p.categoria]}, ${p.grado.map((g) => gradoLabels[g]).join(', ')}). Precio: ${price}. ¿Me pasás los datos para obtenerlo?`
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-gris-claro rounded-xl p-4">
      <span className="text-xs text-gris block mb-1">{label}</span>
      <span className="text-sm font-medium text-texto">{value}</span>
    </div>
  )
}

export default async function RecursoPage({ params }: Props) {
  const { slug } = await params
  const product = publishedProducts().find((p) => p.slug === slug)
  if (!product) notFound()

  const wa = waLink(purchaseMessage(product))
  const related = publishedProducts()
    .filter((p) => p.id !== product.id && p.categoria === product.categoria)
    .slice(0, 3)

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm text-gris mb-8" aria-label="Migas de pan">
          <Link href="/" className="hover:text-lila transition-colors">Inicio</Link>
          <span aria-hidden="true">/</span>
          <Link href="/recursos" className="hover:text-lila transition-colors">Recursos</Link>
          <span aria-hidden="true">/</span>
          <span className="text-texto">{product.title}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
          <ProductCover
            images={product.images}
            categoria={product.categoria}
            alt={product.title}
            className="aspect-[4/3] rounded-3xl"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          <div>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-lila-light text-lila-dark">
                {categoriaLabels[product.categoria]}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-verde-light text-verde-dark">
                {product.grado.map((g) => gradoLabels[g]).join(', ')}
              </span>
              {product.periodo && (
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-amarillo-light text-amarillo-dark">
                  {product.periodo}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-texto leading-tight mb-4">
              {product.title}
            </h1>

            <p className="text-lg text-gris leading-relaxed mb-8">{product.longDescription}</p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <Info label="Área" value={areaLabels[product.area]} />
              <Info label="Formato" value={product.formato} />
              <Info label="Grado" value={product.grado.map((g) => gradoLabels[g]).join(', ')} />
              <Info label="Entrega" value={product.entrega ?? 'A acordar'} />
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-semibold text-texto mb-3">¿Qué incluye?</h2>
              <ul className="space-y-2">
                {product.contenido.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gris">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-verde-light flex items-center justify-center text-verde-dark text-xs flex-shrink-0" aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-5 rounded-2xl bg-white border border-lila-light/40">
              <span className={`text-3xl font-bold ${product.isFree ? 'text-verde-dark' : 'text-lila-dark'}`}>
                {product.isFree ? 'Gratuito' : formatPrice(product.price)}
              </span>
              {wa ? (
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-lila text-white font-medium hover:bg-lila-dark transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lila-dark"
                >
                  {product.isFree ? 'Pedirlo por WhatsApp' : 'Comprar por WhatsApp'}
                </a>
              ) : (
                <p className="text-sm text-gris">
                  Estamos preparando la compra en línea. Mientras tanto,{' '}
                  <Link href="/contacto" className="text-lila-dark underline underline-offset-2">escribinos desde Contacto</Link> y te pasamos los datos.
                </p>
              )}
            </div>
            {wa && (
              <p className="mt-3 text-xs text-gris">
                Al tocar el botón se abre WhatsApp con el mensaje pre-cargado. Te confirmamos medios de pago y entrega.
              </p>
            )}
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl font-bold text-texto mb-8">Otros recursos de {categoriaLabels[product.categoria].toLowerCase()}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/recurso/${r.slug}`}
                  className="group block p-5 rounded-2xl bg-white border border-lila-light/40 hover:shadow-md transition-all"
                >
                  <h3 className="text-sm font-semibold text-texto leading-snug mb-2 group-hover:text-lila-dark transition-colors">
                    {r.title}
                  </h3>
                  <span className={`text-sm font-bold ${r.isFree ? 'text-verde-dark' : 'text-lila-dark'}`}>
                    {r.isFree ? 'Gratuito' : formatPrice(r.price)}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
