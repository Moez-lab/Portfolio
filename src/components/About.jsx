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
        className={`${styles.sectionSubText} mt-4 text-secondary text-[17px] max-w-3xl leading-[50px]`}
        viewport={{ once: true, amount: 0 }} // Adjusted viewport trigger
      >
        <b>AI Engineer & MERN Stack Developer</b><br />
        I turn data and algorithms into smart, production-ready applications. With a strong foundation in AI Integration, Machine Learning, Deep Learning, and Computer Vision, I specialise in taking AI out of the research phase and integrating it into intuitive, scalable software.<br />

        <br /><b>What I do:</b> <br />
        <b>• AI & Computer Vision:</b> Real-time object detection, face recognition, LLM integration, NLP, Generative AI, image processing, Agentic AI, Multimodal AI <br />
        <b>• Full-Stack Engineering:</b> Building clean, robust architectures that allow models to shine in the real world.<br />
        <b>• Current Focus:</b> Model deployment pipelines, real-time inference, responsible/agentic and generative AI.<br />

        <br /> Let's connect if you're talking about AI deployment/integration, ML, or building the next generation of smart apps and webs!
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
