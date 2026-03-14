import { motion } from 'framer-motion'

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
    <section id="method" className="relative py-32 md:py-40 px-6 bg-apple-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Apple 风格标题 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <h2 className="text-section-sm md:text-section font-semibold text-apple-gray-800 mb-6">
            工作方法
          </h2>
          <p className="text-body-lg text-apple-gray-500 max-w-3xl mx-auto">
            我理解的 AI 产品经理，不是把模型接进来就结束了，
            <br className="hidden md:block" />
            而是把业务问题、方案表达、快速验证和落地反馈接成一条连续链路
          </p>
        </motion.div>

        {/* Apple 风格步骤卡片 - 简洁数字 + 大间距 */}
        <div className="space-y-8">
          {methodSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-apple"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-apple-blue flex items-center justify-center text-white text-2xl font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-subsection font-semibold text-apple-gray-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-body-lg text-apple-gray-500 leading-relaxed">{step.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Apple 风格链接 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-16 text-center"
        >
          <p className="text-body text-apple-gray-500 mb-6">
            这份网站本身也是用 AI 工具辅助完成的产品化表达
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/wq-powerful/work-ai-assistant"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 text-apple-blue hover:text-apple-blue-dark font-semibold transition-colors"
            >
              查看 AI 智能体仓库 →
            </a>
            <a
              href="https://github.com/wq-powerful/wq-powerful.github.io"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 text-apple-blue hover:text-apple-blue-dark font-semibold transition-colors"
            >
              查看网站源代码 →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
