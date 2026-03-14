/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // 个人作品集风格字体系统 - 使用系统字体
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      // 个人作品集色彩系统 - 温暖而专业
      colors: {
        portfolio: {
          // 主背景色 - 温暖的米白色
          bg: '#FAFAF9',
          'bg-secondary': '#F5F5F4',
          // 文字色 - 柔和的深灰
          text: '#292524',
          'text-secondary': '#57534E',
          'text-muted': '#78716C',
          // 强调色 - 温暖的蓝绿色（更有亲和力）
          accent: '#0891B2',
          'accent-dark': '#0E7490',
          'accent-light': '#06B6D4',
          // 卡片和边框
          card: '#FFFFFF',
          border: '#E7E5E4',
          'border-light': '#F5F5F4',
        },
      },
      // 个人作品集字体大小 - 适中而清晰
      fontSize: {
        // Hero 标题 - 不要太大，更亲切
        'hero': ['56px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'hero-sm': ['40px', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '700' }],
        // Section 标题
        'section': ['36px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'section-sm': ['28px', { lineHeight: '1.25', letterSpacing: '0em', fontWeight: '600' }],
        // 正文
        'body-lg': ['19px', { lineHeight: '1.6', letterSpacing: '0em', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '1.65', letterSpacing: '0em', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.5', letterSpacing: '0em', fontWeight: '400' }],
      },
      // 个人作品集间距系统 - 适度的留白
      spacing: {
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
        '26': '6.5rem',   // 104px
        '30': '7.5rem',   // 120px
      },
      // 优雅的动画
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      // 柔和的阴影
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'soft-md': '0 4px 16px rgba(0, 0, 0, 0.06)',
        'soft-lg': '0 8px 24px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
