"use client";
import React from "react";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
    <div className="w-full px-5 lg:px-12 py-16">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        <h1 className="text-6xl font-semibold text-neutral-700">
          FAQs
        </h1>
        {/* Accordion component should wrap AccordionItem */}

        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              {/* AccordionTrigger and AccordionContent should be inside AccordionItem */}
              <AccordionTrigger className="text-xl lg:text-2xl">{item.que}</AccordionTrigger>
              <AccordionContent>
                {Array.isArray(item.ans) ? (
                  <ul className="list-disc pl-5 space-y-2">
                    {item.ans.map((answer, idx) => (
                      <li key={idx}>{answer}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-lg max-w-5xl">{item.ans}</p>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
