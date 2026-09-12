"use client";

import Image from "next/image";
import { styles } from "../style";

// Assets served from public/assets/
const myPhoto = "/assets/profile/pfpic.png";
const github = "/assets/icons/github.png";
const linkedin = "/assets/icons/linkedin.png";

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto">
            <div
                className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
            >
                {/* 1. The Vertical Line & Dot (Left Side) */}
                <div className="flex flex-col justify-center items-center mt-5 sm:static absolute left-5">
                    <div className="w-5 h-5 rounded-full bg-[#915eff]" />
                    <div className="w-1 h-40 sm:h-80 violet-gradient" />
                </div>

                {/* 2. Main Content Container (Splits into Text and Image) */}
                <div className="w-full flex lg:flex-row flex-col items-center lg:items-start gap-10">

                    {/* A. Text Section */}
                    <div className="flex-1">
                        <h1 className={styles.heroHeadText}>
                            Hi, I'm <span className="text-[#915eff]">Moez</span>
                        </h1>
                        <p className={`${styles.heroSubText} mt-2`}>
                            I am a Full Stack Web/App Developer <br /> AI/ML Engineer <br /> LLM
                            Integrator
                        </p>

                        {/* Social Icons */}
                        <div className="flex justify-center lg:justify-start gap-10 items-center mt-10">
                            <a
                                className="flex flex-col justify-center items-center hover:scale-110 transition-transform"
                                href="https://github.com/Moez-lab"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    className="h-10 w-10 brightness-0 dark:brightness-100 object-contain"
                                    src={github}
                                    alt="Github"
                                    width={40}
                                    height={40}
                                />
                                <p className="text-slate-700 dark:text-white text-[14px] mt-1 font-medium">Github</p>
                            </a>

                            <a
                                className="flex flex-col justify-center items-center hover:scale-110 transition-transform"
                                href="https://www.linkedin.com/in/moezzakir/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    className="h-10 w-10 object-contain"
                                    src={linkedin}
                                    alt="Linkedin"
                                    width={40}
                                    height={40}
                                />
                                <p className="text-slate-700 dark:text-white text-[14px] mt-1 font-medium">Linkedin</p>
                            </a>

                            <a
                                className="flex flex-col justify-center items-center hover:scale-110 transition-transform"
                                href="#contact"
                            >
                                <div className="h-10 w-10 bg-slate-100 dark:bg-black-200 border border-slate-300 dark:border-white/10 rounded-full flex items-center justify-center shadow-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-[#915eff]">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <p className="text-slate-700 dark:text-white text-[14px] mt-1 text-center font-medium">
                                    Email
                                </p>
                            </a>
                        </div>
                    </div>

                    {/* B. Image Section (Right Side) */}
                    <div className="flex-1 flex justify-center items-center relative">
                        {/* Optional: Add a glow effect behind the image */}
                        <div className="absolute z-0 w-[40%] h-[35%] top-0 pink__gradient opacity-50 dark:opacity-100" />

                        <Image
                            src={myPhoto}
                            alt="Moez Zakir - Full Stack Web/App Developer & AI/ML Engineer"
                            width={400}
                            height={400}
                            priority
                            fetchPriority="high"
                            sizes="(max-width: 640px) 180px, (max-width: 1024px) 300px, 400px"
                            style={{ width: "auto", height: "auto" }}
                            className="w-[70%] max-w-[340px] aspect-square object-cover rounded-full z-10 border-2 border-slate-200 dark:border-secondary/20 shadow-xl dark:shadow-card"
                        />
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Hero;