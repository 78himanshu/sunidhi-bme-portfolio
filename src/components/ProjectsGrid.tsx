"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/profile";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

const preferredFilters = [
  "Device Design",
  "Testing Automation",
  "Medical Imaging",
  "Drug Delivery",
  "Verification",
  "Mechatronics",
  "Human Factors",
  "CAD",
  "DFM"
];

type ProjectsGridProps = {
  projects: Project[];
};

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = useMemo(() => {
    const tagSet = new Set<string>();
    projects.forEach((project) => project.tags.forEach((tag) => tagSet.add(tag)));
    const ordered = preferredFilters.filter((filter) => tagSet.has(filter));
    const remaining = Array.from(tagSet).filter((tag) => !ordered.includes(tag)).sort();
    return ["All", ...ordered, ...remaining];
  }, [projects]);

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.tags.includes(activeFilter));
  }, [activeFilter, projects]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
              activeFilter === filter
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-slate-200 bg-white text-slate-600 hover:border-slate-900 hover:text-slate-900"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {visibleProjects.map((project) => (
          <Card key={project.slug} className="p-6">
            <Link href={`/projects/${project.slug}`} className="flex flex-col gap-5">
              <div className="overflow-hidden rounded-xl border border-slate-200">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  width={1200}
                  height={800}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-48 w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{project.description}</p>
              </div>
              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag}>
                    <Badge>{tag}</Badge>
                  </li>
                ))}
              </ul>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
