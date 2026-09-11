"use client";

import Image from "next/image";
import { motion } from 'framer-motion';
import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <div className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', index * 0.25, 0.5)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card-light dark:shadow-card"
        viewport={{ once: true, amount: 0 }}
      >
        <div
          className="bg-white dark:bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col shadow-sm dark:shadow-none transition-colors duration-300"
        >
          <Image
            src={icon}
            alt={title}
            width={64}
            height={64}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-slate-900 dark:text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </div>
  );
};

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.div
        variants={fadeIn('', '', 0.05, 0.55)}
        viewport={{ once: true, amount: 0 }}
        className="mt-4 text-slate-600 dark:text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <p>
          <b>AI Engineer & MERN Stack Developer</b><br />
          I turn data and algorithms into smart, production-ready applications. With a strong foundation in AI Integration, Machine Learning, Deep Learning, and Computer Vision, I specialise in taking AI out of the research phase and integrating it into intuitive, scalable software.<br />

          <br /><b>What I do:</b> <br />
          <b>• Agentic AI & LLM Systems</b><br />
          <b>• Full-Stack Product Engineering</b><br />
          <b>• Computer Vision & ML</b><br />
          <b>• Workflow Automation</b><br />

          <br /> Let's connect if you're talking about AI deployment/integration, ML, or building the next generation of smart apps and webs!
        </p>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} title={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
