import React from "react";

const OurCulture = () => {
  return (
    <div className="w-full px-28 py-16 flex gap-10 min-h-[70dvh]">
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
      <div className="flex-1 grid grid-cols-3 w-full gap-3">
        <div className="w-full h-full grid grid-rows-3 gap-3">
          <div className="grid row-span-2 border border-primary">d</div>
          <div className="w-full h-full border border-primary">s</div>
        </div>
        <div className="w-full h-full grid grid-rows-3 gap-3">
          <div className="w-full h-full border border-primary">s</div>
          <div className="grid row-span-2 border border-primary">d</div>
        </div>
        <div className="w-full h-full grid grid-rows-3 gap-3">
          <div className="grid row-span-2 border border-primary">d</div>
          <div className="w-full h-full border border-primary">s</div>
        </div>
      </div>
    </div>
  );
};

export default OurCulture;
