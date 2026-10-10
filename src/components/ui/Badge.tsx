interface BadgeProps {
  children: React.ReactNode
  variant?: 'lila' | 'rosa' | 'verde' | 'amarillo'
  className?: string
}

const variants = {
  lila: 'bg-lila-light text-lila-dark',
  rosa: 'bg-rosa-light text-rosa-dark',
  verde: 'bg-verde-light text-verde-dark',
  amarillo: 'bg-amarillo-light text-amarillo-dark',
}

export function Badge({ children, variant = 'lila', className = '' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}
