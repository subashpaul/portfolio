"use client";
import { useEffect } from "react";

// Adds .in to section content as it scrolls into view. CSS handles the motion.
export default function Reveal() {
  useEffect(() => {
    if (!document.documentElement.classList.contains("js")) return;
    const els = Array.from(
      document.querySelectorAll<HTMLElement>(".main .section-heading, .main .row, .main .skill, .main .certs li, .main .foot"),
    );
    els.forEach((el) => {
      const i = el.parentElement ? Array.from(el.parentElement.children).indexOf(el) : 0;
      el.style.setProperty("--i", String(Math.min(i, 5)));
    });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
