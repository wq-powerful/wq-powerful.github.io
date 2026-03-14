import { motion } from 'framer-motion'
import { GlassCard } from './ui/GlassCard'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const fieldPhoto = '/assets/training-kunming.jpg'

const cases = [
  {
    number: '01',
    title: 'DFM 规则编辑器 / AI 提效工具',
    lead: '把规则整理、参数拆解和团队复用，当成一个真正的产品问题来处理。',
    background:
      '在真实业务里，规则逻辑分散、表达不一致、人工查手册成本高，导致需求整理和参数建库都偏慢。',
    actions: [
      '从业务现场识别低效点，明确"规则管理器"的边界和使用场景。',
      '独立撰写需求，用 AI 辅助梳理规则结构、参数关系和表达逻辑。',
      '继续延伸到自动拆参思路，让方法能被团队复用，而不是停在一次性交付。',
    ],
    result: '参数建库效率提升 60%+，相关方法在团队内部实现高复用。',
    takeaway: 'AI 的价值不在"看起来聪明"，而在于它能否把协作成本真正压下来。',
    visual: 'system',
    color: 'purple',
  },
  {
    number: '02',
    title: '昆明闻讯 VSD 交付项目',
    lead: '第一次把培训、问题清单、需求反馈和研发协同串成完整闭环。',
    background:
      '客户第一次接触 VSD 软件，现场问题密集，交付周期又紧，必须边培训边把反馈转成可推进的输入。',
    actions: [
      '完成部署上线和现场培训，帮助客户建立基本操作能力。',
      '输出操作手册、视频和问题清单，持续跟进现场及后续反馈。',
      '整理新增报表等需求，推动产品、研发、测试确认路径与节点。',
    ],
    result: '一个月内完成验收；闭环 10+ 项问题；新增功能使报告输出效率提升 80%。',
    takeaway: '客户第一次真正上手的那一刻，往往比需求会议更能暴露高价值问题。',
    visual: 'photo',
    color: 'cyan',
  },
  {
    number: '03',
    title: '深圳信息职业技术大学校企合作项目',
    lead: '把产品讲解、教学适配和实训落地合成一件事，而不是拆成多个环节。',
    background:
      '校企合作不只是软件交付，还要兼顾课程节奏、学生理解和终端部署，让教学场景真正顺起来。',
    actions: [
      '负责授课 PPT 结构与讲解路径，重新组织表达顺序。',
      '适配教学版软件与实训终端，保证多班级能顺利开展实操。',
      '编写实训手册，沉淀校企合作场景下可复用的交付资产。',
    ],
    result: '沉淀 3 项校企交付资产，并助力 2 名学生获得实习机会。',
    takeaway: '"能讲清楚"不是软技能附属品，而是让产品真正被采用的一部分。',
    visual: 'curriculum',
    color: 'green',
  },
]

function CaseVisual({ type, result, color }) {
  const colorMap = {
    purple: 'from-cyber-purple/20 to-cyber-purple/5',
    cyan: 'from-cyber-cyan/20 to-cyber-cyan/5',
    green: 'from-cyber-green/20 to-cyber-green/5',
  }

  if (type === 'photo') {
    return (
      <motion.div
        whileHover={{ scale: 1.05, rotateY: 5 }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden rounded-3xl glass-strong"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <img
          src={fieldPhoto}
          alt="项目培训现场"
          loading="lazy"
          className="w-full h-80 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg via-cyber-bg/50 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <p className="font-mono text-xs uppercase tracking-wider text-cyber-cyan mb-2">
            Field Snapshot
          </p>
          <p className="text-lg font-semibold">
            培训、问题收集与现场推进同时发生。
          </p>
        </div>
      </motion.div>
    )
  }

  if (type === 'curriculum') {
    return (
      <GlassCard hover3d={true} className={`bg-gradient-to-br ${colorMap[color]}`}>
        <p className="font-mono text-xs uppercase tracking-wider text-cyber-green mb-4">
          Teaching Stack
        </p>
        <div className="space-y-3">
          {['授课 PPT', '教学版软件适配', '实训终端部署', '实训手册'].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-full px-4 py-3 text-sm font-medium"
            >
              {item}
            </motion.div>
          ))}
        </div>
        <p className="mt-6 text-sm text-cyber-text-secondary leading-relaxed">{result}</p>
      </GlassCard>
    )
  }

  return (
    <GlassCard hover3d={true} className={`bg-gradient-to-br ${colorMap[color]}`}>
      <p className="font-mono text-xs uppercase tracking-wider text-cyber-purple mb-4">
        Logic Flow
      </p>
      <div className="space-y-3">
        {[
          '识别低效点',
          '结构化规则逻辑',
          'AI 辅助拆解与整理',
          '团队复用',
        ].map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-3 glass rounded-full px-4 py-3"
          >
            <span className="font-mono text-xs text-cyber-cyan">0{index + 1}</span>
            <span className="text-sm font-medium">{item}</span>
          </motion.div>
        ))}
      </div>
      <p className="mt-6 text-sm text-cyber-text-secondary leading-relaxed">{result}</p>
    </GlassCard>
  )
}

