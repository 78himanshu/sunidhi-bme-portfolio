import SectionHeader from "@/components/SectionHeader";
import { profile } from "@/data/profile";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export default function ExperiencePage() {
  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow="Experience"
          title="Medical Device Design, V&V, and Quality Execution"
          description="Roles spanning electrophysiology R&D quality, design verification testing, and cleanroom manufacturing leadership."
        />

        <div className="space-y-6">
          {profile.experiences.map((experience) => (
            <Card key={`${experience.company}-${experience.role}`} className="p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {experience.role} - {experience.company}
                  </h3>
                  <p className="text-sm text-slate-600">{experience.group}</p>
                </div>
                <div className="text-right text-sm text-slate-600">
                  <p>{experience.location}</p>
                  <p>{experience.dates}</p>
                </div>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                {experience.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              {experience.tags ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {experience.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              ) : null}
            </Card>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h4 className="text-lg font-semibold text-slate-900">Regulatory & Quality</h4>
          <p className="mt-2 text-sm text-slate-600">
            Comfortable operating within design control frameworks, risk management, and ISO 13485 quality systems. Experienced in
            verification evidence planning, test method validation, and traceability from user needs to design outputs and test results.
          </p>
        </div>
      </Container>
    </Section>
  );
}
