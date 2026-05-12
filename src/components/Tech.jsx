import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const TechItem = ({ index, name, icon }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.1, 0.75)}>
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.45}
        scale={1.1}
        transitionSpeed={450}
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        className='bg-tertiary p-5 rounded-2xl sm:w-[130px] w-full flex flex-col items-center justify-center border border-[#ffffff10] backdrop-blur-md shadow-card hover:shadow-neon transition-all duration-300'
        style={{
          background: "rgba(21, 16, 48, 0.6)",
        }}
      >
        <div className='w-16 h-16 object-contain flex items-center justify-center'>
          <img src={icon} alt={name} className='w-14 h-14 object-contain' />
        </div>
        <p className='text-white text-[14px] font-bold text-center mt-3 tracking-wider'>
          {name}
        </p>
      </Tilt>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-widest text-center">My technical skills</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">Technologies.</h2>
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center gap-8 mt-14'>
        {technologies.map((technology, index) => (
          <TechItem key={technology.name} index={index} {...technology} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
