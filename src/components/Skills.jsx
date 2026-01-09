import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import Certifications from "./Certifications";
import Workflow from "./Workflow";
import { skillsData } from "../data/skillsData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.h2
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="text-4xl font-bold tracking-tight"
        >
          Skills & Expertise
        </motion.h2>

        <motion.p
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="mt-4 max-w-3xl text-gray-400 leading-relaxed"
        >
          A comprehensive overview of my technical skills, tools, and frameworks.
          Continuously learning and adapting to the latest technologies in data
          science and AI.
        </motion.p>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillsData.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              <SkillCard
                title={skill.title}
                items={skill.items}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="mt-24"
        >
          <Certifications />
        </motion.div>

        {/* Workflow */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="mt-24"
        >
          <Workflow />
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
