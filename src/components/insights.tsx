import { IconBackground, IconClock } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { InteractiveHoverButton } from "./ui/hover-button";
import { blogData } from "@/data/blog-data";

const Insight = () => {
  return (
    <div
      className="w-full min-h-screen px-5 lg:px-20 py-16 flex flex-col lg:flex-row"
      id="insight"
    >
      <div className="flex-1 flex flex-col gap-5 lg:gap-0 justify-evenly relative">
        {/* Icon Background */}
        <IconBackground
          className="w-72 h-72 absolute -z-10 -top-16 -left-10 lg:top-[3rem] lg:left-[-4rem] text-primary opacity-20"
          size={40}
        />

        {/* Heading */}
        <h1 className="text-5xl lg:text-8xl md:text-9xl font-semibold">
          Insights
        </h1>

        {/* Paragraph */}
        <p className="text-lg md:text-xl max-w-2xl leading-8 md:leading-9 mt-5">
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

      <div className="flex-1 p-0 lg:p-5 grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5 lg:mt-0">
        {blogData.slice(0, 4).map((blogData, index) => (
          <div
            key={index}
            className="w-full h-full flex flex-col gap-5 shadow-lg p-2 bg-white rounded-2xl"
          >
            <div className="flex w-full h-full overflow-hidden gap-3">
              <Image
                src={blogData.img}
                alt={`${index}`}
                width={500}
                height={500}
                className="w-1/2 object-cover rounded-xl"
              />
              <div className="flex flex-col gap-2 items-start">
                <h1 className="text-base font-bold lg:text-xl lg:font-semibold">
                  {blogData.title.split(" ").length > 5
                    ? blogData.title.split(" ").slice(0, 5).join(" ") + "..."
                    : blogData.title}
                </h1>
                {/* <p>{blogData.author}</p> */}
              </div>
            </div>
            <div className="w-full h-full text-lg flex justify-between flex-col p-2 gap-3 lg:gap-0 ">
              <p>
                {blogData.desc[0].split(" ").length > 11
                  ? blogData.desc[0].split(" ").slice(0, 11).join(" ") + "..."
                  : blogData.desc}
              </p>

              <div className="w-full flex justify-between items-center">
                <Link
                  href={`/insight/${blogData.id}`}
                  className="text-primary text-xl font-semibold hover:text-yellow-600 duration-200"
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
  );
};

export default Insight;
