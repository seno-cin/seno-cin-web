/**
 * Acentos gráficos inspirados en el logo de Seño Cin.
 * Se usan en dosis pequeñas: nunca compiten con el contenido.
 */

export function Heart({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 21s-6.7-4.35-9.33-8.24C.86 9.9 1.6 6.4 4.4 5.2c1.9-.82 4-.2 5.1 1.36L12 8.9l2.5-2.34c1.1-1.56 3.2-2.18 5.1-1.36 2.8 1.2 3.54 4.66 1.73 7.56C18.7 16.65 12 21 12 21z"/>
    </svg>
  )
}

export function Star({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.5l2.9 5.9 6.5.95-4.7 4.58 1.11 6.47L12 17.9l-5.81 3.05 1.11-6.47-4.7-4.58 6.5-.95L12 2.5z"/>
    </svg>
  )
}

export function Puzzle({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20 3h-2.2a2.8 2.8 0 10-5.32 0H10v2.2a2.8 2.8 0 11-2.8 0V3H4a1 1 0 00-1 1v4.2a2.8 2.8 0 100 5.32V16a1 1 0 001 1h4.2a2.8 2.8 0 100 5.32V21a1 1 0 001 1h6a1 1 0 001-1v-2.2a2.8 2.8 0 100-5.32H20a1 1 0 001-1V4a1 1 0 00-1-1z"/>
    </svg>
  )
}

export function Square({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="4"/>
    </svg>
  )
}
