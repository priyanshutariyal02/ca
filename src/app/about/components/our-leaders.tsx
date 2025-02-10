import Image from "next/image";
import React, { useState } from "react";

interface Leader {
  name: string;
  title: string;
  description: string;
  img: string;
}

const OurLeaders = () => {
  const initialLeaders: Leader[] = [
    {
      name: "Ankit Jain",
      title: "Chief Executive Officer",
      description:
        "Ankit Jain the CEO of PrimeVista is a distinguished Chartered Accountant and also the founder of Jain Ankit and Co, Chartered Accountants (est. 2015), brings over 14 years of expertise in accounting, auditing, and consulting. As the CEO, his leadership and vision have been instrumental in its growth and success.",
      img: "/assets/images/tm1.jpg",
    },
    {
      name: "Shefali Patwal",
      title: "Director",
      description:
        "Shefali Patwal, with over 12 years of experience in auditing, company law compliance, and handling scrutiny and appeals, is a valuable asset to our team. Her dedication and expertise play a key role in our success and maintaining high standards of excellence",
      img: "/assets/images/tm2.jpg",
    },
    {
      name: "Jigyasa Mehta",
      title: "Senior Manager",
      description:
        "Jigyasa Mehta, a Chartered Accountant with over 11 years of experience in audits and income tax, specializes in sectors like Education, Service Industries, and Manufacturing. She leads our tax and regulatory division, managing direct and indirect taxation for key clients.",
      img: "/assets/images/tm4.jpg",
    },
    {
      name: "Ayaan Hasan",
      title: "Senior Manager",
      description:
        "Ayaan Hasan, with over 11 years of experience in professional services, specializes in internal audits, statutory audits of PSUs, and direct/indirect taxation. Currently completing his Chartered Accountancy certification, Ayaan's expertise and dedication are valuable assets to our team.",
      img: "/assets/images/tm3.jpg",
    },
  ];

  const [currentLeader, setCurrentLeader] = useState<Leader>(initialLeaders[0]);
  const [otherLeaders, setOtherLeaders] = useState<Leader[]>(
    initialLeaders.slice(1)
  );

  const handleLeaderClick = (leader: Leader) => {
    setOtherLeaders((prevLeaders) => {
      const updatedLeaders = prevLeaders.filter((l) => l !== leader);
      return [...updatedLeaders, currentLeader];
    });
    setCurrentLeader(leader);
  };

  return (
    <div className="w-full flex-col pt-10 lg:pt-16 px-5 lg:px-28 flex gap-10">
      <div className="w-full flex flex-col lg:items-center lg:justify-center gap-4">
        <h1 className="text-h6 font-bold text-primary flex gap-2 items-center justify-start">
          <p className="w-3 h-3 bg-primary" />
          <span className="text-neutral-800">Our Leaders</span>
        </h1>
        <p className="text-h2 font-medium text-neutral-800 leading-none max-w-4xl  lg:text-center">
          Meet our Team of Experts
        </p>
        <p className="text-body max-w-4xl text-left lg:text-center">
          Our experienced professionals specialize in offshore bookkeeping,
          taxation, and data analytics, ensuring precision, efficiency, and
          strategic insights for your business.
        </p>

        {/*for small devices */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:hidden">
          {initialLeaders.map((leader) => (
            <div
              key={leader.name}
              className="bg-white border flex flex-col rounded-lg p-3 gap-3 shadow-lg"
            >
              <div className="flex items-center gap-6">
                <Image
                  src={leader.img}
                  alt={leader.name}
                  width={100}
                  height={100}
                  className="rounded-full border-4 border-primary"
                />
                <div>
                  <h1 className="font-medium text-h5">{leader.name}</h1>
                  <p className="text-link text-neutral-500">{leader.title}</p>
                </div>
              </div>
              <p className="text-link p-2">{leader.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full py-10 lg:flex items-center justify-center hidden">
        <div className="w-1/3 flex flex-col items-center text-center">
          <div className="w-[26rem] h-[26rem] flex items-center justify-center rounded-full bg-primary p-5">
            <Image
              src={currentLeader.img}
              alt={currentLeader.name}
              width={2000}
              height={2000}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h1 className="text-h5 font-semibold mt-4">{currentLeader.name}</h1>
          <h2 className="text-link">{currentLeader.title}</h2>
          <p className="text-neutral-600 max-w-xs mt-2">
            {currentLeader.description}
          </p>
        </div>
        <div className="w-2/3 flex flex-wrap gap-5 items-center justify-evenly">
          {otherLeaders.map((leader, index) => (
            <div
              key={index}
              onClick={() => handleLeaderClick(leader)}
              className="cursor-pointer flex flex-col items-center p-4 hover:scale-105 duration-200"
            >
              <div className="w-[13rem] h-[13rem] rounded-full overflow-hidden p-3 bg-primary">
                <Image
                  src={leader.img}
                  alt={leader.name}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="font-semibold mt-2">{leader.name}</h3>
              <p className="text-sm text-neutral-500">{leader.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurLeaders;
