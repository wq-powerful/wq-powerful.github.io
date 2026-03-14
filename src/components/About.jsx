import { motion } from 'framer-motion'

const strengths = [
  {
    title: '业务现场经验',
    description:
      '我的产品感来自一线项目。客户不会先给清晰需求，我是在交付、培训和问题闭环里学会如何把模糊诉求变成可执行方案',
  },
  {
    title: '清晰表达能力',
    description:
      '无论是企业培训、售前演示还是校企课程，我都持续承担 PPT 编写、讲解和资料沉淀，这让我更在意用户是否真的听懂、学会、用起来',
  },
  {
    title: 'AI 实效应用',
    description:
      '我更关心它能不能节省团队时间、减少重复劳动、帮助需求更快进入"可讨论、可验证"的状态，而不是只做一个漂亮 demo',
  },
]

export function About() {
  return (
    <section id="statement" className="relative py-20 lg:py-24 px-6 bg-portfolio-bg-secondary" aria-labelledby="about-heading">
      <div className="max-w-4xl mx-auto">
        {/* Section 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-section font-semibold text-portfolio-text mb-4" id="about-heading">
            把零散经验压成清晰路径
          </h2>
          <p className="text-body-lg text-portfolio-text-secondary">
            我更擅长的，不是写一份漂亮简历，而是在业务现场中提炼可复用的产品方法论
          </p>
        </motion.div>

        {/* 优势列表 */}
        <div className="space-y-6">
          {strengths.map((strength, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-portfolio-card rounded-xl p-6 lg:p-8 shadow-soft border border-portfolio-border"
            >
              <h3 className="text-xl font-semibold text-portfolio-text mb-3">
                {strength.title}
              </h3>
              <p className="text-body text-portfolio-text-secondary leading-relaxed">
                {strength.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 工作流程 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-portfolio-card rounded-xl p-6 lg:p-8 shadow-soft border border-portfolio-border"
        >
          <h3 className="text-xl font-semibold text-portfolio-text mb-6">
            工作流程
          </h3>
          <div className="flex flex-wrap items-center gap-3">
            {['业务现场', '结构化需求', 'AI 快速验证', '可复用资产'].map((step, index, arr) => (
              <div key={index} className="flex items-center gap-3">
                <div className="px-4 py-2 bg-portfolio-accent/10 text-portfolio-accent rounded-lg font-medium text-body-sm">
                  {step}
                </div>
                {index < arr.length - 1 && (
                  <div className="text-portfolio-text-muted">→</div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
