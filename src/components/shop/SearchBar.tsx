'use client'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full">
      <svg
        className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gris pointer-events-none"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar por nombre, grado, área o tema…"
        aria-label="Buscar recursos"
        className="w-full pl-12 pr-4 py-3 rounded-xl border border-lila-light/60 bg-white text-texto placeholder:text-gris/60 focus:outline-none focus:ring-2 focus:ring-lila/40 focus:border-lila transition-all duration-200"
      />
    </div>
  )
}
