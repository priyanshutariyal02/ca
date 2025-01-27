"use client";

import { cn } from "../../../lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,yellow_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex lg:min-w-full shrink-0 gap-4 py-4 w-max mb-5 md:mb-7 xl:mb-5 flex-nowrap overflow-hidden",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[250px] sm:w-[300px] md:w-[450px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-yellow-800 p-2 lg:px-8 lg:py-3 backdrop-blur-sm"
            style={{
              background:
                "linear-gradient(200deg, var(--yellow-700), transparent",
            }}
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 h-[5rem]  lg:h-[calc(70%_+_4px)] lg:w-[calc(100%_+_4px)]"
              ></div>
              <div className="relative z-20 mt-3 flex flex-row items-center">
                <span className="text-xl lg:text-2xl font-bold leading-[1.6] text-primary">
                  {item.title}
                </span>
              </div>
              <span className="relative z-20 text-sm lg:text-lg leading-[1.6] text-neutral-50 font-normal">
                {item.quote}
              </span>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
