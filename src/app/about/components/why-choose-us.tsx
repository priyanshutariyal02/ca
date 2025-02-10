import React from "react";

import {
  IconGlobe,
  IconSettings,
  IconDeviceLaptop,
  IconStar,
  IconClock,
  IconUserCheck,
} from "@tabler/icons-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const chooseData = [
  {
    title: "Global Expertise",
    desc: "With a team well-versed in international accounting standards and tax regulations, we bring global best practices to your business, ensuring compliance and consistency across borders.",
    icon: <IconGlobe size={30} className="w-16 h-16" stroke={1.5} />,
  },
  {
    title: "Customized for You",
    desc: "No two businesses are alike. That's why we offer flexible and scalable solutions, designed to fit your specific operational needs, whether you're a startup or an established enterprise.",
    icon: <IconSettings size={30} className="w-16 h-16" stroke={1.5} />,
  },
  {
    title: "Technology-Driven Solutions",
    desc: "Leveraging the latest technologies in accounting and data analytics, we help you stay ahead in an ever-changing financial landscape. From AI-powered insights to real-time reporting, we make data work for you.",
    icon: <IconDeviceLaptop size={30} className="w-16 h-16" stroke={1.5} />,
  },
  {
    title: "Commitment to Excellence",
    desc: "At PrimeVista, excellence isn't just a goal—it's our standard. Our team operates with unmatched accuracy and meticulous attention to detail, ensuring that every transaction, report, and analysis is flawless.",
    icon: <IconStar size={30} className="w-16 h-16" stroke={1.5} />,
  },
  {
    title: "24/7 Support Across Time Zones",
    desc: "Whether you're in the Americas, Europe, Asia, or beyond, our dedicated team is available around the clock to support your business operations seamlessly.",
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
    <div className="w-full flex flex-col lg:flex-row px-5 lg:px-28 gap-10 lg:gap-16 pt-5 lg:pt-20">
      {/* Left Section: Heading and Description */}
      <div className="w-full flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-h6 font-bold text-primary flex gap-2 items-center justify-start">
            <p className="w-3 h-3 bg-primary" />{" "}
            <span className="text-neutral-800">Why Choose Us</span>
          </h1>
          <p className="text-h2 font-medium text-neutral-800 leading-none">
            Where Expertise and Innovation Align
          </p>
        </div>
        <p className="text-link max-w-2xl text-neutral-600">
          At PrimeVista Global, we combine expertise, innovation, and a
          client-first approach to deliver tailored financial solutions that
          drive your success. With cutting-edge technology, dedicated resources,
          and a commitment to excellence, we ensure accuracy, timeliness, and
          seamless integration into your operations.
        </p>
      </div>

      {/* Right Section: Accordion with Icons */}
      <Accordion type="single" collapsible className="w-full">
        {chooseData.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-b last:border-b-0"
          >
            <AccordionTrigger className="flex font-bold items-center justify-start gap-3  text-neutral-800 hover:text-primary duration-200 group">
              <div className="w-full flex justify-start items-center gap-6">
                <span className="text-primary">{item.icon}</span>
                <h1 className="text-h5 group-hover:text-primary duration-200">
                  {" "}
                  {item.title}
                </h1>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-body leading-8 pl-20 max-w-4xl text-neutral-600 mt-2">
                {item.desc}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default WhyChooseUs;
