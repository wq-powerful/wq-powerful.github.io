import { motion } from 'framer-motion'

const fieldPhoto = '/assets/training-photo.jpg'
const meetingPhoto = '/assets/meeting-photo.jpg'
const workPhoto = '/assets/work-photo-1.jpg'

const cases = [
  {
    number: '01',
    title: 'DFM 规则编辑器 / AI 提效工具',
    subtitle: '把规则整理、参数拆解和团队复用，当成一个真正的产品问题来处理',
    challenge: '规则逻辑分散、表达不一致、人工查手册成本高，导致需求整理和参数建库都偏慢',
    solution: '从业务现场识别低效点，用 AI 辅助梳理规则结构，让方法能被团队复用',
    result: '参数建库效率提升 60%+',
    image: workPhoto,
  },
  {
    number: '02',
    title: '昆明闻讯 VSD 交付项目',
    subtitle: '第一次把培训、问题清单、需求反馈和研发协同串成完整闭环',
    challenge: '客户第一次接触 VSD 软件，现场问题密集，交付周期又紧',
    solution: '完成部署培训，输出操作手册和问题清单，整理需求推动产品研发',
    result: '一个月内完成验收，闭环 10+ 项问题',
    image: meetingPhoto,
  },
  {
    number: '03',
    title: '深圳信息职业技术大学校企合作',
    subtitle: '把产品讲解、教学适配和实训落地合成一件事',
    challenge: '校企合作不只是软件交付，还要兼顾课程节奏、学生理解和终端部署',
    solution: '负责授课 PPT 与讲解路径，适配教学版软件，编写实训手册',
    result: '沉淀 3 项校企交付资产，助力 2 名学生获得实习机会',
    image: fieldPhoto,
  },
]

export function Cases() {
  return (
    <section id="work" className="relative py-32 md:py-40 px-6 bg-apple-white">
      <div className="max-w-6xl mx-auto">
        {/* Apple 风格 Section 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-24"
        >
          <h2 className="text-section-sm md:text-section font-semibold text-apple-gray-800 mb-6">
            项目案例
          </h2>
          <p className="text-body-lg text-apple-gray-500 max-w-3xl mx-auto">
            我想重点展示的，不是项目数量，而是我如何把现场经验转成产品输入
          </p>
        </motion.div>

        {/* Apple 风格案例卡片 - 大图片，简洁文字 */}
        <div className="space-y-32">
          {cases.map((caseItem, index) => (
            <motion.article
              key={caseItem.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Apple 风格大图片 */}
              <div className="relative rounded-3xl overflow-hidden shadow-apple-lg mb-12">
                <img
                  src={caseItem.image}
                  alt={caseItem.title}
                  loading="lazy"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="text-white/80 text-body-sm mb-2">Case {caseItem.number}</div>
                  <h3 className="text-subsection md:text-section font-semibold text-white">
                    {caseItem.title}
                  </h3>
                </div>
              </div>

              {/* Apple 风格内容 - 简洁清晰 */}
              <div className="max-w-4xl mx-auto px-4">
                <p className="text-body-lg text-apple-gray-800 mb-8 leading-relaxed">
                  {caseItem.subtitle}
                </p>

                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <div className="text-body-sm font-semibold text-apple-gray-400 mb-2">
                      挑战
                    </div>
                    <p className="text-body text-apple-gray-600">{caseItem.challenge}</p>
                  </div>
                  <div>
                    <div className="text-body-sm font-semibold text-apple-gray-400 mb-2">
                      方案
                    </div>
                    <p className="text-body text-apple-gray-600">{caseItem.solution}</p>
                  </div>
                  <div>
                    <div className="text-body-sm font-semibold text-apple-gray-400 mb-2">
                      成果
                    </div>
                    <p className="text-body text-apple-blue font-semibold">{caseItem.result}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Apple 风格额外背景 - 简洁列表 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-32 bg-apple-gray-50 rounded-3xl p-12"
        >
          <h3 className="text-subsection font-semibold text-apple-gray-800 mb-8">
            其他项目经验
          </h3>
          <div className="space-y-6">
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
                className="flex flex-col md:flex-row md:items-start gap-4 pb-6 border-b border-apple-gray-200 last:border-0"
              >
                <div className="text-body font-semibold text-apple-gray-800 md:w-48 flex-shrink-0">
                  {item.label}
                </div>
                <p className="text-body text-apple-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
