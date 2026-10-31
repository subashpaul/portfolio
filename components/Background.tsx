"use client";
import { useEffect, useRef } from "react";

export default function Background() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current!, cx = cv.getContext("2d")!, root = document.documentElement;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W = 0, H = 0, t = 0, raf = 0, col = "47,66,255", dark = false;
    const pts = Array.from({ length: 80 }, () => ({ x: Math.random(), y: Math.random(), z: Math.random() * 0.8 + 0.2, p: Math.random() * 6.28 }));
    const size = () => { const d = Math.min(devicePixelRatio || 1, 2); W = innerWidth; H = innerHeight; cv.width = W * d; cv.height = H * d; cx.setTransform(d, 0, 0, d, 0, 0); };
    const colors = () => { col = getComputedStyle(root).getPropertyValue("--fx").trim(); dark = root.dataset.theme === "dark"; };
    const draw = () => {
      cx.clearRect(0, 0, W, H);
      const hz = H * 0.6, vx = W / 2, k = dark ? 1 : 0.65;
      const g = cx.createRadialGradient(vx, hz, 0, vx, hz, W * 0.65);
      g.addColorStop(0, `rgba(${col},${0.2 * k})`); g.addColorStop(1, `rgba(${col},0)`);
      cx.fillStyle = g; cx.fillRect(0, 0, W, H);
      cx.lineWidth = 1;
      for (let i = -30; i <= 30; i++) { cx.strokeStyle = `rgba(${col},${0.14 * k})`; cx.beginPath(); cx.moveTo(vx + i * 10, hz); cx.lineTo(vx + i * W * 0.1, H); cx.stroke(); }
      for (let j = 0; j < 18; j++) { const d = ((j + t) % 18) / 18, y = hz + (H - hz) * d * d; cx.strokeStyle = `rgba(${col},${(0.04 + 0.24 * d) * k})`; cx.beginPath(); cx.moveTo(0, y); cx.lineTo(W, y); cx.stroke(); }
      for (const q of pts) { const a = (0.25 + 0.55 * Math.sin(t * 2 + q.p) ** 2) * q.z * k; cx.fillStyle = `rgba(${col},${a})`; cx.beginPath(); cx.arc(q.x * W, q.y * hz, q.z * 1.3, 0, 6.283); cx.fill(); }
    };
    const loop = () => { if (!document.hidden) { t += 0.0045; for (const q of pts) { q.y -= 0.00006 * q.z; if (q.y < 0) q.y = 1; } draw(); } raf = requestAnimationFrame(loop); };
    const onTheme = () => { colors(); if (reduce) draw(); };
    const onResize = () => { size(); if (reduce) draw(); };
    size(); colors();
    reduce ? draw() : loop();
    addEventListener("resize", onResize); addEventListener("themechange", onTheme);
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", onResize); removeEventListener("themechange", onTheme); };
  }, []);
  return <canvas ref={ref} id="fx" aria-hidden="true" />;
}
