import type { TeamMember } from "@/domain/models";
import { Icon } from "../atoms/Icon";

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <article className="team-card group flex h-full flex-col gap-5 rounded-2xl border border-foreground/10 bg-surface-alt p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-secondary/70 hover:shadow-[0_0_24px_rgba(248,148,73,0.14)]">
      <img
        src={member.image}
        alt={`Foto de ${member.name}`}
        className="h-20 w-20 shrink-0 self-center rounded-2xl border-2 border-secondary/50 object-cover transition-all duration-300 group-hover:scale-105 group-hover:border-primary"
      />
      <div className="space-y-1">
        <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
        <p className="text-sm font-semibold text-secondary">{member.role}</p>
      </div>
      <p className="flex-1 text-sm leading-relaxed text-foreground/70">
        {member.bio}
      </p>
      <ul className="flex gap-2">
        {member.links.map((link) => (
          <li key={link.label}>
            <a
              href={link.url}
              aria-label={`${link.label} de ${member.name}`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 text-foreground/70 transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-surface"
            >
              <Icon name={link.icon} size={16} />
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
