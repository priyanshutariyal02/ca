"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../../lib/utils";

export const FlipWords = ({
  words,
  duration = 2000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  // Capitalize function: Ensures proper casing
  const capitalize = (word: string) =>
    word.toLowerCase().replace(/^\w/, (c) => c.toUpperCase());

  const [currentIndex, setCurrentIndex] = useState(0);

  // Trigger the next word animation
  const startAnimation = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
  }, [words.length]);

  // Automatically cycle through words
  useEffect(() => {
    const interval = setInterval(() => {
      startAnimation();
    }, duration);
    return () => clearInterval(interval);
  }, [startAnimation, duration]);

  return (
    <span>
      <AnimatePresence>
        <motion.div
          key={words[currentIndex]} // Triggers animation when the word changes
          initial={{ opacity: 0, y: 20 }} // Starting state
          animate={{ opacity: 1, y: 0 }} // Active state
          exit={{ opacity: 0, y: -20 }} // Exit state
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 15,
            duration: 0.5,
          }}
          className={cn(
            "absolute inline-block text-left text-[#FCBC45]",
            className
          )}
        >
          {capitalize(words[currentIndex])}
        </motion.div>
      </AnimatePresence>
    </span>
  );
};
