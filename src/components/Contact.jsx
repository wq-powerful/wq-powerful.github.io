import { motion } from 'framer-motion'
import { Mail, Phone, Github, Linkedin } from 'lucide-react'

export function Contact() {
  return (
    <footer id="contact" className="relative py-16 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            {/* 左侧文字 */}
            <div>
              <span className="inline-block font-mono text-sm text-cyber-cyan uppercase tracking-wider mb-4">
                Let's Connect
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
                如果这份网站足够清楚，
                <span className="block mt-2 bg-gradient-to-r from-cyber-purple via-cyber-cyan to-cyber-green bg-clip-text text-transparent">
                  欢迎继续和我聊真实场景里的产品工作。
                </span>
              </h2>
              <p className="text-cyber-text-secondary leading-relaxed">
                求职方向：AI 产品经理 / AI 产品原型 / 产品解决方案方向
              </p>
            </div>

            {/* 右侧联系方式 */}
            <div className="grid sm:grid-cols-2 gap-6">
              <motion.a
                href="tel:19101469874"
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-2xl p-6 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyber-purple to-cyber-cyan flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <p className="font-mono text-xs uppercase tracking-wider text-cyber-text-secondary mb-2">
                  Phone
                </p>
                <p className="text-xl font-bold group-hover:text-cyber-cyan transition-colors">
                  19101469874
                </p>
              </motion.a>

              <motion.a
                href="mailto:2541830361@qq.com"
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-2xl p-6 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyber-cyan to-cyber-green flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <p className="font-mono text-xs uppercase tracking-wider text-cyber-text-secondary mb-2">
                  Email
                </p>
                <p className="text-lg font-bold break-all group-hover:text-cyber-cyan transition-colors">
                  2541830361@qq.com
                </p>
              </motion.a>
            </div>
          </div>

          {/* 底部信息 */}
          <div className="mt-12 pt-8 border-t border-cyber-purple/20 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
              <span className="text-sm text-cyber-text-secondary">
                Olivia Wu · 吴倩 · AI 产品经理候选人
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/wq-powerful"
                target="_blank"
                rel="noreferrer"
                className="text-cyber-text-secondary hover:text-cyber-cyan transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* 版权信息 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-sm text-cyber-text-secondary"
        >
          <p>Built with React 19 + Vite + Tailwind CSS + Framer Motion</p>
          <p className="mt-2">© 2026 Olivia Wu. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
