interface AvatarProps {
  name: string
  size?: 'md' | 'lg'
}

const getInitials = (name: string) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('')

export function Avatar({ name, size = 'lg' }: AvatarProps) {
  const dimensions = size === 'lg' ? 'h-20 w-20 text-2xl' : 'h-12 w-12 text-base'
  return (
    <div
      role="img"
      aria-label={`Avatar de ${name}`}
      className={`flex shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary to-primary font-extrabold text-surface shadow-glow ${dimensions}`}
    >
      {getInitials(name)}
    </div>
  )
}
