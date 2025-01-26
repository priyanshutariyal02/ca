import React from "react";
import Navbar from "./components/navbar";
import Image from "next/image";
import Tabs from "./components/ui/tabs";

const CaseStudies = () => {
  return (
    <>
      <Navbar />
      <div className="w-full px-28 py-16 bg-neutral-50">
        <Tabs />
      </div>
    </>
  );
};

export default CaseStudies;
