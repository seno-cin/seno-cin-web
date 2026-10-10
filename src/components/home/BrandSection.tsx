'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { site } from '@/data/site'

export function BrandSection() {
  return (
    <section id="marca" className="py-20 sm:py-24 bg-white border-t border-lila-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[auto,1fr] gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto lg:mx-0"
          >
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-lila-light/40 flex items-center justify-center">
              <Image
                src="/logo.jpeg"
                alt="Seño Cin — Aprende jugando"
                width={300}
                height={300}
                className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover border border-lila-light"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-sm font-medium text-lila-dark">{site.slogan}</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-texto">¿Qué es Seño Cin?</h2>
            <div className="mt-5 space-y-4 text-lg text-gris leading-relaxed max-w-2xl">
              <p>
                Seño Cin es un emprendimiento de creación y comercialización de recursos
                pedagógicos para docentes de educación primaria.
              </p>
              <p>
                Los materiales se desarrollan desde la experiencia en el aula y desde la necesidad
                de contar con recursos que ayuden a organizar y desarrollar el trabajo cotidiano:
                planificaciones, secuencias didácticas, adecuaciones, informes y juegos.
              </p>
              <p>
                La propuesta es acompañar y facilitar el trabajo docente con propuestas prácticas,
                organizadas y pensadas para las necesidades reales de la escuela.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-lila text-white font-medium hover:bg-lila-dark transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lila-dark"
              >
                Contactar
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
