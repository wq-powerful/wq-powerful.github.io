import { useEffect } from 'react'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Cases } from './components/Cases'
import { Method } from './components/Method'
import { Contact } from './components/Contact'

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
      { threshold: 0.25, rootMargin: '0px 0px -100px 0px' },
    )

    nodes.forEach((node) => observer.observe(node))

    return () => observer.disconnect()
  }, [])
}

function App() {
  useReveal()

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-apple-white">
      {/* Apple 风格导航栏 */}
      <Navigation />

      {/* 主要内容 */}
      <main id="top" className="pt-16">
        <Hero />
        <About />
        <Cases />
        <Method />
      </main>

      {/* 联系方式 */}
      <Contact />
    </div>
  )
}

export default App
