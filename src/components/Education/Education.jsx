import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans "
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-[#f97316] mx-auto mt-4 rounded"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-3xl mx-auto">
          My education has been a journey of learning and development. Here are
          the details of my academic background.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#f97316] to-[#ffb86b] h-full z-0"></div>

        {education.map((edu, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={edu.id}
              className="flex flex-col sm:flex-row items-center mb-20 relative"
            >
              {/* Timeline Circle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-900 border-4 border-[#f97316] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-20 shadow-lg">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Content Card */}
              <div
                className={`w-full sm:max-w-md p-6 rounded-2xl border border-[#f97316] bg-[#141414]/80 backdrop-blur-md shadow-lg transition-transform duration-300 hover:scale-105 z-10
                  ${isLeft ? "sm:mr-[55%] ml-4" : "sm:ml-[55%] mr-4"} mt-12`}
              >
                {/* Header */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0 bg-white">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#f97316]">
                      {edu.degree}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">
                      {edu.school}
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
                  </div>
                </div>

                {/* Grade & Description */}
                <p className="mt-4 text-gray-300 font-medium">
                  Grade:{" "}
                  <span className="text-[#f97316] font-semibold">
                    {edu.grade}
                  </span>
                </p>
                <p className="mt-3 text-gray-400">{edu.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
