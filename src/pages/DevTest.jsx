import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const DevTest = () => {
  const waveRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline(); // Create a GSAP timeline instance

    // Wave emoji animation
    tl.to(waveRef.current, {
      x: 300,
      ease: "elastic.out(1, 0.75)",
    });
  });
  return (
    <div>
      <div ref={waveRef} className="w-32 h-32 bg-cyan-900 " id="welcome_text">
        <h1 className="text-4xl font-bold text-[var(--accent-2)] mt-2">
          Welcome from developer{" "}
        </h1>{" "}
        <span role="img" aria-label="wave">
          👋
        </span>
      </div>
    </div>
  );
};

export default DevTest;
