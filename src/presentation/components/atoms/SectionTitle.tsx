import { Badge } from './Badge'

interface SectionTitleProps {
  badge: string
  title: string
  highlight?: string
  description?: string
  align?: 'left' | 'center'
  as?: 'h1' | 'h2'
}

export function SectionTitle({
  badge,
  title,
  highlight,
  description,
  align = 'left',
  as: Heading = 'h2',
}: SectionTitleProps) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left'
  return (
    <div className={`flex flex-col gap-5 ${alignment}`}>
      <Badge>{badge}</Badge>
      <Heading className="text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
        {title} {highlight && <span className="text-primary">{highlight}</span>}
      </Heading>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-foreground/70 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
