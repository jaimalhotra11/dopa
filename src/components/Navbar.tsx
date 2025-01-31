import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "/assets/images/logo1.jpg";

const navLinkStyles =
  "hover:font-bold hover:underline transition-all duration-300";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);

  return (
    <nav className="bg-[#116DEC] fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 text-white">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Dopamine Logo"
              className="w-28 object-contain"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={navLinkStyles}>
              Home
            </Link>

            <div
              className="relative group"
              onMouseEnter={() => setIsAboutHovered(true)}
              onMouseLeave={() => setIsAboutHovered(false)}
            >
              <button className={`flex items-center space-x-1 ${navLinkStyles}`}>
                <span>About Dopamine</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {isAboutHovered && (
                <div className="absolute top-full left-0 bg-white text-gray-800 shadow-lg rounded-md py-2 w-48">
                  <Link
                    to="/about-owners"
                    className="block px-4 py-2 hover:bg-gray-100 hover:font-bold"
                  >
                    About Dopamine
                  </Link>
                  <Link
                    to="/why-join"
                    className="block px-4 py-2 hover:bg-gray-100 hover:font-bold"
                  >
                    Why Join Dopamine
                  </Link>
                  <Link
                    to="/management"
                    className="block px-4 py-2 hover:bg-gray-100 hover:font-bold"
                  >
                    Management Staff
                  </Link>
                </div>
              )}
            </div>

            <Link to="/facilities" className={navLinkStyles}>
              Facilities
            </Link>
            <Link to="/trainers" className={navLinkStyles}>
              Trainers
            </Link>
            <Link to="/pricing" className={navLinkStyles}>
              Pricing
            </Link>
            <Link to="/careers" className={navLinkStyles}>
              Careers
            </Link>
            <Link to="/contact" className={navLinkStyles}>
              Contact
            </Link>
          </div>

          {/* Join Now Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
          >
            <Link
              to="/contact"
              className="bg-white text-[#116DEC] px-6 py-2 rounded-full font-medium hover:bg-opacity-90 hover:font-bold transition duration-300"
            >
              Join Now
            </Link>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden focus:outline-none"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

       {/* Mobile Menu */}
{isMenuOpen && (
  <div className="md:hidden bg-[#116DEC] text-white pb-4">
    <Link
      to="/"
      className="block px-4 py-2 hover:font-bold hover:underline"
      onClick={() => setIsMenuOpen(false)} // Close menu on click
    >
      Home
    </Link>
    <div className="relative">
      <button
        onClick={() => setIsAboutHovered(!isAboutHovered)}
        className="w-full text-left px-4 py-2 hover:font-bold hover:underline"
      >
        About Dopamine
      </button>
      {isAboutHovered && (
        <div className="bg-white text-gray-800 py-2">
          <Link
            to="/why-join"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={() => {
              setIsMenuOpen(false);
              setIsAboutHovered(false); // Close dropdown
            }}
          >
            Why Join Dopamine
          </Link>
          <Link
            to="/about-owners"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={() => {
              setIsMenuOpen(false);
              setIsAboutHovered(false); // Close dropdown
            }}
          >
            About Owners
          </Link>
          <Link
            to="/management"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={() => {
              setIsMenuOpen(false);
              setIsAboutHovered(false); // Close dropdown
            }}
          >
            Management Staff
          </Link>
        </div>
      )}
    </div>
    <Link
      to="/facilities"
      className="block px-4 py-2 hover:font-bold hover:underline"
      onClick={() => setIsMenuOpen(false)} // Close menu on click
    >
      Facilities
    </Link>
    <Link
      to="/trainers"
      className="block px-4 py-2 hover:font-bold hover:underline"
      onClick={() => setIsMenuOpen(false)} // Close menu on click
    >
      Trainers
    </Link>
    <Link
      to="/pricing"
      className="block px-4 py-2 hover:font-bold hover:underline"
      onClick={() => setIsMenuOpen(false)} // Close menu on click
    >
      Pricing
    </Link>
    <Link
      to="/careers"
      className="block px-4 py-2 hover:font-bold hover:underline"
      onClick={() => setIsMenuOpen(false)} // Close menu on click
    >
      Careers
    </Link>
    <Link
      to="/contact"
      className="block px-4 py-2 hover:font-bold hover:underline"
      onClick={() => setIsMenuOpen(false)} // Close menu on click
    >
      Contact
    </Link>
    <div className="px-4 mt-4">
      <Link
        to="/contact"
        className="block text-center bg-white text-[#116DEC] px-6 py-2 rounded-full font-medium hover:bg-opacity-90 hover:font-bold transition duration-300"
        onClick={() => setIsMenuOpen(false)} // Close menu on click
      >
        Join Now
      </Link>
    </div>
  </div>
)}

      </div>
    </nav>
  );
};

export default Navbar;
