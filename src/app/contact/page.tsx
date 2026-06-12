import Image from "next/image";
import { profile } from "@/data/profile";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function ContactPage() {
  return (
    <Section className="bg-gradient-to-br from-slate-50 to-sky-50">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            Portfolio
          </p>

          <h1 className="mt-4 text-5xl font-semibold text-slate-900">
            Contact
          </h1>

          <p className="mt-4 text-lg text-slate-600">
            Open to collaborations, medical device design roles, quality
            engineering opportunities, and healthcare innovation projects.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <div className="relative h-12 w-12">
              <Image
                src="/contact-icons/email-placeholder.png"
                alt="Email"
                fill
                className="object-contain"
              />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Email
            </p>

            <p className="mt-4 text-3xl font-semibold text-slate-900 break-all">
              {profile.email}
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-block text-lg font-medium text-slate-600 transition hover:text-slate-900"
            >
              Send email →
            </a>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <div className="relative h-12 w-12">
              <Image
                src="/contact-icons/linkedin-placeholder.png"
                alt="LinkedIn"
                fill
                className="object-contain"
              />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              LinkedIn
            </p>

            <p className="mt-4 text-2xl font-semibold text-slate-900">
              /Sunidhi Pandit
            </p>

            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block text-lg font-medium text-slate-600 transition hover:text-slate-900"
            >
              Visit LinkedIn →
            </a>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-slate-900 px-8 py-4 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Email Me
          </a>

          <p className="text-slate-500">
            I usually respond within 1–2 days.
          </p>
        </div>
      </Container>
    </Section>
  );
}