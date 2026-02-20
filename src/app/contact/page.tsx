import SectionHeader from "@/components/SectionHeader";
import { profile } from "@/data/profile";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

export default function ContactPage() {
  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow="Contact"
          title="Let's Build Safer, Smarter Devices"
          description="Reach out for collaborations, full-time roles, or project conversations in medical device design and quality engineering."
        />
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="space-y-4 p-6" hover={false}>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-600" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-900"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-600" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-900"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-600" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-900"
                placeholder="Tell me about the project or role."
              />
            </div>
            <button
              type="button"
              className="rounded-full bg-slate-900 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white"
            >
              Send Message
            </button>
            <p className="text-xs text-slate-500">Form is placeholder. No backend email sending is configured.</p>
          </Card>
          <div className="space-y-4">
            <Card className="p-6" hover={false}>
              <h3 className="text-lg font-semibold text-slate-900">Direct Contact</h3>
              <div className="mt-4 space-y-2 text-sm text-slate-600">
                <p>
                  Email:{" "}
                  <a className="text-slate-900" href={`mailto:${profile.email}`}>
                    {profile.email}
                  </a>
                </p>
                <p>
                  LinkedIn:{" "}
                  <a className="text-slate-900" href={profile.linkedinUrl} target="_blank" rel="noreferrer">
                    {profile.linkedinUrl}
                  </a>
                </p>
                <p>Location: {profile.location}</p>
              </div>
            </Card>
            <Card className="p-6" hover={false}>
              <h3 className="text-lg font-semibold text-slate-900">Resume</h3>
              <p className="mt-2 text-sm text-slate-600">
                Download the full resume for detailed project history, verification artifacts, and toolchain coverage.
              </p>
              <a
                href="/api/resume"
                className="mt-4 inline-flex rounded-full border border-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-900 hover:bg-slate-900 hover:text-white"
              >
                Download Resume
              </a>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
}
