import { motion } from 'framer-motion'
import { Sparkles, Search, User, Cpu, Filter, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01', title: '拆解作业要求', icon: Search,
    desc: '将 Inspire / Thoughtworks 作业拆解为核心考察点：产品思维、需求转化能力、AI 工具运用、落地执行力。',
    tags: ['需求分析', '目标拆解', '优先级判断'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    number: '02', title: '梳理个人经历', icon: User,
    desc: '从真实项目经历中提取符合考察点的信息，筛选出军工、消费电子、工业软件等场景的代表性案例。',
    tags: ['信息筛选', '经历重组', '案例萃取'],
    color: 'from-teal-500 to-cyan-500',
  },
  {
    number: '03', title: 'AI 生成初稿', icon: Cpu,
    desc: '借助 AI 工具快速生成页面框架和文案初稿，获得可参考的结构和表达方式。',
    tags: ['框架生成', '文案初稿', '效率提速'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    number: '04', title: '人工筛选迭代', icon: Filter,
    desc: '对 AI 输出进行判断、筛选、重写和优化，确保内容真实、可信、符合个人定位。',
    tags: ['判断筛选', '内容重写', '细节打磨'],
    color: 'from-blue-500 to-violet-500',
  },
  {
    number: '05', title: '搭建与优化', icon: Rocket,
    desc: '完成页面搭建、动效添加、视觉优化和性能调优，最终上线并持续迭代。',
    tags: ['技术实现', '体验优化', '快速迭代'],
    color: 'from-violet-500 to-purple-500',
  },
]

export function AIHomework() {
  return (
    <section id="ai-homework" className="relative min-h-screen flex items-center py-24 xl:py-32 px-6 xl:px-8 bg-white overflow-hidden" aria-labelledby="ai-hw-heading">
      {/* 背景装饰 */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-brand-500/[0.02] rounded-full blur-[120px] -translate-x-1/2" />

      <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl 3xl:max-w-8xl mx-auto w-full relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 mb-5">
            <Sparkles className="w-3 h-3 text-brand-500" />
            <span className="text-brand-600 text-[11px] font-medium tracking-wide">AI-Assisted Process</span>
          </div>
          <h2 className="text-[30px] md:text-[40px] xl:text-[46px] 2xl:text-[52px] font-bold text-slate-900 tracking-tight" id="ai-hw-heading">
            我如何借助 AI 完成 HomeWork
          </h2>
        </motion.div>

        {/* 横向步骤卡片 */}
        <div className="grid grid-cols-5 gap-3 xl:gap-5 mb-8 xl:mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative"
              >
                {/* 顶部渐变条 */}
                <div className={`h-1 rounded-t-2xl bg-gradient-to-r ${step.color}`} />

                <div className="bg-[#fafafa] border border-slate-100 border-t-0 rounded-b-2xl p-4 xl:p-5 2xl:p-6 h-full flex flex-col hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)] transition-all duration-500">
                  {/* 序号 + 图标 */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] xl:text-xs font-bold text-slate-300">{step.number}</span>
                    <div className={`w-8 h-8 xl:w-10 xl:h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}>
                      <Icon className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
                    </div>
                  </div>

                  <h3 className="text-[13px] xl:text-[15px] 2xl:text-base font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-[11px] xl:text-[13px] 2xl:text-sm text-slate-400 leading-[1.6] mb-3 flex-1">{step.desc}</p>

                  <div className="flex flex-wrap gap-1 xl:gap-1.5">
                    {step.tags.map((tag) => (
                      <span key={tag} className="px-2 xl:px-2.5 py-0.5 xl:py-1 bg-white text-slate-400 text-[9px] xl:text-[11px] 2xl:text-xs font-medium rounded-md border border-slate-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 连接箭头 */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                    <motion.div
                      className="w-1 h-1 rounded-full bg-slate-300"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    />
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* 底部原则 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl bg-slate-900 max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-purple-500/5" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

          <div className="relative px-8 xl:px-10 py-6 xl:py-8 flex items-center gap-5 xl:gap-7">
            <div className="flex-shrink-0 w-12 h-12 xl:w-14 xl:h-14 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center">
              <Sparkles className="w-5 h-5 xl:w-6 xl:h-6 text-brand-400" />
            </div>
            <div>
              <div className="text-[11px] xl:text-xs 2xl:text-sm text-brand-400 font-medium tracking-widest uppercase mb-1.5">我的 AI 使用原则</div>
              <p className="text-[13px] xl:text-[15px] 2xl:text-base text-slate-300 leading-[1.7]">
                AI 是加速器，不是替代品。我用 AI 获取灵感、提速执行，但最终判断、内容筛选和体验优化必须由人完成。把 AI 当作「超级助理」，而非「思考代理」。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
