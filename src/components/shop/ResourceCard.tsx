'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import { ProductCover } from '@/components/shop/ProductCover'
import { formatPrice } from '@/data/site'
import { categoriaLabels, areaLabels, gradoLabels, type Resource } from '@/data/products'

const badgeVariants: Record<Resource['categoria'], 'lila' | 'rosa' | 'verde' | 'amarillo'> = {
  planificacion: 'lila',
  secuencia: 'rosa',
  'adecuacion-dei': 'verde',
  informe: 'amarillo',
  juego: 'verde',
}

interface ResourceCardProps {
  product: Resource
  index?: number
}

export function ResourceCard({ product, index = 0 }: ResourceCardProps) {
  const grades = product.grado.map((g) => gradoLabels[g]).join(' · ')

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <Link
        href={`/recurso/${product.slug}`}
        className="group block h-full rounded-2xl bg-white border border-lila-light/40 overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lila-dark"
      >
        <ProductCover
          images={product.images}
          categoria={product.categoria}
          alt={product.title}
          className="aspect-[4/3]"
          sizes="(max-width: 640px) 100vw, 33vw"
        />
        <div className="p-5 flex flex-col flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge variant={badgeVariants[product.categoria]}>
              {categoriaLabels[product.categoria]}
            </Badge>
            <Badge variant="lila">{grades}</Badge>
            {product.periodo && <Badge variant="amarillo">{product.periodo}</Badge>}
          </div>
          <h3 className="text-base font-semibold text-texto leading-snug mb-2 line-clamp-2 group-hover:text-lila-dark transition-colors">
            {product.title}
          </h3>
          <p className="text-sm text-gris leading-relaxed mb-4 line-clamp-2 flex-1">
            {product.description}
          </p>
          <div className="flex items-center justify-between pt-3 border-t border-lila-light/40">
            <span className={`text-lg font-bold ${product.isFree ? 'text-verde-dark' : 'text-lila-dark'}`}>
              {product.isFree ? 'Gratuito' : formatPrice(product.price)}
            </span>
            <span className="text-xs text-gris">{areaLabels[product.area]}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
