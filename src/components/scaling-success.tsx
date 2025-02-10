import React from "react";
import { NumberTicker } from "./ui/number-ticker";

import {
  IconBuilding,
  IconClock,
  IconMoodSmile,
  IconSchool,
} from "@tabler/icons-react";

const stats = [
  {
    icon: (
      <IconMoodSmile
        stroke={1.5}
        size={30}
        className="text-[#FCBC45] w-16 h-16 lg:w-24 lg:h-24"
      />
    ),
    value: 100,
    label: "Client's Satisfaction",
    
  },
  {
    icon: (
      <IconClock stroke={1.5} size={30} className="text-[#FCBC45] w-16 h-16 lg:w-24 lg:h-24" />
    ),
    value: 15,
    label: "Years of Experience",
  },
  {
    icon: (
      <IconSchool stroke={1.5} size={30} className="text-[#FCBC45] w-16 h-16 lg:w-24 lg:h-24" />
    ),
    value: 50,
    label: "Talented Professionals",
  },
  {
    icon: (
      <IconBuilding
        stroke={1.5}
        size={30}
        className="text-[#FCBC45] w-16 h-16 lg:w-24 lg:h-24"
      />
    ),
    value: 3,
    label: "Office Locations",
  },
];

const ByondNumbers = () => {
  return (
    <div className="w-full relative py-5 lg:py-16">
      <div className="w-full py-12 flex flex-col items-center text-white bg-[#171717] gap-12">
        {/* Heading Section */}
        <div className="text-center">
          <h1 className="text-h2 font-bold text-primary">Scaling Success</h1>
          <p className="mt-2 text-neutral-300 text-lg md:text-xl">
            Statistical Proof of Excellence
          </p>
        </div>

        {/* Statistics Section */}
        <div className="w-full max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              {stat.icon}
              <NumberTicker
                value={stat.value}
                decimalPlaces={0}
                className="text-3xl md:text-5xl font-bold tracking-tight text-white"
                {...(stat.label === "Client's Satisfaction"
                  ? { format: "percentage" }
                  : {})}
              />
              <span className="text-link lg:text-lg text-[#FCBC45]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ByondNumbers;
