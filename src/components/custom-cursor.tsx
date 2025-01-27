"use client";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed w-5 h-5 hidden lg:block  bg-amber-400 opacity-70 rounded-full pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
    />
  );
}
