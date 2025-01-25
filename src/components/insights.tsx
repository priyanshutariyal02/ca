import { IconBackground, IconClock } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { InteractiveHoverButton } from "./ui/hover-button";

const blogData = [
  {
    img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Consectetur adipiscing elit.",
    desc: "Sit amet consectetur adipiscing elit. Sapiente deleniti, quasi alias quisquam eligendi harum.",
    author: "John Doe",
  },
  {
    img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Voluptas quidem sint.",
    desc: "Quibusdam exercitationem voluptas quidem sint facilis mollitia ad repudiandae magni, modi saepe.",
    author: "John Doe",
  },
  {
    img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Eius, nemo recusandae.",
    desc: "Deserunt eius nemo recusandae consectetur adipisci dolorem tempora animi quae asperiores. hasjfkdb asfbalsdjfljkas bfjklandflka fd",
    author: "John Doe",
  },
  {
    img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Eius, nemo recusandae.",
    desc: "Deserunt eius nemo recusandae consectetur adipisci dolorem tempora animi quae asperiores. hasjfkdb asfbalsdjfljkas bfjklandflka fd",
    author: "John Doe",
  },
];

const Insight = () => {
  return (
    <div className="w-full min-h-screen px-20 py-16 flex">
      <div className="flex-1 p-5 flex flex-col justify-evenly relative">
        {/* Icon Background */}
        <IconBackground
          className="w-72 h-72 absolute -z-10 top-[3rem] left-[-4rem] text-primary opacity-20"
          size={40}
        />

        {/* Heading */}
        <h1 className="text-8xl md:text-9xl font-semibold">Insights</h1>

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

      <div className="flex-1 p-5 grid grid-cols-2 gap-5">
        {blogData.map((blogData, index) => (
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
                <h1 className="text-xl font-semibold">{blogData.title}</h1>
                <p>{blogData.author}</p>
              </div>
            </div>
            <div className="w-full h-full text-lg flex justify-between flex-col p-2 ">
              <p>
                {blogData.desc.split(" ").length > 11
                  ? blogData.desc.split(" ").slice(0, 11).join(" ") + "..."
                  : blogData.desc}
              </p>

              <div className="w-full flex justify-between items-center">
                <Link href={"/insight"} className="text-primary text-xl font-semibold">
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
