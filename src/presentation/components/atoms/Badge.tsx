import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  active?: boolean
  onClick?: () => void
  className?: string
}

/** Pill para categorizar secciones; si recibe onClick se comporta como filtro. */
export function Badge({ children, active = false, onClick, className = '' }: BadgeProps) {
  const classes = `inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
    active
      ? 'border-secondary bg-secondary text-surface'
      : 'border-secondary/40 bg-secondary/10 text-secondary'
  } ${onClick && !active ? 'hover:bg-secondary/25' : ''} ${className}`

  if (onClick) {
    return (
      <button type="button" onClick={onClick} aria-pressed={active} className={classes}>
        {children}
      </button>
    )
  }
  return <span className={classes}>{children}</span>
}
