import { useEffect } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Bot,
  BriefcaseBusiness,
  BrainCircuit,
  Building2,
  ClipboardList,
  FileStack,
  GraduationCap,
  Handshake,
  LayoutTemplate,
  Mail,
  MapPinned,
  MessageSquareText,
  MonitorPlay,
  Phone,
  Presentation,
  Sparkles,
  Target,
  Users,
  Workflow,
  Wrench,
} from 'lucide-react'

const profilePhoto = '/assets/profile-photo.jpg'
const trainingPhoto = '/assets/training-kunming.jpg'
const meetingPhoto = '/assets/meeting-kunming.jpg'
const homeworkPhoto = '/assets/homework-email.jpg'
const projectPhoto1 = '/assets/job-brief-1.jpg'
const projectPhoto2 = '/assets/job-brief-2.jpg'

const githubUrl = 'https://github.com/wq-powerful/work-ai-assistant'

const navigation = [
  { id: 'about', label: '关于我' },
  { id: 'fit', label: '岗位匹配' },
  { id: 'projects', label: '项目作品' },
  { id: 'thinking', label: 'AI 理解' },
  { id: 'communication', label: '表达赋能' },
  { id: 'methodology', label: '方法论' },
  { id: 'homework', label: 'Homework' },
  { id: 'contact', label: '联系我' },
]

const heroStats = [
  { value: '1 年+', label: '产品落地、技术支持与项目全流程交付经验' },
  { value: '6 个', label: '200-500W 单项目案值的重要项目独立负责' },
  { value: '5+ 场景', label: '军工、消费电子、校企合作、快消数字化等跨行业经验' },
]

const strengthCards = [
  {
    icon: BriefcaseBusiness,
    title: '真实项目经验',
    description:
      '从客户现场、环境部署、培训交付到问题闭环，我不是停留在纸面理解，而是在项目里反复验证如何把方案真正推进下去。',
  },
  {
    icon: Presentation,
    title: '表达与培训能力',
    description:
      '长期负责编写授课 PPT、操作手册、问题清单与讲解材料，能把复杂流程拆成客户和学生都能理解、能上手的内容。',
  },
  {
    icon: Bot,
    title: 'AI 工具实践能力',
    description:
      '使用 Trae 等 AI 工具整理需求、梳理规则逻辑、验证原型与搭建提效工具，更关注它是否真的降低协作成本。',
  },
  {
    icon: Building2,
    title: '跨行业业务理解',
    description:
      '接触军工、消费电子、工业软件、校企合作与快消数字化场景，能够快速切换语境，理解不同用户的目标与约束。',
  },
]

const fitCards = [
  {
    icon: ClipboardList,
    title: '产品探索与需求设计',
    description:
      '能从一线项目中完成需求收集、问题识别、字段梳理与方案表达。昆明闻讯项目里，我把客户的报表诉求整理成需求文档，并持续推进研发、测试和交付节点。',
  },
  {
    icon: LayoutTemplate,
    title: '快速原型与 AI 辅助提效',
    description:
      '岗位强调 Vibe Coding，我的对应实践不是空谈。除了用 AI 工具整理规则与参数逻辑，我也会用 AI 原生 IDE 快速搭建可讨论、可演示的成果，把想法尽快变成具象界面或流程。',
  },
  {
    icon: Workflow,
    title: '交付闭环与问题推进',
    description:
      '多个项目里我不仅承担部署和培训，还负责问题跟进、资料沉淀、回访与跨部门推进。我的工作方式不是“交付完就结束”，而是把现场反馈继续转化成优化输入。',
  },
  {
    icon: MessageSquareText,
    title: '表达、培训与用户赋能',
    description:
      '我擅长把产品逻辑讲清楚。深圳信息职业技术大学项目中，我负责授课 PPT、实训手册与终端部署；在企业项目中，我也持续负责售前演示、培训和知识分享。',
  },
  {
    icon: Handshake,
    title: '跨行业场景理解',
    description:
      '从军工软件到快消数字化，再到校企合作场景，我一直在不同业务环境中切换角色与语言，逐步形成了“先理解现场，再组织方案”的工作习惯。',
  },
]

