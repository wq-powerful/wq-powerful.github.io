import { motion } from 'framer-motion'

const strengths = [
  {
    title: '业务现场经验',
    description:
      '我的产品感来自一线项目。客户不会先给清晰需求，我是在交付、培训和问题闭环里学会如何把模糊诉求变成可执行方案。',
  },
  {
    title: '清晰表达能力',
    description:
      '无论是企业培训、售前演示还是校企课程，我都持续承担 PPT 编写、讲解和资料沉淀，这让我更在意用户是否真的听懂、学会、用起来。',
  },
  {
    title: 'AI 实效应用',
    description:
      '我更关心它能不能节省团队时间、减少重复劳动、帮助需求更快进入"可讨论、可验证"的状态，而不是只做一个漂亮 demo。',
  },
]

export function About() {
  return (
    <section id="statement" className="relative py-32 md:py-40 px-6 bg-apple-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Apple 风格 Section 标题 - 大字体，居中 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <h2 className="text-section-sm md:text-section font-semibold text-apple-gray-800 mb-6">
            把零散经验压成清晰路径
          </h2>
          <p className="text-body-lg text-apple-gray-500 max-w-3xl mx-auto">
            我更擅长的，不是写一份漂亮简历，而是在业务现场中提炼可复用的产品方法论
          </p>
        </motion.div>

        {/* Apple 风格优势卡片 - 简洁，大间距 */}
        <div className="space-y-12">
          {strengths.map((strength, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-apple"
            >
              <h3 className="text-subsection font-semibold text-apple-gray-800 mb-4">
                {strength.title}
              </h3>
              <p className="text-body-lg text-apple-gray-500 leading-relaxed">
                {strength.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Apple 风格流程展示 - 简洁线性 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-24 bg-white rounded-3xl p-8 md:p-12 shadow-apple"
        >
          <h3 className="text-subsection font-semibold text-apple-gray-800 mb-8 text-center">
            工作流程
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-body font-semibold text-apple-gray-800">业务现场</div>
            </div>
            <div className="text-apple-gray-300 text-2xl hidden md:block">→</div>
            <div className="text-center">
              <div className="text-body font-semibold text-apple-gray-800">结构化需求</div>
            </div>
            <div className="text-apple-gray-300 text-2xl hidden md:block">→</div>
            <div className="text-center">
              <div className="text-body font-semibold text-apple-gray-800">AI 快速验证</div>
            </div>
            <div className="text-apple-gray-300 text-2xl hidden md:block">→</div>
            <div className="text-center">
              <div className="text-body font-semibold text-apple-blue">可复用资产</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
