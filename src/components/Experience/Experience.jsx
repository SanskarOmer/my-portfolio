import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-[#f97316] mx-auto mt-4 rounded"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-3xl mx-auto">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#f97316] to-[#ffb86b] h-full z-0"></div>

        {experiences.map((experience, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={experience.id}
              className="flex flex-col sm:flex-row items-center mb-20 relative"
            >
              {/* Timeline Circle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-900 border-4 border-[#f97316] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-20 shadow-lg">
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Content Card */}
              <div
                className={`w-full sm:max-w-md p-6 rounded-2xl border border-[#f97316] bg-[#141414]/80  backdrop-blur-md shadow-lg transition-transform duration-300 hover:scale-105 z-10
                  ${isLeft ? "sm:mr-[55%] ml-4" : "sm:ml-[55%] mr-4"} mt-12`}
              >
                {/* Header */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#f97316]">
                      {experience.role}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">
                      {experience.company}
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">{experience.date}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-gray-400">{experience.desc}</p>

                {/* Skills */}
                <div className="mt-4">
                  <h5 className="font-medium text-white mb-2">Skills:</h5>
                  <ul className="flex flex-wrap">
                    {experience.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="bg-[#f97316] text-gray-900 px-3 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-orange-400"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
