type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export default function Card({ children, className = "", hover = true }: CardProps) {
  const base =
    "rounded-2xl border border-slate-200 bg-white shadow-sm transition-transform duration-200 ease-out";
  const hoverClass = hover ? "hover:-translate-y-1 hover:shadow-lg" : "";
  return <div className={`${base} ${hoverClass} ${className}`}>{children}</div>;
}
