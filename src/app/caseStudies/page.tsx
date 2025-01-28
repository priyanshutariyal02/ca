import React from "react";
import Navbar from "./components/navbar";
import Tabs from "./components/ui/tabs";
import Footer from "@/components/footer";

const CaseStudies = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-[30dvh] overflow-hidden px-20 bg-black flex flex-col  justify-center">
        {/* <Image
          src={
            "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          width={2000}
          height={2000}
          alt="image"
          className="w-full h-full object-contain object-center opacity-50 "
        /> */}
        <h1 className="text-h2 font-semibold w-full text-white gap-3 relative pl-8">
          <p className="w-5 h-5 bg-primary absolute bottom-7 left-0"></p> Case Studies
        </h1>
        <h1 className="capitalize text-h4 leading-normal text-white z-30  max-w-4xl font-medium pb-5">
          Customized <span className="text-primary">Financial</span> Solutions
          Backed by Global Expertise
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
