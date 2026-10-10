'use client'

import { motion } from 'framer-motion'

interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: 'center' | 'left'
  className?: string
}

export function SectionTitle({ title, subtitle, align = 'center', className = '' }: SectionTitleProps) {
  return (
    <motion.div
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-texto leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gris leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
