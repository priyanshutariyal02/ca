import React from "react";
import Navbar from "../caseStudies/components/navbar";
import Image from "next/image";
import { IconClock } from "@tabler/icons-react";
import Footer from "@/components/footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-[70dvh] overflow-hidden relative bg-black">
        <Image
          src={
            "https://plus.unsplash.com/premium_photo-1682125235036-d1ab54136ff4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          width={2000}
          height={2000}
          alt="image"
          className="w-full h-full object-cover opacity-50"
        />
        <h1 className="capitalize text-4xl sm:text-5xl lg:text-7xl text-white z-30 absolute top-20 left-10 max-w-4xl p-5 leading-normal font-semibold lg:leading-relaxed">
          We are <span className="text-primary">ready</span> to help you and
          answer your questions
        </h1>
      </div>
      <div className="pt-16 px-28 w-full flex flex-col lg:flex-row lg:flex md:grid gap-5 md:grid-cols-2 items-center justify-between">
        <div className="w-[20rem] h-[10rem] border p-5">A</div>
        <div className="w-[20rem] h-[10rem] border p-5">A</div>
        <div className="w-[20rem] h-[10rem] border p-5">A</div>
        <div className="w-[20rem] h-[10rem] border p-5">A</div>
      </div>

      <div className="w-full p-5 lg:px-28 py-16 flex flex-col lg:flex-row lg:justify-between gap-10">
        <div className="flex flex-col gap-10 max-w-2xl">
          <div className="flex flex-col gap-5">
            <h1 className="text-2xl font-bold text-primary">Contact Us</h1>
            <p className="text-3xl md:text-4xl lg:text-7xl text-neutral-800">
              Get in Touch With Us & Let&apos;s Talk
            </p>
          </div>
          <div className="flex flex-col gap-5 divide-y">
            <h2 className="text-xl lg:text-3xl font-semibold">Work Hours: </h2>
            <div className="flex items-center justify-between pt-4">
              <p className="text-base lg:text-xl font-semibold">
                Monday-Friday
              </p>
              <p className="flex items-center justify-center gap-3">
                <IconClock /> 9:00 AM - 17:00 PM
              </p>
            </div>
            <div className="flex items-center justify-between pt-4">
              <p className="text-base lg:text-xl font-semibold">
                Saturday-Sunday
              </p>
              <p className="flex items-center justify-center gap-3">
                <IconClock /> Close
              </p>
            </div>
            <div className="w-full overflow-hidden pt-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1485.001048508642!2d78.04541497160035!3d30.314725229250875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c59bfa1dcf%3A0xbc1ab72395541dcc!2sJain%20Ankit%20and%20Co!5e0!3m2!1sen!2sin!4v1737879948702!5m2!1sen!2sin"
                width="800"
                height="600"
                title="location"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="w-full bg-neutral-100 lg:p-5 flex items-center justify-center">
          <form className="w-[40rem] rounded-lg bg-white shadow-lg p-5 lg:p-8 space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="full-name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                id="full-name"
                type="text"
                placeholder="John Doe"
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm"
              />
            </div>

            <div className="w-full flex gap-6">
              <div className="flex-1 space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="example@mail.com"
                  className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm"
                />
              </div>

              <div className="flex-1 space-y-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="text"
                  placeholder="(123) 456-7890"
                  className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Subject of your message"
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm resize-none"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-5 py-2 h-12 bg-primary text-white font-semibold rounded-lg hover:bg-yellow-300 transition-all shadow-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
