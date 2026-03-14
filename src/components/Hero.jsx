import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import { AnimatedText } from './ui/AnimatedText'

const profilePhoto = '/assets/profile-photo.jpg'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 简化背景装饰 - 移除动画 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyber-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 左侧内容 */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-cyber-cyan" />
              <span className="text-sm font-mono text-cyber-text-secondary">
                Inspire / Thoughtworks 2026
              </span>
            </motion.div>

            <AnimatedText
              text="更接近业务现场的"
              className="font-display text-3xl md:text-5xl font-bold mb-3 leading-tight"
              delay={0.2}
            />

            <AnimatedText
              text="AI 产品经理候选人"
              className="font-display text-3xl md:text-5xl font-bold glow-text leading-tight"
              gradient={true}
              delay={0.4}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="mt-4 text-base text-cyber-text-secondary max-w-lg leading-normal"
            >
              我没有把简历直接搬上网页，而是把交付现场、需求整理、培训赋能和 AI
              提效实践压缩成一个更像产品表达的长页面。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#work"
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-cyber-purple to-cyber-cyan px-6 py-3 rounded-full font-semibold text-white overflow-hidden"
              >
                <span className="relative z-10">查看案例</span>
                <ArrowUpRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan to-cyber-green opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="https://github.com/wq-powerful/wq-powerful.github.io"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 glass-strong px-6 py-3 rounded-full font-semibold hover:border-cyber-purple transition-colors"
              >
                查看仓库
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </motion.div>

            {/* 数据标签 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="mt-8 grid grid-cols-3 gap-4"
            >
              {[
                { value: '1+', label: '年经验' },
                { value: '6', label: '个项目' },
                { value: '200-500W', label: '项目级别' },
              ].map((stat, index) => (
                <div key={index} className="glass rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyber-purple to-cyber-cyan bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-cyber-text-secondary mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* 右侧图片 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative glass-strong rounded-3xl p-8 neon-glow">
              <img
                src={profilePhoto}
                alt="吴倩证件照"
                loading="eager"
                className="w-full aspect-[4/5] object-cover rounded-2xl"
              />

              {/* 简化浮动标签 - 移除动画 */}
              <div className="absolute -top-4 -right-4 glass px-4 py-2 rounded-full">
                <span className="text-sm font-mono text-cyber-cyan">Olivia Wu</span>
              </div>

              <div className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-full">
                <span className="text-sm font-mono text-cyber-green">吴倩</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 滚动提示 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-cyber-purple/50 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-cyber-purple rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
