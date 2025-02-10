import React from "react";

const HeroTop = ({ title, subTitle }: { title: string; subTitle: string }) => {
  return (
    <div className="w-full min-h-[30vh] overflow-hidden px-6 sm:px-10 md:px-16 lg:px-20 bg-[#171717] flex flex-col justify-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white gap-3 relative pl-6 md:pl-8">
        <p className="w-4 h-4 sm:w-5 sm:h-5 bg-primary absolute bottom-2 left-0" />
        {title}
      </h1>
      <h1
        className="capitalize text-h4 leading-relaxed sm:leading-normal text-white z-30 w-full font-medium pt-2 pb-4 sm:pb-5"
        dangerouslySetInnerHTML={{ __html: subTitle }}
      />
    </div>
  );
};

export default HeroTop;
