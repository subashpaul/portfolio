import { ArrowUpRight } from "lucide-react";

export default function ExtLink({
  href,
  children,
  className = "lnk",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
      <ArrowUpRight
        size={14}
        strokeWidth={1.7}
        aria-hidden="true"
        focusable={false}
      />
    </a>
  );
}
