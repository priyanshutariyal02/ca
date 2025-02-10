"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import HeroTop from "../about/components/hero-top";
import Navbar from "../caseStudies/components/navbar";

export interface Blog {
  _id: string;
  title: string;
  image: string;
  content: string;
}

const Insights = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isloading, setIsloading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/insight");
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setIsloading(false);
      }
    };

    fetchBlogs();
  }, []);

  const latestBlog = blogs.length > 0 ? blogs[0] : null;
  const otherBlogs = blogs.slice(1, blogs.length);

  return (
    <>
      <Navbar />
      <HeroTop
        title={"Insights"}
        subTitle={`Dive Into Our Thought-Provoking <span class="text-primary">Blogs</span> and Expert Insights`}
      />

      <div className="w-full sm:px-10 md:px-28 py-16 flex flex-col gap-10">
        {latestBlog ? (
          <div
            key={latestBlog._id}
            className="w-full flex flex-col sm:flex-row items-center gap-10 p-6 rounded-lg lg:bg-gray-100"
          >
            <div className="w-full sm:w-1/2 lg:h-[30rem] overflow-hidden rounded-lg shadow-lg">
              <Image
                src={latestBlog.image}
                width={1000}
                height={1000}
                alt="Beautiful workspace setup"
                className="hover:scale-105 h-full object-cover transition-transform duration-500"
              />
            </div>

            <div className="w-full sm:w-1/2 flex gap-5 sm:gap-10 flex-col">
              <h1 className="text-h3 font-semibold text-neutral-800">
                {latestBlog.title}
              </h1>
              <p
                className="text-body"
                dangerouslySetInnerHTML={{
                  __html: latestBlog.content.slice(0, 100) + "...",
                }}
              />
              <div>
                <Link
                  href={`/insight/${latestBlog._id}`}
                  className="px-6 py-3 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ) : isloading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <p className="text-center text-gray-500">No recent insight posts.</p>
        )}

        <div className="flex-1 p-5 lg:p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <>
            {/* {blogData.slice(0, blogData.length - 1).map((item, index) => (
            <div
              key={index}
              className="w-full h-full flex flex-col gap-4 shadow-lg bg-white rounded-2xl overflow-hidden"
            >
              <div className="w-full h-[18rem] relative">
                <Image
                  src={item.image}
                  alt={`${index}`}
                  width={1000}
                  height={1000}
                  className="w-full h-full rounded-t-2xl object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-t-2xl"></div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h1 className="text-link font-semibold text-neutral-800">
                  {item.title.split(" ").length > 7
                    ? item.title.split(" ").slice(0, 7).join(" ") + "..."
                    : item.title}
                </h1>

                <p className="text-link text-gray-600 mt-2 flex-1">
                  {item.desc[0].split(" ").length > 20
                    ? item.desc[0].split(" ").slice(0, 20).join(" ") + "..."
                    : item.desc}
                </p>

                <div className="w-full flex justify-end items-center mt-4">
                  <Link
                    href={`/insight/${item.id}`}
                    className="text-primary text-link font-medium hover:underline transition-all"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))} */}
          </>
          {otherBlogs.map((blog) => (
            <div
              key={blog._id}
              className="w-full h-full flex flex-col gap-4 shadow-lg bg-white rounded-2xl overflow-hidden"
            >
              {/* Image Section */}
              <div className="w-full h-[18rem] relative">
                <Image
                  src={blog.image}
                  alt={`${blog.title}`}
                  width={1000}
                  height={1000}
                  className="w-full h-full rounded-t-2xl object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-t-2xl"></div>
              </div>

              {/* Text Content */}
              <div className="p-5 flex flex-col flex-1">
                <h1 className="text-link font-semibold text-neutral-800">
                  {blog.title.split(" ").length > 7
                    ? blog.title.split(" ").slice(0, 7).join(" ") + "..."
                    : blog.title}
                </h1>

                {/* <p className="text-link text-gray-600 mt-2 flex-1">
                  {blog.content.split(" ").length > 20
                    ? blog.content.split(" ").slice(0, 20).join(" ") + "..."
                    : blog.content}
                </p> */}
                <p
                  className="text-link text-gray-600 mt-2 flex-1"
                  dangerouslySetInnerHTML={{
                    __html:
                      blog.content.split(" ").length > 20
                        ? blog.content.split(" ").slice(0, 20).join(" ") + "..."
                        : blog.content,
                  }}
                />

                {/* Read More Link */}
                <div className="w-full flex justify-end items-center mt-4">
                  <Link
                    href={`/insight/${blog._id}`}
                    className="text-primary text-link font-medium hover:underline transition-all"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Insights;
