import { motion } from 'framer-motion'
import { Zap, Target, Lightbulb, TrendingUp } from 'lucide-react'

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
  return (
    <section id="work" className="relative py-16 px-6 bg-white" aria-labelledby="cases-heading">
      <div className="max-w-5xl mx-auto">
        {/* 标题 */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3" id="cases-heading">
            项目案例
          </h2>
          <p className="text-lg text-slate-600">
            我想重点展示的，不是项目数量，而是我如何把现场经验转成产品输入
          </p>
        </div>

        {/* 项目卡片 - 时间线样式 */}
        <div className="space-y-8">
          {cases.map((caseItem, index) => {
            const Icon = icons[caseItem.number]
            return (
              <motion.article
                key={caseItem.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 md:p-8 border-2 border-slate-200 hover:border-cyan-300 hover:shadow-lg transition-all duration-300"
              >
                {/* 左侧装饰条 */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex flex-col md:flex-row gap-6">
                  {/* 图标和编号 */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white shadow-lg">
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>

                  {/* 内容 */}
                  <div className="flex-1 space-y-4">
                    {/* 标题和标签 */}
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-slate-500">Case {caseItem.number}</span>
                        {caseItem.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 bg-cyan-100 text-cyan-700 text-xs font-medium rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
                        {caseItem.title}
                      </h3>
                      <p className="text-base text-slate-600">
                        {caseItem.subtitle}
                      </p>
                    </div>

                    {/* 详情网格 */}
                    <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                      <div>
                        <div className="text-sm font-semibold text-slate-700 mb-1 flex items-center gap-1">
                          <div className="w-1 h-4 bg-cyan-500 rounded-full" />
                          挑战
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {caseItem.challenge}
                        </p>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-700 mb-1 flex items-center gap-1">
                          <div className="w-1 h-4 bg-blue-500 rounded-full" />
                          方案
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {caseItem.solution}
                        </p>
                      </div>
                    </div>

                    {/* 成果和洞察 */}
                    <div className="flex flex-col md:flex-row gap-4 pt-4 border-t border-slate-200">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <TrendingUp className="w-4 h-4 text-cyan-600" />
                          <span className="text-sm font-semibold text-slate-700">成果</span>
                        </div>
                        <p className="text-sm font-medium text-cyan-600">
                          {caseItem.result}
                        </p>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-slate-700 mb-1">我的判断</div>
                        <p className="text-sm text-slate-600 italic">
                          {caseItem.insight}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* 其他项目 */}
        <div className="mt-12 bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-6">
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
                className="flex flex-col md:flex-row gap-3 pb-4 border-b border-slate-200 last:border-0"
              >
                <div className="text-sm font-semibold text-slate-900 md:w-32 flex-shrink-0">
                  {item.label}
                </div>
                <p className="text-sm text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
