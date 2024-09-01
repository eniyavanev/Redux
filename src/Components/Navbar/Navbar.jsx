import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import the Link component from react-router-dom

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-xl">
          <Link to="/">Redux</Link> {/* Use Link for the logo as well */}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-200">
            Home
          </Link>
          <Link to="/ReadPage" className="text-white hover:text-gray-200">
           View
          </Link>
         
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="text-white md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link to="/" className="block text-white hover:bg-blue-500 px-4 py-2">
            Home
          </Link>
          <Link to="/ReadPage" className="block text-white hover:bg-blue-500 px-4 py-2">
            View
          </Link>
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;
