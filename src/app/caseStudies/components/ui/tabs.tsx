"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tabs } from "@/data/case-studies-data";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full flex flex-col items-start">
      {/* Tabs Row */}
      <div className="grid grid-cols-2 lg:flex gap-4 w-full pb-2">
        {tabs.map((tab) => (
          <button
            type="button"
            key={tab.id}
            className={`px-4 py-2 text-mini font-semibold transition-all duration-300 rounded-t-lg whitespace-nowrap ${
              activeTab === tab.id
                ? "bg-primary text-white rounded-lg"
                : "text-neutral-700 hover:text-primary"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="w-full py-4 lg:p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="p-2"
          >
            {tabs.find((tab) => tab.id === activeTab)?.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Tabs;
