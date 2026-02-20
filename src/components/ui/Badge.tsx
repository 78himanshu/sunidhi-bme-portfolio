type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-600 ${className}`}
    >
      {children}
    </span>
  );
}
