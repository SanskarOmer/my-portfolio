import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./components/BlurBlob";

const App = () => {
  return (
    <div className="relative min-h-screen text-white overflow-hidden bg-gradient-to-br from-[#0b0b0b] via-[#1a1209] to-[#221306]">

      {/* Blurred Orange Accent */}
      <BlurBlob
        position={{ top: "10%", left: "25%" }}
        size={{ width: "20%", height: "30%" }}
      />

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3d2a1a33_1px,transparent_1px),linear-gradient(to_bottom,#3d2a1a33_1px,transparent_1px)] bg-[size:16px_28px] opacity-40 [mask-image:radial-gradient(ellipse_65%_55%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none"></div>

      {/* Main Content */}
      <div className="relative pt-20 z-10">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>

    </div>
  );
};

export default App;
