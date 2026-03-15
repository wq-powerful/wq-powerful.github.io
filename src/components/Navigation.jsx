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
      <div className="max-w-5xl mx-auto px-6 h-11 flex items-center justify-between">
        <a href="#top" className="text-[13px] font-semibold text-slate-900 tracking-tight hover:opacity-70 transition-opacity">
          吴倩
        </a>

        <nav className="hidden md:flex items-center gap-0.5" role="navigation" aria-label="主导航">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`px-2.5 py-1 rounded-full text-[12px] transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-slate-900 font-medium'
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="px-3.5 py-1 bg-slate-900 text-white text-[11px] font-medium rounded-full hover:bg-slate-700 transition-colors">
          联系我
        </a>
      </div>
    </header>
  )
}
