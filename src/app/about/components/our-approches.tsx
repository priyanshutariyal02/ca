import React, { ReactNode } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import {
  FaChartBar,
  FaRegEdit,
  FaCog,
  FaPhoneAlt,
  FaRedoAlt,
} from "react-icons/fa";


const approachData: {
  step: number;
  title: string;
  desc: string;
  icon: ReactNode;
}[] = [
  {
    step: 1,
    title: "Understanding Your Needs",
    desc: "We begin by thoroughly analyzing your business requirements, workflows, and challenges to craft tailored solutions.",
    icon: <FaChartBar />, // Icon for data analysis
  },
  {
    step: 2,
    title: "Customized Planning",
    desc: "Based on your needs, we design a personalized strategy that integrates seamlessly with your existing processes.",
    icon: <FaRegEdit />, // Icon for planning
  },
  {
    step: 3,
    title: "Efficient Execution",
    desc: "Our team of experts leverages advanced tools and technology to execute tasks with precision, ensuring unmatched accuracy and timeliness.",
    icon: <FaCog />, // Icon for execution or operations
  },
  {
    step: 4,
    title: "Dedicated SPOC",
    desc: "A single point of contact is assigned to you, ensuring clear communication and efficient handling of queries or updates.",
    icon: <FaPhoneAlt />, // Icon for communication
  },
  {
    step: 5,
    title: "Proactive Feedback & Support",
    desc: "We don’t just complete tasks; we actively monitor results, provide insights, and adjust strategies to ensure continuous improvement.",
    icon: <FaRedoAlt />, // Icon for feedback or ongoing improvement
  },
];

const OurApproches = () => {
  return (
    <div className="w-full px-5 lg:px-28 pt-10 lg:pt-20 flex flex-col gap-10">
      <div className="w-full flex flex-col lg:items-center lg:justify-center gap-4">
        <h1 className="text-h6 font-bold text-primary flex gap-2 items-center justify-start">
          <p className="w-3 h-3 bg-primary" />
          <span className="text-neutral-800">Our Approches</span>
        </h1>
        <p className="text-h2 font-medium text-neutral-800 leading-none max-w-4xl  lg:text-center">
          The Blueprint to Your Financial Success
        </p>
        <p className="text-link max-w-4xl text-left lg:text-center">
          At PrimeVista Global, we follow a structured and efficient process to
          deliver exceptional results. Here&apos;s how we ensure seamless and
          effective service delivery:
        </p>
      </div>

      {/*Approch section for large screen. */}
      {/* <div className="lg:flex hidden w-full items-center justify-center py-16 ">
        <div className="max-w-7xl w-full flex flex-wrap justify-center gap-12">
          {approachData.map((item) => (
            <div
              key={item.step}
              className="w-[24rem] bg-white relative p-6 flex flex-col gap-6 border border-gray-200 shadow-xl rounded-2xl transition-transform transform hover:scale-105"
            >
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-4 border-2 border-primary shadow-md flex items-center justify-center">
                <span className="text-3xl text-primary">{item.icon}</span>
              </div>
              <h1 className="text-xl font-semibold text-center mt-6">
                {item.title}
              </h1>
              <p className="text-gray-600 text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </div> */}

      <div className="lg:flex hidden w-full items-center justify-center py-16 relative">
        <div className="max-w-7xl w-full flex flex-col gap-12 relative">
          {/* Top Row - First 3 Cards */}
          <div className="flex justify-center gap-12">
            {approachData.slice(0, 3).map((item, index) => (
              <div
                key={item.step}
                className="w-[24rem] bg-white relative p-4 flex flex-col gap-2 border border-gray-200 shadow-xl rounded-2xl transition-transform transform hover:scale-105"
              >
                {/* Show dotted line only if it's not the last card in the row */}
                {index !== 2 && (
                  <div className="absolute top-1/2 left-full transform translate-x w-16 h-4 border-dotted border-t-8 border-primary" />
                )}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-4 border-2 border-primary shadow-md flex items-center justify-center">
                  <span className="text-h4 text-primary">{item.icon}</span>
                </div>
                <h1 className="text-body font-semibold text-center mt-6">
                  {item.title}
                </h1>
                <p className="text-neutral-600 text-link text-center">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Row - Last 2 Cards */}
          <div className="flex justify-center gap-12">
            {approachData.slice(3, 5).map((item, index) => (
              <div
                key={item.step}
                className="w-[24rem] bg-white relative p-4 flex flex-col gap-2 border border-gray-200 shadow-xl rounded-2xl transition-transform transform hover:scale-105"
              >
                {/* Show dotted line only if it's not the last card in the row */}
                {index !== 1 && (
                  <div className="absolute top-1/2 left-full transform translate-x w-16 h-4 border-dotted border-t-8 border-primary" />
                )}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-4 border-2 border-primary shadow-md flex items-center justify-center">
                  <span className="text-h4 text-primary">{item.icon}</span>
                </div>
                <h1 className="text-body font-semibold text-center mt-6">
                  {item.title}
                </h1>
                <p className="text-neutral-600 text-link text-center">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*another timeline option */}
      {/* <div className="relative w-full py-16 hidden lg:block">
        <div className="absolute top-[28%] left-0 w-full border-t border-neutral-200"></div>

        <div className="relative flex justify-between items-start w-full">
          {approachData.map((item) => (
            <div
              key={item.step}
              className="relative flex flex-col items-center w-1/5 text-center gap-y-4"
            >
              <div className="w-14 h-14 bg-primary text-white flex items-center justify-center rounded-full text-2xl shadow-lg transition transform hover:scale-110 relative z-10">
                {item.icon}
              </div>
              <div className="text-lg font-bold text-neutral-800">
                {item.title}
              </div>
              <div className="text-sm text-neutral-500 max-w-[80%]">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/*Approches section for small devices */}
      <div className="lg:w-[80rem] mx-auto lg:py-16 lg:hidden">
        <VerticalTimeline>
          {approachData.map((item) => (
            <VerticalTimelineElement
              key={item.step}
              contentStyle={{
                borderBottom: "5px solid #fcbc45",
                boxShadow: "none",
                background: "white",
                color: "#292828",
              }}
              iconStyle={{ background: "#fcbc45", color: "#fff" }}
              icon={item.icon}
            >
              <h3 className="text-h5 font-medium text-neutral-800">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default OurApproches;
