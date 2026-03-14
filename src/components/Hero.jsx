import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Mail, Sparkles } from 'lucide-react'

const profilePhoto = '/assets/profile-photo.jpg'

export function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="relative min-h-screen flex items-center px-6 py-20 bg-portfolio-bg overflow-hidden" aria-label="个人简介">
      {/* 动态背景装饰 */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* 渐变光球 */}
        <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-teal-400/20 to-cyan-500/20 rounded-full blur-3xl" />

        {/* 装饰网格 */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(8,145,178,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(8,145,178,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </motion.div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* 左侧：个人介绍 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* 标签带闪光效果 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 text-portfolio-accent rounded-full text-sm font-medium mb-6 shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              AI 产品经理候选人
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-hero-sm lg:text-hero font-bold text-portfolio-text mb-6 leading-tight"
            >
              你好，我是
              <motion.span
                className="inline-block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                style={{ backgroundSize: '200% 200%' }}
              >
                吴倩
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-body-lg text-portfolio-text-secondary mb-4 leading-relaxed"
            >
              更接近业务现场的 AI 产品经理
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-body text-portfolio-text-muted mb-8 leading-relaxed"
            >
              我把交付现场、需求整理、培训赋能和 AI 提效实践，
              压缩成这个产品化的表达。不是简历的搬运，而是真实经验的提炼。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <motion.a
                href="#work"
                className="btn-primary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                查看项目案例
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#contact"
                className="btn-secondary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5 mr-2" />
                联系我
              </motion.a>
            </motion.div>

            {/* 简洁的数据展示 - 增强版 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex gap-8 pt-6 border-t border-portfolio-border"
            >
              {[
                { value: '1+年', label: '产品经验' },
                { value: '6个', label: '交付项目' },
                { value: '200-500W', label: '项目规模' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="group cursor-default"
                >
                  <div className="text-xl font-bold text-portfolio-text mb-1 group-hover:text-portfolio-accent transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-body-sm text-portfolio-text-muted">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* 右侧：个人照片 - 增强版 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            {/* 背景装饰 */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -inset-4 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-3xl blur-2xl"
            />

            <motion.div
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <img
                src={profilePhoto}
                alt="吴倩个人照片 - AI 产品经理，专注于业务现场的产品实践"
                loading="eager"
                fetchpriority="high"
                width="800"
                height="1067"
                className="w-full aspect-[3/4] object-cover"
              />
              {/* 柔和的渐变遮罩 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" aria-hidden="true" />

              {/* 光效 */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-cyan-400/0 via-cyan-400/10 to-transparent"
                animate={{
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>

            {/* 个人标签 - 玻璃态效果 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -bottom-4 left-6 right-6 glass-card px-6 py-4 rounded-xl shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-portfolio-text">吴倩 Olivia Wu</div>
                  <div className="text-body-sm text-portfolio-text-muted">Thoughtworks 2026</div>
                </div>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="w-2 h-2 bg-portfolio-accent rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
