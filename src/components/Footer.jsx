import React from "react";
import { location } from "../data";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="relative py-12 mt-20 bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(17, 17, 17, 0.9), rgba(17, 17, 17, 0.9)), url(/path-to-your-background-image.png)",
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Social Links Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-[var(--secondary-color--dark)] mb-4">
              Connect With Us
            </h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <a
                href="https://www.instagram.com/trinitycomputercouncil/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
              >
                <img
                  src="https://static.cdninstagram.com/rsrc.php/v4/yI/r/VsNE-OHk_8a.png"
                  alt="Instagram"
                  className="w-8 h-8 object-contain"
                />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
              >
                <img
                  src="https://github.com/fluidicon.png"
                  alt="GitHub"
                  className="w-8 h-8 object-contain"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/trinity-computer-council/about/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
              >
                <img
                  src="https://static.licdn.com/aero-v1/sc/h/5bukxbhy9xsil5mb7c2wulfbx"
                  alt="LinkedIn"
                  className="w-8 h-8 object-contain"
                />
              </a>
            </div>
          </div>

          {/* Address Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[var(--secondary-color--dark)] mb-4">
              Contact Us
            </h3>
            <p className="text-[var(--neutral-2)]">
              Trinity Computer Council
              <br />
              Address : {location.address}
              <br />
              Email : {location.email}
            </p>
          </div>

          {/* Slogan Section */}
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-bold text-[var(--secondary-color--dark)] mb-4">
              Our Promise
            </h3>
            <p className="italic text-[var(--neutral-2)]">
              "Innovating Tomorrow's Technology Today"
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--neutral-1)] pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-[var(--neutral-2)] text-center">
              &copy; {new Date().getFullYear()} Trinity Computer Council. All
              rights reserved.
            </div>
            <div className="text-[var(--neutral-2)] text-center">
              College:{" "}
              <a
                href="https://trinitycollege.edu.np/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent-2)] hover:text-[var(--secondary-color--dark)] transition-colors"
              >
                Trinity International School and College
              </a>
            </div>
            <div className="text-[var(--neutral-2)] text-center">
              Developed by{" "}
              <a
                href="https://gobindapoudel.com.np/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent-2)] hover:text-[var(--secondary-color--dark)] transition-colors"
              >
                Gobinda Prasad Paudel
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
