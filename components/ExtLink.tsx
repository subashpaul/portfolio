import { ArrowUpRight, type LucideIcon } from "lucide-react";

export default function ExtLink({
  href,
  children,
  className = "lnk",
  icon: Icon,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  icon?: LucideIcon;
}) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {Icon && <Icon size={14} strokeWidth={1.7} aria-hidden="true" focusable={false} />}
      {children}
      <ArrowUpRight className="arrow" size={14} strokeWidth={1.7} aria-hidden="true" focusable={false} />
    </a>
  );
}
