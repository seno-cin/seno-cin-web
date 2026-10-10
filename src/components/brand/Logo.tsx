interface LogoProps {
  className?: string
}

/**
 * Logotipo de Seño Cin (vector, trazado del logo original).
 * Autocontenido en paths — sin dependencia de fuentes ni de next/image.
 */
export function Logo({ className = '' }: LogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.svg"
      alt="Seño Cin — Aprende jugando"
      width={623}
      height={642}
      className={className}
      loading="lazy"
      decoding="async"
    />
  )
}
