import React from "react";

const OurLeaders = () => {
  const leaders = [
    {
      name: "Jane Doe",
      title: "Chief Executive Officer",
      description:
        "Jane leads the team with over 15 years of experience in corporate strategy and innovation.",
      img: "/assets/images/own.jpg", // Replace with actual image URL
    },
    {
      name: "John Smith",
      title: "Head of Marketing",
      description:
        "John specializes in digital marketing and has successfully launched numerous campaigns worldwide.",
      img: "/assets/images/own.jpg", // Replace with actual image URL
    },
    {
      name: "Emily White",
      title: "Chief Technology Officer",
      description:
        "Emily drives the technology vision and ensures our platforms are cutting-edge and scalable.",
      img: "/assets/images/own.jpg", // Replace with actual image URL
    },
    {
      name: "Michael Brown",
      title: "Finance Manager",
      description:
        "Michael ensures financial stability and growth, with expertise in budget management and investments.",
      img: "/assets/images/own.jpg", // Replace with actual image URL
    },
  ];

  return (
    <div className="w-full min-h-screen py-16 px-28">
      <div className="w-full flex items-center flex-col gap-5">
        <h1 className="text-h6 font-bold text-primary flex gap-2 items-center justify-start">
          <p className="w-3 h-3 bg-primary" />{" "}
          <span className="text-neutral-800">Our Leaders</span>
        </h1>
        <h2 className="text-h2 leading-none font-medium text-neutral-800 max-w-4xl text-center">
          Meet Our Team of Experts
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="group relative bg-white shadow-lg rounded-2xl overflow-hidden transition-all hover:shadow-2xl hover:scale-105"
          >
            <img
              src={leader.img}
              alt={leader.name}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-neutral-800">
                {leader.name}
              </h3>
              <p className="text-sm text-neutral-500">{leader.title}</p>
            </div>
            <div className="absolute inset-0 bg-neutral-900 bg-opacity-90 text-white flex flex-col justify-center items-center px-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-sm text-white">{leader.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurLeaders;
