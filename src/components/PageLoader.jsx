"use client";

import React from "react";

const PageLoader = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-white dark:bg-primary transition-colors duration-300">
      <div className="w-20 h-20 border-4 border-slate-300 dark:border-secondary border-t-[#915eff] rounded-full animate-spin"></div>
    </div>
  );
};

export default PageLoader;
