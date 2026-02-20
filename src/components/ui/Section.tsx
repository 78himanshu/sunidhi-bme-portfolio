type SectionProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "white" | "muted";
};

export default function Section({ children, className = "", variant = "white" }: SectionProps) {
  const base = "py-14 sm:py-16";
  const bg = variant === "muted" ? "bg-slate-50" : "bg-white";
  return <section className={`${base} ${bg} ${className}`}>{children}</section>;
}
