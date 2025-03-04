import React from "react";
import logo from "../assets/club_logo.png";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-2 md:p-6">
      {/* Left Section */}
      <div className="md:w-2/3 w-full text-center md:text-left md:px-4 order-2 md:order-1">
        <h1 className="text-4xl md:text-5xl font-semibold text-white">
          Trinity Computer Council
        </h1>
        <p className="text-lg md:text-xl text-white mt-4">
          {/*  Trinity Computer Council is a student organization that aims to
          provide a platform for students to showcase their technical skills and
          knowledge. We conduct various workshops, hackathons, and events to
          help students learn and grow in the field of technology. */}
          Trinity Computer Council is a student-led club focused on providing a
          platform for students of Trinity International College to develop and
          showcase their technical skills and knowledge. Our goal is to create
          an environment that encourages innovation, learning, and collaboration
          in the ever-evolving field of technology. We organize a variety of
          events, including workshops, hackathons, and seminars, to help
          students learn new technologies and improve their problem-solving
          abilities.
        </p>
        <a
          href="#projects"
          className="mt-6 inline-block px-6 py-3 bg-[#bb8e45] text-white rounded-full text-lg hover:bg-[#83634a] focus:outline-none focus:ring-2 focus:ring-[#bb8e45] transition"
        >
          Learn More
        </a>
      </div>

      {/* Right Section */}
      <div className="md:w-1/3 w-full order-1 md:order-2 mt-4 md:mt-0">
        <img
          src={logo}
          alt="Trinity Computer Council Logo"
          className="w-3/4 md:w-full mx-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