const projects = [
  {
    title: 'DFM 规则编辑器 / AI 提效工具建设',
    period: 'AI 工具实践',
    role: '需求提出者 / 需求撰写者 / AI 工具实践者',
    summary: '从真实业务中识别重复低效环节，用 AI 和规则化思路做提效验证。',
    background:
      '在需求整理与规则逻辑梳理过程中，存在信息分散、表达不一致、人工查阅成本高的问题，需要更高效的整理与复用方式。',
    actions: [
      '从客户现场和团队协作链路中定位问题，梳理“规则管理器”的需求边界与使用场景。',
      '独立撰写需求，并用 AI 工具辅助梳理规则逻辑、表达结构和参数拆解。',
      '进一步搭建 AI 自动拆解参数智能体，替代部分人工查手册流程。',
      '把方法沉淀为团队可复用的提效资产，而不是只服务一次性交付。',
    ],
    outcomes: [
      '需求处理效率与表达质量提升，相关方法在团队内实现高复用。',
      '参数建库效率提升 60%+，减少重复检索和人工整理成本。',
    ],
    thought:
      'AI 工具的价值不在“看起来很聪明”，而在是否能真正降低协作成本、提升团队效率，并沉淀成后续可复用的资产。',
    tags: ['AI 工具实践', '需求设计', '效率产品', '团队复用'],
    visual: 'rule-editor',
  },
  {
    title: '昆明闻讯 VSD 软件交付项目',
    period: '2025.06 - 2025.08',
    role: '交付培训负责人 / 项目负责人',
    summary: '把培训、问题清单、需求反馈和研发协同串成一个完整交付闭环。',
    background:
      '客户首次接触 VSD 软件，交付周期紧张，现场问题多，且一部分业务诉求与现有功能并不完全匹配。',
    actions: [
      '完成环境部署、交付上线与现场培训，帮助客户建立基础操作能力。',
      '编写操作手册、操作视频和问题清单，逐条跟进现场及后续反馈。',
      '整理新增报表等需求方案，推动产品、研发、测试明确实现路径和交付节点。',
      '形成“培训 + 问题收集 + 需求反馈 + 文档沉淀”的标准化闭环。',
    ],
    outcomes: [
      '一个月内完成验收，整理并跟进 10+ 项问题。',
      '推动设计效率提升 50%+，定制功能使报告输出效率提升 80%，并促成客户多厂区增购。',
    ],
    thought:
      '客户培训不是交付结束，而是产品真正进入用户场景的开始。很多高价值的需求，不会出现在会议纪要里，而是出现在用户第一次真正上手之后。',
    tags: ['交付闭环', '客户培训', '需求反馈', '跨部门协同'],
    image: meetingPhoto,
    imageAlt: '昆明闻讯项目会议现场',
    imageLabel: '会议推进 / 现场协同',
  },
  {
    title: '宁波德业 DFM 软件交付与专项培训项目',
    period: '2025.09 - 2025.12',
    role: '专属交付与培训负责人',
    summary: '在企业复杂场景中完成部署适配、专项培训和问题推进，并支撑后续商业转化。',
    background:
      '企业客户涉及多团队协同，既要适配实际业务流程，也要在培训和后续支持中持续推动问题收敛与价值落地。',
    actions: [
      '对接企业多团队需求，梳理部署边界和专项培训重点。',
      '完成软件部署适配与培训交付，跟进客户使用过程中的问题。',
      '推动研发侧优化，沉淀工业场景交付资产。',
      '围绕客户满意度和长期使用价值，支持后续 license 增购转化。',
    ],
    outcomes: [
      '推动研发问题检出率提升 50%+，客户满意度达到 100%。',
      '沉淀 2 项工业交付资产，并促成客户后续 10+ license 增购。',
    ],
    thought:
      '复杂企业项目让我更在意“产品是否真的进入业务流程”。功能做出来只是开始，真正的价值在于客户能否长期依赖它完成工作。',
    tags: ['工业软件', '复杂场景', '培训交付', '商业价值'],
    image: trainingPhoto,
    imageAlt: '宁波德业或类似培训交付现场',
    imageLabel: '专项培训 / 场景赋能',
  },
  {
    title: '军工项目群',
    period: '2025.06 - 至今',
    role: '售前交流 + 技术支持 + 培训支持',
    summary: '在高要求、高约束场景下做清晰沟通、技术支持和交付推进。',
    background:
      '军工项目专业性强、交付要求高，推进过程中既有前期演示与方案沟通，也有中后期的技术卡点和交付压力。',
    actions: [
      '负责售前演示和客户交流，帮助客户理解产品能力与对接路径。',
      '支持软件培训、部署和日常技术问题处理。',
      '联动产品、研发、测试协调资源，解决交付卡点。',
      '输出技术方案、技术响应表等文档，保障项目按期推进。',
    ],
    outcomes: [
      '推动军工 A 所进入软件对接阶段，解决军工 B 所技术卡点。',
      '参与保障多个军工项目按期交付，并承担 6 个 200-500W 单项目案值的重要项目。',
    ],
    thought:
      '军工项目让我习惯在高要求和强约束下工作。越是复杂、越是不能含糊表达，越需要把信息结构化并持续推进到结果。',
    tags: ['售前交流', '技术支持', '高要求场景', '项目推进'],
    visual: 'military',
  },
  {
    title: '深圳信息职业技术大学校企合作项目',
    period: '2025.12 - 2026.01',
    role: '课程讲师 / 交付支持',
    summary: '把软件交付和教学场景结合起来，让学生真正听得懂、学得会、用得起来。',
    background:
      '校企合作项目不仅需要完成软件交付，还要兼顾教学节奏、软件适配与课程实操的可落地性。',
    actions: [
      '编写授课 PPT，重构教学表达方式和演示路径。',
      '适配教学版软件，部署实训终端，保障多班级顺利开展实操。',
      '编写实训手册，降低上手门槛并沉淀校企合作交付资料。',
      '在交付过程中持续观察反馈，挖掘新的合作与产品需求。',
    ],
    outcomes: [
      '沉淀 3 项校企交付资产，支撑多班级教学实训。',
      '助力 2 名学生获得实习机会，并挖掘出新的业务需求。',
    ],
    thought:
      '用户教育和产品赋能是产品经理很容易忽略的一环。一个真正可落地的产品，必须能被用户理解、掌握并持续使用。',
    tags: ['教学场景', 'PPT 表达', '用户赋能', '校企合作'],
    image: trainingPhoto,
    imageAlt: '深圳信息职业技术大学培训讲解场景',
    imageLabel: '授课讲解 / 实训支持',
  },
  {
    title: '北京快消行业数字化实习经历',
    period: '2024.08 - 2025.03',
    role: '北京纷扬科技有限公司 实施工程师（实习）',
    summary: '在快消数字化项目里理解订单、费用、拜访、数据集成等业务链路。',
    background:
      '实习期间参与快消行业数字化项目实施，接触 DMS 及 ERP 相关模块，进入渠道、销售和运营场景的真实业务链路。',
    actions: [
      '参与客户需求调研，根据现有产品能力提供方案并评估可行性。',
      '处理版本发布前测试、上线支持、线上问题反馈与优化项收集。',
      '在 DMS / ERP 模块相关工作中理解订单、仓储、费用、拜访等关键流程。',
      '与客户、开发和产品经理协作，推动业务问题澄清和系统优化。',
    ],
    outcomes: [
      '积累了快消行业数字化项目执行经验，形成对渠道与运营流程的业务理解。',
      '接触覆盖订单管理、仓储管理、费用管控、终端拜访和数据集成的大客户场景。',
    ],
    thought:
      '快消数字化经历让我意识到，产品理解不能只停留在功能层，而要进入业务链路、角色分工和数据流转本身。',
    tags: ['快消数字化', 'DMS / ERP', '业务理解', '系统实施'],
    visual: 'fmcg',
  },
]

