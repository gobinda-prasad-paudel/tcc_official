import React from "react";

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
          src="https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/241166429_106503511767148_265667793722597058_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=uz5oH6Eifr0Q7kNvgGuZt9u&_nc_oc=AdgOi_wKZqroJFLNoa14q3A5amjYH3gm3O42nFjB5Gm0c5HGiVONBzvEedc58LaiFLQxYCvFxigy-hoN-dcA0kDM&_nc_zt=23&_nc_ht=scontent.fktm17-1.fna&_nc_gid=ABJGDxWRELwqw1KuzPrthx-&oh=00_AYBEi8yzlOvXQpCIlcQEbj6qgjuYC5H9UGi6XSHYubotnA&oe=67C28034"
          alt="Trinity Computer Council Logo"
          className="w-3/4 md:w-full mx-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
