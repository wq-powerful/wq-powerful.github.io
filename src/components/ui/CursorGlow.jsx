import { useMousePosition } from '../../hooks/useMousePosition'

export function CursorGlow() {
  const { x, y } = useMousePosition()

  return (
    <div
      className="cursor-glow"
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    />
  )
}
