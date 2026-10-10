'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/recursos', label: 'Recursos' },
  { href: '/#categorias', label: 'Categorías' },
  { href: '/#marca', label: 'Seño Cin' },
  { href: '/contacto', label: 'Contacto' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-crema/90 backdrop-blur-md border-b border-lila-light/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3 group" aria-label="Seño Cin — ir al inicio">
            <Image
              src="/logo.jpeg"
              alt="Seño Cin — Aprende jugando"
              width={120}
              height={120}
              className="w-11 h-11 md:w-12 md:h-12 rounded-full object-cover border border-lila-light/60 group-hover:border-lila transition-colors"
              priority
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-texto leading-tight">Seño Cin</span>
              <span className="text-xs text-gris leading-tight">Aprende jugando</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Menú principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gris hover:text-lila rounded-lg hover:bg-lila-light/40 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/recursos"
              className="ml-4 px-5 py-2.5 text-sm font-medium text-white bg-lila rounded-full hover:bg-lila-dark transition-all duration-200 shadow-sm hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lila-dark"
            >
              Explorar materiales
            </Link>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-lila-light/40 transition-colors"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                className="block w-6 h-0.5 bg-texto rounded-full"
                animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-texto rounded-full"
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-texto rounded-full"
                animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="md:hidden border-t border-lila-light/40 bg-crema"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            aria-label="Menú principal"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-gris hover:text-lila rounded-xl hover:bg-lila-light/40 transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/recursos"
                onClick={() => setIsOpen(false)}
                className="block mt-3 px-4 py-3 text-base font-medium text-center text-white bg-lila rounded-xl hover:bg-lila-dark transition-all"
              >
                Explorar materiales
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
