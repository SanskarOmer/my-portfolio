import React, { useState, useEffect } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [closing, setClosing] = useState(false);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden"; // Disable body scroll
  };

  const handleCloseModal = () => {
    setClosing(true); // Trigger closing animation
    setTimeout(() => {
      setSelectedProject(null);
      setClosing(false);
      document.body.style.overflow = "auto"; // Re-enable scroll
    }, 300); // Match animation duration
  };

  // Safety cleanup
  useEffect(() => {
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <section
      id="work"
      className="relative py-24 px-[10vw] md:px-[8vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white tracking-wide">PROJECTS</h2>
        <div className="w-32 h-1 bg-orange-500 mx-auto mt-4"></div>
        <p className="text-gray-300 mt-4 text-lg font-semibold">
          A showcase of my best work — creative, scalable, and production-ready 🚀
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="group relative bg-[#141414]/80 border border-orange-500/30 backdrop-blur-md rounded-2xl shadow-[0_0_25px_2px_rgba(255,138,76,0.3)] overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_4px_rgba(255,138,76,0.4)]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-105"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#241a15] text-xs font-semibold text-orange-400 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className={`fixed inset-0 z-50 flex items-start justify-center bg-black/80 backdrop-blur-sm px-4 pt-24 pb-10 overflow-y-auto transition-all duration-300 ${
            closing ? "animate-fadeOut" : "animate-fadeIn"
          }`}
          onClick={handleCloseModal}
        >
          {/* Modal Container */}
          <div
            className={`relative bg-[#1b1b1b] border border-orange-500/40 rounded-2xl shadow-[0_0_35px_3px_rgba(255,138,76,0.4)] w-full max-w-3xl max-h-[85vh] overflow-y-scroll custom-scrollbar-hide transition-all duration-300 ${
              closing ? "animate-scaleDown" : "animate-scaleUp"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-4 z-50 text-3xl font-bold text-gray-400 hover:text-orange-500 transition"
            >
              &times;
            </button>

            {/* Modal Content */}
            <div className="flex flex-col">
              <div className="w-full bg-[#141414] p-4 flex justify-center">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="rounded-xl shadow-md max-h-[350px] object-contain"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 mb-6 text-sm md:text-base leading-relaxed">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#241a15] text-orange-400 text-xs font-semibold rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 text-center bg-[#2a1a13] hover:bg-orange-600 text-orange-400 hover:text-white font-semibold py-3 rounded-lg transition duration-300"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 text-center bg-gradient-to-r from-orange-500 via-[#ff7a18] to-[#ff5200] hover:opacity-90 text-white font-semibold py-3 rounded-lg transition-transform duration-300 hover:scale-105"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