export function Cases() {
  return (
    <section id="work" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-20"
        >
          <span className="inline-block font-mono text-sm text-cyber-cyan uppercase tracking-wider mb-4">
            Selected Work
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-bold leading-tight">
            我想重点展示的，不是项目数量，
            <span className="block mt-2 bg-gradient-to-r from-cyber-purple via-cyber-cyan to-cyber-green bg-clip-text text-transparent">
              而是我如何把现场经验转成产品输入。
            </span>
          </h2>
        </motion.div>

        {/* 案例列表 */}
        <div className="space-y-24">
          {cases.map((caseItem, index) => (
            <motion.article
              key={caseItem.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="grid lg:grid-cols-2 gap-12 items-start"
            >
              {/* 内容 */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-sm text-cyber-text-secondary">
                    Case {caseItem.number}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-cyber-purple/50 to-transparent" />
                </div>

                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  {caseItem.title}
                </h3>

                <p className="text-lg text-cyber-text mb-6 leading-relaxed">
                  {caseItem.lead}
                </p>

                <p className="text-cyber-text-secondary mb-6 leading-relaxed">
                  {caseItem.background}
                </p>

                <div className="space-y-3 mb-6">
                  {caseItem.actions.map((action, i) => (
                    <div key={i} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyber-cyan flex-shrink-0 mt-0.5" />
                      <span className="text-cyber-text-secondary">{action}</span>
                    </div>
                  ))}
                </div>

                <div className="glass-strong rounded-2xl p-4 mb-4">
                  <p className="font-mono text-xs uppercase tracking-wider text-cyber-green mb-2">
                    Result
                  </p>
                  <p className="text-cyber-text">{caseItem.result}</p>
                </div>

                <p className="text-cyber-text-secondary">
                  <span className="font-semibold text-cyber-text">我的判断：</span>
                  {caseItem.takeaway}
                </p>
              </div>

              {/* 视觉元素 */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <CaseVisual
                  type={caseItem.visual}
                  result={caseItem.result}
                  color={caseItem.color}
                />
              </div>
            </motion.article>
          ))}
        </div>

        {/* 额外背景 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 glass-strong rounded-3xl p-8"
        >
          <div className="grid lg:grid-cols-[300px_1fr] gap-8">
            <div>
              <span className="inline-block font-mono text-sm text-cyber-cyan uppercase tracking-wider mb-4">
                Additional Context
              </span>
              <p className="text-cyber-text-secondary leading-relaxed">
                我没有把所有经历都展开成完整大案例，但这些背景一起构成了我的业务视角。
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  label: '宁波德业',
                  text: '企业复杂场景中的部署适配、专项培训与后续 10+ license 增购支撑。',
                },
                {
                  label: '军工项目群',
                  text: '售前演示、技术卡点处理、技术方案文档与高要求场景下的稳定推进。',
                },
                {
                  label: '北京快消实习',
                  text: '在纷扬科技参与 DMS / ERP 模块相关工作，进入渠道、销售与运营流程。',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="grid md:grid-cols-[200px_1fr] gap-4 pb-4 border-b border-cyber-purple/20 last:border-0"
                >
                  <span className="font-mono text-sm text-cyber-text-secondary">
                    {item.label}
                  </span>
                  <p className="text-cyber-text-secondary">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
