'use client'

import { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

interface SectionTransitionProps {
  children: ReactNode
  delay?: number
}

export function SectionTransition({ children, delay = 0 }: SectionTransitionProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <>{children}</>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}
