'use client'

import Link from 'next/link'
import { Logo } from '@/components/brand/Logo'
import { Heart, Star } from '@/components/ui/Marks'

export function Hero() {
  return (
    <section id="hero" className="relative pt-24 pb-24 sm:pt-28 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Texto */}
          <div>
            <h1 className="hero-title font-bold text-texto leading-[1.04] text-balance">
              Recursos para enseñar, planificar y{' '}
              <span className="hero-accent">aprender jugando</span>
            </h1>
            <p className="mt-7 text-lg sm:text-xl text-gris leading-relaxed max-w-2xl">
              Materiales pedagógicos creados desde la experiencia docente para acompañarte en la
              planificación y el trabajo cotidiano en el aula.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-5">
              <Link
                href="/recursos"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-lila text-white font-medium hover:bg-lila-dark transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lila-dark"
              >
                Explorar materiales
              </Link>
              <Link
                href="/#marca"
                className="text-lila-dark font-medium hover:text-lila underline underline-offset-4 decoration-lila-light"
              >
                Conocer Seño Cin
              </Link>
            </div>
          </div>

          {/* Logo grande a la derecha */}
          <div className="relative flex items-center justify-center">
            <Logo className="w-64 sm:w-80 lg:w-full lg:max-w-lg h-auto" />
            <Heart className="absolute top-2 right-6 w-6 h-6 text-rosa" aria-hidden="true" />
            <Star className="absolute bottom-4 left-4 w-7 h-7 text-amarillo" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
