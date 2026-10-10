'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ResourceCard } from '@/components/shop/ResourceCard'
import { featuredProducts } from '@/data/products'

export function FeaturedResources() {
  const featured = featuredProducts().slice(0, 6)
  const empty = featured.length === 0

  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-texto">Recursos destacados</h2>
            <p className="mt-3 text-lg text-gris">
              Materiales seleccionados para acompañar tu trabajo en el aula.
            </p>
          </div>
          {!empty && (
            <Link
              href="/recursos"
              className="shrink-0 inline-flex items-center gap-2 text-lila-dark font-medium hover:text-lila underline underline-offset-4"
            >
              Ver todos los recursos
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          )}
        </div>

        {empty ? (
          <div className="mt-12 text-center py-16 rounded-2xl bg-white border border-lila-light/40">
            <div className="text-4xl mb-4" aria-hidden="true">✨</div>
            <h3 className="text-xl font-semibold text-texto mb-2">Estamos preparando el catálogo</h3>
            <p className="text-gris max-w-md mx-auto mb-6">
              Muy pronto vas a encontrar acá los recursos de Seño Cin.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-lila text-lila-dark font-medium hover:bg-lila-light/50 transition-colors"
            >
              Escribinos
            </Link>
          </div>
        ) : (
          <motion.div
            className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            {featured.map((product, i) => (
              <ResourceCard key={product.id} product={product} index={i} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
