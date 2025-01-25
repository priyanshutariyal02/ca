import React from "react";
import ServiceTimeline from "./components/service-timeline";

const Services = () => {
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-center flex-col gap-8">
        <h1 className="text-7xl mx-auto text-center mt-10 font-bold text-stone-700">
          Prime<span className="text-primary">Vista</span>
        </h1>
        <p className="text-center text-xl max-w-4xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iusto
          labore voluptatem molestias aspernatur reiciendis autem, assumenda
          suscipit nihil vitae!
        </p>
      </div>
      <ServiceTimeline />
    </div>
  );
};

export default Services;
