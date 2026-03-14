import { motion, useInView } from 'framer-motion'
import { Mail, Phone, Github, Send } from 'lucide-react'
import { useRef } from 'react'

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <footer id="contact" className="relative py-32 md:py-40 px-6 bg-apple-gray-800 text-white overflow-hidden" ref={ref}>
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />

        {/* 装饰网格 */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 mb-6 shadow-2xl"
          >
            <Send className="w-8 h-8" />
          </motion.div>
          <h2 className="text-section-sm md:text-section font-semibold mb-6">
            如果这份网站足够清楚
          </h2>
          <p className="text-body-lg text-apple-gray-300 max-w-2xl mx-auto">
            欢迎继续和我聊真实场景里的产品工作
          </p>
        </motion.div>

        {/* 联系方式卡片 - 增强版 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="grid md:grid-cols-2 gap-6 mb-20"
        >
          <motion.a
            href="tel:19101469874"
            className="group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all duration-300 overflow-hidden"
            aria-label="拨打电话 19101469874"
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* 悬停光效 */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-500" />

            <div className="relative z-10">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Phone className="w-8 h-8 text-cyan-400 mb-4" aria-hidden="true" />
              </motion.div>
              <div className="text-body-sm text-apple-gray-300 mb-2">电话</div>
              <div className="text-subsection font-semibold">19101469874</div>
            </div>
          </motion.a>

          <motion.a
            href="mailto:2541830361@qq.com"
            className="group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all duration-300 overflow-hidden"
            aria-label="发送邮件至 2541830361@qq.com"
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* 悬停光效 */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500" />

            <div className="relative z-10">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Mail className="w-8 h-8 text-blue-400 mb-4" aria-hidden="true" />
              </motion.div>
              <div className="text-body-sm text-apple-gray-300 mb-2">邮箱</div>
              <div className="text-body-lg font-semibold break-all">2541830361@qq.com</div>
            </div>
          </motion.a>
        </motion.div>

        {/* 底部信息 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="pt-12 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-body text-apple-gray-300">
              Olivia Wu · 吴倩 · AI 产品经理候选人
            </div>
            <div className="flex items-center gap-6">
              <motion.a
                href="https://github.com/wq-powerful"
                target="_blank"
                rel="noopener noreferrer"
                className="text-apple-gray-300 hover:text-white transition-colors"
                aria-label="访问 GitHub 主页"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Github className="w-6 h-6" aria-hidden="true" />
              </motion.a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-8 text-center text-body-sm text-apple-gray-400"
          >
            <p>Built with React 19 + Vite + Tailwind CSS + Framer Motion</p>
            <p className="mt-2">© 2026 Olivia Wu. All rights reserved.</p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
