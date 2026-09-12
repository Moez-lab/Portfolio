"use client";

import { motion } from "framer-motion";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { certifications } from "../constants";

// External link icon (inline SVG — no extra dependency needed)
const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

// Issuer → accent-colour mapping
const issuerColor = {
  "Stanford Online": "from-red-500 to-rose-400",
  Udemy: "from-violet-500 to-purple-400",
  Cisco: "from-blue-500 to-cyan-400",
  "Harvard University": "from-red-700 to-red-500",
};

const CertCard = ({ index, title, issuer, link }) => {
  const gradient = issuerColor[issuer] ?? "from-indigo-500 to-blue-400";

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.6)}
      className="group relative bg-white dark:bg-tertiary border border-slate-200 dark:border-white/5 rounded-2xl p-5 shadow-md dark:shadow-card hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col gap-3"
    >
      {/* Gradient accent bar */}
      <div className={`absolute top-0 left-0 h-1 w-full rounded-t-2xl bg-gradient-to-r ${gradient}`} />

      {/* Issuer badge */}
      <span
        className={`self-start text-[11px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full bg-gradient-to-r ${gradient} text-white`}
      >
        {issuer}
      </span>

      {/* Title */}
      <h3 className="text-slate-900 dark:text-white font-bold text-[16px] leading-snug">
        {title}
      </h3>

      {/* View credential link */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View credential for ${title} from ${issuer}`}
        className="mt-auto inline-flex items-center gap-1.5 text-[13px] font-medium text-slate-500 dark:text-secondary hover:text-blue-500 dark:hover:text-white transition-colors duration-200"
      >
        View Credential <ExternalLinkIcon />
      </a>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I&apos;ve Earned</p>
        <h2 className={styles.sectionHeadText}>Certifications</h2>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <CertCard key={cert.title} index={index} {...cert} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
