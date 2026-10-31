"use client";
import { useEffect, useState } from "react";
import {
  BriefcaseBusiness,
  FolderKanban,
  GraduationCap,
  Wrench,
} from "lucide-react";

const items = [
  { id: "experience", label: "Experience", Icon: BriefcaseBusiness },
  { id: "projects", label: "Projects", Icon: FolderKanban },
  { id: "education", label: "Education", Icon: GraduationCap },
  { id: "skills", label: "Skills", Icon: Wrench },
];

export default function Nav() {
  const [active, setActive] = useState("experience");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-30% 0px -60% 0px" },
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  return (
    <nav className="nav" aria-label="Sections">
      {items.map(({ id, label, Icon }) => (
        <a
          key={id}
          href={`#${id}`}
          data-active={active === id}
          aria-current={active === id ? "location" : undefined}>
          <span className="nav-indicator" aria-hidden="true" />
          <Icon
            className="nav-icon"
            size={15}
            strokeWidth={1.7}
            aria-hidden="true"
            focusable={false}
          />
          <span>{label}</span>
        </a>
      ))}
    </nav>
  );
}
