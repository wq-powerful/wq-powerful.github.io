import { motion } from 'framer-motion'
import { Mail, Phone, Github, Sparkles } from 'lucide-react'

const contacts = [
  { icon: Phone, label: '电话', value: '19101469874', href: 'tel:19101469874' },
  { icon: Mail, label: '邮箱', value: '2541830361@qq.com', href: 'mailto:2541830361@qq.com' },
  { icon: Github, label: 'GitHub', value: 'wq-powerful', href: 'https://github.com/wq-powerful', external: true },
]

export function Contact() {
  return (
    <footer id="contact" className="relative min-h-screen flex items-center py-24 px-6 bg-white" aria-labelledby="contact-heading">
      <div className="max-w-5xl mx-auto w-full">
        {/* 标题区 */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="text-brand-500 text-[11px] font-medium tracking-widest uppercase mb-3">Contact</div>
          <h2 className="text-[28px] md:text-[36px] font-bold text-slate-900 tracking-tight mb-3" id="contact-heading">
            期待加入 Inspire
          </h2>
          <p className="text-[13px] text-slate-400 max-w-md mx-auto leading-relaxed">
            这份网站是我对 Inspire 2026 校招 AI 产品经理岗位作业的回答——从拆解考察点到 AI 辅助构建，全程体现产品思维与迭代能力
          </p>
        </motion.div>

        {/* 名片卡 */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative overflow-hidden rounded-2xl bg-slate-900 px-10 py-6 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-brand-500/5" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
            <div className="relative">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-500/10 border border-brand-500/20 mb-3">
                <Sparkles className="w-3 h-3 text-brand-400" />
                <span className="text-brand-400 text-[10px] font-medium">Inspire 2026 校招 · AI 产品经理候选人</span>
              </div>
              <div className="text-[20px] font-bold text-white tracking-tight">吴倩 · Olivia Wu</div>
            </div>
          </div>
        </motion.div>

        {/* 联系方式 */}
        <motion.div
          className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          {contacts.map((item, i) => {
            const Icon = item.icon
            return (
              <a
                key={i}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="group flex flex-col items-center gap-2 rounded-2xl p-5 bg-[#fafafa] border border-slate-100 hover:border-brand-200 hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.06)] transition-all duration-500"
                aria-label={`${item.label}: ${item.value}`}
              >
                <div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-300 group-hover:text-brand-500 group-hover:border-brand-200 transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-[10px] text-slate-400">{item.label}</div>
                <div className="text-[12px] font-medium text-slate-700 break-all">{item.value}</div>
              </a>
            )
          })}
        </motion.div>

        {/* 底部 */}
        <div className="pt-6 border-t border-slate-100 text-center text-[11px] text-slate-300">
          <p>© 2026 吴倩 · Inspire 2026 校招 AI 产品经理候选人</p>
          <p className="mt-1 text-slate-200">本站使用 AI 辅助构建，所有内容判断与筛选均由本人完成</p>
        </div>
      </div>
    </footer>
  )
}
