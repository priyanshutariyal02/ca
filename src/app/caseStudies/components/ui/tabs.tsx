"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      title: "Case Study: E-commerce Platform",
      content: (
        <div className="w-full flex flex-col gap-5">
          <h1 className="text-6xl">Scaling an E-commerce Platform</h1>
          <p className="max-w-4xl text-lg">
            Our client, a growing e-commerce platform, faced challenges with
            handling high traffic during peak shopping seasons. We implemented a
            scalable cloud infrastructure, optimized the database, and
            introduced a CDN to improve loading times. As a result, the platform
            handled 3x more traffic, reduced cart abandonment rates by 25%, and
            improved overall user satisfaction.
          </p>
        </div>
      ),
    },
    {
      id: 1,
      title: "Case Study: Healthcare App",
      content: (
        <div className="w-full flex flex-col gap-5">
          <h1 className="text-6xl">Revolutionizing Patient Care</h1>
          <p className="max-w-4xl text-lg">
            A healthcare provider wanted to digitize patient records and enable
            telemedicine services. We developed a secure, HIPAA-compliant app
            that allowed patients to book appointments, access records, and
            consult doctors online. The app saw a 60% adoption rate within the
            first 6 months and improved appointment scheduling efficiency by
            40%.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      title: "Case Study: SaaS Product Launch",
      content: (
        <div className="w-full flex flex-col gap-5">
          <h1 className="text-6xl">Launching a SaaS Solution</h1>
          <p className="max-w-4xl text-lg">
            A startup aimed to launch a SaaS product for project management. We
            worked on end-to-end product development, from user research and
            prototyping to development and deployment. The launch was a success,
            with the product gaining 10,000 users within the first quarter and
            earning high praise for its user-friendly interface and robust
            features.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-6 w-full">
      {/* Tabs on the left */}
      <div className="sm:w-1/4 flex flex-col gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`w-full text-left py-3 px-4 text-xl font-semibold transition-all duration-300 text-black shadow-md rounded-lg ${
              activeTab === tab.id
                ? "bg-primary/80 text-white"
                : "text-neutral-700 bg-white hover:bg-yellow-50"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Content on the right */}
      <div className="sm:w-3/4 flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="pl-6"
          >
            {tabs[activeTab].content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Tabs;
