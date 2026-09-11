"use client";

import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../style";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "var(--exp-card-bg)",
        color: "var(--exp-card-text)",
        border: "1px solid var(--exp-card-border)",
        borderRadius: "16px",
        boxShadow: "var(--exp-card-shadow)",
      }}
      contentArrowStyle={{
        borderRight: "7px solid var(--exp-card-border)",
      }}
      date={
        <span className="text-slate-500 dark:text-secondary text-[14px] font-medium">
          {experience.date}
        </span>
      }
      iconStyle={{
        background: experience.iconBg,
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      {/* Role & company */}
      <div>
        <h3 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight">
          {experience.title}
        </h3>
        <p
          className="text-[#915eff] text-[16px] font-semibold mt-1"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      {/* Bullet points */}
      <ul className="mt-5 list-none space-y-2.5">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-slate-600 dark:text-secondary text-[14px] leading-relaxed flex gap-2"
          >
            <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#915eff]" />
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
      >
        <p className={styles.sectionSubText}>What I&apos;ve done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="var(--exp-line-color)">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
