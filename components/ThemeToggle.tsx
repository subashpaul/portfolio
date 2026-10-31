"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  useEffect(() => {
    setTheme(
      document.documentElement.dataset.theme === "dark" ? "dark" : "light",
    );
  }, []);
  const flip = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
    window.dispatchEvent(new Event("themechange"));
  };
  const Icon = theme === "dark" ? Sun : Moon;
  return (
    <button
      className="theme"
      type="button"
      onClick={flip}
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }>
      <Icon size={18} strokeWidth={1.7} aria-hidden="true" focusable={false} />
    </button>
  );
}