const thinkingPoints = [
  {
    title: 'AI 产品不是“只会调模型”',
    description:
      '模型只是能力来源之一，真正决定产品价值的，是业务目标是否明确、用户问题是否真实、流程是否可落地。',
  },
  {
    title: '需求拆解比“想法很多”更重要',
    description:
      '用户表达通常是模糊的。把诉求拆成字段、逻辑、边界、例外和交付标准，才是方案能往前走的前提。',
  },
  {
    title: '验证速度重要，但闭环更重要',
    description:
      '我认同快速做原型，但不会把原型当终点。只有结合反馈、追踪效果、沉淀方法，验证才真正有业务意义。',
  },
  {
    title: 'AI 工具的价值在于提效与协作',
    description:
      '我更关注它是否降低沟通门槛、减少重复劳动、让团队更快进入可讨论状态，而不是单纯做“炫技演示”。',
  },
  {
    title: 'AI 产品经理需要串起完整链路',
    description:
      '用户问题、数据流程、方案设计、工具验证、交付推进和效果迭代，本质上是同一条链路，不应该被割裂看待。',
  },
]

const communicationCards = [
  {
    icon: Presentation,
    title: 'PPT 编写与讲解',
    description:
      '从企业培训到校企课程，我都长期承担 PPT 结构设计、讲解节奏组织和现场表达，确保复杂内容能被快速理解。',
  },
  {
    icon: FileStack,
    title: '交付资料沉淀',
    description:
      '操作手册、问题清单、实训手册、交付 SOP、视频资料，我会把项目中的经验整理成后续可复用的交付资产。',
  },
  {
    icon: Users,
    title: '培训、售前与知识分享',
    description:
      '我不仅能讲产品，也能讲场景、讲流程、讲限制条件，让客户、学生和业务人员知道为什么这样用、如何落到日常工作里。',
  },
]

