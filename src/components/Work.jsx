"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";


const charLimit = 160;

const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  images,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);
  const [fading, setFading] = useState(false);

  // Normalise: support both `images` array and legacy `image` string
  const imgList = Array.isArray(images) ? images : [images].filter(Boolean);
  const hasMultiple = imgList.length > 1;

  const goTo = useCallback(
    (nextIdx) => {
      if (fading) return;
      setFading(true);
      setTimeout(() => {
        setCurrentImg(nextIdx);
        setFading(false);
      }, 200);
    },
    [fading]
  );

  const prev = (e) => {
    e.stopPropagation();
    goTo((currentImg - 1 + imgList.length) % imgList.length);
  };

  const next = (e) => {
    e.stopPropagation();
    goTo((currentImg + 1) % imgList.length);
  };

  const toggleDescription = () => setIsExpanded(!isExpanded);
  const truncatedDescription =
    description.length > 100
      ? `${description.substring(0, charLimit)}...`
      : description;

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div
        className="bg-white dark:bg-tertiary text-slate-900 dark:text-white p-5 rounded-2xl sm:w-[360px] w-full border border-slate-200 dark:border-white/5 shadow-lg dark:shadow-card hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
      >
        {/* ── Image carousel ─────────────────────────────────── */}
        <div className="relative w-full h-[230px] overflow-hidden rounded-2xl group">
          {/* Clickable image — opens full-size in new tab */}
          <Image
            src={imgList[currentImg]}
            alt={`${name} screenshot ${currentImg + 1}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
            onClick={() => window.open(imgList[currentImg], "_blank")}
            className="object-cover rounded-2xl cursor-zoom-in"
            style={{
              transition: "opacity 0.2s ease",
              opacity: fading ? 0 : 1,
            }}
          />

          {/* Hover overlay hint */}
          <div className="absolute inset-0 rounded-2xl bg-black/0 group-hover:bg-black/10 transition-colors duration-200 pointer-events-none" />

          {/* Prev / Next arrows — only for multi-image projects */}
          {hasMultiple && (
            <>
              <button
                onClick={prev}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={next}
                aria-label="Next image"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
              >
                <ChevronRight />
              </button>

              {/* Dot indicators */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {imgList.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); goTo(i); }}
                    aria-label={`Go to image ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${
                      i === currentImg
                        ? "w-4 h-2 bg-white"
                        : "w-2 h-2 bg-white/50 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>

              {/* Image counter badge (top-left) */}
              <span className="absolute top-2 left-2 bg-black/50 text-white text-[11px] px-2 py-0.5 rounded-full z-10 font-medium">
                {currentImg + 1} / {imgList.length}
              </span>
            </>
          )}
        </div>

        {/* ── Text content ────────────────────────────────────── */}
        <div className="mt-5">
          <h3 className="text-slate-900 dark:text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-slate-600 dark:text-secondary text-[14px]">
            {isExpanded ? description : truncatedDescription}
            {description.length > charLimit && (
              <span
                className="text-blue-500 cursor-pointer"
                onClick={toggleDescription}
              >
                {isExpanded ? " Show less" : " Read more"}
              </span>
            )}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Work = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className="w-full flex ">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-slate-600 dark:text-secondary text-[16px] max-w-3xl leading-[28px]"
        >
          I have worked on a diverse array of projects that showcase my
          passion for technology and innovation. From building responsive
          websites and full-stack applications to developing intelligent AI/ML
          models, I am driven by the challenge of
          creating seamless user experiences and implementing efficient,
          data-driven solutions.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Work, "work");
