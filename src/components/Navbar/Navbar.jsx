import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to toggle background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-gradient-to-r from-[#0b0b0b]/90 via-[#1a1209]/80 to-[#221306]/90 backdrop-blur-md shadow-[0_2px_15px_rgba(249,115,22,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* Logo */}
        <div
          className="text-lg font-semibold cursor-pointer select-none"
          onClick={() => handleMenuItemClick("about")}
        >
          <span className="text-[#f97316]">&lt;</span>
          <span className="text-white">Sanskar</span>
          <span className="text-[#f97316]">/</span>
          <span className="text-white">Omer</span>
          <span className="text-[#f97316]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer transition-all duration-200 hover:text-[#f97316] ${
                activeSection === item.id ? "text-[#f97316]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/SanskarOmer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#f97316] transition-colors duration-200"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/sanskaromer/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#f97316] transition-colors duration-200"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#f97316] cursor-pointer transition-transform duration-200"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#f97316] cursor-pointer transition-transform duration-200"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#0b0b0b]/90 backdrop-blur-lg rounded-lg shadow-lg border border-[#f97316]/20 md:hidden z-50">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-[#f97316] transition-all duration-200 ${
                  activeSection === item.id ? "text-[#f97316]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}

            {/* Mobile Social Links */}
            <div className="flex space-x-4 mt-3">
              <a
                href="https://github.com/SanskarOmer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#f97316]"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/sanskaromer/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#f97316]"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
