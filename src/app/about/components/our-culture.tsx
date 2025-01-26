import Image from "next/image";
import React from "react";

const OurCulture = () => {
  return (
    <div className="w-full p-5 lg:px-28 py-16 flex flex-col lg:flex-row gap-10 min-h-[70dvh]">
      <div className="flex flex-col gap-10 max-w-2xl flex-1">
        <h1 className="text-2xl font-bold text-primary">Our Culture</h1>
        <h2 className="text-5xl text-neutral-700">
          Building a Culture of Growth, Respect, and Celebration
        </h2>
        <p className="text-xl leading-10">
          At PrimeVista Global, we believe in fostering an inclusive,
          collaborative, and vibrant work environment where every voice is
          valued. We celebrate diversity, encourage creativity, and empower our
          team to grow and succeed together. From team-building activities to
          recognizing individual achievements, we take pride in creating a
          culture that nurtures respect, camaraderie, and innovation.
        </p>
      </div>
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4">
        {/* First Column */}
        <div className="w-full h-full grid grid-rows-3 gap-4">
          <div className="row-span-2 overflow-hidden rounded-lg border border-primary">
            <Image
              src="https://via.placeholder.com/300"
              alt="image 1"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full overflow-hidden rounded-lg border border-primary">
            <Image
              src="https://via.placeholder.com/300"
              alt="image 2"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Second Column */}
        <div className="w-full h-full grid grid-rows-3 gap-4">
          <div className="w-full h-full overflow-hidden rounded-lg border border-primary">
            <Image
              src="https://via.placeholder.com/300"
              alt="image 3"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="row-span-2 overflow-hidden rounded-lg border border-primary">
            <Image
              src="https://via.placeholder.com/300"
              alt="image 4"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Third Column */}
        <div className="w-full h-full grid grid-rows-3 gap-4">
          <div className="row-span-2 overflow-hidden rounded-lg border border-primary">
            <Image
              src="https://via.placeholder.com/300"
              alt="image 5"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full overflow-hidden rounded-lg border border-primary">
            <Image
              src="https://via.placeholder.com/300"
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

export default OurCulture;
