import { IconClock } from "@tabler/icons-react";
import React from "react";
import ContactForm from "./contact-form";

const GetInTouch = () => {
  return (
    <div className="w-full flex flex-col gap-10 max-w-2xl">
      <div className="flex flex-col gap-5">
        <h1 className="text-h2 font-medium text-neutral-800">
          Get in Touch With Us
        </h1>
      </div>
      <div className="flex flex-col gap-5 divide-y">
        <h2 className="text-h5 font-semibold">Work Hours: </h2>
        <div className="flex items-center justify-between pt-4">
          <p className="text-body font-medium">Monday-Saturday</p>
          <p className="flex items-center font-medium text-body justify-center gap-3">
            <IconClock /> 9:00 AM - 11:00 PM
          </p>
        </div>
        <div className="flex items-center justify-between pt-4">
          <p className="text-body font-medium">Sunday</p>
          <p className="flex items-center font-medium text-body justify-center gap-3">
            <IconClock /> Close
          </p>
        </div>
        <div className="w-full overflow-hidden pt-10">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
