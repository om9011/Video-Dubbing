import React from "react";
import logo from  "../Assets/dubwizLogo.png"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-background px-8 py-4 shadow-md my-2">
      <div className="flex items-center justify-center">
        <img src={logo} alt="Company Logo" className="h-8 w-auto mr-2" />
        <div className="text-text font-bold text-xl mb-1">Dubwizz</div>
      </div>
      <div>
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
      <div>
        <a
          href="#profile font-semibold"
          className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded ml-4"
        >
          Guest
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
