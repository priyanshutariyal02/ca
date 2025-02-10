"use client";

import React, { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Footer from "@/components/footer";
import Navbar from "@/app/caseStudies/components/navbar";
import SuggestionForm from "../components/suggestion-form";
import Link from "next/link";

interface Blog {
  _id: string;
  title: string;
  image: string;
  content: string;
}

export default function BlogDetail({ id }: { id: string }) {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/insight/${id}`);
        if (!res.ok) throw new Error("Failed to fetch blog");
        const data = await res.json();
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  useEffect(() => {
    const fetchRelatedBlogs = async () => {
      try {
        const res = await fetch("/api/insight");
        if (!res.ok) throw new Error("Failed to fetch related blogs");
        const data = await res.json();
        setRelatedBlogs(data);
      } catch (error) {
        console.error("Error fetching related blogs:", error);
      }
    };

    fetchRelatedBlogs();
  }, []);

  if (loading) {
    return <p className="text-center mt-5">Loading...</p>;
  }

  if (!blog) {
    return notFound();
  }

  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col lg:flex-row gap-5 px-5 lg:px-28 py-10 lg:py-16">
        <div className="w-full mx-auto">
          <h1 className="text-h3 font-semibold text-neutral-800 lg:leading-[4rem]">
            {blog.title}
          </h1>
          <div className="mt-8">
            <Image
              src={blog.image}
              alt={blog.title || "Blog Image"}
              width={2000}
              height={2000}
              className="w-full h-[30rem] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="text-link text-neutral-700 mt-4 leading-relaxed">
            <p
              className="text-link text-gray-600 mt-2 flex-1"
              dangerouslySetInnerHTML={{
                __html: blog.content,
              }}
            />
          </div>
          <SuggestionForm insight={blog.title} />
        </div>
        <div className="w-full lg:w-1/2 lg:bg-white lg:p-10 flex flex-col">
          {/* Heading */}
          <h1 className="text-h5 font-medium border-b py-3 mb-10">
            Related Insights
          </h1>

          {/* Blog Cards */}
          <div className="w-full flex flex-wrap lg:flex-col gap-6 overflow-x-auto">
            {relatedBlogs
              .filter((relatedBlog) => relatedBlog._id !== blog._id) // Exclude current blog
              .slice(0, 4)
              .map((related) => (
                <div
                  key={related._id}
                  className="flex-1 min-w-[16rem] md:min-w-[20rem] lg:w-full p-5 flex flex-col border rounded-2xl gap-4 bg-white"
                >
                  {/* Blog Image */}
                  <div className="w-full h-[15rem] md:h-[17rem] relative rounded-lg overflow-hidden">
                    <Image
                      src={related.image}
                      alt={related.title || "Blog Image"}
                      width={1000}
                      height={1000}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  </div>

                  {/* Blog Content */}
                  <div className="flex flex-col flex-1">
                    {/* Blog Title */}
                    <h2 className="text-link font-semibold text-neutral-800">
                      {related.title.split(" ").length > 10
                        ? related.title.split(" ").slice(0, 10).join(" ") +
                          "..."
                        : related.title}
                    </h2>

                    {/* Blog Description */}
                    <p
                      className="text-link text-neutral-600 mt-2 flex-1"
                      dangerouslySetInnerHTML={{
                        __html:
                          related.content.split(" ").length > 50
                            ? related.content
                                .split(" ")
                                .slice(0, 50)
                                .join(" ") + "..."
                            : related.content,
                      }}
                    />

                    {/* Read More Link */}
                    <div className="w-full flex justify-end items-center mt-4">
                      <Link
                        href={`/insight/${related._id}`}
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
      </div>
      <Footer />
    </>
  );
}
