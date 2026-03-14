import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Zap, Target, Lightbulb } from 'lucide-react'
import { useRef } from 'react'

const icons = {
  '01': Zap,
  '02': Target,
  '03': Lightbulb,
}

const cases = [
  {
    number: '01',
    title: 'DFM 规则编辑器 / AI 提效工具',
    subtitle: '把规则整理、参数拆解和团队复用，当成一个真正的产品问题来处理',
    tags: ['AI 工具', '效率提升', '团队协作'],
    challenge: '规则逻辑分散、表达不一致、人工查手册成本高',
    solution: '从业务现场识别低效点，用 AI 辅助梳理规则结构，让方法能被团队复用',
    result: '参数建库效率提升 60%+，方法在团队内部实现高复用',
    insight: 'AI 的价值不在"看起来聪明"，而在于它能否把协作成本真正压下来',
  },
  {
    number: '02',
    title: '昆明闻讯 VSD 交付项目',
    subtitle: '第一次把培训、问题清单、需求反馈和研发协同串成完整闭环',
    tags: ['项目交付', '客户培训', '需求管理'],
    challenge: '客户第一次接触 VSD 软件，现场问题密集，交付周期紧',
    solution: '完成部署培训，输出操作手册和问题清单，整理需求推动产品研发',
    result: '一个月内完成验收，闭环 10+ 项问题，新增功能使报告输出效率提升 80%',
    insight: '客户第一次真正上手的那一刻，往往比需求会议更能暴露高价值问题',
  },
  {
    number: '03',
    title: '深圳信息职业技术大学校企合作',
    subtitle: '把产品讲解、教学适配和实训落地合成一件事',
    tags: ['校企合作', '教学设计', '资产沉淀'],
    challenge: '校企合作不只是软件交付，还要兼顾课程节奏、学生理解和终端部署',
    solution: '负责授课 PPT 与讲解路径，适配教学版软件，编写实训手册',
    result: '沉淀 3 项校企交付资产，助力 2 名学生获得实习机会',
    insight: '"能讲清楚"不是软技能附属品，而是让产品真正被采用的一部分',
  },
]

export function Cases() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="work" className="relative py-20 lg:py-24 px-6 bg-portfolio-bg overflow-hidden" aria-labelledby="cases-heading" ref={ref}>
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-gradient-to-br from-cyan-400/10 to-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-section font-semibold text-portfolio-text mb-4" id="cases-heading">
            项目案例
          </h2>
          <p className="text-body-lg text-portfolio-text-secondary max-w-2xl">
            我想重点展示的，不是项目数量，而是我如何把现场经验转成产品输入
          </p>
        </motion.div>

        {/* 项目卡片列表 */}
        <div className="space-y-8">
          {cases.map((caseItem, index) => {
            const Icon = icons[caseItem.number]
            return (
              <motion.article
                key={caseItem.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-portfolio-card rounded-2xl p-8 lg:p-10 shadow-soft border border-portfolio-border hover:shadow-2xl hover:border-portfolio-accent/30 transition-all duration-300 overflow-hidden"
              >
                {/* 悬停时的背景渐变 */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-500" />

                {/* 装饰线条 */}
                <motion.div
                  className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-cyan-500 to-blue-500"
                  whileHover={{ height: '100%' }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10">
                  {/* 卡片头部 */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        {/* 图标 */}
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                          className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white shadow-lg"
                        >
                          <Icon className="w-6 h-6" />
                        </motion.div>

                        <span className="text-sm font-medium text-portfolio-text-muted">
                          Case {caseItem.number}
                        </span>

                        <div className="flex gap-2">
                          {caseItem.tags.map((tag, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : {}}
                              transition={{ delay: index * 0.15 + i * 0.05 }}
                              whileHover={{ scale: 1.05 }}
                              className="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-portfolio-accent text-xs font-medium rounded-full border border-cyan-500/20"
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                      <h3 className="text-section-sm font-semibold text-portfolio-text mb-2 group-hover:text-portfolio-accent transition-colors">
                        {caseItem.title}
                      </h3>
                      <p className="text-body text-portfolio-text-secondary">
                        {caseItem.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* 项目详情 */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-body-sm font-semibold text-portfolio-text-muted mb-2 flex items-center gap-2">
                        <div className="w-1 h-4 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full" />
                        挑战
                      </div>
                      <p className="text-body text-portfolio-text-secondary leading-relaxed">
                        {caseItem.challenge}
                      </p>
                    </motion.div>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-body-sm font-semibold text-portfolio-text-muted mb-2 flex items-center gap-2">
                        <div className="w-1 h-4 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full" />
                        方案
                      </div>
                      <p className="text-body text-portfolio-text-secondary leading-relaxed">
                        {caseItem.solution}
                      </p>
                    </motion.div>
                  </div>

                  {/* 成果和洞察 */}
                  <div className="pt-6 border-t border-portfolio-border-light">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="flex-1"
                      >
                        <div className="text-body-sm font-semibold text-portfolio-text-muted mb-1">
                          成果
                        </div>
                        <p className="text-body font-medium bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                          {caseItem.result}
                        </p>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="md:text-right flex-1"
                      >
                        <div className="text-body-sm font-semibold text-portfolio-text-muted mb-1">
                          我的判断
                        </div>
                        <p className="text-body text-portfolio-text-secondary italic">
                          {caseItem.insight}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* 其他项目经验 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-portfolio-bg-secondary rounded-2xl p-8 lg:p-10"
        >
          <h3 className="text-section-sm font-semibold text-portfolio-text mb-6">
            其他项目经验
          </h3>
          <div className="space-y-4">
            {[
              {
                label: '宁波德业',
                text: '企业复杂场景中的部署适配、专项培训与后续 10+ license 增购支撑',
              },
              {
                label: '军工项目群',
                text: '售前演示、技术卡点处理、技术方案文档与高要求场景下的稳定推进',
              },
              {
                label: '北京快消实习',
                text: '在纷扬科技参与 DMS / ERP 模块相关工作，进入渠道、销售与运营流程',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-3 pb-4 border-b border-portfolio-border last:border-0"
              >
                <div className="text-body font-semibold text-portfolio-text md:w-40 flex-shrink-0">
                  {item.label}
                </div>
                <p className="text-body text-portfolio-text-secondary">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
