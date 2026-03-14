import { motion } from 'framer-motion'

export function GlassCard({ children, className = '', delay = 0, hover3d = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={
        hover3d
          ? {
              rotateY: 5,
              rotateX: 5,
              scale: 1.02,
              transition: { duration: 0.3 },
            }
          : { scale: 1.02 }
      }
      className={`glass rounded-3xl p-6 ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </motion.div>
  )
}
