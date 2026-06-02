"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/profile";
import Container from "@/components/ui/Container";
import ResumeModal from "@/components/ResumeModal";

const navItems = [
  { href: "/", label: "Overview" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-900"
        >
          {profile.name}
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition hover:text-slate-900 ${
                  isActive ? "text-slate-900" : "text-slate-600"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ResumeModal
            className="rounded-full border border-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-900 transition hover:bg-slate-900 hover:text-white"
          />
        </div>
      </Container>

      <div className="border-t border-slate-200 md:hidden">
        <Container className="flex flex-wrap justify-center gap-4 py-3 text-xs font-semibold uppercase tracking-wider">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition hover:text-slate-900 ${
                  isActive ? "text-slate-900" : "text-slate-600"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </Container>
      </div>
    </header>
  );
}