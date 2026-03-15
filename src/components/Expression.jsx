import { motion } from 'framer-motion'
import { Mic, FileText, Users, BookOpen } from 'lucide-react'

const cards = [
  {
    icon: Mic,
    title: '培训与讲解',
    desc: '主导 10+ 项目的产品培训、售前演示与交付讲解，覆盖多个客户与内部团队角色，把复杂功能转化为清晰表达。',
    tags: ['10+ 项目培训', '售前演示', '交付讲解', '多团队覆盖'],
    accent: 'from-brand-500/20 to-brand-500/5',
  },
  {
    icon: FileText,
    title: '文档与材料沉淀',
    desc: '持续编写授课 PPT、操作手册、问题清单与视频资料，沉淀可复用资产，降低团队重复讲解成本，提升交付效率。',
    tags: ['PPT 课件', '操作手册', '问题清单', '视频资料'],
    accent: 'from-blue-500/20 to-blue-500/5',
  },
]

const highlights = [
  { icon: Users, value: '10+', label: '项目培训覆盖' },
  { icon: BookOpen, value: '多类型', label: '材料资产沉淀' },
]

export function Expression() {
  return (
    <section id="expression" className="relative min-h-screen flex items-center py-24 px-6 bg-[#fafafa] overflow-hidden" aria-labelledby="expression-heading">
      {/* 背景装饰 */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/[0.03] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-500/[0.02] rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-5xl mx-auto w-full relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
            <span className="text-brand-600 text-[11px] font-medium tracking-wide">差异化优势</span>
          </div>
          <h2 className="text-[30px] md:text-[40px] font-bold text-slate-900 tracking-tight mb-5" id="expression-heading">
            表达与用户赋能
          </h2>
          <p className="text-[14px] text-slate-400 max-w-lg mx-auto leading-[1.8]">
            擅长把复杂产品逻辑转化为可讲、可学、可执行的材料——帮助团队与客户真正用起来，降低重复讲解成本，提升交付复用效率
          </p>
        </motion.div>

        {/* 主卡片区 */}
        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {cards.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="group relative rounded-2xl border border-slate-100 bg-white overflow-hidden hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)] transition-all duration-500"
              >
                {/* 顶部渐变条 */}
                <div className={`h-1 bg-gradient-to-r ${item.accent}`} />

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-500 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-[16px] font-semibold text-slate-900 group-hover:text-brand-600 transition-colors duration-300">{item.title}</h3>
                  </div>

                  <p className="text-[13px] text-slate-400 leading-[1.7] mb-5">{item.desc}</p>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, i) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.3, delay: 0.3 + i * 0.06 }}
                        className="px-3 py-1 bg-[#fafafa] text-slate-500 text-[11px] font-medium rounded-lg border border-slate-100 hover:bg-brand-50 hover:text-brand-600 hover:border-brand-200 transition-all duration-300 cursor-default"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* 底部数据条 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-4 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]">
            {highlights.map((h, i) => {
              const HIcon = h.icon
              return (
                <div key={i} className="flex items-center gap-8">
                  <div className="flex items-center gap-3">
                    <HIcon className="w-4 h-4 text-brand-500" />
                    <div>
                      <div className="text-[18px] font-bold text-slate-900 tracking-tight">{h.value}</div>
                      <div className="text-[10px] text-slate-400">{h.label}</div>
                    </div>
                  </div>
                  {i < highlights.length - 1 && <div className="w-px h-8 bg-slate-200" />}
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
