import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative py-12 px-[10vw] md:px-[8vw] lg:px-[16vw] bg-skills-gradient clip-path-custom-3 text-white">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-2xl font-bold text-orange-500 tracking-wider">
          Sanskar Omer
        </h2>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="text-sm sm:text-base my-1 hover:text-orange-500 transition-colors duration-300"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center space-x-6 mt-6">
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com/sanskaromar/" },
            { icon: <FaTwitter />, link: "https://x.com/Sanskaromar4?t=PjQouuV8GD3Ak3OKGw91qw&s=09" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/sanskaromer/" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/_sanskaaaar/" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-orange-400 hover:text-orange-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Sanskar Omer. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
