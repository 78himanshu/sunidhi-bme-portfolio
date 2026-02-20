import { profile } from "@/data/profile";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="flex flex-col gap-4 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <a className="font-medium text-slate-900" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a className="text-slate-600 hover:text-slate-900" href={profile.linkedinUrl} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
        <p className="text-xs uppercase tracking-widest text-slate-500">
          (c) {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
