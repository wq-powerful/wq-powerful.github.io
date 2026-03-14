import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

const navigation = [
  { id: 'statement', label: '我是谁' },
  { id: 'work', label: '案例' },
  { id: 'method', label: '方法' },
  { id: 'contact', label: '联系' },
]

export function Navigation() {
  const { scrollY } = useScroll()
  const [activeSection, setActiveSection] = useState('')

  // 背景模糊效果随滚动变化
  const backdropBlur = useTransform(scrollY, [0, 100], [8, 16])
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0.7)', 'rgba(255, 255, 255, 0.9)']
  )

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
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        backgroundColor,
        backdropFilter: `blur(${backdropBlur}px)`,
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-apple-gray-200 shadow-sm"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo - 增强版 */}
        <motion.a
          href="#top"
          className="group relative"
          aria-label="返回顶部"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <p className="text-body font-semibold text-apple-gray-800 group-hover:text-apple-blue transition-colors">
            吴倩 · Olivia Wu
          </p>
          <motion.div
            className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500"
            initial={{ width: 0 }}
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>

        {/* 导航 - 增强版 */}
        <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="主导航">
          {navigation.map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              className="relative text-body text-apple-gray-600 hover:text-apple-gray-800 transition-colors"
              aria-label={`跳转到${item.label}部分`}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </motion.a>
          ))}
        </nav>

        {/* CTA 按钮 - 增强版 */}
        <motion.a
          href="#contact"
          className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full font-semibold text-white text-body-sm overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #0891B2 0%, #06B6D4 100%)',
          }}
          aria-label="联系我"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
          <span className="relative z-10">联系我</span>
        </motion.a>
      </div>
    </motion.header>
  )
}
