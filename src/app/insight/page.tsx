import React from "react";
import Navbar from "../caseStudies/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { IconClock } from "@tabler/icons-react";
import Footer from "@/components/footer";
import { blogData, latestBlog } from "@/data/blog-data";

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
          <h1 className="capitalize text-7xl text-white z-30 absolute top-20 left-10 max-w-4xl p-5 leading-normal font-semibold">
            Daily <span className="text-primary">updates</span> and Insights
            into the world of business
          </h1>
        </div>

        <div className="w-full px-28 py-16 flex flex-col gap-10">
          {latestBlog.map((item, index) => (
            <div
              key={index}
              className="w-full flex flex-col lg:flex-row items-center gap-10 p-6 bg-gray-100"
            >
              <div className="w-full lg:w-1/2 overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={item.img}
                  width={2000}
                  height={1200}
                  alt="Beautiful workspace setup"
                  className="hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="w-full lg:w-1/2 flex gap-10 flex-col">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
                  {item.title}
                </h1>
                <p className="text-gray-600 text-lg">{item.desc}</p>
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

          <div className="flex-1 p-5 grid grid-cols-4 gap-5">
            {blogData.slice(1, blogData.length).map((item, index) => (
              <div
                key={index}
                className="w-full h-full flex flex-col gap-5 shadow-lg p-2 bg-white rounded-2xl"
              >
                <div className="flex w-full h-full overflow-hidden gap-3">
                  <Image
                    src={item.img}
                    alt={`${index}`}
                    width={500}
                    height={500}
                    className="w-1/2 object-cover rounded-xl"
                  />
                  <div className="flex flex-col gap-2 items-start">
                    <h1 className="text-xl font-semibold">{item.title}</h1>
                    <p>{item.author}</p>
                  </div>
                </div>
                <div className="w-full h-full text-lg flex justify-between flex-col p-2">
                  <p>
                    {item.desc.split(" ").length > 11
                      ? item.desc.split(" ").slice(0, 11).join(" ") + "... "
                      : item.desc}
                  </p>

                  <div className="w-full flex justify-between items-center">
                    <Link
                      href={`/insight/${item.id}`} // Ensure index is used as the id
                      className="text-primary text-xl font-semibold"
                    >
                      Read More
                    </Link>
                    <p className="text-neutral-500 flex items-center gap-1">
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
