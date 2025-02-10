"use Client";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Blog } from "@/app/insight/page";

const Insight = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/insight");
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const latestBlog = blogs.length > 0 ? blogs[0] : null;
  const otherBlogs = blogs.slice(1, blogs.length);

  const cleanContent = latestBlog
    ? latestBlog.content.replace(/<[^>]*>/g, "") // Removes all HTML tags
    : ""; // Fallback empty string if latestBlog is null

  const shortContent =
    cleanContent.split(" ").length > 18
      ? cleanContent.split(" ").slice(0, 18).join(" ") + "..."
      : cleanContent;

  const processedOtherBlogs = otherBlogs.map((blog) => {
    const cleanBlogContent = blog.content.replace(/<[^>]*>/g, ""); // Remove HTML tags
    const shortBlogContent =
      cleanBlogContent.split(" ").length > 18
        ? cleanBlogContent.split(" ").slice(0, 18).join(" ") + "..."
        : cleanBlogContent;

    return { ...blog, shortContent: shortBlogContent };
  });

  return (
    <div
      className="w-full px-5 lg:px-28 py-10 lg:py-14 flex flex-col gap-10 lg:gap-20 font-prosan"
      id="insight"
    >
      <div className="w-full flex flex-col lg:items-center lg:justify-center gap-4">
        <h1 className="text-h6 font-bold text-primary flex gap-2 items-center justify-start">
          <p className="w-3 h-3 bg-primary" />
          <span className="text-neutral-800">Insights</span>
        </h1>
        <p className="text-h2 font-medium text-neutral-800 leading-none max-w-4xl lg:text-center">
          Stay Ahead of the Curve
        </p>
        <p className="text-link lg:max-w-4xl text-left lg:text-center">
          Stay ahead of the curve with our curated insights on industry trends,
          innovative solutions, and actionable strategies. From thought
          leadership articles to deep dives into emerging technologies.
        </p>
      </div>

      <div className="w-full flex flex-col lg:flex-row justify-center gap-5 lg:px-10">
        {/* Featured Blog */}
        {latestBlog ? (
          <div className="w-full lg:w-1/3">
            <Link
              href={`/insight/${latestBlog._id}`}
              key={latestBlog._id}
              className="relative bg-black group flex flex-col justify-between rounded-lg border overflow-hidden p-5 h-full min-h-[300px]"
            >
              <Image
                src={latestBlog.image}
                alt={latestBlog.title}
                width={1000}
                height={1000}
                className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:opacity-50 duration-200"
              />
              <div className="w-full">
                <h1 className="text-h5 text-white font-medium relative z-10 max-w-xl">
                  {latestBlog.title}
                </h1>
                <IconArrowRight
                  size={30}
                  stroke={2}
                  className="w-10 h-10 text-primary animate-slideRight"
                />
              </div>
              <p className="text-link text-neutral-200 relative z-10">
                {shortContent}
              </p>
            </Link>
          </div>
        ) : (
          <div className="w-full lg:w-1/3 border rounded-lg flex justify-center items-center">
            Loading...
          </div>
        )}

        {/* Blog Grid */}
        <div className="w-full grid grid-cols-1 mt-4 lg:mt-0 md:grid-cols-2 gap-6 lg:gap-2">
          {processedOtherBlogs.map((blog) => (
            <div
              key={blog._id}
              className="flex flex-col-reverse md:flex-row gap-3 lg:p-5"
            >
              <div className="flex-1">
                <h1 className="text-lg lg:text-lg font-semibold">
                  {blog.title}
                </h1>
                <p className="text-mini text-neutral-600">
                  {blog.shortContent}
                </p>
                <Link
                  href={`/insight/${blog._id}`}
                  className="text-primary text-sm hover:text-yellow-600 transition"
                >
                  Read More
                </Link>
              </div>
              <div className="w-full md:w-32 lg:w-40">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Insight;
