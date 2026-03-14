import { motion } from 'framer-motion'

const navigation = [
  { id: 'statement', label: '我是谁' },
  { id: 'work', label: '案例' },
  { id: 'method', label: '方法' },
  { id: 'contact', label: '联系' },
]

export function Navigation() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-apple-gray-200"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Apple 风格 Logo - 简洁 */}
        <a href="#top" className="group" aria-label="返回顶部">
          <p className="text-body font-semibold text-apple-gray-800 group-hover:text-apple-blue transition-colors">
            吴倩 · Olivia Wu
          </p>
        </a>

        {/* Apple 风格导航 - 简洁链接 */}
        <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="主导航">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-body text-apple-gray-600 hover:text-apple-gray-800 transition-colors"
              aria-label={`跳转到${item.label}部分`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Apple 风格 CTA - 简洁蓝色按钮 */}
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-apple-blue hover:bg-apple-blue-dark px-5 py-2 rounded-full font-semibold text-white text-body-sm transition-all duration-200"
          aria-label="联系我"
        >
          联系我
        </a>
      </div>
    </motion.header>
  )
}
