import React from "react";
import { DeveloperData } from "../data";

const Developer = () => {
  return (
    <div className="  bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
      <div className="flex flex-col items-center text-center">
        {/* Developer Photo with Hover Effect */}
        <div className="relative mb-4 group">
          <img
            src={DeveloperData.image}
            alt={DeveloperData.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-[var(--accent-2)] 
                     transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
          {/* Batch Badge */}
          <span
            className="absolute bottom-0 right-0 bg-[var(--primary-color--dark)] text-white 
                          px-3 py-1 rounded-full text-xs font-medium"
          >
            Batch {DeveloperData.batch}
          </span>
        </div>

        {/* DeveloperData Details */}
        <h3 className="text-xl font-semibold text-[var(--button-primary-color)] mb-1">
          <a
            href={DeveloperData.link[0]}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent-2)] transition-colors"
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
          className=" text-teal-600 hover:text-[var(--accent-2)]  "
          href={DeveloperData.link[1]}
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </div>
    </div>
  );
};

export default Developer;
