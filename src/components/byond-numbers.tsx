import React from "react";
import { NumberTicker } from "./ui/number-ticker";

import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";

const ByondNumbers = () => {
  return (
    <div className="w-full h-[20rem] absolute left-0">
      <div className="w-full bg-gradient-to-b from-[#171717] to-[#0d0d0d] py-12 flex flex-col items-center text-white gap-12">
        {/* Heading Section */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">
            Beyond Numbers
          </h1>
          <p className="mt-2 text-neutral-300 text-lg md:text-xl">
            Statistical Proof of Excellence
          </p>
        </div>

        {/* Statistics Section */}
        <div className="w-full max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center gap-4">
            <LanguageOutlinedIcon className="text-[#FCBC45] text-[5.5rem]" />
            <NumberTicker
              value={100}
              className="text-4xl md:text-5xl font-bold tracking-tight text-white"
            />
            <span className="text-lg text-[#FCBC45]">Clients Globally</span>
          </div>

          <div className="flex flex-col items-center gap-4">
            <VerifiedOutlinedIcon className="text-[#FCBC45] text-[5.5rem]" />
            <NumberTicker
              value={15}
              className="text-4xl md:text-5xl font-bold tracking-tight text-white"
            />
            <span className="text-lg text-[#FCBC45]">Years of Experience</span>
          </div>

          <div className="flex flex-col items-center gap-4">
            <SchoolOutlinedIcon className="text-[#FCBC45] text-[5.5rem]" />
            <NumberTicker
              value={500}
              className="text-4xl md:text-5xl font-bold tracking-tight text-white"
            />
            <span className="text-lg text-[#FCBC45]">
              Talented Professionals
            </span>
          </div>

          <div className="flex flex-col items-center gap-4">
            <BusinessCenterOutlinedIcon className="text-[#FCBC45] text-[5.5rem]" />
            <NumberTicker
              value={85}
              className="text-4xl md:text-5xl font-bold tracking-tight text-white"
            />
            <span className="text-lg md:text-xl text-[#FCBC45]">
              Referral Business
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ByondNumbers;
