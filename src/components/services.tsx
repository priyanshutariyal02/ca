import {
  IconArrowRight,
  IconFilePower,
  IconReceiptTax,
  IconTagStarred,
  IconZoomScan,
} from "@tabler/icons-react";
import React, { ReactNode } from "react";
import Link from "next/link";

interface ServiceContent {
  title: string;
  desc: string;
  icon: ReactNode;
}

const content: ServiceContent[] = [
  {
    title: "Virtual Bookkeeping",
    desc: "Accurate and organized financial records, managed remotely for seamless business operations",
    icon: <IconFilePower size={30} stroke={1} className="w-16 h-16" />,
  },
  {
    title: "Bank Reconcilition",
    desc: "Ensuring flawless alignment between your bank statements and financial records for reporting",
    icon: <IconZoomScan size={30} stroke={1} className="w-16 h-16" />,
  },
  {
    title: "Payroll & Salary",
    desc: "Efficient payroll processing with accurate salary calculations, tax compliance",
    icon: <IconReceiptTax size={30} stroke={1} className="w-16 h-16" />,
  },
  {
    title: "Virtual CFO",
    desc: "Strategic financial leadership tailored to your business, driving informed decisions",
    icon: <IconTagStarred size={30} stroke={1} className="w-16 h-16" />,
  },
  {
    title: "Data Analytics",
    desc: "Transforming raw data into actionable insights to guide smarter business strategies",
    icon: <IconFilePower size={30} stroke={1} className="w-16 h-16" />,
  },
  {
    title: "Tax Preprations",
    desc: "Comprehensive tax planning and preparation to ensure compliance while maximizing savings",
    icon: <IconZoomScan size={30} stroke={1} className="w-16 h-16" />,
  },
];
const Services = () => {
  return (
    <div
      className="w-full mt-[25rem] py-20 flex justify-start gap-20  flex-col px-20"
      id="service"
    >
      {/* Heading */}
      <div className="w-full flex flex-col gap-4 ">
        <h1 className=" font-bold text-2xl text-primary">Our Services</h1>
        <div className="w-full flex justify-between items-center">
          <h1 className="text-4xl  font-semibold">What Services We Offer</h1>
          <p className="text-xl max-w-2xl text-center">
            At Prime Vista Global, we offer a comperhensive range of services
            idesigned to simplify financial management and drive buiness success
          </p>
          <Link
            href={"/services"}
            className="bg-primary text-white px-4 py-2 text-lg font-semibold rounded-md"
          >
            All Services
          </Link>
        </div>
      </div>
      {/* Testimonials */}
      <div className="w-full grid grid-cols-3 items-center justify-center gap-8">
        {content.map((item, index) => (
          <div
            key={index}
            className="p-5 flex items-start justify-center gap-6 shadow-lg rounded-md bg-white group hover:bg-gradient-to-t from-yellow-50 to-zinc-50 duration-200"
          >
            <div className="mb-2 object-cover rounded-md text-primary p-1 w-24 h-24">
              {item.icon}
            </div>
            <div className="flex justify-between items-start flex-col gap-6">
              <h1 className="text-neutral-800 text-3xl">{item.title}</h1>
              <p className="text-neutral-500 text-lg w-[18rem]">{item.desc}</p>
              <Link
                href="/services"
                className="flex text-lg rounded-md items-center justify-center gap-2 text-primary"
              >
                Read More <IconArrowRight stroke={1} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
