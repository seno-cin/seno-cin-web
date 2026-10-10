'use client'

import { motion } from 'framer-motion'
import { Heart, Puzzle, Star } from '@/components/ui/Marks'

const pilares = [
  {
    mark: 'experience',
    title: 'Experiencia docente',
    description:
      'Los materiales nacen del conocimiento de la práctica escolar y de las necesidades reales de las aulas.',
  },
  {
    mark: 'practicidad',
    title: 'Practicidad',
    description:
      'Propuestas pensadas para facilitar la organización, la planificación y la preparación de clases.',
  },
  {
    mark: 'creatividad',
    title: 'Creatividad',
    description:
      'El juego, los recursos visuales y las propuestas lúdicas tienen lugar en el aprendizaje.',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
}

function Mark({ kind }: { kind: string }) {
  if (kind === 'experience') return <Heart className="w-6 h-6 text-rosa" />
  if (kind === 'practicidad') return <Puzzle className="w-6 h-6 text-verde-dark" />
  return <Star className="w-6 h-6 text-amarillo-dark" />
}

export function Benefits() {
  return (
    <section className="py-20 sm:py-24 bg-white border-y border-lila-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-texto">Una marca creada desde el aula</h2>
          <p className="mt-3 text-lg text-gris">
            Seño Cin combina experiencia docente, practicidad y creatividad en cada recurso.
          </p>
        </div>

        <motion.div
          className="mt-12 grid sm:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {pilares.map((p) => (
            <motion.div
              key={p.title}
              variants={item}
              className="rounded-2xl bg-crema border border-lila-light/40 p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-lila-light/40 flex items-center justify-center mb-4">
                <Mark kind={p.mark} />
              </div>
              <h3 className="text-lg font-semibold text-texto mb-2">{p.title}</h3>
              <p className="text-sm text-gris leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
