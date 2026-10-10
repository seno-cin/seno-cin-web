'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: '¿Para quién están pensados los recursos?',
    a: 'Para docentes de educación primaria. Las planificaciones y materiales se organizan por grado, área y período para que encuentres rápido lo que necesitás.',
  },
  {
    q: '¿Cómo compro un recurso?',
    a: 'En la ficha de cada producto hay un botón para comprar por WhatsApp. Se abre una conversación con el mensaje del recurso pre-cargado, y allí confirmamos el medio de pago y la entrega.',
  },
  {
    q: '¿En qué formato se entregan los materiales?',
    a: 'La ficha de cada recurso indica el formato y la modalidad de entrega. En general son archivos digitales listos para usar en el aula.',
  },
  {
    q: '¿Puedo usar los materiales en mi aula?',
    a: 'Sí. Los recursos son para uso personal de la docente compradora en su aula o institución. No está permitida su redistribución ni reventa.',
  },
  {
    q: '¿Hay recursos de todas las áreas?',
    a: 'El catálogo se amplía de manera progresiva. Las categorías y áreas disponibles están siempre visibles en la página de recursos, con sus filtros.',
  },
  {
    q: '¿Trabajan con adecuaciones y DEI?',
    a: 'Sí, hay una categoría propia con materiales para acompañar propuestas que contemplen las necesidades y trayectorias particulares de los estudiantes.',
  },
  {
    q: '¿Cómo hago si tengo una consulta?',
    a: 'Podés escribirnos desde la página de Contacto o directamente por WhatsApp si está habilitado.',
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-texto">Preguntas frecuentes</h1>
        <p className="mt-3 text-lg text-gris">Todo lo que necesitás saber sobre los recursos y las compras.</p>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-lila-light/40 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="text-sm font-medium text-texto">{faq.q}</span>
                <motion.svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="flex-shrink-0 text-lila"
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </motion.svg>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-gris leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gris-claro rounded-3xl p-8">
          <h2 className="text-lg font-semibold text-texto mb-2">¿Tenés otra pregunta?</h2>
          <p className="text-sm text-gris mb-4">Escribinos y te respondemos a la brevedad.</p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 text-sm font-medium text-lila-dark hover:text-lila"
          >
            Ir a contacto
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
