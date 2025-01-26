"use client"; // Add this directive to mark the file as a client component

import React from "react";
import { useParams } from "next/navigation"; // Use useParams for dynamic route parameters
import { blogData } from "@/data/blog-data";
import Footer from "@/components/footer";
import Navbar from "@/app/caseStudies/components/navbar";

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
      <div className="w-full px-28 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-semibold text-neutral-800 leading-[4rem]">
            {blog.title}
          </h1>
          <div className="mt-8">
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="text-lg text-neutral-700 mt-4 leading-relaxed">
            {Array.isArray(blog.desc) ? (
              <div className="mt-8">
                {blog.desc.map((item, index) => (
                  <div key={index} className="mb-4 ">
                    {item.match(/^\d+\./) ? (
                      <div className="flex items-start flex-col">
                        <span className="text-primary text-lg font-bold">
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
      </div>
      <Footer />
    </>
  );
};

export default BlogDetail;
