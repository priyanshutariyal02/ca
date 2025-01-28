"use client"; // Add this directive to mark the file as a client component

import React from "react";
import { useParams } from "next/navigation"; // Use useParams for dynamic route parameters
import { blogData } from "@/data/blog-data";
import Footer from "@/components/footer";
import Navbar from "@/app/caseStudies/components/navbar";
import Image from "next/image";
import Link from "next/link";

const BlogDetail = () => {
  const params = useParams(); // Get the dynamic route parameters
  const { id } = params; // Extract the id from the params

  // Ensure the id is valid and find the corresponding blog post
  const blog = blogData.find((item) => item.id === Number(id));

  if (!blog) {
    return <div className="text-center text-xl py-20">Blog not found!</div>; // If no blog is found, show an error message
  }

  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col lg:flex-row gap-5 px-5 lg:px-28 py-10 lg:py-16">
        <div className="w-full mx-auto">
          <h1 className="text-h3 font-semibold text-neutral-800  lg:leading-[4rem]">
            {blog.title}
          </h1>
          <div className="mt-8">
            <Image
              src={blog.img}
              alt={blog.title}
              width={2000}
              height={2000}
              className="w-full h-[30rem] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="text-link text-neutral-700 mt-4 leading-relaxed">
            {Array.isArray(blog.desc) ? (
              <div className="mt-8">
                {blog.desc.map((item, index) => (
                  <div key={index} className="mb-4 ">
                    {item.match(/^\d+\./) ? (
                      <div className="flex items-start flex-col">
                        <span className="text-primary text-body font-medium">
                          {item.split(":")[0]}:
                        </span>
                        <p className="text-neutral-600">{item.split(":")[1]}</p>
                      </div>
                    ) : item.includes(":") ? (
                      <p>
                        <span className="font-semibold text-neutral-800 text-3xl ">
                          {item.split(":")[0]}:
                        </span>{" "}
                        {item.split(":")[1]}
                      </p>
                    ) : (
                      <p className="text-gray-700">{item}</p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-700">{blog.desc}</p>
            )}
          </div>
        </div>
        <div className="w-full lg:w-1/2 bg-white p-10 flex flex-col">
          {/* Heading */}
          <h1 className="text-h5 font-medium border-b py-3 mb-10">
            Related Insights
          </h1>

          {/* Blog Cards */}
          <div className="w-full flex flex-wrap lg:flex-col gap-5 overflow-x-auto">
            {blogData.slice(0, 4).map((blog) => (
              <div
                key={blog.id}
                className="flex-1 min-w-[16rem] md:min-w-[20rem] lg:w-full p-4 flex flex-col border shadow-lg rounded-lg gap-3"
              >
                {/* Blog Image */}
                <Image
                  src={blog.img}
                  alt={blog.title}
                  width={1000}
                  height={1000}
                  className="w-full h-[15rem] md:h-[17rem] object-cover rounded-lg"
                />

                {/* Blog Title */}
                <h2 className="text-h5 font-medium text-neutral-800">
                  {blog.title.split(" ").length > 10
                    ? blog.title.split(" ").slice(0, 10).join(" ") + "..."
                    : blog.title}
                </h2>

                {/* Blog Description */}
                <p className="text-neutral-600 text-link">{blog.desc[0]}</p>

                {/* Read More Link */}
                <Link
                  href={`/insight/${blog.id}`}
                  className="text-primary text-link font-medium hover:text-yellow-500 duration-200"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetail;
