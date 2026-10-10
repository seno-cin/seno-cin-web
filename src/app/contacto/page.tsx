'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { site, waLink } from '@/data/site'

export default function ContactoPage() {
  const [form, setForm] = useState({ nombre: '', consulta: '' })
  const [error, setError] = useState('')

  const wa = waLink('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.nombre.trim() || !form.consulta.trim()) {
      setError('Completá tu nombre y tu consulta para continuar.')
      return
    }
    setError('')
    const msg = `Hola, Seño Cin. Soy ${form.nombre.trim()}. ${form.consulta.trim()}`
    const link = waLink(msg)
    if (link) window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-texto">Contacto</h1>
          <p className="mt-3 text-lg text-gris">
            Escribinos por consultas sobre recursos, compras o entregas. Te respondemos a la brevedad.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-white border border-lila-light/40 p-6 sm:p-8"
          >
            {wa ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-texto mb-1.5">
                    Tu nombre
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    placeholder="Cómo te llamás"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-lila-light/60 bg-white text-texto placeholder:text-gris/60 focus:outline-none focus:ring-2 focus:ring-lila/40 focus:border-lila transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="consulta" className="block text-sm font-medium text-texto mb-1.5">
                    Tu consulta
                  </label>
                  <textarea
                    id="consulta"
                    rows={5}
                    value={form.consulta}
                    onChange={(e) => setForm({ ...form, consulta: e.target.value })}
                    placeholder="Contanos en qué te podemos ayudar"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-lila-light/60 bg-white text-texto placeholder:text-gris/60 focus:outline-none focus:ring-2 focus:ring-lila/40 focus:border-lila transition-all resize-none"
                  />
                </div>

                {error && (
                  <p role="alert" className="text-sm text-rosa-dark">{error}</p>
                )}

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-lila text-white font-medium hover:bg-lila-dark transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lila-dark"
                >
                  Enviar por WhatsApp
                </button>
                <p className="text-xs text-gris">
                  Se abre WhatsApp con tu mensaje pre-cargado. No se guarda ningún dato en el sitio.
                </p>
              </form>
            ) : (
              <div>
                <h2 className="text-lg font-semibold text-texto mb-3">Canales de contacto</h2>
                <p className="text-gris leading-relaxed">
                  Estamos configurando los canales de atención de la marca.
                  {site.email && <> Podés escribirnos a{' '}
                    <a href={`mailto:${site.email}`} className="text-lila-dark underline underline-offset-2">{site.email}</a>.</>}
                </p>
                <p className="mt-4 text-xs text-gris">
                  Nota para la administración: configurá el número de WhatsApp en{' '}
                  <code className="bg-gris-claro px-1.5 py-0.5 rounded">src/data/site.ts</code> para
                  activar el formulario de contacto.
                </p>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
          >
            {site.whatsapp && (
              <InfoCard
                title="WhatsApp"
                body="El canal más directo para consultas y compras."
                action={
                  <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-lila-dark hover:text-lila text-sm font-medium">
                    Abrir WhatsApp →
                  </a>
                }
              />
            )}
            {site.email && (
              <InfoCard
                title="Email"
                body="Para consultas detalladas o documentación."
                action={
                  <a href={`mailto:${site.email}`} className="text-lila-dark hover:text-lila text-sm font-medium">
                    {site.email}
                  </a>
                }
              />
            )}
            {site.instagram && (
              <InfoCard
                title="Instagram"
                body="Novedades y recursos del día a día."
                action={
                  <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer" className="text-lila-dark hover:text-lila text-sm font-medium">
                    @{site.instagram}
                  </a>
                }
              />
            )}
            {!site.whatsapp && !site.email && !site.instagram && (
              <InfoCard
                title="Medios de pago y entrega"
                body="Los recursos son digitales. Los medios de pago y la modalidad de entrega se acuerdan al momento de la compra."
                action={<Link href="/politicas#envios" className="text-lila-dark hover:text-lila text-sm font-medium">Ver compras y entregas →</Link>}
              />
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function InfoCard({ title, body, action }: { title: string; body: string; action: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-white border border-lila-light/40 p-6">
      <h3 className="text-sm font-semibold text-texto mb-1">{title}</h3>
      <p className="text-sm text-gris leading-relaxed mb-3">{body}</p>
      {action}
    </div>
  )
}
