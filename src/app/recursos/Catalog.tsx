'use client'

import { useState, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ResourceCard } from '@/components/shop/ResourceCard'
import { SearchBar } from '@/components/shop/SearchBar'
import {
  publishedProducts,
  categoriaLabels,
  areaLabels,
  gradoLabels,
  categorias,
  areas,
  grados,
  type Categoria,
  type Area,
  type Grado,
} from '@/data/products'

interface Filters {
  categoria: Categoria | ''
  area: Area | ''
  grado: Grado | ''
  periodo: string
}

export function Catalog() {
  const searchParams = useSearchParams()
  const inicial = (searchParams.get('categoria') ?? '') as Categoria | ''

  const [search, setSearch] = useState('')
  const [filters, setFilters] = useState<Filters>({ categoria: inicial, area: '', grado: '', periodo: '' })

  const all = useMemo(() => publishedProducts(), [])

  // Los períodos se derivan de los productos cargados (se agregan desde el catálogo)
  const periodos = useMemo(() => {
    const set = new Set(all.map((p) => p.periodo).filter(Boolean) as string[])
    return Array.from(set).sort()
  }, [all])

  const filtered = useMemo(() => {
    return all.filter((p) => {
      if (search) {
        const q = search.toLowerCase()
        const haystack = [p.title, p.description, p.longDescription, ...p.tags].join(' ').toLowerCase()
        if (!haystack.includes(q)) return false
      }
      if (filters.categoria && p.categoria !== filters.categoria) return false
      if (filters.area && p.area !== filters.area) return false
      if (filters.grado && !p.grado.includes(filters.grado)) return false
      if (filters.periodo && p.periodo !== filters.periodo) return false
      return true
    })
  }, [all, search, filters])

  const activeFilterCount = Object.values(filters).filter(Boolean).length

  const group = (title: string, options: { value: string; label: string }[], key: keyof Filters) => (
    <div>
      <h3 className="text-xs font-semibold text-gris uppercase tracking-wider mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const active = filters[key] === o.value
          return (
            <button
              key={o.value}
              onClick={() => setFilters((f) => ({ ...f, [key]: o.value }))}
              aria-pressed={active}
              className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                active ? 'bg-lila text-white' : 'bg-white text-gris border border-lila-light/60 hover:border-lila'
              }`}
            >
              {o.label}
            </button>
          )
        })}
      </div>
    </div>
  )

  return (
    <div className="mt-8">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="w-full sm:max-w-xs">
          <SearchBar value={search} onChange={setSearch} />
        </div>
        <span className="text-sm text-gris sm:ml-auto" aria-live="polite">
          {filtered.length} recurso{filtered.length !== 1 ? 's' : ''}
        </span>
      </div>

      <div className="mt-6 space-y-6 p-5 rounded-2xl bg-white border border-lila-light/40">
        {group('Categoría', categorias.map((c) => ({ value: c, label: categoriaLabels[c] })), 'categoria')}
        {group('Grado', grados.map((g) => ({ value: g, label: gradoLabels[g] })), 'grado')}
        {group('Área', areas.map((a) => ({ value: a, label: areaLabels[a] })), 'area')}
        {periodos.length > 0 && group('Período', periodos.map((p) => ({ value: p, label: p })), 'periodo')}
        {(activeFilterCount > 0 || search) && (
          <button
            onClick={() => { setFilters({ categoria: '', area: '', grado: '', periodo: '' }); setSearch('') }}
            className="text-sm text-lila-dark hover:text-lila underline underline-offset-2"
          >
            Limpiar filtros
          </button>
        )}
      </div>

      <div className="mt-10">
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20 rounded-2xl bg-white border border-lila-light/40"
            >
              <div className="text-4xl mb-4" aria-hidden="true">🔍</div>
              <h2 className="text-xl font-semibold text-texto mb-2">
                {all.length === 0 ? 'El catálogo está en preparación' : 'No encontramos nada con esos filtros'}
              </h2>
              <p className="text-gris max-w-md mx-auto">
                {all.length === 0
                  ? 'Muy pronto vas a encontrar acá los recursos de Seño Cin.'
                  : 'Probá con otros términos o limpiá los filtros para ver todo el material.'}
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {filtered.map((product, i) => (
                <ResourceCard key={product.id} product={product} index={i} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
