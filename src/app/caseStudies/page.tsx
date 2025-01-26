import React from "react";
import Navbar from "./components/navbar";
import Tabs from "./components/ui/tabs";
import Footer from "@/components/footer";

const CaseStudies = () => {
  return (
    <>
      <Navbar />
      <div className="w-full px-6 sm:px-12 lg:px-28 py-8 sm:py-16 bg-neutral-50">
        <Tabs />
      </div>
      <Footer/>
    </>
  );
};

export default CaseStudies;
