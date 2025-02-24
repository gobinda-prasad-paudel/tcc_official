import React, { useRef, useEffect } from "react";
import "../App.css";

import gsap from "gsap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Notice from "../components/Notice";
import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection";

const App = () => {
  // const stringRef = useRef(null);

  // useEffect(() => {
  //   const initialPath = `M 10 100 Q 500 100 1390 100`;
  //   let path = initialPath;

  //   const string = stringRef.current;

  //   const handleMouseMove = (e) => {
  //     path = `M 10 100 Q ${e.clientX} ${e.clientY} 1390 100`;
  //     gsap.to("svg path", {
  //       attr: { d: path },
  //       duration: 0.2,
  //       ease: "power3.out",
  //     });
  //   };

  //   const handleMouseLeave = () => {
  //     gsap.to("svg path", {
  //       attr: { d: initialPath },
  //       duration: 1.5,
  //       ease: "elastic.out(1, 0.1)",
  //     });
  //   };

  //   // Attach event listeners
  //   string.addEventListener("mousemove", handleMouseMove);
  //   string.addEventListener("mouseleave", handleMouseLeave);

  //   // Cleanup event listeners on component unmount
  //   return () => {
  //     string.removeEventListener("mousemove", handleMouseMove);
  //     string.removeEventListener("mouseleave", handleMouseLeave);
  //   };
  // }, []); // Empty dependency array to run this effect only once

  return (
    <div id="main">
      <div id="page1">
        <div id="cursor">TCC</div>
        <div id="page1-content">
          {/* <Navbar /> */}
          <Hero />
        </div>
      </div>

      {/*  <div id="string">
        <svg
          ref={stringRef}
          width="1400"
          height="100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 10 100 Q 500 100 1390 100"
            strokeWidth="2"
            fill="transparent"
          />
        </svg>
      </div>
 */}
      <hr />
      <Notice />
      <ProjectsSection />

      {/* <Footer /> */}
    </div>
  );
};

export default App;
