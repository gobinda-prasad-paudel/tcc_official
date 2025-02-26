import React, { useEffect, useRef } from "react";
import { DeveloperData } from "../data";
import gsap from "gsap";

const Developer = () => {
  return (
    <div className="w-full flex content-center items-center justify-center text-center">
      <div className="w-1/2 bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl flex flex-row items-center text-center">
        <div className="flex flex-col items-center justify-center text-center w-1/2">
          <div className="relative mb-4 group">
            <img
              src={DeveloperData.image}
              alt={DeveloperData.name}
              className="w-64 h-64 rounded-full object-cover border-4 border-[var(--accent-2)] 
                     transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <span
              className="absolute bottom-0 right-20 bg-[var(--primary-color--dark)] text-white 
                          px-3 py-1 rounded-full text-xs font-medium"
            >
              Batch {DeveloperData.batch}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center text-center w-1/2">
          <h3 className="text-xl font-semibold text-[var(--button-primary-color)] mb-1">
            <a
              href={DeveloperData.link[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent-2)] transition-colors text-2xl"
            >
              {DeveloperData.name}
            </a>
          </h3>
          <p className="text-[var(--neutral-2)] mb-2">
            Post: {DeveloperData.post}
          </p>
          <p className="text-[var(--neutral-2)] mb-2">
            Boards: {DeveloperData.boards}
          </p>
          <a
            className="text-teal-600 hover:text-[var(--accent-2)]"
            href={DeveloperData.link[1]}
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on: LinkedIn
          </a>
          <p className="text-left text-[var(--neutral-2)] mb-2">
            Hello, I am {DeveloperData.name}. I am a {DeveloperData.post} at
            Trinity Computer Council. I am currently working to make Trinity
            Computer Council one of the best clubs in the entire college.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Developer;
