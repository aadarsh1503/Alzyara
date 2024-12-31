import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for React Router navigation
import { AiOutlineSearch } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu
import g1 from "./g1.png";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState(""); // State to manage search input text

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
        className={`fixed top-0 w-full  z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#0f2027] text-white" : "bg-[#0f2027] text-white"
        }`}
      >
        <div className="container mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          {/* Logo Section */}
          <div className="flex items-center space-x-">
            <a href="/">
              <img src={g1} alt="Logo" className="h-20 w-20" />
            </a>
          </div>
          {/* Desktop Menu Items */}
          <div className="hidden md:flex font-semibold items-center -ml-32 lg:-space-x-5 text-xs tracking-wide relative">
            <div className="group relative">
              <Link to="/email" className="hover:text-gray-600 p-8">
                Features
              </Link>
             {/* Dropdown for Features */}
<div className="absolute lg:-left-[530px]  w-screen bg-white shadow-lg top-10 text-black hidden group-hover:block">
  <div className="grid grid-cols-2 gap-4 ml-32 h-[400px] p-12">
    {/* Email Marketing */}
    <div className="flex items-center space-x-4">
      <img src="https://sendmails.io/wp-content/uploads/2024/09/email-marketing-3.png" alt="Email Marketing" className="w-12 h-12" />
      <div>
        <Link to="/feature1" className="block hover:text-gray-800 text-lg font-semibold">Email Marketing</Link>
        <p className="text-sm text-gray-600">Boost your marketing strategy with automated email campaigns and segmentation tools.</p>
      </div>
    </div>

    {/* Marketing Automation */}
    <div className="flex items-center space-x-4">
      <img src="https://sendmails.io/wp-content/uploads/2024/09/marketing-automation-2.png" alt="Marketing Automation" className="w-12 h-12" />
      <div>
        <Link to="/feature2" className="block hover:text-gray-800 text-lg font-semibold">Marketing Automation</Link>
        <p className="text-sm text-gray-600">Streamline your marketing processes with automated <br />workflows and triggers.</p>
      </div>
    </div>

    {/* Contact CIRM */}
    <div className="flex items-center space-x-4">
      <img src="https://sendmails.io/wp-content/uploads/2024/09/Contact-CRM-2.png" alt="Contact CIRM" className="w-12 h-12" />
      <div>
        <Link to="/feature3" className="block hover:text-gray-800 text-lg font-semibold">Contact CIRM</Link>
        <p className="text-sm text-gray-600">Get in touch with the CIRM team for any inquiries or assistance.</p>
      </div>
    </div>

    {/* Popup Builder */}
    <div className="flex items-center space-x-4">
      <img src="https://sendmails.io/wp-content/uploads/2024/09/Popup-builder-2.png" alt="Popup Builder" className="w-12 h-12" />
      <div>
        <Link to="/feature4" className="block hover:text-gray-800 text-lg font-semibold">Popup Builder</Link>
        <p className="text-sm text-gray-600">Create attention-grabbing popups for better user engagement.</p>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <img src="https://sendmails.io/wp-content/uploads/2024/09/Lead-Webform-2.png" alt="Popup Builder" className="w-12 h-12" />
      <div>
        <Link to="/feature4" className="block hover:text-gray-800 text-lg font-semibold">Lead WebForm</Link>
        <p className="text-sm text-gray-600">Create attention-grabbing popups for better user engagement.</p>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <img src="https://sendmails.io/wp-content/uploads/2024/09/Email-Verification-3.png" alt="Popup Builder" className="w-12 h-12" />
      <div>
        <Link to="/feature4" className="block hover:text-gray-800 text-lg font-semibold">Email Verification</Link>
        <p className="text-sm text-gray-600">Create attention-grabbing popups for better user engagement.</p>
      </div>
    </div>
  </div>
</div>

            </div>

            <div className="group relative">
              <Link to="/marketing" className="hover:text-gray-600 p-8">
                Solution
              </Link>
              {/* Dropdown for Solution */}
              <div className="absolute lg:-left-[640px]  w-screen bg-white shadow-lg top-10 text-black hidden group-hover:block">
  <div className="grid grid-cols-2 gap-4 ml-32 h-[300px] p-12">
    {/* Email Marketing */}
    <div className="flex items-center space-x-4">
      <img src="https://sendmails.io/wp-content/uploads/2024/09/Marketing-agencies-3.png" alt="Email Marketing" className="w-12 h-12" />
      <div>
        <Link to="/feature1" className="block hover:text-gray-800 text-lg font-semibold">Email Marketing</Link>
        <p className="text-sm text-gray-600">Boost your marketing strategy with automated email campaigns and segmentation tools.</p>
      </div>
    </div>

    {/* Marketing Automation */}
    <div className="flex items-center space-x-4">
      <img src="https://sendmails.io/wp-content/uploads/2024/09/Sales-teams-3.png" alt="Marketing Automation" className="w-12 h-12" />
      <div>
        <Link to="/feature2" className="block hover:text-gray-800 text-lg font-semibold">Marketing Automation</Link>
        <p className="text-sm text-gray-600">Streamline your marketing processes with automated <br />workflows and triggers.</p>
      </div>
    </div>

    {/* Contact CIRM */}
    <div className="flex items-center space-x-4">
      <img src="https://sendmails.io/wp-content/uploads/2024/09/Education-3.png" alt="Contact CIRM" className="w-12 h-12" />
      <div>
        <Link to="/feature3" className="block hover:text-gray-800 text-lg font-semibold">Contact CIRM</Link>
        <p className="text-sm text-gray-600">Get in touch with the CIRM team for any inquiries or assistance.</p>
      </div>
    </div>

    {/* Popup Builder */}
    <div className="flex items-center space-x-4">
      <img src="https://sendmails.io/wp-content/uploads/2024/09/E-commerce-2.png" alt="Popup Builder" className="w-12 h-12" />
      <div>
        <Link to="/feature4" className="block hover:text-gray-800 text-lg font-semibold">Popup Builder</Link>
        <p className="text-sm text-gray-600">Create attention-grabbing popups for better user engagement.</p>
      </div>
    </div>
    

  </div>
</div>
            </div>

            <Link to="/pricing" className="hover:text-gray-600 p-8">
              Pricing
            </Link>
            <Link to="/#partners" className="hover:text-gray-600 p-8">
              Integrations
            </Link>
            <Link to="/tutorials" className="hover:text-gray-600 p-8">
              Resources
            </Link>

            {/* Search Section */}


            {/* Three Buttons */}
            <div className="flex space-x-4 p-8">
              <button
                className={`w-32 h-8 text-xs hover:outline-parrot rounded-md ${
                  isScrolled
                    ? "text-black bg-parrot hover:text-white hover:outline-white outline hover:bg-[#0f2027]"
                    : "text-black bg-parrot hover:text-white hover:outline-white outline hover:bg-[#0f2027]"
                }`}
              >
                Request Demo
              </button>
              <button
                className={`w-20 h-8 bg-parrot hover:outline-parrot rounded-md ${
                  isScrolled
                    ? "text-black bg-parrot hover:text-white hover:outline-white outline hover:bg-[#0f2027]"
                    : "text-black bg-parrot hover:text-white hover:outline-white outline hover:bg-[#0f2027]"
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
                className={`text-2xl cursor-pointer ${isScrolled ? "text-black" : "text-white"}`}
                onClick={toggleMobileMenu}
              />
            ) : (
              <FaTimes
                className={`text-2xl cursor-pointer ${isScrolled ? "text-black" : "text-white"}`}
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
