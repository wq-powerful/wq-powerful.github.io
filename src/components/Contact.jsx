import { motion } from 'framer-motion'
import { Mail, Phone, Github } from 'lucide-react'

export function Contact() {
  return (
    <footer id="contact" className="relative py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            联系方式
          </h2>
          <p className="text-lg text-slate-300">
            欢迎继续和我聊真实场景里的产品工作
          </p>
        </div>

        {/* 联系卡片 - 清晰可见 */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a
            href="tel:19101469874"
            className="group bg-slate-800 hover:bg-slate-750 rounded-2xl p-8 transition-all duration-300 border-2 border-slate-700 hover:border-cyan-500"
            aria-label="拨打电话 19101469874"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                <Phone className="w-6 h-6 text-cyan-400" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-slate-400 mb-1">电话</div>
                <div className="text-xl font-semibold text-white">19101469874</div>
              </div>
            </div>
          </a>

          <a
            href="mailto:2541830361@qq.com"
            className="group bg-slate-800 hover:bg-slate-750 rounded-2xl p-8 transition-all duration-300 border-2 border-slate-700 hover:border-cyan-500"
            aria-label="发送邮件至 2541830361@qq.com"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                <Mail className="w-6 h-6 text-cyan-400" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-slate-400 mb-1">邮箱</div>
                <div className="text-lg font-semibold text-white break-all">2541830361@qq.com</div>
              </div>
            </div>
          </a>
        </div>

        {/* 底部信息 */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-400">
              Olivia Wu · 吴倩 · AI 产品经理候选人
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/wq-powerful"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="访问 GitHub 主页"
              >
                <Github className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-slate-500">
            <p>Built with React 19 + Vite + Tailwind CSS</p>
            <p className="mt-1">© 2026 Olivia Wu. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