const methodology = [
  {
    step: '01',
    title: '从业务现场识别真实问题',
    description:
      '先确认谁在用、在哪个环节卡住、现有流程为什么不顺，而不是一开始就从技术出发设计答案。',
  },
  {
    step: '02',
    title: '把模糊诉求拆成结构化问题',
    description:
      '把用户原话转成字段、逻辑、流程、例外情况与交付标准，确保方案能被产品、研发、测试和客户共同理解。',
  },
  {
    step: '03',
    title: '用 AI 工具或原型快速验证',
    description:
      '把想法尽快变成可讨论、可演示、可验证的界面或流程，再结合反馈判断方向是否成立。',
  },
  {
    step: '04',
    title: '沉淀为可复用资产与方法',
    description:
      '最终目标不是只完成一次交付，而是把经验沉淀成模板、知识库、提示词、SOP 或工具能力，让团队后续也能复用。',
  },
]

const deliverables = [
  '培训 PPT',
  '操作手册',
  '问题清单',
  '交付 SOP',
  '操作视频',
  '需求文档',
  '技术方案',
  '实训手册',
]

const homeworkHighlights = [
  '这不是一份在线简历，而是我把真实经历重新组织成更有逻辑和体验的作品集网站。',
  '它既回应了 Inspire / Thoughtworks 对 AI 辅助编程、产品表达和快速构建能力的要求，也体现了我的审美与组织方式。',
  '我希望面试官看到的不只是做过什么，更是我如何理解问题、组织信息并把它交付成一个可访问、可感知的成果。',
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
      { threshold: 0.16, rootMargin: '0px 0px -10% 0px' },
    )

    nodes.forEach((node) => observer.observe(node))

    return () => observer.disconnect()
  }, [])
}

function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  return (
    <div
      className={`mb-10 max-w-3xl ${
        align === 'center' ? 'mx-auto text-center' : 'text-left'
      }`}
      data-reveal
    >
      <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#b7d6cf] bg-[#eff8f5] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#1e766d]">
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-[3rem]">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
        {description}
      </p>
    </div>
  )
}

