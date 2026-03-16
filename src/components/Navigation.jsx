import { useState, useEffect } from 'react'

const navigation = [
  { id: 'top', label: '首页' },
  { id: 'about', label: '关于' },
  { id: 'why-me', label: '优势' },
  { id: 'cases', label: '项目' },
  { id: 'method', label: '方法' },
  { id: 'expression', label: '赋能' },
  { id: 'ai-homework', label: 'AI' },
  { id: 'contact', label: '联系' },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState('top')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = navigation.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 120
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navigation[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass border-b border-slate-200/50' : ''
      }`}
      role="banner"
    >
      <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl 3xl:max-w-8xl mx-auto px-6 xl:px-8 h-11 xl:h-14 2xl:h-16 flex items-center justify-between">
        <a href="#top" className="text-[13px] xl:text-base 2xl:text-lg font-semibold text-slate-900 tracking-tight hover:opacity-70 transition-opacity">
          吴倩
        </a>

        <nav className="hidden md:flex items-center gap-0.5 xl:gap-1" role="navigation" aria-label="主导航">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`px-2.5 xl:px-3.5 py-1 xl:py-1.5 rounded-full text-[12px] xl:text-sm 2xl:text-base transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-slate-900 font-medium'
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="px-3.5 xl:px-5 py-1 xl:py-1.5 2xl:py-2 bg-slate-900 text-white text-[11px] xl:text-sm 2xl:text-base font-medium rounded-full hover:bg-slate-700 transition-colors">
          联系我
        </a>
      </div>
    </header>
  )
}
