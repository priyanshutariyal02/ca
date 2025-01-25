import Image from "next/image";
import React from "react";
import { InteractiveHoverButton } from "./ui/hover-button";

const aboutPara: {
  para: string;
}[] = [
  {
    para: "In 2015, a vision took root when Mr. Ankit Jain, our esteemed Managing Partner, laid the cornerstone of Jain Ankit and Co, Chartered Accountants. What began as a sole proprietorship blossomed into a partnership firm, enriched by the expertise of seasoned professionals, each bringing a wealth of knowledge garnered across diverse industries.",
  },
  {
    para: "Nestled in the heart of the vibrant city of Dehradun, Uttarakhand, our headquarters serve as the nexus of our operations. However, our journey doesn&apos;t end there. With a keen eye on expansion and a commitment to serving our clients more effectively, we ventured into the dynamic landscape of the National Capital Region (NCR), establishing our inaugural branch in Gurugram, Haryana.",
  },
  {
    para: "At JAC, we cherish the uniqueness of every client. Our approach is rooted in understanding the distinct needs of each entity we serve. Through thoughtful dialogue and meticulous attention to detail, we craft tailored solutions designed to address our client&apos;s specific challenges and aspirations.",
  },
];

const About = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center mt-10">
      <div className="max-w-7xl w-full flex items-center justify-between gap-16 p-10">
        {/* Text Section */}
        <div className="flex-1 flex flex-col gap-8">
          <h1 className="text-8xl text-neutral-800">About Us</h1>

          {aboutPara.map((text, index) => (
            <p key={index} className="text-lg leading-8">
              {text.para}
            </p>
          ))}
          <div>
            <InteractiveHoverButton>Hover Me</InteractiveHoverButton>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-[28rem] relative flex items-center justify-center overflow-hidden rounded-md">
          <Image
            src="/assets/images/demoAbout.jpg"
            alt="about"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
