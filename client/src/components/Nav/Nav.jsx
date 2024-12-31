import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for React Router navigation
import { AiOutlineSearch } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu
import g1 from "./g1.png";

const Nav = () => {
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
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#0f2027] text-white" : "bg-[#0f2027] shadow-xl text-white"
        }`}
      >
        <div className="container mx-auto font-poppins flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <a href="/">
              <img src={g1} alt="Logo" className="h-20 w-20" />
            </a>
          </div>
          {/* Desktop Menu Items */}
          <div className="hidden md:flex font-semibold items-center text-xs tracking-wide relative">
            <div 
              className="group relative"
              onMouseEnter={() => setIsDropdownOpen(true)} // Open dropdown on hover
              onMouseLeave={() => setIsDropdownOpen(false)} // Close dropdown when mouse leaves
            >
              <div className="hover:text-black p-8">
                Features
              </div>
              {/* Dropdown for Features */}
              {isDropdownOpen && (
                <div className="absolute lg:-left-[540px] w-screen bg-white shadow-lg top-20 pt-3 text-black">
                  <div className="grid grid-cols-2 gap-4 ml-32 h-[400px] p-12">
                    {/* Email Marketing */}
                    <a href="/email">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://sendmails.io/wp-content/uploads/2024/09/email-marketing-3.png"
                          alt="Email Marketing"
                          className="w-12 h-12"
                        />
                        <div>
                          <Link
                            to="/feature1"
                            className="block hover:text-gray-800 text-lg font-semibold"
                          >
                            Email Marketing
                          </Link>
                          <p className="text-sm font-normal text-black">
                            Boost your marketing strategy with automated email campaigns and segmentation tools.
                          </p>
                        </div>
                      </div>
                    </a>
                    {/* Marketing Automation */}
                    <a href="/email">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://sendmails.io/wp-content/uploads/2024/09/marketing-automation-2.png"
                          alt="Marketing Automation"
                          className="w-12 h-12"
                        />
                        <div>
                          <Link
                            to="/feature2"
                            className="block hover:text-gray-800 text-lg font-semibold"
                          >
                            Marketing Automation
                          </Link>
                          <p className="text-sm font-normal text-black">
                            Streamline your marketing processes with automated workflows and triggers.
                          </p>
                        </div>
                      </div>
                    </a>
                    {/* Contact CIRM */}
                    <a href="/email">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://sendmails.io/wp-content/uploads/2024/09/Contact-CRM-2.png"
                          alt="Contact CIRM"
                          className="w-12 h-12"
                        />
                        <div>
                          <Link
                            to="/feature3"
                            className="block hover:text-gray-800 text-lg font-semibold"
                          >
                            Contact CIRM
                          </Link>
                          <p className="text-sm font-normal text-black">
                            Get in touch with the CIRM team for any inquiries or assistance.
                          </p>
                        </div>
                      </div>
                    </a>
                    {/* Popup Builder */}
                    <a href="/email">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://sendmails.io/wp-content/uploads/2024/09/Popup-builder-2.png"
                          alt="Popup Builder"
                          className="w-12 h-12"
                        />
                        <div>
                          <Link
                            to="/feature4"
                            className="block hover:text-gray-800 text-lg font-semibold"
                          >
                            Popup Builder
                          </Link>
                          <p className="text-sm font-normal text-black">
                            Create attention-grabbing popups for better user engagement.
                          </p>
                        </div>
                      </div>
                    </a>
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://sendmails.io/wp-content/uploads/2024/09/Lead-Webform-2.png"
                        alt="Lead WebForm"
                        className="w-12 h-12"
                      />
                      <div>
                        <Link
                          to="/feature4"
                          className="block hover:text-gray-800 text-lg font-semibold"
                        >
                          Lead WebForm
                        </Link>
                        <p className="text-sm font-normal text-black">
                          Create attention-grabbing popups for better user engagement.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://sendmails.io/wp-content/uploads/2024/09/Email-Verification-3.png"
                        alt="Email Verification"
                        className="w-12 h-12"
                      />
                      <div>
                        <Link
                          to="/feature4"
                          className="block hover:text-gray-800 text-lg font-semibold"
                        >
                          Email Verification
                        </Link>
                        <p className="text-sm font-normal text-black">
                          Improve your email list quality with advanced verification tools.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
