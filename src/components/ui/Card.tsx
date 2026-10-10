'use client'

import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

export function Card({ children, className = '', hover = true, onClick }: CardProps) {
  const Component = onClick ? 'button' : 'div'

  return (
    <motion.div
      className={`bg-white rounded-2xl shadow-sm border border-lila-light/20 overflow-hidden ${hover ? 'cursor-pointer' : ''} ${className}`}
      whileHover={hover ? { y: -4, boxShadow: '0 8px 25px rgba(196, 164, 212, 0.15)' } : {}}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
}
