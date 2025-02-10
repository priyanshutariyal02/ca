"use client";
import { cn } from "@/lib/utils";
import { IconPercentage, IconPlus } from "@tabler/icons-react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { ComponentPropsWithoutRef, useEffect, useRef } from "react";

interface NumberTickerProps extends ComponentPropsWithoutRef<"span"> {
  value: number;
  direction?: "up" | "down";
  delay?: number;
  decimalPlaces?: number;
  format?: "percentage" | "default";
}

export function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className,
  decimalPlaces = 0,
  format = "default",
  ...props
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : value);
      }, delay * 1000);
    }
  }, [motionValue, isInView, delay, value, direction]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat("en-US", {
            minimumFractionDigits: decimalPlaces,
            maximumFractionDigits: decimalPlaces,
          }).format(Number(latest.toFixed(decimalPlaces)));
        }
      }),
    [springValue, decimalPlaces, format]
  );

  return (
    <span
      className={cn(
        "flex items-center gap-2 tabular-nums tracking-wider text-black dark:text-white justify-between",
        className
      )}
      {...props}
    >
      <span ref={ref}></span>
      {format !== "percentage" ? (
        <span>
          <IconPlus size={20} className="w-8 h-8" />
        </span>
      ) : (
        <span>
          <IconPercentage size={20} className="w-8 h-8" />
        </span>
      )}
    </span>
  );
}
