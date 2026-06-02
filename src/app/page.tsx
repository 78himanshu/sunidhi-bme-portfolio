import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";
import SectionHeader from "@/components/SectionHeader";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import ResumeModal from "@/components/ResumeModal";

export default function HomePage() {
  return (
    <div>
      <Section className="bg-grid">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Biomedical Engineering Portfolio
              </p>
              <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">{profile.name}</h1>
              <p className="text-lg text-slate-600">{profile.title}</p>
              <p className="max-w-2xl text-base text-slate-600">{profile.summary}</p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="rounded-full bg-slate-900 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-slate-800"
                >
                  View Projects
                </Link>
                <ResumeModal
                  className="rounded-full border border-slate-900 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-900 transition hover:bg-slate-900 hover:text-white"
                />
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative h-72 w-60 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:h-80 sm:w-72">
                <Image
                  src="/profile-placeholder.png"
                  alt={`${profile.name} headshot placeholder`}
                  fill
                  sizes="(max-width: 768px) 70vw, 30vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Highlights"
            title="Measured Impact Across Design, Quality, and Automation"
            description="Quantified outcomes from design verification, test automation, and quality systems execution."
          />
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {profile.impactHighlights.map((item) => (
              <Card key={item.label} className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{item.label}</p>
                <p className="mt-2 text-3xl font-semibold text-slate-900">{item.value}</p>
                <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <SectionHeader
            eyebrow="Featured"
            title="Selected Medical Device Projects"
            description="A snapshot of device concepts, fixtures, and patient-specific CAD work."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {profile.projects.slice(0, 3).map((project) => (
              <Card key={project.slug} className="overflow-hidden">
                <Link href={`/projects/${project.slug}`} className="block">
                  <div className="overflow-hidden border-b border-slate-200">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      width={1200}
                      height={800}
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="h-44 w-full object-cover"
                    />
                  </div>
                  <div className="space-y-3 p-6">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
                      <p className="mt-2 text-sm text-slate-600">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
