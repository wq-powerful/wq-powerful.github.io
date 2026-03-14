import { motion } from 'framer-motion'
import { GlassCard } from './ui/GlassCard'
import { Target, Lightbulb, Zap } from 'lucide-react'

const evidencePoints = [
  {
    icon: Target,
    title: '我不是从"写简历"进入产品',
    description:
      '我的产品感来自一线项目。客户不会先给清晰需求，我是在交付、培训和问题闭环里学会如何把模糊诉求变成可执行方案。',
  },
  {
    icon: Lightbulb,
    title: '我会把复杂内容讲清楚',
    description:
      '无论是企业培训、售前演示还是校企课程，我都持续承担 PPT 编写、讲解和资料沉淀，这让我更在意用户是否真的听懂、学会、用起来。',
  },
  {
    icon: Zap,
    title: '我用 AI，不是为了炫技',
    description:
      '我更关心它能不能节省团队时间、减少重复劳动、帮助需求更快进入"可讨论、可验证"的状态，而不是只做一个漂亮 demo。',
  },
]

export function About() {
  return (
    <section id="statement" className="relative py-16 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* 左侧标题 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block font-mono text-sm text-cyber-cyan uppercase tracking-wider mb-4">
              Positioning
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
              我更擅长的，不是写一份漂亮简历，
              <span className="block mt-2 text-cyber-cyan">
                而是把零散经验压成一条清晰路径。
              </span>
            </h2>
          </motion.div>

          {/* 右侧卡片 */}
          <div className="space-y-6">
            {evidencePoints.map((point, index) => {
              const Icon = point.icon
              return (
                <GlassCard key={index} delay={index * 0.2} hover3d={true}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyber-purple to-cyber-cyan flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                      <p className="text-cyber-text-secondary leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              )
            })}
          </div>
        </div>

        {/* 流程线 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 glass-strong rounded-2xl p-6"
        >
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-mono text-cyber-text-secondary">
            <span className="text-cyber-cyan">业务现场</span>
            <span className="text-cyber-purple">→</span>
            <span className="text-cyber-cyan">结构化需求</span>
            <span className="text-cyber-purple">→</span>
            <span className="text-cyber-cyan">AI 快速验证</span>
            <span className="text-cyber-purple">→</span>
            <span className="text-cyber-green">可复用资产</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
