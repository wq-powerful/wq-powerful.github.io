import { motion } from 'framer-motion'
import { ArrowRight, Mail, Sparkles } from 'lucide-react'

const profilePhoto = '/assets/profile-photo.jpg'

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center px-6 py-16 bg-gradient-to-br from-slate-50 via-white to-cyan-50" aria-label="个人简介">
      {/* 简化背景 - 只保留微妙的渐变 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.08),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(8,145,178,0.06),transparent_50%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-[1.2fr,1fr] gap-8 lg:gap-12 items-center">
          {/* 左侧：个人介绍 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-50 border border-cyan-200 text-cyan-700 rounded-full text-sm font-medium mb-4"
            >
              <Sparkles className="w-3.5 h-3.5" />
              AI 产品经理候选人
            </motion.div>

            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              你好，我是<span className="text-cyan-600">吴倩</span>
            </h1>

            <p className="text-lg text-slate-600 mb-3 leading-relaxed">
              更接近业务现场的 AI 产品经理
            </p>

            <p className="text-base text-slate-500 mb-6 leading-relaxed">
              我把交付现场、需求整理、培训赋能和 AI 提效实践，压缩成这个产品化的表达。
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <a href="#work" className="btn-primary group">
                查看项目案例
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="btn-secondary group">
                <Mail className="w-4 h-4 mr-2" />
                联系我
              </a>
            </div>

            {/* 数据展示 */}
            <div className="flex gap-6 pt-4 border-t border-slate-200">
              {[
                { value: '1+年', label: '产品经验' },
                { value: '6个', label: '交付项目' },
                { value: '200-500W', label: '项目规模' },
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className="text-lg font-bold text-slate-900 mb-0.5">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 右侧：个人照片 - 优化尺寸 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl max-w-sm mx-auto lg:max-w-none">
              <img
                src={profilePhoto}
                alt="吴倩个人照片 - AI 产品经理"
                loading="eager"
                fetchpriority="high"
                width="400"
                height="533"
                className="w-full aspect-[3/4] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" aria-hidden="true" />
            </div>

            {/* 个人标签 */}
            <div className="absolute -bottom-3 left-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg border border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-slate-900 text-sm">吴倩 Olivia Wu</div>
                  <div className="text-xs text-slate-500">Thoughtworks 2026</div>
                </div>
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
