import React from "react";
import githubLogo from "../Assets/github-logo.png"; // Import the GitHub logo image

const Footer = () => {
  // List of contributors with their GitHub usernames
  const contributors = [
    { name: "Om Gore", github: "https://github.com/om9011" },
    { name: "Sanskar Gundecha", github: "https://github.com/SanskarG83" },
    { name: "Om Gujarathi", github: "https://github.com/Om-Gujarathi" },
    { name: "Asawari Jadhav", github: "https://github.com/asawarijadhav23" },
  ];

  return (
    <footer className="bg-gray-900 text-white p-4 text-center">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2 pt-2">
        <div className="flex md:flex-col justify-center items-center gap-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/f/f0/Vishwakarma_Institute_of_Technology.png"
            alt="GitHub Logo"
            className="w-12 md:w-16 rounded-md mr-1"
          />
          <p className="text-md md:text-xl font-bold mb-2">
            Vishwakarma Institute of <br />Technology, Pune.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mt-4 md:mt-0">
          <p className="text-lg font-bold mb-2 sm:mb-0">Contributors:</p>
          <div className="grid grid-cols-2 justify-center gap-2">
            {contributors.map((contributor, index) => (
              <a
                key={index}
                href={contributor.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center md:text-md text-sm font-bold hover:text-blue-400 transition-colors duration-300 mb-2"
              >
                <img
                  src={githubLogo}
                  alt="GitHub Logo"
                  className="w-6 rounded-full h-6 mr-2 "
                />
                {contributor.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="text-md mt-2">
        © {new Date().getFullYear()} All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
