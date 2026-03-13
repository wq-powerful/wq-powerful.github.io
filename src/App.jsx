import { useEffect } from 'react'
import { ArrowUpRight, Mail, Phone } from 'lucide-react'

const profilePhoto = '/assets/profile-photo.jpg'
const fieldPhoto = '/assets/training-kunming.jpg'

const siteRepoUrl = 'https://github.com/wq-powerful/wq-powerful.github.io'
const aiRepoUrl = 'https://github.com/wq-powerful/work-ai-assistant'

const navigation = [
  { id: 'statement', label: '我是谁' },
  { id: 'work', label: '案例' },
  { id: 'method', label: '方法' },
  { id: 'contact', label: '联系' },
]

const heroFacts = [
  '1 年+ 产品落地、技术支持与项目交付经验',
  '6 个 200-500W 级别项目的实际推进经历',
  '从需求整理、培训赋能到 AI 提效的连续实践',
]

const evidencePoints = [
  {
    title: '我不是从“写简历”进入产品',
    description:
      '我的产品感来自一线项目。客户不会先给清晰需求，我是在交付、培训和问题闭环里学会如何把模糊诉求变成可执行方案。',
  },
  {
    title: '我会把复杂内容讲清楚',
    description:
      '无论是企业培训、售前演示还是校企课程，我都持续承担 PPT 编写、讲解和资料沉淀，这让我更在意用户是否真的听懂、学会、用起来。',
  },
  {
    title: '我用 AI，不是为了炫技',
    description:
      '我更关心它能不能节省团队时间、减少重复劳动、帮助需求更快进入“可讨论、可验证”的状态，而不是只做一个漂亮 demo。',
  },
]

const cases = [
  {
    number: '01',
    title: 'DFM 规则编辑器 / AI 提效工具',
    lead: '把规则整理、参数拆解和团队复用，当成一个真正的产品问题来处理。',
    background:
      '在真实业务里，规则逻辑分散、表达不一致、人工查手册成本高，导致需求整理和参数建库都偏慢。',
    actions: [
      '从业务现场识别低效点，明确“规则管理器”的边界和使用场景。',
      '独立撰写需求，用 AI 辅助梳理规则结构、参数关系和表达逻辑。',
      '继续延伸到自动拆参思路，让方法能被团队复用，而不是停在一次性交付。',
    ],
    result: '参数建库效率提升 60%+，相关方法在团队内部实现高复用。',
    takeaway: 'AI 的价值不在“看起来聪明”，而在于它能否把协作成本真正压下来。',
    visual: 'system',
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
    takeaway: '“能讲清楚”不是软技能附属品，而是让产品真正被采用的一部分。',
    visual: 'curriculum',
  },
]

const supportTrack = [
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
]

const methodSteps = [
  {
    number: '01',
    title: '先进入场景',
    text: '先弄清楚是谁在用、卡在哪里、为什么卡，而不是直接从功能开始想。',
  },
  {
    number: '02',
    title: '再把问题结构化',
    text: '把用户原话拆成字段、逻辑、边界、例外和交付标准，让团队能对齐。',
  },
  {
    number: '03',
    title: '尽快做验证',
    text: '用 AI 工具、流程草图或界面原型，把想法快速推进到可讨论状态。',
  },
  {
    number: '04',
    title: '最后沉淀方法',
    text: '项目不该只留下“做完了”，还应该留下能被后续复用的模板和经验。',
  },
]

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.14, rootMargin: '0px 0px -12% 0px' },
    )

    nodes.forEach((node) => observer.observe(node))

    return () => observer.disconnect()
  }, [])
}

function SectionEyebrow({ children }) {
  return (
    <p className="font-mono text-[0.72rem] uppercase tracking-[0.32em] text-[#176157]">
      {children}
    </p>
  )
}

