import SkillCard from "./SkillCard";
import Certifications from "./Certifications";
import Workflow from "./Workflow";
import { skillsData } from "../data/skillsData";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="text-4xl font-bold tracking-tight">
          Skills & Expertise
        </h2>

        <p className="mt-4 max-w-3xl text-gray-400 leading-relaxed">
          A comprehensive overview of my technical skills, tools, and frameworks.
          Continuously learning and adapting to the latest technologies in data
          science and AI.
        </p>

        {/* Skills Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              items={skill.items}
            />
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-24">
          <Certifications />
        </div>

        {/* Workflow */}
        <div className="mt-24">
          <Workflow />
        </div>
      </div>
    </section>
  );
};

export default Skills;
