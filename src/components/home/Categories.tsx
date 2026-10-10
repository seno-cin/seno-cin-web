'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { categorias, categoriaLabels, type Categoria } from '@/data/products'

const meta: Record<Categoria, { description: string; emoji: string; accent: string }> = {
  planificacion: {
    description: 'Planificaciones por grado, área y período para organizar tu trabajo.',
    emoji: '📋',
    accent: 'bg-lila-light',
  },
  secuencia: {
    description: 'Propuestas organizadas en clases para desarrollar contenidos específicos.',
    emoji: '📖',
    accent: 'bg-rosa-light',
  },
  'adecuacion-dei': {
    description: 'Recursos para acompañar propuestas que contemplen trayectorias particulares.',
    emoji: '🤝',
    accent: 'bg-verde-light',
  },
  informe: {
    description: 'Modelos y guías para organizar información sobre trayectorias escolares.',
    emoji: '📝',
    accent: 'bg-amarillo-light',
  },
  juego: {
    description: 'Juegos didácticos para aprender jugando en el aula.',
    emoji: '🧩',
    accent: 'bg-verde-light',
  },
}

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
}

export function Categories() {
  return (
    <section id="categorias" className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-texto">Encontrá lo que necesitás</h2>
          <p className="mt-3 text-lg text-gris">
            Todo el material organizado en categorías claras, para llegar rápido a lo que buscás.
          </p>
        </div>

        <motion.div
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {categorias.map((cat) => (
            <motion.div key={cat} variants={item}>
              <Link
                href={`/recursos?categoria=${cat}`}
                className="group flex flex-col h-full rounded-2xl bg-white border border-lila-light/40 p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lila-dark"
              >
                <div className={`w-12 h-12 rounded-xl ${meta[cat].accent} flex items-center justify-center text-2xl mb-4`} aria-hidden="true">
                  {meta[cat].emoji}
                </div>
                <h3 className="text-base font-semibold text-texto mb-2 group-hover:text-lila-dark transition-colors">
                  {categoriaLabels[cat]}
                </h3>
                <p className="text-sm text-gris leading-relaxed">{meta[cat].description}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
