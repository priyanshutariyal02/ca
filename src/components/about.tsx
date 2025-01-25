import React from "react";
import { InteractiveHoverButton } from "./ui/hover-button";
import { LayoutGrid } from "../components/ui/layout-grid";

import own from "../../public/assets/images/own.jpg";
import t3 from "../../public/assets/images/t3.jpg";
import gp from "../../public/assets/images/gp.png";
import build from "../../public/assets/images/build.jpeg";
import { Reveal } from "./ui/Reveal";
import Link from "next/link";

const cards = [
  {
    id: 1,
    className: "md:col-span-2",
    thumbnail: t3,
  },
  {
    id: 2,
    className: "col-span-1",
    thumbnail: own,
  },
  {
    id: 3,
    className: "col-span-1",
    thumbnail: build,
  },
  {
    id: 4,
    className: "md:col-span-2",
    thumbnail: gp,
  },
];

const About = () => {
  return (
    <div
      className="w-full flex items-center justify-center py-16 px-10 min-h-screen mt-5"
      id="about"
    >
      <div className="flex-1 h-full leading-8 flex flex-col gap-5 text-lg text-neutral-700">
        <Reveal>
          <h1 className=" font-bold text-2xl text-primary">About Us</h1>
        </Reveal>
        <Reveal>
          <h2 className="text-5xl text-neutral-800 max-w-2xl font-semibold">
            Navigating Accounting & Taxation with Precision
          </h2>
        </Reveal>
        <p className="max-w-3xl">
          At PrimeVista , we are your trusted partner in achieving financial
          success. Specializing in offshore bookkeeping, taxation, and data
          analytics, we provide tailored solutions that meet the unique needs of
          your business. Our expert team brings global experience and precision
          to ensure you stay ahead in a fast-changing world.
        </p>

        <div className="w-full flex gap-5 flex-col">
          <div className="flex max-w-3xl flex-col">
            <span className="font-bold text-xl text-primary">
              Unmatched Accuracy
            </span>
            <p>
              We are committed to precision and reliability in every service we
              offer, ensuring that your financial data is always accurate and up
              to date.
            </p>
          </div>
          <div className="flex max-w-3xl flex-col">
            <span className="font-bold text-xl text-primary">
              Client-Centered Approach
            </span>
            <p>
              We listen, understand, and provide tailored solutions to fit your
              specific requirements.
            </p>
          </div>
        </div>
        <Link href={"/about"}>
          <InteractiveHoverButton>Know More</InteractiveHoverButton>
        </Link>
      </div>
      <div className="w-full h-[70dvh] flex-1 flex items-center justify-center">
        <LayoutGrid cards={cards} />
      </div>
    </div>
  );
};

export default About;
