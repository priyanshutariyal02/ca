import React from "react";
import { InteractiveHoverButton } from "./ui/hover-button";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div
      className="w-full h-full flex flex-col lg:gap-10 lg:flex-row gap-5 lg:items-center lg:justify-center py-5 lg:py-10 lg:pt-20 px-5 lg:px-28 mt-5"
      id="about"
    >
      <div className="flex-1 h-full flex flex-col gap-5 text-lg text-neutral-700">
        <div className="flex flex-col gap-4 leading-none">
          <h1 className="text-h6 font-bold text-primary flex gap-2 items-center justify-start">
            <p className="w-3 h-3 bg-primary" />{" "}
            <span className="text-neutral-800">About Us</span>
          </h1>
          <p className="text-h2 font-medium text-neutral-800 leading-none">
          Redefining Accounting and Taxation with Unmatched Precision
          </p>
        </div>
        <p className="max-w-3xl text-link">
          At PrimeVista , we are your trusted partner in achieving financial
          success. Specializing in offshore bookkeeping, taxation, and data
          analytics, we provide tailored solutions that meet the unique needs of
          your business. Our expert team brings global experience and precision
          to ensure you stay ahead in a fast-changing world.
        </p>

        <div className="w-full flex gap-5 flex-col">
          <div className="flex max-w-3xl flex-col">
            <span className="font-bold text-h6 text-primary">
              Unmatched Accuracy
            </span>
            <p className="text-link">
              We are committed to precision and reliability in every service we
              offer, ensuring that your financial data is always accurate and up
              to date.
            </p>
          </div>
          <div className="flex max-w-3xl flex-col">
            <span className="font-bold text-h6 text-primary">
              Client-Centered Approach
            </span>
            <p className="text-link">
              We listen, understand, and provide tailored solutions to fit your
              specific requirements.
            </p>
          </div>
        </div>
        <Link href={"/about"}>
          <InteractiveHoverButton>Know More</InteractiveHoverButton>
        </Link>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <Image src={"/assets/images/about1.png"} alt="about image" width={1000} height={1000} className="w-[45rem] lg:p-5 object-cover drop-shadow-lg"/>
      </div>
    </div>
  );
};

export default About;
