import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function NotFound() {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-semibold text-slate-900">Page not found</h1>
        <p className="mt-3 text-sm text-slate-600">The page you are looking for does not exist.</p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full border border-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-900 hover:bg-slate-900 hover:text-white"
        >
          Back to home
        </Link>
      </Container>
    </Section>
  );
}
