import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', index * 0.25, 0.5)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        viewport={{ once: true, amount: 0 }} // Trigger earlier and only once
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }} // Trigger as soon as the element is in view
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>


      <motion.p
        variants={fadeIn('', '', 0.05, 0.55)}
        className={`${styles.sectionSubText} mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]`}
        viewport={{ once: true, amount: 0 }} // Adjusted viewport trigger
      >
        AI Engineer & MERN Stack Developer<br />
          I turn data and algorithms into smart, production-ready applications. With a strong foundation in Machine Learning, Deep Learning, and Computer Vision, I specialise in taking AI out of the research phase and integrating it into intuitive, scalable software using the MERN stack.<br />

          <br />What I do:<br />
          • AI & Computer Vision: Real-time object detection, face recognition, and generative 3D modelling/animation.<br />
          • Full-Stack Engineering: Building clean, robust architectures (MongoDB, Express, React, Node.js) that allow ML models to shine in the real world.<br />
          • Current Focus: Model deployment pipelines, real-time inference, and responsible AI.<br /> 
          <br /> Whether it's engineering a personalised AI agent or building scalable web solutions from scratch, I am driven by the impact of intelligent software.<br />

          <br/>Let's connect if you're talking about AI deployment, computer vision, or building the next generation of smart apps!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} title={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");
