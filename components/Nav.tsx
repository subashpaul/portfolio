"use client";
import { useEffect, useState } from "react";

const items = ["experience", "projects", "education", "skills"];

export default function Nav() {
  const [active, setActive] = useState("experience");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-30% 0px -60% 0px" }
    );
    items.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);
  return (
    <nav className="nav" aria-label="Sections">
      {items.map((id) => (
        <a key={id} href={`#${id}`} data-active={active === id} aria-current={active === id ? "true" : undefined}>
          <span className="nav-bar" aria-hidden="true" />
          {id}
        </a>
      ))}
    </nav>
  );
}
