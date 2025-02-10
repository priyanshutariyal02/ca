"use client";

import React, { useState } from "react";

const SuggestionForm = ({ insight }: { insight: string }) => {
  const [formData, setFormData] = useState({
    pageName: "insight suggesion",
    insight: insight,
    name: "",
    email: "",
    suggestion: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    suggestion: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {
      name: "",
      email: "",
      suggestion: "",
    };

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.suggestion) newErrors.suggestion = "Suggestion is required";

    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      if (validate()) {
        // handle form submission (e.g., send data to the server)
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
          pageName: "insight suggesion",
          insight: insight,
          name: "",
          email: "",
          suggestion: "",
        });
        return response;
      }
    } catch (error) {
      return error;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full mt-10">
      <div className="flex flex-col mb-5">
        <h2 className="text-h4 font-medium text-neutral-600">
          We Value Your Feedback
        </h2>
        <p className="text-mini max-w-3xl">
          We are always looking to improve and your suggestions play a vital
          role in helping us do that. Please take a moment to share your
          thoughts, ideas, or feedback with us. We truly appreciate your input
          and look forward to hearing from you!
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl">
        <div>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md text-neutral-800 outline-primary/50 duration-150"
            placeholder="Name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md text-neutral-800 outline-primary/50 duration-150"
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <textarea
            id="suggestion"
            name="suggestion"
            value={formData.suggestion}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md text-neutral-800 outline-primary/50 duration-150"
            placeholder="Type your suggestion..."
            rows={4}
          ></textarea>
          {errors.suggestion && (
            <p className="text-red-500 text-sm mt-1">{errors.suggestion}</p>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="bg-primary text-white text-link  py-1 px-3 rounded-md hover:bg-yellow-500 transition duration-200"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SuggestionForm;
