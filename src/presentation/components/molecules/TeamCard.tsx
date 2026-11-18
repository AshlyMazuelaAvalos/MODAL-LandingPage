import type { TeamMember } from "@/domain/models";
import { Avatar } from "../atoms/Avatar";
import { Icon } from "../atoms/Icon";

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <article className="group flex h-full flex-col gap-5 rounded-2xl border border-foreground/10 bg-surface-alt p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary/60">
      <Avatar name={member.name} />
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
