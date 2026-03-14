import { motion } from 'framer-motion'
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
  return (
    <section id="method" className="relative py-16 px-6 bg-white" aria-labelledby="method-heading">
      <div className="max-w-5xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3" id="method-heading">
            工作方法
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            我理解的 AI 产品经理，不是把模型接进来就结束了，而是把业务问题、方案表达、快速验证和落地反馈接成一条连续链路
          </p>
        </div>

        {/* 步骤卡片 */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {methodSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border-2 border-slate-200 hover:border-cyan-300 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-lg font-bold shadow-md">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 链接区域 */}
        <div className="text-center bg-slate-50 rounded-2xl p-8 border border-slate-200">
          <p className="text-sm text-slate-600 mb-4">
            这份网站本身也是用 AI 工具辅助完成的产品化表达
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://github.com/wq-powerful/work-ai-assistant"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:shadow-md transition-all duration-200"
              aria-label="访问 AI 智能体 GitHub 仓库"
            >
              查看 AI 智能体仓库
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/wq-powerful/wq-powerful.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border-2 border-cyan-500 text-cyan-600 font-medium rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              aria-label="访问网站源代码 GitHub 仓库"
            >
              查看网站源代码
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
