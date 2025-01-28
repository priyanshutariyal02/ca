import React from "react";
import { NumberTicker } from "./ui/number-ticker";

import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";

const stats = [
  {
    icon: (
      <LanguageOutlinedIcon className="text-[#FCBC45] text-5xl lg:text-[5.5rem]" />
    ),
    value: 100,
    label: "Clients Globally",
  },
  {
    icon: (
      <VerifiedOutlinedIcon className="text-[#FCBC45] text-5xl lg:text-[5.5rem]" />
    ),
    value: 15,
    label: "Years of Experience",
  },
  {
    icon: (
      <SchoolOutlinedIcon className="text-[#FCBC45] text-5xl lg:text-[5.5rem]" />
    ),
    value: 500,
    label: "Talented Professionals",
  },
  {
    icon: (
      <BusinessCenterOutlinedIcon className="text-[#FCBC45] text-5xl lg:text-[5.5rem]" />
    ),
    value: 85,
    label: "Referral Business",
  },
];

const ByondNumbers = () => {
  return (
    <div className="w-full h-[20rem] absolute left-0">
      <div className="w-full bg-gradient-to-b from-[#171717] to-[#0d0d0d] py-12 flex flex-col items-center text-white gap-12">
        {/* Heading Section */}
        <div className="text-center">
          <h1 className="text-h2 font-bold text-primary">
            Beyond Numbers
          </h1>
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
                className="text-3xl md:text-5xl font-bold tracking-tight text-white"
              />
              <span className="text-base lg:text-lg text-[#FCBC45]">
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
