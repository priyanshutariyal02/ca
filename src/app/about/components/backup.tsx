import React from "react";

import {
  IconGlobe,
  IconSettings,
  IconDeviceLaptop,
  IconStar,
  IconClock,
  IconUserCheck,
} from "@tabler/icons-react";

const chooseData = [
  {
    title: "Global Expertise",
    desc: "With a team well-versed in international accounting standards and tax regulations, we bring global best practices to your business, ensuring compliance and consistency across borders.",
    icon: <IconGlobe size={30} className="w-16 h-16" stroke={1.5} />,
  },
  {
    title: "Customized for You",
    desc: "No two businesses are alike. That&apos;s why we offer flexible and scalable solutions, designed to fit your specific operational needs, whether you&apos;re a startup or an established enterprise.",
    icon: <IconSettings size={30} className="w-16 h-16" stroke={1.5} />,
  },
  {
    title: "Technology-Driven Solutions",
    desc: "Leveraging the latest technologies in accounting and data analytics, we help you stay ahead in an ever-changing financial landscape. From AI-powered insights to real-time reporting, we make data work for you.",
    icon: <IconDeviceLaptop size={30} className="w-16 h-16" stroke={1.5} />,
  },
  {
    title: "Commitment to Excellence",
    desc: "At PrimeVista, excellence isn&apos;t just a goal—it&apos;s our standard. Our team operates with unmatched accuracy and meticulous attention to detail, ensuring that every transaction, report, and analysis is flawless.",
    icon: <IconStar size={30} className="w-16 h-16" stroke={1.5} />,
  },
  {
    title: "24/7 Support Across Time Zones",
    desc: "Whether you&apos;re in the Americas, Europe, Asia, or beyond, our dedicated team is available around the clock to support your business operations seamlessly.",
    icon: <IconClock size={30} className="w-16 h-16" stroke={1.5} />,
  },
  {
    title: "Dedicated Resources - Your SPOC",
    desc: "We provide a dedicated resource as your Single Point of Contact (SPOC), ensuring personalized attention, seamless communication, and efficient service tailored to your needs.",
    icon: <IconUserCheck size={30} className="w-16 h-16" stroke={1.5} />,
  },
];

const WhyChooseUs = () => {
  return (
    <div className="w-full flex flex-col px-5 lg:px-28 gap-16 py-16">
      <div className="flex justify-between items-center flex-col lg:flex-row gap-6 lg:gap-3">
        <div className="flex flex-col gap-4">
          <h1 className="text-h5 text-primary font-bold">Why Choose Us</h1>
          <p className="text-h3 font-medium">
            Where Expertise and Innovation Align
          </p>
        </div>
        <p className="text-body max-w-5xl  text-neutral-600">
          At PrimeVista Global, we combine expertise, innovation, and a
          client-first approach to deliver tailored financial solutions that
          drive your success. With cutting-edge technology, dedicated resources,
          and a commitment to excellence, we ensure accuracy, timeliness, and
          seamless integration into your operations.{" "}
        </p>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-10">
        {chooseData.map((item, index) => (
          <div
            key={index}
            className="w-full h-full bg-white border rounded-lg shadow-lg p-4 flex flex-col gap-3"
          >
            <div className="text-primary">{item.icon}</div>
            <h1 className="text-h4 font-medium text-neutral-700">
              {item.title}
            </h1>
            <p className="text-body text-neutral-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
