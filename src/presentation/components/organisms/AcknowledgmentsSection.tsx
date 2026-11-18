import type { Acknowledgment } from "@/domain/models";
import { SectionTitle } from "../atoms/SectionTitle";
import { AcknowledgmentLogo } from "../molecules/AcknowledgmentLogo";

interface AcknowledgmentsSectionProps {
  items: Acknowledgment[];
}

export function AcknowledgmentsSection({ items }: AcknowledgmentsSectionProps) {
  return (
    <section id="agradecimientos" className="bg-surface-alt/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          badge="Agradecimientos"
          title="COLABORACIÓN Y "
          highlight="FINANCIAMIENTO"
          description="Este proyecto se desarrolla gracias al respaldo institucional, tecnológico y de la industria local"
          align="center"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <AcknowledgmentLogo key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
