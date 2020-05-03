import React from 'react'
import { motion } from 'framer-motion'

export const variants = {
  enter: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] }
  },
  exit: {
    scale: 0.6,
    opacity: 0,
    transition: { duration: 0.3, ease: [0.48, 0.15, 0.25, 0.96] }
  }
}

const AnimatedDismiss = ({ children }) => {
  return (
    <motion.div animate="enter" exit="exit" variants={variants}>
      {children}
    </motion.div>
  )
}

export default AnimatedDismiss
