"use client";

import { useRef, useState, MouseEvent, ReactNode } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  as = "a",
  type,
  strength = 0.35,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  as?: "a" | "button";
  type?: "button" | "submit";
  strength?: number;
}) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setOffset({ x: x * strength, y: y * strength });
  };

  const handleMouseLeave = () => setOffset({ x: 0, y: 0 });

  const Component = motion[as === "a" ? "a" : "button"];

  return (
    <Component
      ref={ref as never}
      href={href}
      onClick={onClick}
      type={as === "button" ? (type ?? "button") : undefined}
      data-cursor-hover
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.3 }}
      className={className}
    >
      {children}
    </Component>
  );
}
