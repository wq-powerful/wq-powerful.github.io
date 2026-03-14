import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

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
  return (
    <section id="work" className="relative py-20 lg:py-24 px-6 bg-portfolio-bg">
      <div className="max-w-5xl mx-auto">
        {/* Section 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-section font-semibold text-portfolio-text mb-4">
            项目案例
          </h2>
          <p className="text-body-lg text-portfolio-text-secondary max-w-2xl">
            我想重点展示的，不是项目数量，而是我如何把现场经验转成产品输入
          </p>
        </motion.div>

        {/* 项目卡片列表 */}
        <div className="space-y-8">
          {cases.map((caseItem, index) => (
            <motion.article
              key={caseItem.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-portfolio-card rounded-2xl p-8 lg:p-10 shadow-soft border border-portfolio-border hover:shadow-soft-md transition-shadow duration-300"
            >
              {/* 卡片头部 */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-medium text-portfolio-text-muted">
                      Case {caseItem.number}
                    </span>
                    <div className="flex gap-2">
                      {caseItem.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-portfolio-accent/10 text-portfolio-accent text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-section-sm font-semibold text-portfolio-text mb-2">
                    {caseItem.title}
                  </h3>
                  <p className="text-body text-portfolio-text-secondary">
                    {caseItem.subtitle}
                  </p>
                </div>
              </div>

              {/* 项目详情 */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-body-sm font-semibold text-portfolio-text-muted mb-2">
                    挑战
                  </div>
                  <p className="text-body text-portfolio-text-secondary leading-relaxed">
                    {caseItem.challenge}
                  </p>
                </div>
                <div>
                  <div className="text-body-sm font-semibold text-portfolio-text-muted mb-2">
                    方案
                  </div>
                  <p className="text-body text-portfolio-text-secondary leading-relaxed">
                    {caseItem.solution}
                  </p>
                </div>
              </div>

              {/* 成果和洞察 */}
              <div className="pt-6 border-t border-portfolio-border-light">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="text-body-sm font-semibold text-portfolio-text-muted mb-1">
                      成果
                    </div>
                    <p className="text-body font-medium text-portfolio-accent">
                      {caseItem.result}
                    </p>
                  </div>
                  <div className="md:text-right">
                    <div className="text-body-sm font-semibold text-portfolio-text-muted mb-1">
                      我的判断
                    </div>
                    <p className="text-body text-portfolio-text-secondary italic">
                      {caseItem.insight}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
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
