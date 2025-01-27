import React from "react";
import ServiceTimeline from "./components/service-timeline";
import Navbar from "../caseStudies/components/navbar";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="w-full">
        {/* <div className="w-full flex items-center justify-center flex-col gap-8">
        <h1 className="text-7xl mx-auto text-center mt-10 font-bold text-stone-700">
        Prime<span className="text-primary">Vista</span>
        </h1>
        <p className="text-center text-xl max-w-4xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iusto
        labore voluptatem molestias aspernatur reiciendis autem, assumenda
        suscipit nihil vitae!
        </p>
        </div> */}
        <div className="w-full h-[70dvh] overflow-hidden relative bg-black">
          <Image
            src={
              "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={2000}
            height={2000}
            alt="image"
            className="w-full h-full object-cover opacity-50"
          />
          <h1 className="capitalize text-4xl sm:text-5xl lg:text-7xl text-white z-30 absolute top-20 left-10 max-w-4xl p-5 leading-normal font-semibold lg:leading-relaxed">
            We are here to find the best <span className="text-primary">Solution</span> for your business
            problems
          </h1>
        </div>
        <ServiceTimeline />
      </div>
    </>
  );
};

export default Services;
