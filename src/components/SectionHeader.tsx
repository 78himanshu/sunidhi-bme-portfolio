type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-8">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-3 max-w-2xl text-base text-slate-600">{description}</p> : null}
    </div>
  );
}
