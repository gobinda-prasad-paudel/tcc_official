import React from "react";
import { DeveloperData } from "../data";

const Developer = () => {
  return (
    <div className="w-full   flex items-center justify-center px-4 py-8">
      <div
        className="w-full max-w-4xl bg-gray-800 p-6 rounded-lg shadow-lg 
                   transform transition-all hover:scale-[1.02] hover:shadow-xl 
                   flex flex-col md:flex-row gap-6"
      >
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative mb-4 group max-w-[16rem]">
            <img
              src={DeveloperData.image}
              alt={DeveloperData.name}
              className="w-full h-auto max-w-[16rem] max-h-[16rem] rounded-full 
                        object-cover border-4 border-[var(--accent-2)] 
                        transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <span
              className="absolute bottom-0 right-4 bg-[var(--primary-color--dark)] 
                        text-white px-3 py-1 rounded-full text-xs font-medium"
            >
              Batch {DeveloperData.batch}
            </span>
          </div>
        </div>

        {/* Text Content Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-semibold text-[var(--button-primary-color)] mb-2">
            <a
              href={DeveloperData.link[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent-2)] transition-colors"
            >
              {DeveloperData.name}
            </a>
          </h3>
          <p className="text-[var(--neutral-2)] mb-2 text-sm md:text-base">
            Post: {DeveloperData.post}
          </p>
          <p className="text-[var(--neutral-2)] mb-2 text-sm md:text-base">
            Boards: {DeveloperData.boards}
          </p>
          <a
            className="text-teal-600 hover:text-[var(--accent-2)] mb-3 text-sm md:text-base"
            href={DeveloperData.link[1]}
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn
          </a>
          <p className="text-[var(--neutral-2)] text-sm md:text-base">
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
