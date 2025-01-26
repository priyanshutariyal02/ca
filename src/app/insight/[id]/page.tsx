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
    return <div>Blog not found!</div>; // If no blog is found, show an error message
  }

  return (
    <>
      <Navbar />
      <div className="w-full px-28 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold">{blog.title}</h1>
          <p className="text-lg text-gray-600 mt-4">{blog.desc}</p>
          <div className="mt-8">
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="mt-8">
            <p className="text-gray-500">Author: {blog.author}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetail;
