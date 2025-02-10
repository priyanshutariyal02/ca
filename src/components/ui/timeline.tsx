"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-neutral-50 md:px-10 relative px-5 lg:px-28 font-prosan"
      ref={containerRef}
    >
      <div className="w-full mx-auto py-20 flex justify-between items-start">
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <h1 className="text-h6 font-bold text-primary flex gap-2 items-center justify-start">
            <p className="w-3 h-3 bg-primary" />{" "}
            <span className="text-neutral-800">Our Expertise</span>
          </h1>
          <h2 className="text-h2 leading-none font-medium text-neutral-800 max-w-3xl text-center">
            Tailored Financial Solutions for Every Need
          </h2>
          <p className="text-neutral-600 text-link mt-3 max-w-4xl text-center">
            At PrimeVista Global, we offer a comprehensive range of services
            designed to simplify your financial management and fuel your
            business growth. From bookkeeping and payroll to data analytics and
            tax preparation, our expert team delivers accurate, timely, and
            scalable solutions to meet the unique needs of your business. With a
            focus on efficiency, precision, and personalized attention, we help
            you navigate complex financial landscapes with confidence, so you
            can focus on what matters most-your success.
          </p>
        </div>
      </div>

      <div ref={ref} className="relative w-full pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-30 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-primary  flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200  border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-600">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-700">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-yellow-500 via-amber-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
