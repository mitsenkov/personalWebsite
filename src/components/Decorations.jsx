import { COLORS } from '../theme'

export function Circle({ color = COLORS.red, size = 40, className = "" }) {
  return (
    <div
      className={`rounded-full absolute ${className}`}
      style={{ width: size, height: size, backgroundColor: color }}
    />
  )
}

export function Square({ color = COLORS.blue, size = 40, rotate = false, className = "" }) {
  return (
    <div
      className={`absolute ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        transform: rotate ? "rotate(45deg)" : "none",
      }}
    />
  )
}

export function Triangle({ color = COLORS.yellow, size = 40, className = "" }) {
  return (
    <div
      className={`absolute ${className}`}
      style={{
        width: 0,
        height: 0,
        borderLeft: `${size / 2}px solid transparent`,
        borderRight: `${size / 2}px solid transparent`,
        borderBottom: `${size}px solid ${color}`,
      }}
    />
  )
}
