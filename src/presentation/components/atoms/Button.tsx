import type { ReactNode } from 'react'
import { Icon } from './Icon'

type Variant = 'primary' | 'outline'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: Variant
  withArrow?: boolean
  className?: string
  type?: 'button' | 'submit'
  onClick?: () => void
}

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0'

const variants: Record<Variant, string> = {
  primary: 'bg-primary text-surface shadow-glow hover:bg-secondary',
  outline:
    'border border-foreground/25 text-foreground hover:border-secondary hover:text-secondary',
}

export function Button({
  children,
  href,
  variant = 'primary',
  withArrow = false,
  className = '',
  type = 'button',
  onClick,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`
  const content = (
    <>
      {children}
      {withArrow && (
        <Icon
          name="arrow-right"
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  )

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    )
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  )
}
