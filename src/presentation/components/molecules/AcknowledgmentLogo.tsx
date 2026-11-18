import type { Acknowledgment } from "@/domain/models";

interface AcknowledgmentLogoProps {
  item: Acknowledgment;
}

export function AcknowledgmentLogo({ item }: AcknowledgmentLogoProps) {
  return (
    <article className="group flex flex-col items-center gap-4 rounded-2xl border border-foreground/10 bg-surface-alt p-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary/60">
      <div className="flex h-16 w-full items-center justify-center">
        {item.image ? (
          <img
            src={item.image}
            alt={`Logo de ${item.name}`}
            className="max-h-16 max-w-full object-contain"
          />
        ) : (
          <span
            aria-hidden="true"
            className="flex h-16 w-16 items-center justify-center rounded-2xl border border-secondary/40 bg-secondary/10 text-xl font-extrabold text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-surface"
          >
            {item.name.charAt(0)}
          </span>
        )}
      </div>
      <h3 className="text-lg font-bold text-foreground">{item.name}</h3>
      <p className="text-sm leading-relaxed text-foreground/70">
        {item.description}
      </p>
    </article>
  );
}
