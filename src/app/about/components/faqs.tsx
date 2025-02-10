"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    que: "What services do you offer?",
    ans: "We specialize in offshore bookkeeping, taxation, and data analytics solutions. Our services include financial reporting, compliance, tax planning, payroll management, and transforming raw data into actionable business insights.",
  },
  {
    que: "How do you ensure the confidentiality of my data?",
    ans: "We prioritize data security through strict confidentiality agreements, encrypted data transfers, and adherence to international data protection standards, including GDPR compliance.",
  },
  {
    que: "What industries do you serve?",
    ans: "We work with clients across a wide range of industries, including e-commerce, retail, real estate, healthcare, IT, and financial services. Our expertise allows us to adapt to your specific business needs.",
  },
  {
    que: "How do you manage time zone differences?",
    ans: "Our team operates 24/7, ensuring seamless communication and service delivery regardless of your location. You will also have a dedicated resource (SPOC) to address your queries at your convenience.",
  },
  {
    que: "Can you customize services based on our requirements?",
    ans: "Absolutely! We believe in providing tailored solutions that align with your unique business needs, processes, and goals.",
  },
  {
    que: "How do you ensure accuracy and quality?",
    ans: "We have a multi-layered quality assurance process in place. Every deliverable goes through rigorous checks to ensure accuracy, compliance, and timeliness.",
  },
  {
    que: "How do we get started with PrimeVista Global?",
    ans: [
      "Consultation: We discuss your requirements and challenges.",
      "Proposal: We provide a customized plan and cost estimate.",
      "Agreement: Once finalized, we proceed with a formal agreement.",
      "Implementation: Our team begins integrating and executing the solutions.",
    ],
  },
  {
    que: "What is the cost structure for your services?",
    ans: "Our pricing is transparent and flexible, depending on the scope of services and complexity of tasks. Reach out to us for a customized quote.",
  },
  {
    que: "Can we scale services as we grow?",
    ans: "Yes! Our services are scalable, allowing you to expand or adjust as your business grows and your needs evolve.",
  },
  {
    que: "What technologies and tools do you use?",
    ans: "We work with industry-leading tools and platforms for accounting, taxation, and data analytics, such as QuickBooks, Xero, Sage, Tally, Power BI, and more. If required, we can adapt to the tools you prefer.",
  },
];

const Faq = () => {
  return (
    <div className="w-full px-5 lg:px-12 p-10 lg:py-16">
      <div className="w-full flex flex-col lg:items-center lg:justify-center gap-4 mb-5 sm:mb-12 lg:mb-16">
        <h1 className="text-h6 font-bold text-primary flex gap-2 items-center justify-start">
          <p className="w-3 h-3 bg-primary" />
          <span className="text-neutral-800">FAQs</span>
        </h1>
        <p className="text-h2 font-medium text-neutral-800 leading-none max-w-4xl lg:text-center">
          Get the Information You Need
        </p>
        <p className="text-link lg:max-w-4xl text-left lg:text-center">
          Got questions? We&apos;ve compiled answers to some of the most common
          inquiries to help you find the information you&apos;re looking for quickly
          and easily. If you don&apos;t see the answer to your question, feel
          free to reach out to our team for further assistance!
        </p>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              {/* AccordionTrigger and AccordionContent should be inside AccordionItem */}
              <AccordionTrigger>
                <p className="text-h5 text-neutral-700 py-3">{item.que}</p>
              </AccordionTrigger>
              <AccordionContent>
                <div className="p-3">
                  {Array.isArray(item.ans) ? (
                    <ul className="list-disc pl-5 space-y-2">
                      {item.ans.map((answer, idx) => (
                        <li key={idx}>{answer}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-body leading-8 max-w-5xl">{item.ans}</p>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
