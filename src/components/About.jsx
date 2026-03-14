import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, MessageSquare, Sparkles } from 'lucide-react'

const icons = {
  0: Briefcase,
  1: MessageSquare,
  2: Sparkles,
}

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
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="statement" className="relative py-20 lg:py-24 px-6 bg-portfolio-bg-secondary overflow-hidden" aria-labelledby="about-heading" ref={ref}>
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-20 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-section font-semibold text-portfolio-text mb-4" id="about-heading">
            把零散经验压成清晰路径
          </h2>
          <p className="text-body-lg text-portfolio-text-secondary">
            我更擅长的，不是写一份漂亮简历，而是在业务现场中提炼可复用的产品方法论
          </p>
        </motion.div>

        {/* 优势列表 - 增强版 */}
        <div className="space-y-6">
          {strengths.map((strength, index) => {
            const Icon = icons[index]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                whileHover={{ x: 10, transition: { duration: 0.3 } }}
                className="group relative bg-portfolio-card rounded-xl p-6 lg:p-8 shadow-soft border border-portfolio-border hover:shadow-xl hover:border-portfolio-accent/30 transition-all duration-300 overflow-hidden"
              >
                {/* 悬停背景效果 */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-500" />

                {/* 左侧装饰线 */}
                <motion.div
                  className="absolute left-0 top-0 w-1 h-0 bg-gradient-to-b from-cyan-500 to-blue-500"
                  whileHover={{ height: '100%' }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10 flex items-start gap-4">
                  {/* 图标 */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white shadow-lg"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-portfolio-text mb-3 group-hover:text-portfolio-accent transition-colors">
                      {strength.title}
                    </h3>
                    <p className="text-body text-portfolio-text-secondary leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* 工作流程 - 增强版 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 glass-card rounded-xl p-6 lg:p-8 shadow-xl"
        >
          <h3 className="text-xl font-semibold text-portfolio-text mb-6 flex items-center gap-2">
            <div className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full" />
            工作流程
          </h3>
          <div className="flex flex-wrap items-center gap-3">
            {['业务现场', '结构化需求', 'AI 快速验证', '可复用资产'].map((step, index, arr) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-3"
              >
                <div className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-portfolio-accent rounded-lg font-medium text-body-sm shadow-sm">
                  {step}
                </div>
                {index < arr.length - 1 && (
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-portfolio-accent font-bold"
                  >
                    →
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
