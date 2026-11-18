import type { ProjectInfo } from "@/domain/models";
import { project } from "@/infrastructure/data/content";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";

interface HeroSectionProps {
  project: ProjectInfo;
}

export function HeroSection({ project }: HeroSectionProps) {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-24 pb-24 sm:pt-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-[32rem] w-[32rem] rounded-full bg-primary/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex animate-fade-up flex-col items-start gap-8">
          <Badge>{project.badge}</Badge>
          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {project.headline}{" "}
            <span className="text-primary">{project.headlineHighlight}</span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-foreground/70">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="#proyecto" withArrow>
              {project.primaryCtaLabel}
            </Button>
            <Button href="#equipo" variant="outline">
              {project.secondaryCtaLabel}
            </Button>
          </div>
        </div>

        <HeroVisual />
      </div>
      <hr className="my-24 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
    </section>
  );
}

/** Composición decorativa: órbita + tarjetas flotantes, inspirada en el hero de referencia. */
function HeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-square w-full max-w-md"
    >
      <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute inset-4 animate-spin-slow rounded-full border border-foreground/10" />
      <div className="absolute inset-12 animate-spin-slow rounded-full border border-dashed border-secondary/30 [animation-direction:reverse]" />
      <div className="absolute inset-24 rounded-full bg-gradient-to-br from-secondary to-primary shadow-glow" />

      <div className="absolute left-0 top-20 flex animate-float items-center gap-3 rounded-2xl border border-foreground/10 bg-surface-alt/90 px-4 py-3 shadow-soft backdrop-blur-md">
        <Icon name="grid-2x2-check" className="text-primary" />
        <span className="text-sm font-semibold">
          {project.features[0].title}
        </span>
      </div>
      <div className="absolute bottom-16 right-0 flex animate-float items-center gap-3 rounded-2xl border border-foreground/10 bg-surface-alt/90 px-4 py-3 shadow-soft backdrop-blur-md [animation-delay:1.5s]">
        <Icon name="file-box" className="text-secondary" />
        <span className="text-sm font-semibold">
          {project.features[1].title}
        </span>
      </div>
      <div className="absolute right-6 top-4 flex animate-float items-center gap-3 rounded-2xl border border-foreground/10 bg-surface-alt/90 px-4 py-3 shadow-soft backdrop-blur-md [animation-delay:3s]">
        <Icon name="layout-panel-top" className="text-primary" />
        <span className="text-sm font-semibold">
          {project.features[2].title}
        </span>
      </div>
      <div className="absolute right-6 top-4 flex animate-float items-center gap-3 rounded-2xl border border-foreground/10 bg-surface-alt/90 px-4 py-3 shadow-soft backdrop-blur-md [animation-delay:3s]">
        <Icon name="layout-panel-top" className="text-primary" />
        <span className="text-sm font-semibold">
          {project.features[3].title}
        </span>
      </div>
    </div>
  );
}
