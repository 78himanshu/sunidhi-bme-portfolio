import SectionHeader from "@/components/SectionHeader";
import { profile } from "@/data/profile";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export default function SkillsPage() {
  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow="Skills"
          title="Engineering Tooling and Quality Systems"
          description="Core competencies across CAD, verification, manufacturing controls, and data analysis."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {profile.skills.map((group) => (
            <Card key={group.title} className="p-6">
              <h3 className="text-lg font-semibold text-slate-900">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
