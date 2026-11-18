import type { ResearchItem } from '@/domain/models'
import { Badge } from '../atoms/Badge'
import { Icon } from '../atoms/Icon'

interface ResearchCardProps {
  item: ResearchItem
}

export function ResearchCard({ item }: ResearchCardProps) {
  return (
    <article className="group flex h-full flex-col gap-5 rounded-2xl border border-foreground/10 bg-surface-alt p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary/60">
      <div className="flex items-center justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-surface">
          <Icon name={item.icon} size={20} />
        </span>
        <span className="text-sm font-semibold text-foreground/50">{item.year}</span>
      </div>
      <div className="flex-1 space-y-3">
        <Badge>{item.category}</Badge>
        <h3 className="text-xl font-bold leading-snug text-foreground">{item.title}</h3>
        <p className="text-sm leading-relaxed text-foreground/70">{item.summary}</p>
      </div>
      <span className="inline-flex items-center gap-1 text-sm font-semibold text-secondary">
        Leer más
        <Icon
          name="arrow-up-right"
          size={16}
          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </span>
    </article>
  )
}