function CaseVisual({ type, result }) {
  if (type === 'photo') {
    return (
      <div className="relative overflow-hidden rounded-[28px] border border-[#d8d0c5] bg-[#e8e0d5]">
        <img
          src={fieldPhoto}
          alt="项目培训现场"
          className="h-full min-h-[260px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.26em] text-white/70">
            Field Snapshot
          </p>
          <p className="mt-2 max-w-sm text-lg font-semibold text-white">
            培训、问题收集与现场推进同时发生。
          </p>
        </div>
      </div>
    )
  }

  if (type === 'curriculum') {
    return (
      <div className="rounded-[28px] border border-[#d8d0c5] bg-[#f7f2e9] p-6">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[#176157]">
          Teaching Stack
        </p>
        <div className="mt-5 space-y-3">
          {['授课 PPT', '教学版软件适配', '实训终端部署', '实训手册'].map((item) => (
            <div
              key={item}
              className="rounded-full border border-[#d8d0c5] bg-white px-4 py-3 text-sm font-medium text-slate-700"
            >
              {item}
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm leading-7 text-slate-600">{result}</p>
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-[#193831] bg-[#0c1c18] p-6 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(35,205,158,0.2),_transparent_38%),linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:auto,28px_28px,28px_28px]" />
      <div className="relative">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-white/60">
          Logic Flow
        </p>
        <div className="mt-5 space-y-3">
          {[
            '识别低效点',
            '结构化规则逻辑',
            'AI 辅助拆解与整理',
            '团队复用',
          ].map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-full border border-white/10 bg-white/6 px-4 py-3"
            >
              <span className="font-mono text-xs text-[#8ecdbf]">
                0{index + 1}
              </span>
              <span className="text-sm font-medium text-white/92">{item}</span>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm leading-7 text-white/72">{result}</p>
      </div>
    </div>
  )
}

function App() {
  useReveal()

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--paper)] text-[var(--ink)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(32,122,106,0.08),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(13,22,38,0.06),_transparent_28%)]" />

      <header className="sticky top-0 z-40 border-b border-black/8 bg-[rgba(245,239,228,0.86)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a href="#top" className="min-w-0">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-slate-500">
              Olivia Wu
            </p>
            <p className="truncate text-base font-semibold text-slate-950">
              吴倩 · AI 产品经理候选人
            </p>
          </a>
          <nav className="hidden items-center gap-6 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
          >
            联系我
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main id="top" className="relative">
        <section className="mx-auto max-w-[1240px] px-5 pb-12 pt-10 sm:px-8 sm:pt-14">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <SectionEyebrow>
                Inspire / Thoughtworks 2026 homework response
              </SectionEyebrow>
              <h1 className="mt-6 max-w-[12ch] font-display text-[3.2rem] leading-[0.96] tracking-[-0.06em] text-slate-950 sm:text-[4.6rem] lg:text-[6.4rem]">
                更接近业务现场的
                <span className="block text-[#176157]">AI 产品经理候选人</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                我没有把简历直接搬上网页，而是把交付现场、需求整理、培训赋能和 AI
                提效实践压缩成一个更像产品表达的长页面。
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white"
                >
                  查看案例
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={siteRepoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-slate-900"
                >
                  查看仓库
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
              <div className="mt-10 border-t border-black/10 pt-6">
                <div className="grid gap-3 sm:grid-cols-3">
                  {heroFacts.map((item) => (
                    <p
                      key={item}
                      className="border-l border-black/12 pl-4 text-sm leading-6 text-slate-600"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr] lg:grid-cols-1">
                <div className="rounded-[34px] border border-[#d9d0c4] bg-[#f8f3ea] p-4">
                  <img
                    src={profilePhoto}
                    alt="吴倩证件照"
                    className="aspect-[4/5] w-full rounded-[24px] object-cover"
                  />
                </div>
                <div className="grid gap-4 lg:grid-cols-1">
                  <div className="border-t border-black/12 pt-4">
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-slate-500">
                      Snapshot
                    </p>
                    <p className="mt-3 text-base leading-7 text-slate-700">
                      西安文理学院物联网工程专业，1 年+ 产品落地与技术支持经验，正在从交付与培训现场走向 AI 产品经理方向。
                    </p>
                  </div>
                  <div className="border-t border-black/12 pt-4">
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-slate-500">
                      What this site is trying to show
                    </p>
                    <p className="mt-3 text-base leading-7 text-slate-700">
                      不是“我做过很多事”，而是“我能把事情讲清楚、拆清楚，并进一步组织成可交付的产物”。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 border-y border-black/10 py-5 font-mono text-[0.72rem] uppercase tracking-[0.28em] text-slate-500">
            业务现场 → 结构化需求 → AI 快速验证 → 可复用资产
          </div>
        </section>

        <section
          id="statement"
          className="mx-auto max-w-[1240px] px-5 py-12 sm:px-8 sm:py-16"
        >
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div data-reveal>
              <SectionEyebrow>Positioning</SectionEyebrow>
              <p className="mt-5 max-w-[12ch] font-display text-[2.35rem] leading-[1.05] tracking-[-0.05em] text-slate-950 sm:text-[3.2rem]">
                我更擅长的，不是写一份漂亮简历，
                <span className="text-[#176157]">而是把零散经验压成一条清晰路径。</span>
              </p>
            </div>
            <div className="space-y-8" data-reveal>
              {evidencePoints.map((item, index) => (
                <div
                  key={item.title}
                  className={`grid gap-3 border-black/10 pb-6 sm:grid-cols-[64px_1fr] ${
                    index < evidencePoints.length - 1 ? 'border-b' : ''
                  }`}
                >
                  <span className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-slate-400">
                    0{index + 1}
                  </span>
                  <div>
                    <h2 className="text-[1.35rem] font-semibold tracking-[-0.03em] text-slate-950">
                      {item.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-[1240px] px-5 py-12 sm:px-8 sm:py-16">
          <div className="max-w-3xl" data-reveal>
            <SectionEyebrow>Selected Work</SectionEyebrow>
            <h2 className="mt-5 font-display text-[2.5rem] leading-[1.02] tracking-[-0.05em] text-slate-950 sm:text-[3.5rem]">
              我想重点展示的，不是项目数量，
              <span className="block text-[#176157]">而是我如何把现场经验转成产品输入。</span>
            </h2>
          </div>

          <div className="mt-12">
            {cases.map((item) => (
              <article
                key={item.number}
                className="grid gap-8 border-t border-black/10 py-10 lg:grid-cols-[86px_1fr]"
                data-reveal
              >
                <div className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-slate-400">
                  Case {item.number}
                </div>
                <div className="grid gap-8 lg:grid-cols-[0.95fr_0.75fr] lg:items-start">
                  <div>
                    <h3 className="text-[1.8rem] font-semibold tracking-[-0.04em] text-slate-950 sm:text-[2.15rem]">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-700">
                      {item.lead}
                    </p>
                    <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
                      {item.background}
                    </p>
                    <ul className="mt-6 space-y-3 text-base leading-8 text-slate-600">
                      {item.actions.map((action) => (
                        <li key={action} className="flex gap-3">
                          <span className="mt-[0.95rem] h-[6px] w-[6px] rounded-full bg-[#176157]" />
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 border-l border-[#176157] pl-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#176157]">
                        Result
                      </p>
                      <p className="mt-2 text-base leading-8 text-slate-700">{item.result}</p>
                    </div>
                    <p className="mt-5 text-base leading-8 text-slate-600">
                      <span className="font-semibold text-slate-900">我的判断：</span>
                      {item.takeaway}
                    </p>
                  </div>
                  <CaseVisual type={item.visual} result={item.result} />
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 border-t border-black/10 pt-8" data-reveal>
            <div className="grid gap-5 lg:grid-cols-[240px_1fr]">
              <div>
                <SectionEyebrow>Additional Context</SectionEyebrow>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  我没有把所有经历都展开成完整大案例，但这些背景一起构成了我的业务视角。
                </p>
              </div>
              <div className="space-y-4">
                {supportTrack.map((item) => (
                  <div
                    key={item.label}
                    className="grid gap-2 border-b border-black/10 pb-4 sm:grid-cols-[160px_1fr]"
                  >
                    <p className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-slate-400">
                      {item.label}
                    </p>
                    <p className="text-base leading-8 text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="method" className="mx-auto max-w-[1240px] px-5 py-12 sm:px-8 sm:py-16">
          <div className="grid gap-12 border-t border-black/10 pt-10 lg:grid-cols-[0.92fr_1.08fr]">
            <div data-reveal>
              <SectionEyebrow>How I Work</SectionEyebrow>
              <h2 className="mt-5 max-w-[12ch] font-display text-[2.35rem] leading-[1.04] tracking-[-0.05em] text-slate-950 sm:text-[3.1rem]">
                我理解的 AI 产品经理，
                <span className="text-[#176157]">不是把模型接进来就结束了。</span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                更重要的是把业务问题、方案表达、快速验证和落地反馈接成一条连续链路。这也是我想通过这份 homework
                展示的核心：我不是把文字搬到线上，而是在组织一个更接近产品化的表达。
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={aiRepoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-semibold text-slate-900"
                >
                  AI 智能体仓库
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={siteRepoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-semibold text-slate-900"
                >
                  网站仓库
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="space-y-6" data-reveal>
              {methodSteps.map((step) => (
                <div
                  key={step.number}
                  className="grid gap-3 border-b border-black/10 pb-5 sm:grid-cols-[76px_1fr]"
                >
                  <span className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-slate-400">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-[1.3rem] font-semibold tracking-[-0.03em] text-slate-950">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-base leading-8 text-slate-600">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer
        id="contact"
        className="mx-auto max-w-[1240px] px-5 pb-16 pt-8 sm:px-8 sm:pb-20"
      >
        <div className="border-t border-black/10 pt-10" data-reveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <SectionEyebrow>Let&apos;s Connect</SectionEyebrow>
              <p className="mt-5 max-w-[16ch] font-display text-[2.3rem] leading-[1.04] tracking-[-0.05em] text-slate-950 sm:text-[3.2rem]">
                如果这份网站足够清楚，
                <span className="text-[#176157]">欢迎继续和我聊真实场景里的产品工作。</span>
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                求职方向：AI 产品经理 / AI 产品原型 / 产品解决方案方向
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="tel:19101469874"
                className="min-w-[220px] border-t border-black/10 pt-4 text-left"
              >
                <Phone className="h-4 w-4 text-[#176157]" />
                <p className="mt-3 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-slate-400">
                  Phone
                </p>
                <p className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                  19101469874
                </p>
              </a>
              <a
                href="mailto:2541830361@qq.com"
                className="min-w-[220px] border-t border-black/10 pt-4 text-left"
              >
                <Mail className="h-4 w-4 text-[#176157]" />
                <p className="mt-3 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-slate-400">
                  Email
                </p>
                <p className="mt-2 break-all text-xl font-semibold tracking-[-0.03em] text-slate-950">
                  2541830361@qq.com
                </p>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
