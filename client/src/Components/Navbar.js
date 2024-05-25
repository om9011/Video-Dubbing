import React from "react";
import logo from "../Assets/dubwizLogo.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between rounded-lg px-8 py-4 shadow-md mb-4 bg-white">
      <div className="flex items-center justify-center">
        <img src={logo} alt="Company Logo" className="h-8 w-auto mr-2" />
        <div className="font-bold text-xl text-primary mb-1">Dubwizz</div>
      </div>
      <div className="hidden md:flex">
        <a href="#home" className="text-primary font-semibold hover:text-secondary mr-4">
          Home
        </a>
        <a href="#upload" className="text-primary font-semibold hover:text-secondary mr-4">
          About
        </a>
        <a href="#services" className="text-primary font-semibold hover:text-secondary">
          Services
        </a>
      </div>
      <div className="md:hidden">
        <button className="text-primary focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
