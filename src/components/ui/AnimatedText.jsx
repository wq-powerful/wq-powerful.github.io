import { motion } from 'framer-motion'

export function AnimatedText({ text, className = '', delay = 0, gradient = false }) {
  const words = text.split(' ')

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  }

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          className={`inline-block mr-2 ${gradient ? 'bg-gradient-to-r from-cyber-purple via-cyber-cyan to-cyber-green bg-clip-text text-transparent' : ''}`}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
