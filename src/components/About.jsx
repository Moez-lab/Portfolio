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
        viewport={{ once: true, amount: 0.3 }} // Trigger earlier and only once
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
        viewport={{ once: true, amount: 0.1 }} // Trigger as soon as 10% of the element is in view
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>


      <motion.p
        variants={fadeIn('', '', 0.05, 0.55)}
        className={`${styles.sectionSubText} mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]`}
        viewport={{ once: true, amount: 0.3 }} // Adjusted viewport trigger
      >
        I am an AI/ML Engineer and LLM integrator specializing in generative AI, deep learning, computer vision, and NLP. Proficient in Python, TensorFlow, Hugging Face, OpenCV, n8n, and data engineering tools like Pandas and SQL, I develop intelligent systems that solve real-world problems. I have built projects such as an AI-based face recognition attendance system and have experience deploying models using FastAPI and Docker. Passionate about pushing the boundaries of AI, I am focused on advancing my expertise in generative AI and creating innovative, practical solutions.
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
