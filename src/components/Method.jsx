import { motion } from 'framer-motion'

const steps = [
  { number: '01', title: '先进入场景', desc: '先弄清楚是谁在用、卡在哪里、为什么卡，而不是直接从功能开始想。' },
  { number: '02', title: '再把问题结构化', desc: '把用户原话拆成字段、逻辑、边界、例外和交付标准，让团队能对齐。' },
  { number: '03', title: '尽快做验证', desc: '用 AI 工具、流程草图或界面原型，把想法快速推进到可讨论状态。' },
  { number: '04', title: '最后沉淀方法', desc: '项目不该只留下"做完了"，还应该留下能被后续复用的模板和经验。' },
]

export function Method() {
  return (
    <section id="method" className="relative min-h-screen flex items-center py-24 xl:py-32 px-6 xl:px-8 bg-white" aria-labelledby="method-heading">
      <div className="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl mx-auto w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="text-brand-500 text-[11px] xl:text-xs 2xl:text-sm font-medium tracking-widest uppercase mb-3">Method</div>
          <h2 className="text-[28px] md:text-[36px] xl:text-[42px] 2xl:text-[48px] font-bold text-slate-900 tracking-tight mb-4" id="method-heading">我的方法论</h2>
          <p className="text-[14px] xl:text-base 2xl:text-lg text-slate-400 max-w-lg xl:max-w-xl mx-auto leading-relaxed">
            我理解的 AI 产品经理，不是把模型接进来就结束了，而是把业务问题、方案表达、快速验证和落地反馈接成一条连续链路。
          </p>
        </motion.div>

        {/* 横向时间线 */}
        <div className="relative">
          {/* 连接线 */}
          <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-slate-100" />

          <div className="grid md:grid-cols-4 gap-8 xl:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-center"
              >
                <div className="relative inline-flex items-center justify-center w-14 h-14 xl:w-16 xl:h-16 2xl:w-18 2xl:h-18 rounded-full bg-brand-500 text-white text-[14px] xl:text-base font-bold mb-5 shadow-[0_4px_20px_-4px_rgba(31,163,122,0.4)]">
                  {step.number}
                </div>
                <h3 className="text-[14px] xl:text-base 2xl:text-lg font-semibold text-slate-900 mb-2.5">{step.title}</h3>
                <p className="text-[12px] xl:text-sm 2xl:text-base text-slate-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
