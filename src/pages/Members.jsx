import { members } from "../data.js";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Members = () => {
  const currentDate = new Date();
  const currentYearAD = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // Months are 0-based, so +1

  // Function to convert Bikram Sambat (BS) to AD
  const convertBSToAD = (bsYear) => bsYear - 56; // Approximate conversion from BS to AD

  // Filter members into alumni and current members based on batch year
  const alumni = members.filter((member) => {
    const [startBS, endBS] = member.batch.split("-").map(Number);
    const endAD = convertBSToAD(endBS);
    return (
      endAD < currentYearAD || (endAD === currentYearAD && currentMonth > 6)
    );
  });

  const currentMembers = members.filter((member) => {
    const [startBS, endBS] = member.batch.split("-").map(Number);
    const endAD = convertBSToAD(endBS);
    return (
      endAD >= currentYearAD && (endAD > currentYearAD || currentMonth <= 6)
    );
  });

  const alumniRefs = useRef([]);
  const currentRefs = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    alumniRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    currentRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    gsap.fromTo(
      ".section-title",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
      }
    );
  }, []);

  const MemberCard = ({ member, refArray, index }) => (
    <div
      ref={(el) => (refArray.current[index] = el)}
      className="opacity-0 bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
    >
      <div className="flex flex-col items-center text-center">
        {/* Member Photo with Hover Effect */}
        <div className="relative mb-4 group">
          <img
            src={member.image}
            alt={member.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-[var(--accent-2)] 
                     transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
          {/* Batch Badge */}
          <span
            className="absolute bottom-0 right-0 bg-[var(--primary-color--dark)] text-white 
                          px-3 py-1 rounded-full text-xs font-medium"
          >
            Batch {member.batch}
          </span>
        </div>

        {/* Member Details */}
        <h3 className="text-xl font-semibold text-[var(--button-primary-color)] mb-1">
          <a
            href={member.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent-2)] transition-colors"
          >
            {member.name}
          </a>
        </h3>
        <p className="text-[var(--neutral-2)] mb-2">{member.post}</p>
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="bg-[var(--primary-backgroundcolor--dark)] py-16 px-4"
    >
      <div className="container mx-auto">
        {/* Current Members Section */}
        {currentMembers.length > 0 && (
          <div className="mb-8">
            <h2 className="section-title opacity-0 text-3xl font-bold text-[var(--secondary-color--dark)] mb-8 text-center">
              Current Members ({currentYearAD}/{currentYearAD + 1})
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {currentMembers.map((member, index) => (
                <MemberCard
                  key={`current-${index}`}
                  member={member}
                  refArray={currentRefs}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}

        {/* Alumni Section */}
        {alumni.length > 0 && (
          <div className="mb-16">
            <h2 className="section-title opacity-0 text-3xl font-bold text-[var(--secondary-color--dark)] mb-8 text-center">
              Distinguished Alumni ({currentYearAD}/{currentYearAD + 1})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {alumni.map((member, index) => (
                <MemberCard
                  key={`alumni-${index}`}
                  member={member}
                  refArray={alumniRefs}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Members;
