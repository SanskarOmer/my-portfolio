import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-8 px-[8vw] md:px-[10vw] lg:px-[16vw] font-sans mt-4 md:mt-6 lg:mt-8"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-10 lg:gap-14">
        {/* Left Side - Text */}
        <div className="w-full md:w-1/2 max-w-[550px] text-center md:text-left">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Sanskar Omer
          </h2>

          {/* Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#f97316] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                "Fullstack Developer",
                "Python Developer",
                "UI/UX Designer",
                "Coder",
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#f97316]">{cursor}</span>
              )}
            />
          </h3>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-8 mt-6 leading-relaxed">
            I'm a Full-Stack Developer with 2+ years of experience building
            modern, scalable web applications. Skilled in the MERN stack,
            Django, and RESTful APIs, I create efficient, user-friendly
            solutions that combine performance with clean design.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1972DY1Qm9Kzkluhi6fsdIADnigWKXrmU/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-4 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "none",
              boxShadow: "0 0 2px #f97316, 0 0 2px #f97316, 0 0 40px #f97316",
              border: "2px solid #f97316",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side - Profile Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px] aspect-square border-4 border-[#f97316] rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Sanskar Omer"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(249,115,22,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
