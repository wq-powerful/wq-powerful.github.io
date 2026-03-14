import { useEffect, useState } from 'react'
import { useMousePosition } from '../../hooks/useMousePosition'

export function CursorGlow() {
  const { x, y } = useMousePosition()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // 只在桌面设备显示，且尺寸减小到 150px
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches
    setIsVisible(isDesktop)
  }, [])

  if (!isVisible) return null

  return (
    <div
      className="cursor-glow"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        width: '150px',
        height: '150px',
      }}
    />
  )
}
