import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Layers, Cpu, Truck } from 'lucide-react'

const projects = [
  {
    id: 'dfm', tab: 'DFM 规则编辑器', icon: Layers,
    tags: ['工业软件', '需求设计', '产品化'],
    positioning: '把客户现场的零散问题转化为可执行规则与产品方案',
    actions: ['从多个客户现场提取高频痛点，识别可产品化规则需求', '将零散问题整理为结构化规则逻辑与字段表达', '建立规则一致性标准，降低沟通成本与返工风险'],
    metrics: [{ value: '50%+', label: '问题检出率提升' }, { value: '100%', label: '客户满意度' }, { value: '10+', label: 'license 增购' }],
    quote: '好的需求，不是写出来，而是推进下去。',
    resultUrl: 'https://z78jkm7sqj.coze.site', hasResult: true,
  },
  {
    id: 'ai-assistant', tab: 'AI 工作助手', icon: Cpu,
    tags: ['AI 应用', '效率工具', '知识沉淀'],
    positioning: '用 AI 工具把重复性工作自动化，让团队聚焦高价值判断',
    actions: ['搭建 AI 助手处理需求整理与文档生成', '建立知识沉淀机制，让经验可检索、可复用', '推动 AI 工具在培训材料和报告输出中的实际应用'],
    metrics: [{ value: '60%+', label: '建库效率提升' }, { value: '80%+', label: '输出效率提升' }, { value: '3项', label: '资产沉淀' }],
    quote: 'AI 的价值不在于看起来聪明，而在于真正省下团队的时间。',
    resultUrl: 'https://wq-powerful.github.io/work-ai-assistant', hasResult: true,
  },
  {
    id: 'delivery', tab: '多行业交付', icon: Truck,
    tags: ['项目交付', '用户培训', '多行业'],
    positioning: '在军工、消费电子、校企等场景中完成从交付到赋能的完整闭环',
    actions: ['负责昆明 VSD、宁波德业等项目的现场交付与培训', '编写操作手册、实训材料，适配不同用户群体', '建立问题闭环机制，确保每个反馈有跟踪有结果'],
    metrics: [{ value: '10+', label: '项目交付' }, { value: '80%+', label: '效率提升' }, { value: '2名', label: '学生获实习' }],
    quote: '客户第一次上手的那一刻，比需求会议更能暴露真问题。',
    hasResult: false,
  },
]

export function Cases() {
  const [activeTab, setActiveTab] = useState(0)
  const p = projects[activeTab]
  const ActiveIcon = p.icon

  return (
    <section id="cases" className="relative min-h-screen flex items-center py-20 px-6 bg-[#fafafa]" aria-labelledby="cases-heading">
      <div className="max-w-5xl mx-auto w-full">
        {/* 标题 */}
        <motion.div className="text-center mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}>
          <div className="text-brand-500 text-[11px] font-medium tracking-widest uppercase mb-3">Projects</div>
          <h2 className="text-[28px] md:text-[36px] font-bold text-slate-900 tracking-tight mb-3" id="cases-heading">重点项目</h2>
          <p className="text-[13px] text-slate-400 max-w-md mx-auto">以下案例展示了我如何把复杂业务问题转化为可推进的方案，并在真实项目中完成落地。</p>
        </motion.div>

        {/* Tab 导航 */}
        <div className="flex justify-center gap-2.5 mb-7">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <button
                key={project.id}
                onClick={() => setActiveTab(index)}
                className={`group flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-slate-900 text-white shadow-[0_2px_12px_-3px_rgba(0,0,0,0.2)]'
                    : 'bg-white text-slate-500 border border-slate-100 hover:border-slate-200 hover:text-slate-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-[13px] font-medium">{project.tab}</span>
              </button>
            )
          })}
        </div>

        {/* 内容区 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-[0_2px_24px_-8px_rgba(0,0,0,0.06)]"
          >
            <div className="grid md:grid-cols-[1fr,190px]">
              {/* 左侧 */}
              <div className="p-6">
                {/* 定位 + 标签 */}
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-brand-50 flex items-center justify-center text-brand-500">
                      <ActiveIcon className="w-4 h-4" />
                    </div>
                    <h3 className="text-[15px] font-bold text-slate-900">{p.positioning}</h3>
                  </div>
                  <div className="flex gap-1.5 flex-shrink-0 ml-4">
                    {p.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-0.5 bg-[#fafafa] text-slate-400 text-[10px] font-medium rounded-full border border-slate-100">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* 分隔 */}
                <div className="border-t border-slate-100 my-4" />

                {/* 动作列表 */}
                <div className="space-y-3 mb-4">
                  {p.actions.map((action, i) => (
                    <motion.div
                      key={`${activeTab}-${i}`}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: i * 0.08 }}
                      className="flex items-start gap-3 text-[13px] text-slate-600"
                    >
                      <span className="flex-shrink-0 w-5 h-5 rounded-md bg-brand-500 text-white text-[10px] font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                      <span className="leading-relaxed">{action}</span>
                    </motion.div>
                  ))}
                </div>

                {/* 底部引言 + 按钮 */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <p className="text-[11px] text-slate-300 italic max-w-[55%]">"{p.quote}"</p>
                  {p.hasResult && (
                    <a
                      href={p.resultUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-slate-900 text-white text-[11px] font-medium rounded-full hover:bg-slate-700 transition-colors"
                    >
                      查看成果 <ArrowRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

              {/* 右侧指标 */}
              <div className="flex flex-col justify-center gap-5 px-5 py-6 border-l border-slate-100 bg-[#fafafa]/50">
                {p.metrics.map((m, i) => (
                  <motion.div
                    key={`${activeTab}-m-${i}`}
                    className="text-center"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.12 + i * 0.08 }}
                  >
                    <div className="text-[22px] font-bold text-brand-500 tracking-tight leading-none">{m.value}</div>
                    <div className="text-[10px] text-slate-400 mt-1">{m.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
