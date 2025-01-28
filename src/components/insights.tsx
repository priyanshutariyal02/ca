import { IconBackground, IconClock } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { InteractiveHoverButton } from "./ui/hover-button";
import { blogData } from "@/data/blog-data";

const Insight = () => {
  return (
    <div
      className="w-full  px-5 lg:px-20 py-16 flex flex-col gap-10 lg:gap-2 lg:flex-row font-prosan"
      id="insight"
    >
      {/* Left Side - Insights Content */}
      <div className="flex-1 flex flex-col gap-5 lg:gap-0 justify-evenly relative">
        {/* Icon Background */}
        <IconBackground
          className="w-72 h-72 absolute -z-10 -top-16 -left-10 lg:top-[3rem] lg:left-[-4rem] text-primary opacity-20"
          size={40}
        />

        {/* Heading */}
        <h1 className="text-h1 font-semibold">Insights</h1>

        {/* Paragraph */}
        <p className="text-body max-w-2xl leading-8 md:leading-9 mt-5">
          Stay ahead of the curve with our curated insights on industry trends,
          innovative solutions, and actionable strategies. From thought
          leadership articles to deep dives into emerging technologies, our
          insights are designed to inspire, inform, and empower. Explore the
          ideas that shape the future and drive success in a rapidly evolving
          world.
        </p>
        <Link href={"/insight"}>
          <InteractiveHoverButton>Explore More</InteractiveHoverButton>
        </Link>
      </div>

      {/* Right Side - Blog Content */}
      <div className="flex-1 h-full flex flex-col items-center justify-center gap-10">
        {/* Featured Blog */}
        {blogData.slice(-1).map((blog) => (
          <div
            key={blog.id}
            className="w-full flex flex-col overflow-hidden rounded-lg shadow-lg p-5 border gap-3 justify-center relative"
          >
            <p className="absolute top-8 left-8 bg-black/40 border rounded-md border-primary text-mini text-primary px-2 py-1">Least</p>
            <Image
              src={blog.img}
              alt={blog.title}
              width={500}
              height={300}
              className="w-full h-[13rem] object-cover rounded-lg"
            />
            <div className="flex flex-col justify-center text-white">
              <h1 className="text-h5 font-medium">{blog.title}</h1>
              <p className="text-neutral-600 mt-2 text-link">
                {blog.desc[0].split(" ").length > 18
                  ? blog.desc[0].split(" ").slice(0, 18).join(" ") + "..."
                  : blog.desc}
              </p>
            </div>
            <Link
              href={`/insight/${blog.id}`}
              className=" text-link text-primary hover:text-yellow-600 transition"
            >
              Read More
            </Link>
          </div>
        ))}

        {/* Remaining Blogs in Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {blogData.slice(0, 2).map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col gap-3 p-4 border rounded-lg bg-white shadow-lg"
            >
              <Image
                src={blog.img}
                alt={blog.title}
                width={500}
                height={500}
                className=" object-cover rounded-lg"
              />
              <div className="h-full">
                <h2 className="text-link font-medium text-neutral-800">
                  {blog.title.split(" ").length > 7
                    ? blog.title.split(" ").slice(0, 7).join(" ") + "..."
                    : blog.desc}
                </h2>
                <p className="text-neutral-600 mt-2">
                  {blog.desc[0].split(" ").length > 15
                    ? blog.desc[0].split(" ").slice(0, 15).join(" ") + "..."
                    : blog.desc}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <Link
                  href={`/insight/${blog.id}`}
                  className="text-primary text-link hover:text-yellow-600 transition"
                >
                  Read More
                </Link>
                <p className="text-neutral-500 flex items-center gap-1 text-mini">
                  <IconClock /> 4 days ago
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Insight;
