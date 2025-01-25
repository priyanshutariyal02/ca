import React from "react";
import { FlipWords } from "./ui/flip-words";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const testimonials = [
  {
    quote:
      "Accurate and organized financial records, managed remotely for seamless business operations",
    title: "Virtual Bookkeeping",
  },
  {
    quote:
      "Ensuring flawless alignment between your bank statements and financial records for reporting",
    title: "Bank Reconciliation",
  },
  {
    quote:
      "Ensuring flawless alignment between your bank statements and financial records for reporting",
    title: "Payroll & Salary",
  },
  {
    quote:
      "Strategic financial leadership tailored to your business, driving informed decisions",
    title: "Virtual CFO",
  },
  {
    quote:
      "Transforming raw data into actionable insights to guide smarter business strategies",
    title: "Data Analytics",
  },
  {
    quote:
      "Comprehensive tax planning and preparation to ensure compliance while maximizing savings",
    title: "Tax Preparations",
  },
];
const Hero = () => {
  const words = ["Excellence", "Partnerships", "Trust", "Precision", "Value"];
  return (
    <div className="min-h-[80dvh] w-full relative mt-20 flex justify-between items-center px-4 flex-col ">
      <div className="text-7xl absolute font-bold left-20 top-20 text-neutral-300 leading-[5.5rem] capitalize">
        Beyond boundaries <br />
        building{" "}<FlipWords words={words} className="font-bold text-primary pl-3" />
        <p className="text-xl font-normal mt-2 text-white"></p>
      </div>
      <div className="relative min-w-screen top-[25rem] z-20 flex items-center justify-center gap-5">
        <button
          type="button"
          className="bg-primary rounded-full px-4 py-2 text-white text-lg font-semibold hover:bg-yellow-600 duration-200"
        >
          CPA Service
        </button>
        <button
          type="button"
          className="border border-primary rounded-full px-4 py-2 text-white text-lg font-semibold hover:bg-neutral-800 hover:text-primary duration-200"
        >
          F&A Service
        </button>
      </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

export default Hero;
