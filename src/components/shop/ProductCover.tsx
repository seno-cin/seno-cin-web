import Image from 'next/image'
import type { Categoria } from '@/data/products'

const marks: Record<Categoria, { emoji: string; bg: string }> = {
  planificacion: { emoji: '📋', bg: 'bg-lila-light' },
  secuencia: { emoji: '📖', bg: 'bg-rosa-light' },
  'adecuacion-dei': { emoji: '🤝', bg: 'bg-verde-light' },
  informe: { emoji: '📝', bg: 'bg-amarillo-light' },
  juego: { emoji: '🧩', bg: 'bg-verde-light' },
}

interface ProductCoverProps {
  images: string[]
  categoria: Categoria
  alt: string
  className?: string
  sizes?: string
}

/**
 * Portada real del producto. Si no hay imagen cargada, muestra un marcador
 * neutro (nunca una portada ficticia) donde la propietaria podrá sumar la real.
 */
export function ProductCover({ images, categoria, alt, className = '', sizes = '(max-width: 640px) 100vw, 33vw' }: ProductCoverProps) {
  const mark = marks[categoria]

  if (images.length > 0) {
    return (
      <div className={`relative overflow-hidden bg-gris-claro ${className}`}>
        <Image src={images[0]} alt={alt} fill sizes={sizes} className="object-cover" />
      </div>
    )
  }

  return (
    <div
      className={`relative flex items-center justify-center bg-gris-claro ${className}`}
      role="img"
      aria-label={`${alt} (imagen en preparación)`}
    >
      <div className={`w-16 h-16 rounded-2xl ${mark.bg} flex items-center justify-center text-3xl`}>
        {mark.emoji}
      </div>
      <span className="absolute bottom-3 right-3 text-[11px] text-gris bg-white/80 rounded-full px-2 py-0.5">
        Imagen en preparación
      </span>
    </div>
  )
}
