import React from "react";
import Navbar from "./components/navbar";
import Tabs from "./components/ui/tabs";
import Footer from "@/components/footer";
import Image from "next/image";

const CaseStudies = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-[70dvh] overflow-hidden relative bg-black">
        <Image
          src={
            "https://plus.unsplash.com/premium_photo-1661962768042-d32938937cdf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          width={2000}
          height={2000}
          alt="image"
          className="w-full h-full object-cover opacity-50"
        />
        <h1 className="capitalize text-4xl sm:text-5xl lg:text-7xl lg:leading-relaxed leading-normal text-white z-30 absolute top-20 left-10 max-w-4xl p-5 font-semibold">
          Our work <span className="text-primary">inspires</span> action in
          marketing, textnology and business
        </h1>
      </div>
      <div className="w-full px-6 sm:px-12 lg:px-28 py-8 sm:py-16 bg-neutral-50">
        <Tabs />
      </div>
      <Footer />
    </>
  );
};

export default CaseStudies;
