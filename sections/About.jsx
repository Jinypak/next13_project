'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Life" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Hope a full stack developer</span> I have a passion for building and maintaining web applications from front-end to back-end. With 2 years of experience, I have a solid understanding of multiple programming languages, including ["REACTJS", "NEXTJS"]. I have experience in developing and deploying [list of project types or technologies you have worked with].
        <span className="font-extrabold text-white">
          madness of the Life
        </span>
        of today, using only<br />
        <span className="font-extrabold text-white">I have experience</span> in developing and deploying various types of web applications, from simple landing pages to complex web platforms. I am well-versed in the latest front-end technologies and design principles, and I am always looking for ways to improve and enhance the user experience.<br />
        Take a look at <span className="underline"><a href="https://github.com/Jinypak">My Github</a></span> to see some of the projects I've been a part of. <br />If you're looking for a front-end developer who can turn your designs into a beautiful reality, please don't hesitate to [contact information or call-to-action]. I would love the opportunity to discuss your project and see how I can help."
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
