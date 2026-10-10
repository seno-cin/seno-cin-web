'use client'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: Variant
  size?: Size
  href?: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const variantStyles: Record<Variant, string> = {
  primary: 'bg-lila text-white hover:bg-lila-dark shadow-sm hover:shadow-md',
  secondary: 'bg-rosa text-white hover:bg-rosa-dark shadow-sm hover:shadow-md',
  outline: 'border-2 border-lila text-lila hover:bg-lila-light/50',
  ghost: 'text-gris hover:text-lila hover:bg-lila-light/30',
}

const sizeStyles: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export function Button({ variant = 'primary', size = 'md', className = '', children, href, ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 cursor-pointer'
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    )
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  )
}
