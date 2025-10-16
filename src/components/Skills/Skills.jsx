
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-[8vw] md:px-[10vw] lg:px-[14vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#f97316] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold max-w-3xl mx-auto">
        My go-to stack for building scalable and modern applications.

      </p>
    </div>

    {/* Skill Categories */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 justify-items-center">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-[#141414]/80 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 w-full max-w-[500px] rounded-2xl border border-[#f97316] shadow-[0_0_20px_1px_rgba(249,115,22,0.3)]"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-6 text-center">
            {category.title}
          </h3>

          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center space-x-2 border-2 border-[#f97316] rounded-3xl py-2 px-2 sm:py-2 sm:px-2 bg-transparent"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                  <span className="text-xs sm:text-sm text-gray-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
