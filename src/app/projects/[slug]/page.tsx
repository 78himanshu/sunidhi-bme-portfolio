import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import { profile } from "@/data/profile";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

type ProjectPageProps = {
  params: Promise<{ slug: string }> | { slug: string };
};

export function generateStaticParams() {
  return profile.projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await Promise.resolve(params);
  const rawSlug = resolvedParams.slug;

  const slug = decodeURIComponent(rawSlug).trim().toLowerCase();
  const project = profile.projects.find(
    (item) => item.slug.trim().toLowerCase() === slug
  );

  if (!project) {
    return (
      <Section>
        <Container>
          <Card className="mx-auto max-w-2xl p-8 text-center" hover={false}>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Projects
            </p>
            <h1 className="mt-3 text-2xl font-semibold text-slate-900">Project not found</h1>
            <p className="mt-3 text-sm text-slate-600">
              We could not find that project. Check the projects list to view available work.
            </p>
            <Link
              href="/projects"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-900 hover:bg-slate-900 hover:text-white"
            >
              Back to all projects
            </Link>
          </Card>
        </Container>
      </Section>
    );
  }

  return (
    <Section>
      <Container>
        <SectionHeader eyebrow="Project" title={project.title} description={project.description} />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            {project.images.map((src) => (
              <div
                key={src}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <Image
                  src={src}
                  alt={project.title}
                  width={1400}
                  height={900}
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="h-72 w-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <Card className="p-6" hover={false}>
              <h3 className="text-lg font-semibold text-slate-900">Key Features</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </Card>

            <Card className="p-6" hover={false}>
              <h3 className="text-lg font-semibold text-slate-900">Focus Areas</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </Card>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-slate-900"
            >
              Back to all projects
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}