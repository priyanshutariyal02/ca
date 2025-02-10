"use client";

import React, { useState } from "react";
import { FlipWords } from "./ui/flip-words";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import Link from "next/link";
import Image from "next/image";
import { IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials, words } from "@/data/constants";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface FormData {
  pageName: string;
  name: string;
  email: string;
  phone: string;
  serviceName: string;
  message: string;
}

const Hero = () => {
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    pageName: "Deep Dive",
    name: "",
    email: "",
    phone: "",
    serviceName: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPhoneError, setIsPhoneError] = useState<boolean>(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.phone.length < 10) {
      setIsPhoneError(true);
      return;
    }
    setIsSubmitting(true);
    setIsPhoneError(false);

    try {
      // Simulating API call (replace this with actual API request)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "78813003-0773-470d-b453-c2c4c52ff90d",
          ...formData,
        }),
      });

      // Reset form and close popup
      setFormData({
        pageName: "Deep Dive",
        name: "",
        email: "",
        phone: "",
        serviceName: "",
        message: "",
      });
      setIsOpenDialog(false);
      return response;
    } catch (err) {
      console.log(err);
      setError("Something went wrong. Please try again.");
      return err;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[80dvh] w-full relative mt-20 flex justify-between items-center lg:items-start px-0 lg:px-4 flex-col">
      <AnimatePresence>
        {isOpenDialog && (
          <motion.div
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Popup Container */}
            <motion.div
              className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsOpenDialog(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition"
                aria-label="Close"
              >
                <IconX />
              </button>

              {/* Image Section */}
              <div className="w-full h-40 sm:h-48">
                <Image
                  src="/assets/images/gp.png"
                  alt="Deep Dive"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="p-4 text-neutral-800">
                <div className="flex flex-col gap-1 mb-4">
                  <h1 className="text-h5 font-semibold text-center">
                    Deep Dive
                  </h1>
                  <p className="text-14px text-neutral-500 text-center">
                    Take a deep dive into insights and solutions. We&apos;re here to
                    help you navigate every challenge
                  </p>
                </div>

                {/* Error Message */}
                {error && (
                  <p className="text-red-500 text-center mb-2">{error}</p>
                )}

                {/* Form Section */}
                <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                      required
                    />
                  </div>
                  <div className="w-full flex flex-col lg:flex-row gap-2">
                    <PhoneInput
                      international
                      defaultCountry="US"
                      value={formData.phone}
                      onChange={(value) =>
                        setFormData({ ...formData, phone: value || "" })
                      }
                      className={cn(
                        `w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition`,
                        isPhoneError && "outline outline-red-500"
                      )}
                    />

                    <Select
                      onValueChange={(value) =>
                        setFormData({ ...formData, serviceName: value })
                      }
                      required
                    >
                      <SelectTrigger className="w-full lg:max-w-36 h-full px-4 py-3 font-medium text-neutral-500 border border-gray-300 rounded-lg">
                        <SelectValue placeholder="Select Service" />
                      </SelectTrigger>
                      <SelectContent>
                        {[
                          "Virtual Bookkeeping",
                          "Bank Reconciliation",
                          "Payroll & Salary",
                          "Virtual CFO",
                          "Data Analytics",
                          "Tax Preparations",
                        ].map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <textarea
                    name="message"
                    placeholder="Message..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg h-24 resize-none focus:outline-none focus:ring-2 focus:ring-primary transition"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-primary text-white font-semibold py-2 rounded-lg hover:bg-primary-dark transition disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Heading Section */}
      <div className="text-h2 text-left lg:text-7xl absolute font-bold lg:left-20 lg:top-20 text-neutral-300 lg:leading-[5.5rem] capitalize sm:text-left bg-black/20 lg:bg-black/0 rounded-2xl backdrop-blur-[1px] lg:backdrop-blur-0 p-5">
        Beyond boundaries <br />
        building{" "}
        <FlipWords words={words} className="font-bold text-primary pl-3" />
        <p className="text-xl font-normal mt-2 text-white sm:text-center" />
      </div>

      {/* Button Section */}
      <div className="relative min-w-screen top-[14rem] lg:top-[20rem] z-20 flex flex-col sm:flex-row items-start justify-center gap-5 sm:top-[20rem] lg:pl-[5rem]">
        <button
          type="button"
          onClick={() => setIsOpenDialog(true)}
          className="bg-primary rounded-full px-6 py-3 text-white text-lg font-semibold hover:bg-yellow-600 duration-200 w-full sm:w-auto"
        >
          Deep Dive
        </button>
        <Link
          href={"/about"}
          type="button"
          className="border border-primary rounded-full px-6 py-3 text-white text-lg font-semibold hover:bg-neutral-800 hover:text-primary duration-200 w-full sm:w-auto"
        >
          Know More
        </Link>
      </div>

      {/* Infinite Moving Cards */}
      <div className="w-full -mt-10 sm:mt-16 relative">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default Hero;
