import { motion } from 'framer-motion'
import { Mail, Phone, Github } from 'lucide-react'

export function Contact() {
  return (
    <footer id="contact" className="relative py-32 md:py-40 px-6 bg-apple-gray-800 text-white">
      <div className="max-w-5xl mx-auto">
        {/* Apple 风格联系标题 - 大字体，居中 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <h2 className="text-section-sm md:text-section font-semibold mb-6">
            如果这份网站足够清楚
          </h2>
          <p className="text-body-lg text-apple-gray-300 max-w-2xl mx-auto">
            欢迎继续和我聊真实场景里的产品工作
          </p>
        </motion.div>

        {/* Apple 风格联系方式 - 简洁卡片 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="grid md:grid-cols-2 gap-6 mb-20"
        >
          <a
            href="tel:19101469874"
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/15 transition-all duration-200"
          >
            <Phone className="w-8 h-8 text-apple-blue mb-4" />
            <div className="text-body-sm text-apple-gray-300 mb-2">电话</div>
            <div className="text-subsection font-semibold">19101469874</div>
          </a>

          <a
            href="mailto:2541830361@qq.com"
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/15 transition-all duration-200"
          >
            <Mail className="w-8 h-8 text-apple-blue mb-4" />
            <div className="text-body-sm text-apple-gray-300 mb-2">邮箱</div>
            <div className="text-body-lg font-semibold break-all">2541830361@qq.com</div>
          </a>
        </motion.div>

        {/* Apple 风格底部信息 - 简洁分隔 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="pt-12 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-body text-apple-gray-300">
              Olivia Wu · 吴倩 · AI 产品经理候选人
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/wq-powerful"
                target="_blank"
                rel="noreferrer"
                className="text-apple-gray-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="mt-8 text-center text-body-sm text-apple-gray-400">
            <p>Built with React 19 + Vite + Tailwind CSS + Framer Motion</p>
            <p className="mt-2">© 2026 Olivia Wu. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
