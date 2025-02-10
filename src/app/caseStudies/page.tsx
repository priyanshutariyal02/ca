import React from "react";
import Tabs from "./components/ui/tabs";
import Footer from "@/components/footer";
import HeroTop from "../about/components/hero-top";
import Navbar from "./components/navbar";

const CaseStudies = () => {
  return (
    <>
      <Navbar />
      <HeroTop
        title={"Case Studies"}
        subTitle={`Customized <span class="text-primary">Financial</span> Solutions Backed by Global Expertise`}
      />
      <div className="w-full px-6 sm:px-12 lg:px-28 py-8 sm:py-16 bg-neutral-50">
        <Tabs />
      </div>
      <Footer />
    </>
  );
};

export default CaseStudies;
