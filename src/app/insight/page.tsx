import React from "react";
import Navbar from "../caseStudies/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { IconClock } from "@tabler/icons-react";
import Footer from "@/components/footer";
import { blogData } from "@/data/blog-data";

const Insights = () => {
  return (
    <>
      <Navbar />
      <div className="w-full">
        <div className="w-full h-[70dvh] overflow-hidden relative bg-black">
          <Image
            src={
              "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={2000}
            height={2000}
            alt="image"
            className="w-full h-full object-cover opacity-50"
          />
          <h1 className="capitalize text-4xl sm:text-5xl lg:text-7xl text-white z-30 absolute top-20 left-10 max-w-4xl p-5 leading-normal font-semibold">
            Daily <span className="text-primary">updates</span> and Insights
            into the world of business
          </h1>
        </div>

        <div className="w-full sm:px-10 md:px-28 py-16 flex flex-col gap-10">
          {[blogData[blogData.length - 1]].map((item, index) => (
            <div
              key={index}
              className="w-full flex flex-col sm:flex-row items-center gap-10 p-6 rounded-lg lg:bg-gray-100"
            >
              <div className="w-full sm:w-1/2 overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={item.img}
                  width={2000}
                  height={2000}
                  alt="Beautiful workspace setup"
                  className="hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="w-full sm:w-1/2 flex gap-5 sm:gap-10 flex-col">
                <h1 className="text-h3 font-semibold text-neutral-800">
                  {item.title}
                </h1>
                <p className="text-body">{item.desc[0]}</p>
                <div>
                  <Link
                    href={`/insight/${item.id}`}
                    className="px-6 py-3 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}

          <div className="flex-1 p-5 lg:p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {blogData.slice(0, blogData.length - 1).map((item, index) => (
              <div
                key={index}
                className="w-full h-full flex flex-col gap-5 shadow-lg p-5 bg-white rounded-2xl"
              >
                <Image
                  src={item.img}
                  alt={`${index}`}
                  width={500}
                  height={500}
                  className="w-full object-cover rounded-xl"
                />
                <h1 className="text-body font-medium">
                  {item.title.split(" ").length > 7
                    ? item.title.split(" ").slice(0, 7).join(" ") + "..."
                    : item.title}
                </h1>
                <div className="w-full h-full text-link flex justify-between flex-col">
                  <p>
                    {item.desc[0].split(" ").length > 18
                      ? item.desc[0].split(" ").slice(0, 18).join(" ") + "... "
                      : item.desc}
                  </p>

                  <div className="w-full flex justify-between items-center mt-3">
                    <Link
                      href={`/insight/${item.id}`}
                      className="text-primary text-link font-medium"
                    >
                      Read More
                    </Link>
                    <p className="text-neutral-500 flex items-center gap-1 text-mini">
                      <IconClock /> 4 days ago
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Insights;
