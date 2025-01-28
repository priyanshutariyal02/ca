import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import {
  FaChartBar,
  FaRegEdit,
  FaCog,
  FaPhoneAlt,
  FaRedoAlt,
} from "react-icons/fa";

const approachData = [
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
    <div className="w-full px-5 lg:px-28 py-16 flex flex-col gap-10">
      <div className="flex lg:items-center flex-col lg:justify-center gap-3">
        <h1 className="text-primary text-h5 font-bold text-left lg:text-center">Our Approches</h1>
        <h2 className="text-h3 font-medium text-neutral-700">
          The Blueprint to Your Financial Success
        </h2>
        <p className="text-neutral-600 text-left lg:text-center text-body max-w-5xl">
          At PrimeVista Global, we follow a structured and efficient process to
          deliver exceptional results. Here&apos;s how we ensure seamless and
          effective service delivery:
        </p>
      </div>
      <div className="lg:w-[60rem] mx-auto py-16">
        <VerticalTimeline>
          {approachData.map((item) => (
            <VerticalTimelineElement
              key={item.step}
              contentStyle={{
                borderBottom: "5px solid #fcbc45",
                boxShadow: "none",
                background: "white",
                color: "#333",
              }}
              iconStyle={{ background: "#fcbc45", color: "#fff" }}
              icon={item.icon}
            >
              <h3 className="text-xl font-bold text-neutral-800">
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
