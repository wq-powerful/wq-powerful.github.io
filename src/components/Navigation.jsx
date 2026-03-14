import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const navigation = [
  { id: 'statement', label: '我是谁' },
  { id: 'work', label: '案例' },
  { id: 'method', label: '方法' },
  { id: 'contact', label: '联系' },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navigation[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#top"
          className="text-base font-semibold text-slate-900 hover:text-cyan-600 transition-colors"
          aria-label="返回顶部"
        >
          吴倩 · Olivia Wu
        </a>

        {/* 导航 */}
        <nav className="hidden md:flex items-center gap-6" role="navigation" aria-label="主导航">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative text-sm transition-colors ${
                activeSection === item.id
                  ? 'text-cyan-600 font-medium'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              aria-label={`跳转到${item.label}部分`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-600"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* CTA 按钮 */}
        <a
          href="#contact"
          className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:shadow-md transition-all duration-200"
          aria-label="联系我"
        >
          联系我
        </a>
      </div>
    </header>
  )
}
