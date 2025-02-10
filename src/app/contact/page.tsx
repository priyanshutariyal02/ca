import React, { ReactNode } from "react";
import Image from "next/image";
import {
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";
import Footer from "@/components/footer";
import HeroTop from "../about/components/hero-top";
import GetInTouch from "./components/get-in-touch";
import Link from "next/link";
import Navbar from "../caseStudies/components/navbar";
const locations = [
  {
    city: "New York",
    address: "29 Briggs St, Hicksville, NY 11801",
    phone: "+1 816-375-5732",
    email: "hello@primevistaglobal.com",
  },
  {
    city: "Dehradun",
    address: "'1A RCR' Racecourse Road",
    phone: "+91 999-726-7260",
    email: "hello@primevistaglobal.com",
  },
  {
    city: "Gurugram",
    address: "Plot No. 151-P, Sector 52, Haryana-122001",
    phone: "+91 999-726-7260",
    email: "hello@primevistaglobal.com",
  },
];

const contactData: {
  name: string;
  data: string;
  icon: ReactNode;
  link: string;
}[] = [
  {
    name: "WhatsApp",
    data: "+91-9997267260",
    icon: (
      <IconBrandWhatsapp
        stroke={1.2}
        size={30}
        className="text-neutral-600 group-hover:text-primary w-16 h-16 duration-200 "
      />
    ),
    link: "https://wa.me/919997267260",
  },
  {
    name: "Phone",
    data: "+1 816-375-5732",
    icon: (
      <IconPhone
        stroke={1.2}
        size={30}
        className="text-neutral-600 group-hover:text-primary w-16 h-16 duration-200 "
      />
    ),
    link: "tel:+18163755732",
  },
  {
    name: "Email",
    data: "hello@primevistaglobal.com",
    icon: (
      <IconMail
        stroke={1.2}
        size={30}
        className="text-neutral-600 group-hover:text-primary w-16 h-16 duration-200 "
      />
    ),
    link: "mailto:hello@primevistaglobal.com",
  },
  {
    name: "LinkedIn",
    data: "PrimeVista",
    icon: (
      <IconBrandLinkedin
        stroke={1.2}
        size={30}
        className="text-neutral-600 group-hover:text-primary w-16 h-16 duration-200 "
      />
    ),
    link: "#",
  },
];

const Contact = () => {
  return (
    <>
      <Navbar />

      <HeroTop
        title={"Contact Us"}
        subTitle={`We are <span class="text-primary">ready</span> to help you and answer your questions`}
      />

      <div className="pt-16 px-28 w-full  flex flex-col lg:flex-row lg:flex md:grid gap-5 md:grid-cols-2 items-center justify-between">
        {contactData.map((item) => (
          <Link
            target="blank"
            href={item.link}
            key={item.name}
            className="w-[20rem] h-[10rem] bg-white border rounded-lg flex gap-5 justify-start flex-col items-center p-5 hover:bg-[#fffff2] hover:border-primary duration-200 group shadow-lg"
          >
            {item.icon}
            <p className="text-body font-medium text-neutral-600 group-hover:text-primary duration-200">
              {item.data}
            </p>
          </Link>
        ))}
      </div>

      <div className="w-full p-5 lg:px-28 py-16 flex flex-col lg:flex-row lg:justify-between gap-10">
        <GetInTouch />
        <div className="w-full lg:px-10 flex flex-col relative">
          <Image
            src={"/assets/images/contactus.png"}
            alt="contactus"
            width={1000}
            height={1000}
            className="h-1/2 top-0 left-0 w-full rounded-lg object-cover object-top"
          />
          <div className="mt-10 w-full">
            <h2 className="text-h5 font-semibold">Our Offices:</h2>
            <div className="w-full overflow-x-auto">
              <div className="min-w-full flex flex-wrap justify-between shadow-md rounded-lg">
                {locations.map((loc, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-3 p-4 font-medium"
                  >
                    <div className=" flex flex-col ">
                      <p className="flex items-center gap-2 text-body font-medium">
                        <IconMapPin
                          stroke={2}
                          size={30}
                          className="w-6 h-6 text-neutral-600"
                        />
                        {loc.city}
                      </p>
                      <p className="text-neutral-700 pl-8 text-link">
                        {loc.address}
                      </p>
                    </div>
                    <p className="flex items-center gap-2 text-neutral-700 text-link">
                      <IconPhone
                        stroke={2}
                        size={30}
                        className="w-6 h-6 text-neutral-600"
                      />
                      {loc.phone}
                    </p>
                    <p className="flex items-center gap-2 text-neutral-700 text-link">
                      <IconMail
                        stroke={2}
                        size={30}
                        className="w-6 h-6 text-neutral-600"
                      />
                      <a
                        href={`mailto:${loc.email}`}
                        className="text-neutral-600 hover:underline"
                      >
                        {loc.email}
                      </a>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
