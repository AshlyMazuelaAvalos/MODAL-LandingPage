import type { ProjectInfo } from "@/domain/models";
import { SectionTitle } from "../atoms/SectionTitle";
import { FeatureCard } from "../molecules/FeatureCard";

interface ProjectSectionProps {
  project: ProjectInfo;
}

export function ProjectSection({ project }: ProjectSectionProps) {
  const [first, last, ...rest] = project.features;
  return (
    <section id="proyecto" className="py-24 pt-30">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          badge={project.sectionBadge}
          title={project.sectionTitle}
          highlight={project.sectionHighlight}
          description={project.sectionDescription}
        />

        {/* Rejilla asimétrica: tarjeta destacada a la izquierda, dos apiladas a la derecha */}
        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {first && (
            <FeatureCard
              feature={first}
              index={0}
              className="lg:col-span-3 lg:row-span-1"
            />
          )}
          {rest.map((feature, i) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              index={i + 1}
              className="lg:col-span-2"
            />
          ))}
          {last && (
            <FeatureCard
              feature={last}
              index={rest.length + 1}
              className="lg:col-span-3 lg:row-span-1"
            />
          )}
        </div>
      </div>
    </section>
  );
}
