import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight } from 'lucide-react'

const methodSteps = [
  {
    number: '01',
    title: '先进入场景',
    text: '先弄清楚是谁在用、卡在哪里、为什么卡，而不是直接从功能开始想。',
  },
  {
    number: '02',
    title: '再把问题结构化',
    text: '把用户原话拆成字段、逻辑、边界、例外和交付标准，让团队能对齐。',
  },
  {
    number: '03',
    title: '尽快做验证',
    text: '用 AI 工具、流程草图或界面原型，把想法快速推进到可讨论状态。',
  },
  {
    number: '04',
    title: '最后沉淀方法',
    text: '项目不该只留下"做完了"，还应该留下能被后续复用的模板和经验。',
  },
]

const siteRepoUrl = 'https://github.com/wq-powerful/wq-powerful.github.io'
const aiRepoUrl = 'https://github.com/wq-powerful/work-ai-assistant'

export function Method() {
  return (
    <section id="method" className="relative py-16 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* 左侧说明 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block font-mono text-sm text-cyber-cyan uppercase tracking-wider mb-4">
              How I Work
            </span>
            <h2 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-6">
              我理解的 AI 产品经理，
              <span className="block mt-2 bg-gradient-to-r from-cyber-purple via-cyber-cyan to-cyber-green bg-clip-text text-transparent">
                不是把模型接进来就结束了。
              </span>
            </h2>
            <p className="text-cyber-text-secondary leading-relaxed mb-8">
              更重要的是把业务问题、方案表达、快速验证和落地反馈接成一条连续链路。这也是我想通过这份
              homework 展示的核心：我不是把文字搬到线上，而是在组织一个更接近产品化的表达。
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={aiRepoUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 glass-strong px-5 py-3 rounded-full font-semibold hover:border-cyber-cyan transition-all"
              >
                AI 智能体仓库
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a
                href={siteRepoUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 glass-strong px-5 py-3 rounded-full font-semibold hover:border-cyber-purple transition-all"
              >
                网站仓库
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* 右侧步骤 */}
          <div className="space-y-6">
            {methodSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ x: 10 }}
                className="glass-strong rounded-2xl p-6 cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyber-purple to-cyber-cyan flex items-center justify-center font-mono font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      {step.title}
                      <ArrowRight className="w-5 h-5 text-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-cyber-text-secondary leading-relaxed">{step.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
