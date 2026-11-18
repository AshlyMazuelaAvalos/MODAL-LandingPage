import type { ProjectFeature } from '@/domain/models'
import { Icon } from '../atoms/Icon'

interface FeatureCardProps {
  feature: ProjectFeature
  index: number
  className?: string
}

export function FeatureCard({ feature, index, className = '' }: FeatureCardProps) {
  return (
    <article
      className={`group flex flex-col justify-between gap-10 rounded-2xl border border-foreground/10 bg-surface-alt p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary/60 ${className}`}
    >
      <div className="flex items-start justify-between">
        <span className="text-sm font-semibold text-foreground/50">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span
          role="img"
          aria-label={feature.title}
          tabIndex={0}
          className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-surface focus-visible:shadow-[0_0_12px_rgb(var(--color-secondary)/0.85),0_0_28px_rgb(var(--color-primary)/0.65)]"
        >
          <Icon name={feature.icon} size={22} />
        </span>
      </div>
      <div className="space-y-3">
        <h3 className="text-2xl font-bold text-foreground">{feature.title}</h3>
        <p className="leading-relaxed text-foreground/70">{feature.description}</p>
      </div>
    </article>
  )
}
