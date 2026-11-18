import { getAcknowledgments } from "@/application/useCases/getAcknowledgments";
import { getNavLinks } from "@/application/useCases/getNavLinks";
import { getProjectInfo } from "@/application/useCases/getProjectInfo";
import { getTeamMembers } from "@/application/useCases/getTeamMembers";
import { StaticContentRepository } from "@/infrastructure/data/StaticContentRepository";
import { useMemo } from "react";
import { AcknowledgmentsSection } from "../components/organisms/AcknowledgmentsSection";
import { Footer } from "../components/organisms/Footer";
import { HeroSection } from "../components/organisms/HeroSection";
import { Navbar } from "../components/organisms/Navbar";
import { ProjectSection } from "../components/organisms/ProjectSection";
import { TeamSection } from "../components/organisms/TeamSection";
import { MainLayout } from "../layouts/MainLayout";

// Raíz de composición: único punto donde la presentación conoce la infraestructura.
const repository = new StaticContentRepository();

export function LandingPage() {
  const project = useMemo(() => getProjectInfo(repository), []);
  const navLinks = useMemo(() => getNavLinks(repository), []);
  const team = useMemo(() => getTeamMembers(repository), []);
  const acknowledgments = useMemo(() => getAcknowledgments(repository), []);

  return (
    <MainLayout
      navbar={
        <Navbar
          brand={project.name}
          links={navLinks}
          ctaLabel="Inicia un proyecto"
        />
      }
      footer={<Footer brand={project.name} links={navLinks} />}
    >
      <HeroSection project={project} />
      <ProjectSection project={project} />
      <TeamSection members={team} />
      <AcknowledgmentsSection items={acknowledgments} />
    </MainLayout>
  );
}
