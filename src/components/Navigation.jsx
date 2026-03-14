import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const navigation = [
  { id: 'statement', label: '我是谁' },
  { id: 'work', label: '案例' },
  { id: 'method', label: '方法' },
  { id: 'contact', label: '联系' },
]

export function Navigation() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-cyber-purple/20"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="group" aria-label="返回顶部">
          <p className="font-mono text-xs uppercase tracking-wider text-cyber-text-secondary">
            Olivia Wu
          </p>
          <p className="text-base font-bold group-hover:text-cyber-cyan transition-colors">
            吴倩 · AI 产品经理候选人
          </p>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" role="navigation" aria-label="主导航">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-medium text-cyber-text-secondary hover:text-cyber-cyan transition-colors relative group"
              aria-label={`跳转到${item.label}部分`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyber-purple to-cyber-cyan group-hover:w-full transition-all duration-300" aria-hidden="true" />
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 bg-gradient-to-r from-cyber-purple to-cyber-cyan px-5 py-2 rounded-full font-semibold text-white text-sm hover:shadow-lg hover:shadow-cyber-purple/50 transition-all"
          aria-label="联系我"
        >
          联系我
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
        </a>
      </div>
    </motion.header>
  )
}
