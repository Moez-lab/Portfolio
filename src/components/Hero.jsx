import { motion } from "framer-motion";
import { styles } from "../style";
import { Link } from "react-router-dom";
// Import your personal photo here
import myPhoto from "../assets/pfpic.png";
import resume from "../assets/resume.pdf";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import resumeIcon from "../assets/resumeDownloadIcon.png";


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
                        <h1 className={`${styles.heroHeadText} text-white`}>
                            Hi, I'm <span className="text-[#915eff]">Moez</span>
                        </h1>
                        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
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
                                <img
                                    className="h-10 w-10"
                                    src={github}
                                    alt="Github"
                                />
                                <p className="text-white text-[14px] mt-1">Github</p>
                            </a>

                            <a
                                className="flex flex-col justify-center items-center hover:scale-110 transition-transform"
                                href="https://www.linkedin.com/in/moezzakir/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    className="h-10 w-10"
                                    src={linkedin}
                                    alt="Linkedin"
                                />
                                <p className="text-white text-[14px] mt-1">Linkedin</p>
                            </a>

                            <a
                                className="flex flex-col justify-center items-center hover:scale-110 transition-transform"
                                href={resume}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    className="h-10 w-10"
                                    src={resumeIcon}
                                    alt="Resume"
                                />
                                <p className="text-white text-[14px] mt-1 text-center">
                                    Resume
                                </p>
                            </a>
                        </div>
                    </div>

                    {/* B. Image Section (Right Side) */}
                    <div className="flex-1 flex justify-center items-center relative">
                        {/* Optional: Add a glow effect behind the image */}
                        <div className="absolute z-0 w-[40%] h-[35%] top-0 pink__gradient" />

                        <img
                            src={myPhoto}
                            alt="Moez"
                            // Replaced rounded-2xl with rounded-full.
                            // Added aspect-square and changed object-contain to object-cover for a perfect circle.
                            className="w-[70%] aspect-square object-cover rounded-full z-10 border-2 border-secondary/20 shadow-card"
                        />
                    </div>

                </div>
            </div>

            {/* Scroll Down Animation */}
            <div className="absolute w-full xs:bottom-[10px] bottom-10 flex justify-center items-center">
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className="w-3 h-3 rounded-full bg-secondary mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;