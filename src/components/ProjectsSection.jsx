import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { magazineData, projects, achievements, whatWeDo } from "../data";

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const tableRef = useRef(null);

  return (
    <div
      ref={sectionRef}
      className="bg-[var(--primary-backgroundcolor--dark)] text-[var(--font-color-dark)] py-16 px-4"
    >
      {/* What We Do Section */}
      <section className="container mx-auto mb-20">
        <h2 className="section-title text-4xl font-bold text-[var(--secondary-color--dark)] mb-12">
          Our main work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whatWeDo.map((item, index) => (
            <div
              ref={(el) => (cardRefs.current[projects.length + index] = el)}
              key={index}
              className="bg-gray-800 p-6 rounded-lg border-l-4 border-[var(--accent-2)]"
            >
              <h3 className="text-xl font-bold text-[var(--button-primary-color)] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Infinity Magazine Section */}
      <section id="infinity" className="container mx-auto mb-20">
        <h2 className="section-title text-4xl font-bold text-[var(--secondary-color--dark)] mb-8">
          Infinity Magazine
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="overflow-x-auto" ref={tableRef}>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-800">
                  <th className="p-3 text-left">S.N</th>
                  <th className="p-3 text-left">Year</th>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Authors</th>
                  <th className="p-3 text-left">Clubs</th>
                  <th className="p-3 text-left">Link</th>
                </tr>
              </thead>
              <tbody>
                {magazineData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-700 ">
                    <td className="p-3">{index + 1}</td>
                    <td className="p-3">{item.year}</td>
                    <td className="p-3">{item.name}</td>
                    <td className="p-3">{item.authors.join(", ")}</td>
                    <td className="p-3">{item.clubs.join(", ")}</td>
                    <td className="p-3">
                      <a
                        href={item.link}
                        className="text-green underline"
                        target="_blank"
                      >
                        LINK
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col items-center">
            <a href={magazineData[0].link} className="group">
              <img
                src="https://saralnotes.com/wp-content/uploads/2019/11/trinityyy.jpg"
                alt="Infinity Magazine Cover"
                className="rounded-lg shadow-xl transform transition-transform group-hover:scale-105"
              />
              <p className="mt-4 text-[var(--accent-2)] hover:text-[var(--secondary-color--dark)] transition-colors">
                View Latest Issue →
              </p>
            </a>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="container mx-auto mb-20">
        <h2 className="section-title text-4xl font-bold text-[var(--secondary-color--dark)] mb-12">
          Our Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              ref={(el) => (cardRefs.current[index] = el)}
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-transform hover:scale-102"
            >
              <img
                src={project.image}
                alt={project.projectName}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[var(--button-primary-color)] mb-3">
                  {project.projectName}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="text-[var(--neutral-2)]">
                  <span className="font-semibold">Team:</span>{" "}
                  {project.involvedMembers.join(", ")}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="container mx-auto">
        <h2 className="section-title text-4xl font-bold text-[var(--secondary-color--dark)] mb-12">
          Our Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              ref={(el) =>
                (cardRefs.current[projects.length + whatWeDo.length + index] =
                  el)
              }
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src={achievement.image}
                alt={achievement.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[var(--button-primary-color)] mb-3">
                  {achievement.title}
                </h3>
                <p className="text-gray-300">{achievement.description}</p>
                <div className="mt-4 text-[var(--neutral-2)]">
                  Project: <b> {achievement.project} </b>
                  <p>
                    {" "}
                    <i> {achievement.date} </i>{" "}
                  </p>
                  <a
                    href={achievement.links}
                    className="text-[var(--accent-2)] hover:text-[var(--secondary-color--dark)] transition-colors"
                  >
                    Links
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsSection;
