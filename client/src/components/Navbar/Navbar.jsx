import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for React Router navigation
import { AiOutlineSearch } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu
import g1 from "./g1.png"
import LanguageSwitcher from "../LanguageSwticher/LanguageSwitcher";
import { useDirection } from "../DirectionContext";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState(""); // State to manage search input text
  const { direction, toggleDirection } = useDirection();

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change state when scrolled more than 50px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup listener
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearchClick = () => {
    setIsSearching(true);
  };

  const handleClearClick = () => {
    setSearchText("");
    setIsSearching(false);
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#0f2027] text-white" : "bg-[#0f2027] text-white"
        }`}
      >
        <div className="container mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
  <a href="/">
    <img
      src={
g1
      }
      alt="Logo"
      className="h-20 w-20"
    />
  </a>
</div>
          {/* Desktop Menu Items */}
          <div className="hidden md:flex font-semibold items-center space-x-7 text-xs tracking-wide">
            <Link to="/email" className="hover:text-gray-600">
              Features
            </Link>
            <Link to="/marketing" className="hover:text-gray-600">
            Solution
            </Link>
            <Link to="/pricing" className="hover:text-gray-600">
              Pricing
            </Link>
            <Link to="/#partners" className="hover:text-gray-600">
              Integrations
            </Link>
            <Link to="/tutorials" className="hover:text-gray-600">
              Resources
            </Link>

            {/* Search Section */}
            <div className="flex items-center space-x-2">
              {!isSearching ? (
                <button
                  className="rounded-full flex items-center"
                  onClick={handleSearchClick}
                >
                  <AiOutlineSearch
                    className={`text-xl mr-2 ${
                      isScrolled ? "text-white" : "text-white"
                    }`}
                  />
                  Search
                </button>
              ) : (
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Search"
                    className="py-2 px-3 rounded-full text-sm"
                    autoFocus
                  />
                  <AiOutlineSearch className=" text-xl" />
                </div>
              )}
            </div>

            {/* Three Buttons */}
            <div className="flex space-x-4">
              <button
                className={`w-32 h-8  text-xs hover:outline-parrot  rounded-md ${
                  isScrolled ? "text-black bg-parrot hover:text-white hover:outline-white outline hover:bg-[#0f2027]" : "text-black bg-parrot hover:text-white hover:outline-white outline hover:bg-[#0f2027]"
                }`}
              >
                Request Demo
              </button>
              <button
                className={`w-20 h-8 bg-parrot hover:outline-parrot rounded-md ${
                  isScrolled ? "text-black bg-parrot hover:text-white hover:outline-white outline hover:bg-[#0f2027]" : "text-black bg-parrot hover:text-white hover:outline-white outline hover:bg-[#0f2027] "
                }`}
              >
                Log in
              </button>
             
            </div>
          </div>

          {/* Hamburger Menu Icon */}
          <div className="md:hidden">
            {!isMobileMenuOpen ? (
              <FaBars
                className={`text-2xl cursor-pointer ${
                  isScrolled ? "text-black" : "text-white"
                }`}
                onClick={toggleMobileMenu}
              />
            ) : (
              <FaTimes
                className={`text-2xl cursor-pointer ${
                  isScrolled ? "text-black" : "text-white"
                }`}
                onClick={toggleMobileMenu}
              />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
