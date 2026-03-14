import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'

const profilePhoto = '/assets/profile-photo.jpg'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 py-20 bg-portfolio-bg">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* 左侧：个人介绍 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="inline-block px-4 py-2 bg-portfolio-accent/10 text-portfolio-accent rounded-full text-sm font-medium mb-6">
              AI 产品经理候选人
            </div>

            <h1 className="text-hero-sm lg:text-hero font-bold text-portfolio-text mb-6 leading-tight">
              你好，我是吴倩
            </h1>

            <p className="text-body-lg text-portfolio-text-secondary mb-4 leading-relaxed">
              更接近业务现场的 AI 产品经理
            </p>

            <p className="text-body text-portfolio-text-muted mb-8 leading-relaxed">
              我把交付现场、需求整理、培训赋能和 AI 提效实践，
              压缩成这个产品化的表达。不是简历的搬运，而是真实经验的提炼。
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#work"
                className="btn-primary group"
              >
                查看项目案例
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="btn-secondary group"
              >
                <Mail className="w-5 h-5 mr-2" />
                联系我
              </a>
            </div>

            {/* 简洁的数据展示 */}
            <div className="flex gap-8 pt-6 border-t border-portfolio-border">
              {[
                { value: '1+年', label: '产品经验' },
                { value: '6个', label: '交付项目' },
                { value: '200-500W', label: '项目规模' },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-xl font-bold text-portfolio-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-body-sm text-portfolio-text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 右侧：个人照片 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-soft-lg">
              <img
                src={profilePhoto}
                alt="吴倩 - AI 产品经理"
                loading="eager"
                className="w-full aspect-[3/4] object-cover"
              />
              {/* 柔和的渐变遮罩 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>

            {/* 个人标签 - 更自然的位置 */}
            <div className="absolute -bottom-4 left-6 right-6 bg-portfolio-card px-6 py-4 rounded-xl shadow-soft-md border border-portfolio-border">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-portfolio-text">吴倩 Olivia Wu</div>
                  <div className="text-body-sm text-portfolio-text-muted">Thoughtworks 2026</div>
                </div>
                <div className="w-2 h-2 bg-portfolio-accent rounded-full animate-pulse" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
