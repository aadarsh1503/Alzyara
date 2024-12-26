import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for React Router navigation
import { AiOutlineSearch } from 'react-icons/ai';
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu

import LanguageSwitcher from "../LanguageSwticher/LanguageSwitcher";
import { useDirection } from "../DirectionContext";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { direction, toggleDirection } = useDirection();
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState(""); // State to manage search input text

  const handleSearchClick = () => {
    setIsSearching(true);
  };

  const handleClearClick = () => {
    setSearchText(""); // Reset the input field when the cross icon is clicked
    setIsSearching(false); // Switch back to the default "Search" icon and text
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value); // Update search text as user types
  };
  const emailOptions = [
    { label: "Customer Care", email: "ask@shaheen.express" },
    { label: "Seller Care", email: "contact@shaheen.express" },
    { label: "Business Enquiries", email: "info@shaheen.express" },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="">
      <nav className="text-white bg-[#0f2027] fixed top-0 py-8 shadow-lg w-full z-50">
        <div className="container mx-auto flex max-w-7xl items-center justify-between px-6">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <a href="/">
              <img
                src="" // Replace with your logo
                alt="Logo"
                className="h-22 w-44"
              />
            </a>
          </div>
         
          {/* Desktop Menu Items */}
          <div className="hidden md:flex font-semibold items-center space-x-7 text-xs  tracking-wide">
            <Link to="/#services" className="hover:text-gray-200">
              Features
            </Link>
            <Link to="/#why-us" className="hover:text-gray-200">
              Pricing
            </Link>
            <Link to="/#clients" className="hover:text-gray-200">
              Migration
            </Link>
            <Link to="/#partners" className="hover:text-gray-200">
              Integrations
            </Link>
            <Link to="/manPower" className="hover:text-gray-200">
              Resources
            </Link>

            <div className="flex items-center space-x-2">
      {!isSearching ? (
       <>
       <button
         className="rounded-full flex items-center" // Add flex to arrange elements horizontally
         onClick={handleSearchClick}
       >
         <AiOutlineSearch className="text-white text-xl mr-2" /> {/* Add margin to the right of the icon */}
         Search
       </button>
     </>
     
      ) : (
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search"
            className="py-2 px-3 rounded-full text-sm"
            autoFocus
          />
          <AiOutlineSearch className="text-white text-xl" />
        </div>
      )}
    </div>

  {/* Three Buttons */}
  <div className="flex space-x-4">
    <button className="w-32 h-8 bg-[#0f2027] text-xs  outline-parrot outline hover:bg-parrot text-parrot hover:text-black rounded-md ">
      Request Demo
    </button>
    <button className="w-20 h-8 bg-parrot  hover:outline-parrot outline hover:bg-[#0f2027] hover:text-parrot text-black rounded-md ">
      Start Free
    </button>
    <button className="px-3 py-1 bg-[#0f2027] text-white rounded-md hover:text-white hover:bg-parrot">
      Log in
    </button>
  </div>


            

          </div>
          

          {/* Hamburger Menu Icon */}
          <div className="md:hidden">
            {!isMobileMenuOpen ? (
              <FaBars
                className="text-2xl cursor-pointer"
                onClick={toggleMobileMenu}
              />
            ) : (
              <FaTimes
                className="text-2xl cursor-pointer"
                onClick={toggleMobileMenu}
              />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-dgreen text-white text-sm uppercase font-semibold tracking-wide py-4 space-y-4">
            <Link
              to="/#services"
              className="block px-6 hover:text-gray-200"
              onClick={toggleMobileMenu}
            >
              Services
            </Link>
            <Link
              to="/#why-us"
              className="block px-6 hover:text-gray-200"
              onClick={toggleMobileMenu}
            >
              Why Us
            </Link>
            <Link
              to="/#clients"
              className="block px-6 hover:text-gray-200"
              onClick={toggleMobileMenu}
            >
              Clients
            </Link>
            <Link
              to="/#partners"
              className="block px-6 hover:text-gray-200"
              onClick={toggleMobileMenu}
            >
              Partners
            </Link>
            <Link
              to="/manPower"
              className="block px-6 hover:text-gray-200"
              onClick={toggleMobileMenu}
            >
              Delivery
            </Link>
            <Link
              to="/faq"
              className="block px-6 hover:text-gray-200"
              onClick={toggleMobileMenu}
            >
              FAQ
            </Link>
            <Link
              to="/privacy-policy"
              className="block px-6 hover:text-gray-200"
              onClick={toggleMobileMenu}
            >
              Privacy Policy
            </Link>
            <Link
              to="/T&C"
              className="block px-6 hover:text-gray-200"
              onClick={toggleMobileMenu}
            >
              T&C
            </Link>
            <Link
              to="/tracking-Form"
              className="block px-6 hover:text-gray-200"
              onClick={toggleMobileMenu}
            >
              Tracking
            </Link>
            <a
              href="https://www.talentportal.bh/#pills-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-6 hover:text-gray-200"
              onClick={toggleMobileMenu}
            >
              Careers
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
