import React from "react";
import ServiceTimeline from "./components/service-timeline";
import Navbar from "../caseStudies/components/navbar";
import Footer from "@/components/footer";

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-[30dvh] overflow-hidden px-20 bg-black flex flex-col  justify-center">
        <h1 className="text-h2 font-semibold w-full text-white gap-3 relative pl-8">
          <p className="w-5 h-5 bg-primary absolute bottom-7 left-0"></p> Our
          Services
        </h1>
        <h1 className="capitalize text-h4 leading-normal text-white z-30  max-w-4xl font-medium pb-5">
          Expert <span className="text-primary">Solutions</span> for Accounting,
          Taxation, and Beyond
        </h1>
      </div>
      <div className="w-full">
        <ServiceTimeline />
      </div>
      <Footer />
    </>
  );
};

export default Services;
