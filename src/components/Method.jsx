import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'

const methodSteps = [
  {
    number: '01',
    title: '先进入场景',
    text: '先弄清楚是谁在用、卡在哪里、为什么卡，而不是直接从功能开始想',
  },
  {
    number: '02',
    title: '再把问题结构化',
    text: '把用户原话拆成字段、逻辑、边界、例外和交付标准，让团队能对齐',
  },
  {
    number: '03',
    title: '尽快做验证',
    text: '用 AI 工具、流程草图或界面原型，把想法快速推进到可讨论状态',
  },
  {
    number: '04',
    title: '最后沉淀方法',
    text: '项目不该只留下"做完了"，还应该留下能被后续复用的模板和经验',
  },
]

export function Method() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="method" className="relative py-32 md:py-40 px-6 bg-apple-gray-50 overflow-hidden" aria-labelledby="method-heading" ref={ref}>
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <h2 className="text-section-sm md:text-section font-semibold text-apple-gray-800 mb-6" id="method-heading">
            工作方法
          </h2>
          <p className="text-body-lg text-apple-gray-500 max-w-3xl mx-auto">
            我理解的 AI 产品经理，不是把模型接进来就结束了，
            <br className="hidden md:block" />
            而是把业务问题、方案表达、快速验证和落地反馈接成一条连续链路
          </p>
        </motion.div>

        {/* 步骤卡片 - 增强版 */}
        <div className="space-y-8">
          {methodSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-3xl p-8 md:p-12 shadow-apple hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* 悬停背景渐变 */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-500" />

              {/* 顶部装饰线 */}
              <motion.div
                className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-500 to-blue-500"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.5 }}
              />

              <div className="relative z-10 flex items-start gap-6">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="flex-shrink-0"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {step.number}
                  </div>
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-subsection font-semibold text-apple-gray-800 mb-3 group-hover:text-portfolio-accent transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-body-lg text-apple-gray-500 leading-relaxed">{step.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 链接区域 - 增强版 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-16 text-center glass-card rounded-2xl p-8 shadow-xl"
        >
          <p className="text-body text-apple-gray-500 mb-6">
            这份网站本身也是用 AI 工具辅助完成的产品化表达
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://github.com/wq-powerful/work-ai-assistant"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label="访问 AI 智能体 GitHub 仓库"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              查看 AI 智能体仓库
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="https://github.com/wq-powerful/wq-powerful.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-portfolio-accent text-portfolio-accent font-semibold rounded-lg hover:bg-portfolio-accent hover:text-white transition-all duration-300"
              aria-label="访问网站源代码 GitHub 仓库"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              查看网站源代码
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
