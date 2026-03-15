import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const aiItems = [
  { title: 'AI 辅助需求整理', desc: '用 AI 工具把模糊的客户诉求快速结构化，生成可讨论的需求文档，减少反复沟通成本。' },
  { title: 'AI 辅助规则建库', desc: '利用 AI 辅助梳理 DFM 规则结构，参数建库效率提升 60%+，方法在团队内部实现高复用。' },
  { title: 'AI 辅助培训材料', desc: '用 AI 工具辅助生成培训 PPT、操作手册和实训材料，沉淀可复用的教学资产。' },
  { title: 'AI 辅助产品表达', desc: '这份网站本身就是 AI 辅助完成的产品化表达——从内容梳理到代码实现，全程 AI 协作。' },
]

export function AIProcess() {
  return (
    <section id="ai-process" className="relative min-h-screen flex items-center py-20 px-6 bg-[#fafafa]" aria-labelledby="ai-heading">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="text-brand-500 text-[11px] font-medium tracking-widest uppercase mb-3">AI-Assisted</div>
          <h2 className="text-[28px] md:text-[36px] font-bold text-slate-900 tracking-tight mb-3" id="ai-heading">AI 实践</h2>
          <p className="text-[13px] text-slate-400 max-w-lg mx-auto leading-relaxed">
            不是炫技，而是让每个环节都更快到达"可讨论、可验证"的状态。
          </p>
          <div className="mt-3 inline-flex items-center gap-2 text-[11px] text-slate-400">
            <span className="px-2 py-0.5 bg-white rounded-full border border-slate-100 text-[10px]">Inspire</span>
            <span className="px-2 py-0.5 bg-white rounded-full border border-slate-100 text-[10px]">Thoughtworks</span>
            <span>背景的 AI 产品实践</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {aiItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -2 }}
              className="group bg-white rounded-2xl p-5 border border-slate-100 hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.06)] transition-all duration-500"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-brand-50 flex items-center justify-center text-brand-500">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="text-[13px] font-semibold text-slate-900 mb-1 group-hover:text-brand-600 transition-colors">{item.title}</h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl bg-slate-900 p-8"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-brand-500/5" />
          <div className="relative max-w-xl mx-auto text-center">
            <Sparkles className="w-5 h-5 text-brand-400 mx-auto mb-4" />
            <p className="text-[14px] text-slate-200 leading-[1.8] mb-3">
              AI 不是替代产品经理，而是让产品经理能更快地从"模糊想法"到达"可验证方案"。
              我关注的不是 AI 能做什么，而是它在真实业务场景里，能帮团队省下多少沟通和返工成本。
            </p>
            <p className="text-[11px] text-slate-500">
              从需求整理、规则建库、培训材料到这份网站——每一步都有 AI 的参与，但每一步的判断都来自真实的业务理解。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
