import Image from "next/image";
import React from "react";

const OurCulture = () => {
  return (
    <div className="w-full p-5 lg:px-28 pt-10 lg:pt-16 flex flex-col lg:flex-row gap-10 min-h-[70dvh]">
      <div className="w-full flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-h6 font-bold text-primary flex gap-2 items-center justify-start">
            <p className="w-3 h-3 bg-primary" />{" "}
            <span className="text-neutral-800">Our Culture</span>
          </h1>
          <p className="text-h2 font-medium text-neutral-800 leading-none">
            Building a Culture of Growth, Respect, and Celebration
          </p>
        </div>
        <p className="text-link max-w-2xl text-neutral-600">
          At PrimeVista Global, we believe in fostering an inclusive,
          collaborative, and vibrant work environment where every voice is
          valued. We celebrate diversity, encourage creativity, and empower our
          team to grow and succeed together. From team-building activities to
          recognizing individual achievements, we take pride in creating a
          culture that nurtures respect, camaraderie, and innovation.
        </p>
      </div>

      <div className="w-full overflow-hidden flex items-start justify-center">
        <Image
          src={"/assets/images/g1.png"}
          alt="about image"
          width={1000}
          height={1000}
          className="w-[40rem] h-full lg:p-5 object-cover object-top drop-shadow-lg"
        />
      </div>
    </div>
  );
};

export default OurCulture;
