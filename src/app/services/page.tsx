import React from "react";
import ServiceTimeline from "./components/service-timeline";
import Footer from "@/components/footer";
import HeroTop from "../about/components/hero-top";
import Navbar from "../caseStudies/components/navbar";

const Services = () => {
  return (
    <>
      <Navbar />
      <HeroTop
        title={"Our Services"}
        subTitle={`Expert <span class="text-primary">Solutions</span> for Accounting, Taxation, and Beyond`}
      />

      <div className="w-full">
        <ServiceTimeline />
      </div>
      <Footer />
    </>
  );
};

export default Services;
