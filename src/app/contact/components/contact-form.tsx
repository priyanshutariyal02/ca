"use client";

import { cn } from "@/lib/utils";
import { useState, useCallback } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface FormData {
  pageName: string;
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    pageName: "Contact Form",
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isPhoneError, setIsPhoneError] = useState<boolean>(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    },
    []
  );

  const handlePhoneChange = useCallback((value: string | undefined) => {
    setFormData((prevData) => ({
      ...prevData,
      phone: value || "",
    }));
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (formData.phone.length < 10) {
        setIsPhoneError(true);
        return;
      }
      setIsSubmitting(true);
      setIsPhoneError(false);

      try {
        console.log("Form submitted", formData);
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

        setFormData({
          pageName:"Contact Form",
          fullName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        return response;
      } catch (error) {
        console.log(error);
        return error;
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData]
  );

  const inputStyles =
    "w-full h-12 px-4 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm";
  const buttonStyles =
    "px-5 py-2 h-12 bg-primary text-white font-semibold rounded-lg hover:bg-yellow-300 transition-all shadow-lg";

  return (
    <form
      className="w-full max-w-[40rem] rounded-lg bg-white shadow-lg p-4 sm:p-6 lg:p-8 space-y-6 z-20"
      onSubmit={handleSubmit}
    >
      <div className="space-y-2">
        <label
          htmlFor="full-name"
          className="block text-sm font-medium text-neutral-700"
        >
          Full Name
        </label>
        <input
          id="full-name"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="John Doe"
          required
          className={inputStyles}
        />
      </div>

      <div className="w-full flex gap-6 flex-col sm:flex-row">
        <div className="flex-1 space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-neutral-700"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@mail.com"
            required
            className={inputStyles}
          />
        </div>

        <div className="flex-1 space-y-2">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-neutral-700"
          >
            Phone Number
          </label>
          <PhoneInput
            international
            defaultCountry="US"
            value={formData.phone}
            onChange={handlePhoneChange}
            className={cn(
              `w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition`,
              isPhoneError && "outline outline-red-500"
            )}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-neutral-700"
        >
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject of your message"
          required
          className={inputStyles}
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-neutral-700"
        >
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message here..."
          required
          className="w-full h-32 px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm resize-none"
        />
      </div>

      <div className="flex justify-end">
        <button type="submit" className={buttonStyles} disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
}
