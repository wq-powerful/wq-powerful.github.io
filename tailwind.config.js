/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // Apple 风格字体系统 - 使用系统字体
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
        display: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      // Apple 风格色彩系统 - 中性色调 + 蓝色强调
      colors: {
        apple: {
          // 主色调
          white: '#FFFFFF',
          'gray-50': '#F5F5F7',
          'gray-100': '#E8E8ED',
          'gray-200': '#D2D2D7',
          'gray-300': '#B0B0B5',
          'gray-400': '#86868B',
          'gray-500': '#6E6E73',
          'gray-600': '#515154',
          'gray-700': '#424245',
          'gray-800': '#1D1D1F',
          black: '#000000',
          // 强调色 - Apple 蓝
          blue: '#0071E3',
          'blue-dark': '#0077ED',
          'blue-light': '#2997FF',
        },
      },
      // Apple 风格字体大小 - 大而清晰
      fontSize: {
        // Hero 超大标题
        'hero': ['80px', { lineHeight: '1.05', letterSpacing: '-0.015em', fontWeight: '700' }],
        'hero-sm': ['56px', { lineHeight: '1.07', letterSpacing: '-0.01em', fontWeight: '700' }],
        // Section 标题
        'section': ['48px', { lineHeight: '1.08', letterSpacing: '-0.003em', fontWeight: '600' }],
        'section-sm': ['40px', { lineHeight: '1.1', letterSpacing: '-0.002em', fontWeight: '600' }],
        // Subsection 标题
        'subsection': ['32px', { lineHeight: '1.125', letterSpacing: '0em', fontWeight: '600' }],
        // 正文
        'body-lg': ['21px', { lineHeight: '1.381', letterSpacing: '0.011em', fontWeight: '400' }],
        'body': ['17px', { lineHeight: '1.47', letterSpacing: '-0.022em', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.43', letterSpacing: '-0.016em', fontWeight: '400' }],
      },
      // Apple 风格间距系统 - 慷慨的留白
      spacing: {
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
        '26': '6.5rem',   // 104px
        '30': '7.5rem',   // 120px
        '34': '8.5rem',   // 136px
        '38': '9.5rem',   // 152px
        '42': '10.5rem',  // 168px
        '46': '11.5rem',  // 184px
        '50': '12.5rem',  // 200px
      },
      // Apple 风格动画 - 微妙流畅
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
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
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      // Apple 风格阴影 - 微妙精致
      boxShadow: {
        'apple-sm': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'apple': '0 4px 16px rgba(0, 0, 0, 0.12)',
        'apple-lg': '0 8px 32px rgba(0, 0, 0, 0.16)',
      },
    },
  },
  plugins: [],
}
