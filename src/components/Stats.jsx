"use client";

import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const StatCard = ({ index, number, label, glowColor, textColor, bgGrad }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.25, 0.75)}
      className="w-full"
    >
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.2}
        scale={1.05}
        transitionSpeed={450}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        className="p-[1px] rounded-3xl shadow-card cursor-pointer duration-300 transition-all"
        style={{
          background: bgGrad,
          boxShadow: `0 0 25px ${glowColor}15`,
        }}
      >
        <div
          className="bg-[#151030]/85 rounded-3xl py-12 px-8 flex justify-center items-center flex-col min-h-[220px] border border-white/5 backdrop-blur-lg hover:border-white/10 transition-all duration-300"
        >
          <span
            className="text-[64px] font-black tracking-tight"
            style={{
              color: textColor,
              textShadow: `0 0 20px ${glowColor}40`,
            }}
          >
            {number}
          </span>
          <p className="text-secondary text-[18px] font-semibold uppercase tracking-widest mt-2">
            {label}
          </p>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Stats = () => {
  const statItems = [
    {
      number: "8+",
      label: "Projects",
      glowColor: "#60a5fa", // soft light blue
      textColor: "#93c5fd",
      bgGrad: "linear-gradient(135deg, #60a5fa 0%, rgba(96, 165, 250, 0) 100%)",
    },
    {
      number: "7",
      label: "Certifications",
      glowColor: "#fbbf24", // soft gold/yellow
      textColor: "#fde047",
      bgGrad: "linear-gradient(135deg, #fbbf24 0%, rgba(251, 191, 36, 0) 100%)",
    },
    {
      number: "4",
      label: "Roles",
      glowColor: "#34d399", // soft green
      textColor: "#6ee7b7",
      bgGrad: "linear-gradient(135deg, #34d399 0%, rgba(52, 211, 153, 0) 100%)",
    },
  ];

  return (
    <>
      <motion.div variants={textVariant()} className="text-center md:text-left">
        <p className={styles.sectionSubText}>My achievements</p>
        <h2 className={styles.sectionHeadText}>Milestones.</h2>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto w-full">
        {statItems.map((item, index) => (
          <StatCard key={item.label} index={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Stats, "stats");