function ProjectVisual({ project }) {
  if (project.image) {
    return (
      <div className="relative h-full min-h-[320px] overflow-hidden rounded-[28px] border border-white/60 bg-slate-200">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-white/70">
              Project Snapshot
            </p>
            <p className="mt-2 text-lg font-semibold text-white">
              {project.imageLabel}
            </p>
          </div>
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            真实素材
          </span>
        </div>
      </div>
    )
  }

  if (project.visual === 'rule-editor') {
    return (
      <div className="relative flex min-h-[320px] flex-col overflow-hidden rounded-[28px] border border-white/60 bg-slate-950 p-6 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(45,212,191,0.35),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(96,165,250,0.24),_transparent_38%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:42px_42px] opacity-25" />
        <div className="relative flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/65">
              AI Efficiency Toolkit
            </p>
            <p className="mt-3 text-2xl font-semibold">规则逻辑，从散到整</p>
          </div>
          <Bot className="h-10 w-10 text-teal-200" />
        </div>
        <div className="relative mt-8 grid gap-3">
          {[
            '业务现场问题识别',
            '规则逻辑结构化',
            'AI 辅助拆解与整理',
            '团队复用与知识沉淀',
          ].map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/10 px-4 py-3 backdrop-blur-sm"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-teal-100">
                0{index + 1}
              </span>
              <span className="text-sm font-medium text-white/90">{item}</span>
            </div>
          ))}
        </div>
        <div className="relative mt-auto pt-6">
          <p className="rounded-2xl border border-teal-200/20 bg-teal-300/10 px-4 py-3 text-sm leading-6 text-teal-50">
            把 AI 放进真实工作流，而不是只停留在演示层。
          </p>
        </div>
      </div>
    )
  }

  if (project.visual === 'military') {
    return (
      <div className="relative min-h-[320px] overflow-hidden rounded-[28px] border border-white/60 bg-[#0f172a] p-6 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_36%),linear-gradient(135deg,rgba(148,163,184,0.08),transparent_70%)]" />
        <div className="relative flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-300">
              High-constraint Delivery
            </p>
            <p className="mt-3 text-2xl font-semibold">军工场景里的稳定推进</p>
          </div>
          <Wrench className="h-10 w-10 text-sky-200" />
        </div>
        <div className="relative mt-8 grid gap-3 sm:grid-cols-2">
          {[
            '售前交流',
            '技术支持',
            '方案文档',
            '按期交付',
          ].map((item) => (
            <div
              key={item}
              className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-5"
            >
              <p className="text-sm font-semibold tracking-wide text-white/90">
                {item}
              </p>
            </div>
          ))}
        </div>
        <div className="relative mt-6 rounded-[22px] border border-sky-200/15 bg-sky-300/10 px-4 py-4 text-sm leading-6 text-slate-100">
          高要求场景下，越需要把沟通、风险和节点管理做得清楚稳定。
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-[320px] overflow-hidden rounded-[28px] border border-white/60 bg-[#10211f] p-6 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.22),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(250,204,21,0.2),_transparent_35%)]" />
      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-white/65">
            Cross-industry Perspective
          </p>
          <p className="mt-3 text-2xl font-semibold">快消数字化业务模块</p>
        </div>
        <MonitorPlay className="h-10 w-10 text-lime-200" />
      </div>
      <div className="relative mt-8 grid gap-3 sm:grid-cols-2">
        {[
          '订单管理',
          '仓储管理',
          '费用管控',
          '终端拜访',
          '数据集成',
          '版本测试与上线',
        ].map((item) => (
          <div
            key={item}
            className="rounded-[22px] border border-white/10 bg-white/8 px-4 py-4 text-sm font-medium text-white/90"
          >
            {item}
          </div>
        ))}
      </div>
      <div className="relative mt-6 rounded-[22px] border border-white/10 bg-white/8 px-4 py-4 text-sm leading-6 text-white/80">
        从模块实施进入业务流程理解，是我后来转向产品岗位的重要起点之一。
      </div>
    </div>
  )
}

function ProjectCard({ project, index }) {
  return (
    <article
      className="section-shell p-6 sm:p-8 lg:p-10"
      data-reveal
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div
        className={`grid gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:gap-10 ${
          index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
        <div className="flex flex-col">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Case {String(index + 1).padStart(2, '0')}
            </span>
            <span className="rounded-full border border-[#c4ded7] bg-[#eef8f5] px-3 py-1 text-sm font-medium text-[#1d6c64]">
              {project.period}
            </span>
          </div>
          <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-[2rem]">
            {project.title}
          </h3>
          <p className="mt-3 text-base font-medium text-slate-700">{project.summary}</p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
            我的角色
          </p>
          <p className="mt-2 text-base leading-7 text-slate-700">{project.role}</p>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                项目背景
              </p>
              <p className="mt-2 text-base leading-7 text-slate-600">
                {project.background}
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                我做了什么
              </p>
              <ul className="mt-2 space-y-3 text-base leading-7 text-slate-600">
                {project.actions.map((action) => (
                  <li key={action} className="flex gap-3">
                    <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-[#197569]" />
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                项目结果
              </p>
              <ul className="mt-2 space-y-3 text-base leading-7 text-slate-600">
                {project.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-3">
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-slate-400" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[24px] border border-[#d8ebe5] bg-[#f3faf7] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2b7b72]">
                我的思考
              </p>
              <p className="mt-3 text-base leading-7 text-slate-700">{project.thought}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <ProjectVisual project={project} />
      </div>
    </article>
  )
}

function App() {
  useReveal()

  return (
    <div className="relative overflow-x-hidden bg-[#edf0e8] text-slate-900">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(45,212,191,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.12),_transparent_32%),linear-gradient(180deg,_rgba(255,255,255,0.52),_rgba(255,255,255,0))]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[linear-gradient(180deg,rgba(15,23,42,0.06),rgba(15,23,42,0))]" />

      <header className="sticky top-0 z-50 border-b border-white/50 bg-[#edf0e8]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
          <a href="#top" className="group min-w-0">
            <p className="truncate text-sm uppercase tracking-[0.26em] text-slate-500">
              Olivia Wu
            </p>
            <p className="truncate text-base font-semibold text-slate-950">
              吴倩 · AI 产品经理候选人
            </p>
          </a>
          <nav className="hidden items-center gap-5 lg:flex">
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
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            联系我
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main id="top" className="relative">
        <section className="mx-auto max-w-[1200px] px-5 pb-12 pt-8 sm:px-8 sm:pt-12 lg:px-10 lg:pb-16">
          <div
            className="section-shell overflow-hidden px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12"
            data-reveal
          >
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.5),rgba(255,255,255,0)),linear-gradient(rgba(16,24,40,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,24,40,0.05)_1px,transparent_1px)] bg-[size:auto,44px_44px,44px_44px]" />
            <div className="relative grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#b7d6cf] bg-[#eff8f5] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#1e766d]">
                  <BrainCircuit className="h-3.5 w-3.5" />
                  Personal Portfolio for Inspire / Thoughtworks
                </div>
                <h1 className="mt-6 font-display text-4xl leading-[1.02] tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-[4.25rem]">
                  面向真实业务落地的
                  <span className="mt-2 block text-[#175e56]">
                    准 AI 产品经理候选人
                  </span>
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                  具备需求拆解、方案表达、培训赋能、项目交付闭环与 AI
                  工具辅助原型验证能力。
                </p>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  我叫吴倩，毕业于西安文理学院物联网工程专业。过去一年多，我在军工、消费电子、工业软件、校企合作与快消数字化等场景中，持续做需求分析、培训交付、问题闭环、资料沉淀与跨部门推进，也在尝试用
                  AI 工具把零散经验转化为更高效的工作方式。
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    查看项目作品
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#fit"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    岗位匹配度
                    <Target className="h-4 w-4" />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-[#c4ded7] bg-[#eef8f5] px-5 py-3 text-sm font-semibold text-[#165950] transition hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    联系我
                    <Mail className="h-4 w-4" />
                  </a>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {heroStats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[24px] border border-white/70 bg-white/75 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur"
                    >
                      <p className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                        {item.value}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{item.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    '需求分析',
                    '方案表达',
                    '项目推进',
                    '培训赋能',
                    'AI 工具辅助',
                    '交付闭环',
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/70 bg-white/75 px-3 py-1.5 text-sm font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-8 top-12 hidden rounded-[24px] border border-white/60 bg-white/85 p-4 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur sm:block">
                  <p className="text-xs uppercase tracking-[0.26em] text-slate-400">
                    Role Focus
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">
                    AI 产品经理 / AI 原型 / 产品解决方案
                  </p>
                </div>
                <div className="absolute -right-4 bottom-10 hidden rounded-[24px] border border-[#c4ded7] bg-[#eef8f5]/90 p-4 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur sm:block">
                  <p className="text-xs uppercase tracking-[0.26em] text-[#2b7b72]">
                    Portfolio Signal
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#174f48]">
                    懂业务 · 会表达 · 能交付 · 会用 AI 提效
                  </p>
                </div>
                <div className="relative mx-auto max-w-[480px] rounded-[34px] border border-white/60 bg-[linear-gradient(180deg,rgba(14,116,144,0.08),rgba(255,255,255,0.72))] p-4 shadow-[0_26px_90px_rgba(15,23,42,0.12)]">
                  <div className="rounded-[28px] border border-white/80 bg-white/80 p-3 backdrop-blur">
                    <img
                      src={profilePhoto}
                      alt="吴倩职业证件照"
                      className="h-full w-full rounded-[22px] object-cover"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-4 rounded-[24px] bg-slate-950 px-5 py-4 text-white">
                    <div>
                      <p className="text-xs uppercase tracking-[0.26em] text-white/55">
                        Candidate Card
                      </p>
                      <p className="mt-2 text-lg font-semibold">吴倩 · Olivia</p>
                    </div>
                    <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90">
                      Based in 西安
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-[1200px] px-5 py-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="section-shell p-6 sm:p-8" data-reveal>
              <SectionHeader
                eyebrow="About Me"
                title="从物联网工程，到真实项目中的需求、培训与交付"
                description="我的职业转化不是突然改方向，而是在一个个真实项目中，逐步意识到自己更想做的是把业务问题拆清楚、把方案组织清楚，并推动它真正落地。"
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-5 w-5 text-[#17665d]" />
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                      教育背景
                    </p>
                  </div>
                  <p className="mt-4 text-xl font-semibold text-slate-950">
                    西安文理学院
                  </p>
                  <p className="mt-2 text-base leading-7 text-slate-600">
                    物联网工程专业，2025 年 7 月毕业。
                    具备 C、Java、Python、HTML/CSS 等基础技术能力。
                  </p>
                </div>
                <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-center gap-3">
                    <MapPinned className="h-5 w-5 text-[#17665d]" />
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                      目标岗位
                    </p>
                  </div>
                  <p className="mt-4 text-xl font-semibold text-slate-950">
                    AI 产品经理 / AI 产品原型 / 解决方案
                  </p>
                  <p className="mt-2 text-base leading-7 text-slate-600">
                    希望持续强化“懂业务、会表达、能交付、会用 AI 提效”的综合能力。
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
                <p>
                  过去一年多，我在军工、消费电子、工业软件、校企合作和快消数字化场景中参与或负责项目推进，从客户现场收集问题，到整理需求、编写文档、培训赋能，再到联动研发与测试推动交付，逐步建立了“从业务到落地”的完整认知。
                </p>
                <p>
                  我之所以想转向 AI
                  产品经理，是因为我越来越清楚自己最有兴趣的部分，不只是把任务执行完，而是理解用户为什么会卡住、梳理问题应该怎样被表达、以及如何借助工具让方案更快验证、更容易协作。
                </p>
                <p>
                  对我来说，AI
                  产品经理不是一个更“新”的岗位，而是一个能把我已有的业务理解、表达能力、交付经验和技术兴趣更自然结合起来的方向。
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {strengthCards.map((card, index) => {
                const Icon = card.icon
                return (
                  <div
                    key={card.title}
                    className="section-shell p-6 sm:p-7"
                    data-reveal
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef8f5] text-[#17665d]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                      {card.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-slate-600">
                      {card.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section id="fit" className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8 lg:px-10">
          <SectionHeader
            eyebrow="Why Me"
            title="为什么我适合 AI 产品经理"
            description="我对这个岗位的匹配，不来自“我会写一些文案”或“我会一点工具”，而是来自真实项目中形成的几种能力组合。"
            align="center"
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {fitCards.map((card, index) => {
              const Icon = card.icon
              return (
                <div
                  key={card.title}
                  className="section-shell flex flex-col p-6"
                  data-reveal
                  style={{ transitionDelay: `${index * 70}ms` }}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-slate-950">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">
                    {card.description}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8 lg:px-10">
          <SectionHeader
            eyebrow="Selected Projects"
            title="精选项目作品"
            description="这部分是我最想让面试官看到的内容。它们共同说明，我已经在真实业务中持续做过需求整理、方案表达、培训赋能、问题推进与 AI 提效实践。"
          />
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </section>

        <section id="thinking" className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8 lg:px-10">
          <div className="section-shell overflow-hidden p-6 sm:p-8 lg:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(45,212,191,0.12),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(15,23,42,0.08),_transparent_30%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div data-reveal>
                <SectionHeader
                  eyebrow="AI Product Thinking"
                  title="我理解的 AI 产品，不止是“把模型接进来”"
                  description="真正重要的，是能否把业务问题、用户场景、方案表达、工具验证和交付闭环连接起来。"
                />
                <div className="rounded-[28px] border border-[#cfe4de] bg-[#f2fbf7] p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2b7b72]">
                    我的判断
                  </p>
                  <p className="mt-4 font-display text-3xl leading-tight tracking-[-0.04em] text-slate-950">
                    一个好的 AI 产品经理，要能连接
                    <span className="text-[#17665d]">
                      用户问题 - 数据流程 - 方案设计 - 工具验证 - 效果迭代
                    </span>
                    。
                  </p>
                  <p className="mt-4 text-base leading-7 text-slate-600">
                    这也是我为什么会持续把交付项目里的现场问题、需求文档、培训资料和 AI
                    工具实践放在一起看。它们本来就是同一条链路上的不同节点。
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2" data-reveal>
                {thinkingPoints.map((point, index) => (
                  <div
                    key={point.title}
                    className={`rounded-[26px] border border-white/70 bg-white/80 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur ${
                      index === 4 ? 'sm:col-span-2' : ''
                    }`}
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                      0{index + 1}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-slate-950">
                      {point.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="communication"
          className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8 lg:px-10"
        >
          <SectionHeader
            eyebrow="Training & Communication"
            title="表达与赋能能力"
            description="我不仅能想，也能讲；不仅能讲，也能推动别人真正用起来。"
          />
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="section-shell overflow-hidden p-4 sm:p-5" data-reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="relative overflow-hidden rounded-[28px] border border-white/60 bg-slate-100">
                  <img
                    src={trainingPhoto}
                    alt="培训现场照片"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/70">
                      Training Scene
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      培训讲解与现场赋能
                    </p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-[28px] border border-white/60 bg-slate-100">
                  <img
                    src={meetingPhoto}
                    alt="会议现场照片"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/70">
                      Meeting Scene
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      会议推进与问题澄清
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-[28px] border border-[#d8ebe5] bg-[#f3faf7] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2b7b72]">
                  我做过的表达型交付物
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {deliverables.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#cfe4de] bg-white px-3 py-1.5 text-sm font-medium text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {communicationCards.map((card, index) => {
                const Icon = card.icon
                return (
                  <div
                    key={card.title}
                    className="section-shell p-6 sm:p-7"
                    data-reveal
                    style={{ transitionDelay: `${index * 90}ms` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                        {card.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-base leading-7 text-slate-600">
                      {card.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section id="methodology" className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8 lg:px-10">
          <SectionHeader
            eyebrow="Methodology"
            title="我的工作方法"
            description="我希望自己做的每件事都能从现场进入结构化，再从结构化进入可验证与可复用。"
            align="center"
          />
          <div className="grid gap-4 lg:grid-cols-4">
            {methodology.map((item, index) => (
              <div
                key={item.step}
                className="section-shell relative p-6 sm:p-7"
                data-reveal
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="absolute right-5 top-5 text-[3.3rem] font-semibold leading-none tracking-[-0.05em] text-slate-100">
                  {item.step}
                </div>
                <p className="relative text-sm font-semibold uppercase tracking-[0.22em] text-[#2b7b72]">
                  Step {item.step}
                </p>
                <h3 className="relative mt-4 text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                  {item.title}
                </h3>
                <p className="relative mt-4 text-base leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="homework" className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8 lg:px-10">
          <div className="section-shell overflow-hidden p-6 sm:p-8 lg:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(22,101,93,0.12),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(15,23,42,0.08),_transparent_34%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
              <div data-reveal>
                <SectionHeader
                  eyebrow="This Website as Homework"
                  title="为什么我要做这个网站"
                  description="这是我对 Inspire / Thoughtworks Homework 的直接回应。"
                />
                <div className="space-y-4 text-base leading-8 text-slate-600 sm:text-lg">
                  {homeworkHighlights.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
                <div className="mt-6 rounded-[28px] border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                    我希望被看到的，不只是经历本身
                  </p>
                  <p className="mt-3 font-display text-3xl leading-tight tracking-[-0.04em] text-slate-950">
                    而是我如何把经历转化为
                    <span className="text-[#17665d]">有逻辑、有体验、有产品感</span>
                    的表达方式。
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3" data-reveal>
                {[
                  {
                    src: homeworkPhoto,
                    alt: 'Homework 邮件截图',
                    label: 'Homework 邮件要求',
                  },
                  {
                    src: projectPhoto1,
                    alt: '岗位说明截图 1',
                    label: '岗位说明：Vibe Coding / AI 产品探索',
                  },
                  {
                    src: projectPhoto2,
                    alt: '岗位说明截图 2',
                    label: '岗位说明：方案设计 / 原型验证',
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="overflow-hidden rounded-[28px] border border-white/60 bg-white/70 shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
                  >
                    <div className="aspect-[3/5] overflow-hidden bg-slate-100">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                    <div className="border-t border-slate-200 px-4 py-4">
                      <p className="text-sm font-medium leading-6 text-slate-700">
                        {item.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-[1200px] px-5 pb-20 pt-14 sm:px-8 lg:px-10">
          <div className="section-shell overflow-hidden p-6 sm:p-8 lg:p-10" data-reveal>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(45,212,191,0.18),_transparent_34%),linear-gradient(135deg,rgba(15,23,42,0.06),transparent_70%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-[#b7d6cf] bg-[#eff8f5] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#1e766d]">
                  <Mail className="h-3.5 w-3.5" />
                  Let&apos;s Connect
                </p>
                <h2 className="mt-5 font-display text-3xl leading-tight tracking-[-0.04em] text-slate-950 sm:text-[3rem]">
                  期待与您进一步交流，
                  <span className="block text-[#17665d]">
                    也愿意在真实业务场景中持续学习、快速验证并创造价值。
                  </span>
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  求职方向：AI 产品经理 / AI 产品原型 / 产品解决方案方向
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href="tel:19101469874"
                  className="rounded-[28px] border border-white/60 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition hover:-translate-y-1"
                >
                  <Phone className="h-5 w-5 text-[#17665d]" />
                  <p className="mt-4 text-sm uppercase tracking-[0.22em] text-slate-400">
                    电话
                  </p>
                  <p className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                    19101469874
                  </p>
                </a>
                <a
                  href="mailto:2541830361@qq.com"
                  className="rounded-[28px] border border-white/60 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition hover:-translate-y-1"
                >
                  <Mail className="h-5 w-5 text-[#17665d]" />
                  <p className="mt-4 text-sm uppercase tracking-[0.22em] text-slate-400">
                    邮箱
                  </p>
                  <p className="mt-2 break-all text-xl font-semibold tracking-[-0.03em] text-slate-950">
                    2541830361@qq.com
                  </p>
                </a>
              </div>
            </div>

            <div className="relative mt-8 flex flex-col gap-4 border-t border-white/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-7 text-slate-500">
                本页内容基于你提供的简历、项目材料、述职文档与图片整理生成，重点呈现真实业务经验、产品思考与
                AI 辅助能力。
              </p>
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                查看 AI 智能体仓库
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
