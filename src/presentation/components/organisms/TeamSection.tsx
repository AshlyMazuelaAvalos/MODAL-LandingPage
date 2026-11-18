import type { TeamMember } from '@/domain/models'
import { SectionTitle } from '../atoms/SectionTitle'
import { TeamCard } from '../molecules/TeamCard'

interface TeamSectionProps {
  members: TeamMember[]
}

export function TeamSection({ members }: TeamSectionProps) {
  return (
    <section id="equipo" className="bg-surface-alt/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          badge="Equipo"
          title="Las personas detrás"
          highlight="del producto"
          description="Un equipo multidisciplinario que combina estrategia, diseño e ingeniería para entregar resultados medibles."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}
