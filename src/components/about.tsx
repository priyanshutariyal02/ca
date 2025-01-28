import React from "react";
import { InteractiveHoverButton } from "./ui/hover-button";
import own from "../../public/assets/images/own.jpg";
import t3 from "../../public/assets/images/t3.jpg";
import gp from "../../public/assets/images/gp.png";
import build from "../../public/assets/images/build.jpeg";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div
      className="w-full flex flex-col lg:gap-10 lg:flex-row gap-5 lg:items-center lg:justify-center py-10 lg:py-16 px-5 lg:px-10 mt-5"
      id="about"
    >
      <div className="flex-1 h-full leading-8 flex flex-col gap-5 text-lg text-neutral-700">
        <h1 className=" font-bold text-h5 text-primary">About Us</h1>

        <h2 className="text-h3 leading-[3rem] text-neutral-800 max-w-2xl font-medium">
          Navigating Accounting & Taxation with Precision
        </h2>
        <p className="max-w-3xl text-20px">
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
            <p className="text-20px">
              We are committed to precision and reliability in every service we
              offer, ensuring that your financial data is always accurate and up
              to date.
            </p>
          </div>
          <div className="flex max-w-3xl flex-col">
            <span className="font-bold text-h6 text-primary">
              Client-Centered Approach
            </span>
            <p className="text-20px">
              We listen, understand, and provide tailored solutions to fit your
              specific requirements.
            </p>
          </div>
        </div>
        <Link href={"/about"}>
          <InteractiveHoverButton>Know More</InteractiveHoverButton>
        </Link>
      </div>
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4">
        {/* First Column */}
        <div className="w-full h-full grid grid-rows-3 gap-4">
          <div className="row-span-2 overflow-hidden rounded-lg">
            <Image
              src={own}
              alt="image 1"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full overflow-hidden rounded-lg">
            <Image
              src={t3}
              alt="image 2"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Second Column */}
        <div className="w-full h-full grid grid-rows-3 gap-4">
          <div className="w-full h-full overflow-hidden rounded-lg">
            <Image
              src={gp}
              alt="image 3"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="row-span-2 overflow-hidden rounded-lg">
            <Image
              src={build}
              alt="image 4"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Third Column */}
        <div className="w-full h-full grid grid-rows-3 gap-4">
          <div className="row-span-2 overflow-hidden rounded-lg">
            <Image
              src={gp}
              alt="image 5"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full overflow-hidden rounded-lg">
            <Image
              src={gp}
              alt="image 6"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
