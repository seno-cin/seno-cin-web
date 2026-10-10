import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Catalog } from './Catalog'

export const metadata: Metadata = {
  title: 'Recursos pedagógicos',
  description:
    'Planificaciones, secuencias didácticas, adecuaciones y DEI, informes pedagógicos y juegos didácticos para docentes de primaria. Filtrá por grado, área y período.',
}

export default function RecursosPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-texto">Recursos pedagógicos</h1>
          <p className="mt-3 text-lg text-gris">
            Planificaciones, secuencias, adecuaciones, informes y juegos. Filtrá por grado, área o período.
          </p>
        </div>
        <Suspense fallback={<div className="mt-10 text-gris">Cargando catálogo…</div>}>
          <Catalog />
        </Suspense>
      </div>
    </div>
  )
}
