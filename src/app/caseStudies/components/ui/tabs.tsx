"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tabs } from "@/data/case-studies-data";
import { IconMenu, IconX } from "@tabler/icons-react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full  top-0 relative">
      {/* Sidebar Toggle Button for small screens */}
      <button
        onClick={toggleSidebar}
        className="sm:hidden flex items-center gap-2 bg-primary text-white py-2 px-4 rounded-xl shadow-md w-max"
      >
        {sidebarOpen ? <IconX size={20} /> : <IconMenu size={20} />}
      </button>

      {/* Sidebar */}
      <div className="hidden sm:flex sm:flex-col sm:w-1/4 divide-y rounded-lg">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`w-full text-left py-3 px-4 text-h5 font-medium transition-all duration-300 border-r ${
              activeTab === tab.id
                ? "bg-primary text-white"
                : " text-neutral-700 hover:bg-yellow-50"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Sidebar for small screens */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 z-30 w-3/4 lg:h-full bg-white rounded-lg shadow-lg sm:hidden"
          >
            <div className="flex flex-col gap-2 p-4 overflow-y-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`w-full text-h5 text-left py-2 px-3 font-medium transition-all duration-300 shadow-md rounded-lg ${
                    activeTab === tab.id
                      ? "bg-primary text-white"
                      : "bg-white text-neutral-700 hover:bg-yellow-50"
                  }`}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setSidebarOpen(false); // Close sidebar after selecting a tab
                  }}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content on the right */}
      <div className="sm:w-3/4 flex-1 bg-white p-4 sm:p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="pl-2 sm:pl-6"
          >
            {tabs[activeTab].content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Tabs;
