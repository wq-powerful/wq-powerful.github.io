import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const profilePhoto = '/assets/profile-photo.jpg'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-apple-white">
      {/* Apple 风格 - 极简容器，大量留白 */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-40">
        <div className="text-center">
          {/* Apple 风格超大标题 - 72-80px */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-hero-sm md:text-hero font-bold text-apple-gray-800 mb-6 tracking-tight"
          >
            更接近业务现场的
            <br />
            AI 产品经理
          </motion.h1>

          {/* Apple 风格副标题 - 大字体，简洁 */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-body-lg md:text-section-sm text-apple-gray-500 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            把交付现场、需求整理、培训赋能和 AI 提效实践
            <br className="hidden md:block" />
            压缩成一个产品化的表达
          </motion.p>

          {/* Apple 风格 CTA - 简洁蓝色按钮 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 bg-apple-blue hover:bg-apple-blue-dark px-8 py-4 rounded-full text-white font-semibold text-body transition-all duration-200 hover:scale-105"
            >
              查看案例
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 border-2 border-apple-blue text-apple-blue hover:bg-apple-blue hover:text-white px-8 py-4 rounded-full font-semibold text-body transition-all duration-200"
            >
              联系我
            </a>
          </motion.div>

          {/* Apple 风格图片展示 - 大尺寸，居中，简洁 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative max-w-md mx-auto"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-apple-lg">
              <img
                src={profilePhoto}
                alt="吴倩 - AI 产品经理"
                loading="eager"
                className="w-full aspect-[3/4] object-cover"
              />
            </div>

            {/* Apple 风格标签 - 简洁，无装饰 */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-apple text-apple-gray-800 font-semibold whitespace-nowrap">
              吴倩 · Olivia Wu
            </div>
          </motion.div>

          {/* Apple 风格数据展示 - 简洁，清晰 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-24 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { value: '1+', label: '年经验' },
              { value: '6', label: '个项目' },
              { value: '200-500W', label: '项目级别' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-section text-apple-gray-800 font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-body text-apple-gray-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Apple 风格滚动提示 - 微妙简洁 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-apple-gray-300 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-apple-gray-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
