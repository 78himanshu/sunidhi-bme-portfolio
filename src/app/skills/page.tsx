import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import { profile } from "@/data/profile";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

export default function EducationPage() {
  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow="Education"
          title="Academic Foundation"
          description="Graduate training in biomedical engineering built on a clinical foundation and hands-on medical device development."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {profile.education.map((item) => (
            <Card key={item.school} className="p-6">
              <div className="flex items-start gap-5">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <Image
                    src={item.logo}
                    alt={`${item.school} logo`}
                    fill
                    sizes="64px"
                    className="object-contain p-2"
                  />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    {item.details}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">
                    {item.school}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-slate-700">
                    {item.degree}
                  </p>
                  {item.subtext && (
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {item.subtext}
                    </p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}