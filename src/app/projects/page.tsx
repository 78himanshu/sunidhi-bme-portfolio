import SectionHeader from "@/components/SectionHeader";
import ProjectsGrid from "@/components/ProjectsGrid";
import { profile } from "@/data/profile";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function ProjectsPage() {
  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow="Projects"
          title="Medical Device Design and Test Automation"
          description="Technical programs spanning device concepts, fixtures, and patient-specific CAD. Filter by focus area to scan relevant work."
        />
        <ProjectsGrid projects={profile.projects} />
      </Container>
    </Section>
  );
}
