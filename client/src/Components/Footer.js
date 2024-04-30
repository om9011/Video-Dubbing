import React from "react";
import githubLogo from "../Assets/github-logo.png"; // Import the GitHub logo image

const Footer = () => {
  // List of contributors with their GitHub usernames
  const contributors = [
    { name: "Om Gore", github: "https://github.com/om9011" },
    { name: "Om Gujarathi", github: "https://github.com/Om-Gujarathi" },
    { name: "Sanskar Gundecha", github: "https://github.com/SanskarG83" },
    { name: "Asawari Jadhav", github: "https://github.com/asawarijadhav23" },
  ];

  return (
    <footer className="bg-gray-900 text-white p-4 text-center">
      <div className="flex justify-between items-center gap-2 pt-2">
        <div className="flex flex-col justify-center items-center gap-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/f/f0/Vishwakarma_Institute_of_Technology.png"
            alt="GitHub Logo"
            className="w-24 rounded-md h-24 mr-1"
          />
          <p className="text-xl font-semibold mb-2">
            Vishwakarma Institute of Technology, Pune
          </p>
        </div>
        <div>
          <p className="text-lg font-semibold mb-2">Contributors:</p>
          <div className="px-6 grid grid-cols-2 items-left gap-4">
            {contributors.map((contributor, index) => (
              <a
                key={index}
                href={contributor.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm font-semibold hover:text-blue-400 transition-colors duration-300"
              >
                <img
                  src={githubLogo}
                  alt="GitHub Logo"
                  className="w-6 rounded-full h-6 mr-2"
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
