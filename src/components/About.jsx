import { motion } from 'framer-motion'
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
  return (
    <section id="statement" className="relative py-16 px-6 bg-slate-50" aria-labelledby="about-heading">
      <div className="max-w-4xl mx-auto">
        {/* 标题 */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3" id="about-heading">
            把零散经验压成清晰路径
          </h2>
          <p className="text-lg text-slate-600">
            我更擅长的，不是写一份漂亮简历，而是在业务现场中提炼可复用的产品方法论
          </p>
        </div>

        {/* 优势列表 */}
        <div className="space-y-5">
          {strengths.map((strength, index) => {
            const Icon = icons[index]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-cyan-300 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
                      {strength.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* 工作流程 */}
        <div className="mt-10 bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <div className="w-1 h-5 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full" />
            工作流程
          </h3>
          <div className="flex flex-wrap items-center gap-3">
            {['业务现场', '结构化需求', 'AI 快速验证', '可复用资产'].map((step, index, arr) => (
              <div key={index} className="flex items-center gap-3">
                <div className="px-4 py-2 bg-cyan-50 border border-cyan-200 text-cyan-700 rounded-lg font-medium text-sm">
                  {step}
                </div>
                {index < arr.length - 1 && (
                  <div className="text-cyan-600 font-bold">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
