import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for React Router navigation
import { AiOutlineSearch } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu
import g1 from "./g1.png";
import { RiArrowDropDownLine } from 'react-icons/ri';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll\
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false); // State for Solutions dropdown
  const [isSearching, setIsSearching] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
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
  const toggleFeaturesDropdown = () => {
    setOpenDropdown(openDropdown === 'features' ? null : 'features');
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };
  useEffect(() => {
    // Check if the current URL contains '/email'
    if (window.location.pathname.includes('/feature1') || window.location.pathname.includes('/feature2') || window.location.pathname.includes('/feature3') 
      || window.location.pathname.includes('/feature4') || window.location.pathname.includes('/feature5') || window.location.pathname.includes('/feature6')) {
      // Change the text color of the feature section to gray
      document.querySelector('.feature-section').style.color = 'gray';
    }
    

    if (window.location.pathname.includes('/marketing') || window.location.pathname.includes('/solution2')
       || window.location.pathname.includes('/solution3') || window.location.pathname.includes('/solution4')) {
      // Change the text color of the feature section to white
      document.querySelector('.market-section').style.color = 'gray';
    }
    
    if (window.location.pathname.includes('/pricing')) {
      // Change the text color of the feature section to white
      document.querySelector('.pricing').style.color = 'gray';
    }
    if (window.location.pathname.includes('/integration') || window.location.pathname.includes('/integration2')
      || window.location.pathname.includes('/integration3') || window.location.pathname.includes('/integration4')) {
      // Change the text color of the feature section to white
      document.querySelector('.integration-section').style.color = 'gray';
    }
    if (window.location.pathname.includes('/tutorials')) {
      // Change the text color of the feature section to white
      document.querySelector('.resource-section').style.color = 'gray';
    }
  }, []); // Empty dependency array means this effect runs once when the component mounts

  const toggleSolutionsDropdown = () => {
    setOpenDropdown(openDropdown === 'solutions' ? null : 'solutions');
  };
  const toggleIntegrationDropdown = () => {
    setOpenDropdown(openDropdown === 'integration' ? null : 'integration');
  };
  const toggleresourcesDropdown = () => {
    setOpenDropdown(openDropdown === 'resources' ? null : 'resources');
  };

  return (
    <div>
      <nav
        className={`fixed hidden lg:flex top-0 w-full  z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#0f2027] text-white" : "bg-[#0f2027]  text-white"
        }`}
      >
        <div className="container mx-auto font-poppins flex max-w-7xl items-center justify-between px-6 py-">
          {/* Logo Section */}
          <div className="flex items-center space-x-">
            <a href="/">
              <img src={g1} alt="Logo" className="h-16 w-16" />
            </a>
          </div>
          {/* Desktop Menu Items */}
          <div className="hidden md:flex font-semibold items-center  lg:-space-x-5 text-xs tracking-wide relative">
          <div className="relative">
      {/* Features button */}
      <div
        className="hover:text-black p-8  flex feature-section items-center cursor-pointer"
        onClick={toggleFeaturesDropdown}
      >
        Features
        <RiArrowDropDownLine className="ml-1 text-xl text-white" />
      </div>

      {/* Dropdown for Features */}
      {openDropdown === 'features' && (
        <div className="absolute lg:-left-[420px] w-screen top-[68px] pt-3 text-black">
  <div className="grid grid-cols-2  gap-4 bg-white -ml-32 h-[400px] p-12">
    {/* Email Marketing */}
    <a href="/feature1">
      <div className="flex items-center w-[446px] ml-72 space-x-4 p-4 hover:bg-gray-200 rounded">
        <img
          src="https://sendmails.io/wp-content/uploads/2024/09/email-marketing-3.png"
          alt="Email Marketing"
          className="w-12 h-12"
        />
        <div>
          <div className="block hover:text-gray-800 text-lg font-semibold">
            Email Marketing
          </div>
          <p className="text-sm font-normal text-black">
            Create and send stunning, personalized email campaigns to engage with your audience.
          </p>
        </div>
      </div>
    </a>
    {/* Marketing Automation */}
    <a href="/feature2">
      <div className="flex items-center ml-20 w-[446px] space-x-4 p-4 hover:bg-gray-200 rounded">
        <img
          src="https://sendmails.io/wp-content/uploads/2024/09/marketing-automation-2.png"
          alt="Marketing Automation"
          className="w-12 h-12"
        />
        <div>
          <div className="block hover:text-gray-800 text-lg font-semibold">
            Marketing Automation
          </div>
          <p className="text-sm font-normal  text-black">
            Automate email workflows based on customer actions to nurture leads and drive sales.
          </p>
        </div>
      </div>
    </a>
    {/* Contact CRM */}
    <a href="/feature3">
      <div className="flex items-center ml-72 space-x-4 p-4 hover:bg-gray-200 rounded">
        <img
          src="https://sendmails.io/wp-content/uploads/2024/09/Contact-CRM-2.png"
          alt="Contact CRM"
          className="w-12 h-12"
        />
        <div>
          <div className="block hover:text-gray-800 text-lg font-semibold">
            Contact CRM
          </div>
          <p className="text-sm font-normal w-96 text-black">
            Manage, segment, and optimize your contact list for targeted and effective communication.
          </p>
        </div>
      </div>
    </a>
    {/* Popup Builder */}
    <a href="/feature4">
      <div className="flex items-center ml-20 w-[456px] space-x-4 p-4 hover:bg-gray-200 rounded">
        <img
          src="https://sendmails.io/wp-content/uploads/2024/09/Popup-builder-2.png"
          alt="Popup Builder"
          className="w-12 h-12"
        />
        <div>
          <div className="block hover:text-gray-800 text-lg font-semibold">
            Popup Builder
          </div>
          <p className="text-sm font-normal w-96 text-black">
            Design and implement popups to capture leads directly from your website seamlessly.
          </p>
        </div>
      </div>
    </a>
    {/* Lead WebForm */}
    <a href="/feature5">
      <div className="flex items-center ml-72  space-x-4 p-4 hover:bg-gray-200 rounded">
        <img
          src="https://sendmails.io/wp-content/uploads/2024/09/Lead-Webform-2.png"
          alt="Lead WebForm"
          className="w-12 h-12"
        />
        <div>
          <div className="block hover:text-gray-800 text-lg font-semibold">
            Lead WebForm
          </div>
          <p className="text-sm font-normal w-full text-black">
            Create custom web forms to collect and manage leads effortlessly from various sources.
          </p>
        </div>
      </div>
    </a>
    {/* Email Verification */}
    <a href="/feature6">
      <div className="flex items-center ml-20 space-x-4 p-4 w-[456px] hover:bg-gray-200 rounded">
        <img
          src="https://sendmails.io/wp-content/uploads/2024/09/Email-Verification-3.png"
          alt="Email Verification"
          className="w-12 h-12"
        />
        <div>
          <div className="block hover:text-gray-800 text-lg font-semibold">
            Email Verification
          </div>
          <p className="text-sm font-normal w-96 text-black">
            Ensure your email list is clean and deliverable with integrated email verification tools.
          </p>
        </div>
      </div>
    </a>
  </div>
</div>

      )}
    </div>
            <div className="group relative">
            <div
  className="hover:text-black p-8 market-section flex items-center cursor-pointer"
  onClick={toggleSolutionsDropdown}
>
  {/* Dropdown Icon */}
 
  Solutions
  <RiArrowDropDownLine className="ml-1 text-xl text-white" />
</div>


        {/* Dropdown for Solutions */}
        {openDropdown === 'solutions' && (
          <div className="absolute lg:-left-[550px] w-screen  bg-white  top-[80px] text-black">
            <div className="grid grid-cols-2 gap-4 bg-white -ml-32 h-[300px] p-12">
              {/* Marketing Agencies */}
              <a href="/marketing">
                <div className="flex items-center ml-72 p-4 w-[456px] hover:bg-gray-200 space-x-4">
                  <img
                    src="https://sendmails.io/wp-content/uploads/2024/09/Marketing-agencies-3.png"
                    alt="Marketing Agencies"
                    className="w-12 h-12"
                  />
                  <div>
                    <div className="block hover:text-gray-800 text-lg font-semibold">
                      Marketing Agencies
                    </div>
                    <p className="text-sm font-normal w-96 text-black">
                      Boost client campaigns with powerful email marketing and automation tools
                    </p>
                  </div>
                </div>
              </a>

              {/* Education */}
              <a href="/solution2">
                <div className="flex items-center ml-20 w-[456px] hover:bg-gray-200 p-4 space-x-4">
                  <img
                    src="https://sendmails.io/wp-content/uploads/2024/09/Sales-teams-3.png"
                    alt="Education"
                    className="w-12 h-12"
                  />
                  <div>
                    <div className="block hover:text-gray-800 text-lg font-semibold">
                      Education
                    </div>
                    <p className="text-sm font-normal w-96 text-black">
                      Engage students and streamline admissions with data-driven email communication
                    </p>
                  </div>
                </div>
              </a>
               {/* Contact CIRM */}
    <a href="/solution3">
    <div className="flex items-center ml-72 p-4 w-[456px] hover:bg-gray-200 space-x-4">
      <img src="https://sendmails.io/wp-content/uploads/2024/09/Education-3.png" alt="Contact CIRM" className="w-12 h-12" />
      <div>
        <div className="block hover:text-gray-800 text-lg font-semibold">Sales Teams</div>
        <p className="text-sm font-normal w-96 text-black">Drive conversions with targeted email campaigns and lead management solutions</p>
      </div>
    </div>
    </a>
    {/* Popup Builder */}
    <a href="/solution4">
    <div className="flex items-center ml-20 w-[456px] hover:bg-gray-200 p-4 space-x-4">
      <img src="https://sendmails.io/wp-content/uploads/2024/09/E-commerce-2.png" alt="Popup Builder" className="w-12 h-12" />
      <div>
        <div className="block hover:text-gray-800 text-lg font-semibold">E-Commerce</div>
        <p className="text-sm font-normal w-96 text-black">Enhance online store sales with personalized and automated email marketing</p>
      </div>
    </div>
    </a>
              {/* Add the rest of your solutions links here */}
            </div>
          </div>
        )}
      </div>
<div className=" pricing ">
  <a href="/pricing">
            <div className="hover:text-black p-8">
              Pricing
            </div>
            </a>
            </div>
 

<div className="relative">
  <div
    className="hover:text-black p-8 integration-section flex items-center cursor-pointer"
    onClick={toggleIntegrationDropdown}
  >
    Integration
    <RiArrowDropDownLine className="ml-1 text-xl text-white" />
  </div>
  {openDropdown === 'integration' && (
    <div className="absolute lg:-left-[769px] w-screen bg-white  top-[80px] text-black">
      <div className="grid grid-cols-2 gap-4 bg-white -ml-32 h-[300px] p-12">
        {/* Email Marketing */}
        <a href="/integration">
          <div className="flex items-center ml-72 w-[456px] hover:bg-gray-200 p-4 space-x-4">
            <img
              src="https://sendmails.io/wp-content/uploads/2024/09/Zapier-Integration-6.png"
              alt="Email Marketing"
              className="w-12 h-12"
            />
            <div>
              <div className="block hover:text-gray-800 text-lg font-semibold">
                Zapier Integration
              </div>
              <p className="text-sm font-normal w-96 text-black">
                Connect Send Mails with thousands of apps via Zapier for seamless data automation
              </p>
            </div>
          </div>
        </a>

        {/* Marketing Automation */}
        <a href="/integration2">
          <div className="flex items-center ml-20 w-[456px] hover:bg-gray-200 p-4 space-x-4">
            <img
              src="https://sendmails.io/wp-content/uploads/2024/09/Pabbly-Integration-6.png"
              alt="Marketing Automation"
              className="w-12 h-12"
            />
            <div>
              <div className="block hover:text-gray-800 text-lg font-semibold">
                Pabbly Integration
              </div>
              <p className="text-sm font-normal w-96 text-black">
                Integrate Pabbly to streamline your workflows and enhance email marketing efficiency
              </p>
            </div>
          </div>
        </a>

        {/* Contact CIRM */}
        <a href="/integration3">
          <div className="flex items-center ml-72 w-[456px] hover:bg-gray-200 p-4 space-x-4">
            <img
              src="https://sendmails.io/wp-content/uploads/2024/09/Woo-Commerce-Integration-5.png"
              alt="Contact CIRM"
              className="w-12 h-12"
            />
            <div>
              <div className="block hover:text-gray-800 text-lg font-semibold">
                Woo Commerce Addon
              </div>
              <p className="text-sm font-normal w-96 text-black">
                Sync WooCommerce data to target customers with tailored email campaigns effortlessly.
              </p>
            </div>
          </div>
        </a>

        {/* Popup Builder */}
        <a href="/integration4">
          <div className="flex items-center ml-20 w-[456px] hover:bg-gray-200 p-4 space-x-4">
            <img
              src="https://sendmails.io/wp-content/uploads/2024/09/API-Integration-5.png"
              alt="Popup Builder"
              className="w-12 h-12"
            />
            <div>
              <div className="block hover:text-gray-800 text-lg font-semibold">
                Api Integration
              </div>
              <p className="text-sm font-normal w-96 text-black">
                Utilize API endpoints to automate and manage your email marketing processes effectively.
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  )}
</div>

<div className="relative">
  <div
    className="hover:text-black p-8 resource-section flex items-center cursor-pointer"
    onClick={toggleresourcesDropdown}
  >
    Resources
    <RiArrowDropDownLine className="ml-1 text-xl text-white" />
  </div>

  {/* Dropdown for Resources */}
  {openDropdown === 'resources' && (
    <div className="absolute lg:-left-[895px] w-screen bg-white  top-[80px] text-black">
      <div className="grid grid-cols-2 gap-4 bg-white -ml-32 h-[300px] p-12">
        {/* Knowledge Base */}
        <a href="/tutorials">
          <div className="flex items-center ml-72 w-[456px] hover:bg-gray-200 p-6 space-x-4">
            <img
              src="https://sendmails.io/wp-content/uploads/2024/09/Knowledge-Base-2.png"
              alt="Email Marketing"
              className="w-12 h-12"
            />
            <div>
              <div className="block hover:text-gray-800 text-lg font-semibold">Knowledge Base</div>
              <p className="text-sm font-normal w-96 text-black">Find guides for all our features.</p>
            </div>
          </div>
        </a>

        {/* Watch Tutorials */}
        <a href="/tutorials">
          <div className="flex items-center ml-20 w-[456px] hover:bg-gray-200 p-6 space-x-4">
            <img
              src="https://sendmails.io/wp-content/uploads/2024/09/Youtube-tutorials-1.png"
              alt="Marketing Automation"
              className="w-12 h-12"
            />
            <div>
              <div className="block hover:text-gray-800 text-lg font-semibold">Watch Tutorial Videos</div>
              <p className="text-sm font-normal w-96 text-black">Launch your first campaign with SendMails.</p>
            </div>
          </div>
        </a>

        {/* Ultimate Guide */}
        <a href="/tutorials">
          <div className="flex items-center ml-72 w-[524px] hover:bg-gray-200 p-6 space-x-4">
            <img
              src="https://sendmails.io/wp-content/uploads/2024/09/Launch-first-campaign-1.png"
              alt="Contact CIRM"
              className="w-12 h-12"
            />
            <div>
              <div className="block hover:text-gray-800 text-lg w-full font-semibold">
                Ultimate Guide to Launch Your First Campaign
              </div>
              <p className="text-sm font-normal text-black">See Sendmails in action</p>
            </div>
          </div>
        </a>

        {/* Join the Community */}
        <a href="/tutorials">
          <div className="flex items-center ml-20 w-[456px] hover:bg-gray-200 p-6 space-x-4">
            <img
              src="https://sendmails.io/wp-content/uploads/2024/09/Community-2.png"
              alt="Popup Builder"
              className="w-12 h-12"
            />
            <div>
              <div className="block hover:text-gray-800 text-lg font-semibold">Join The Community</div>
              <p className="text-sm font-normal text-black">Unlock SOPs, blueprints, and email marketing hacks</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  )}
</div>

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
              <a href="/signup">
              <button
                className={`w-20 h-8 bg-parrot hover:outline-parrot rounded-md ${
                  isScrolled
                    ? "text-black bg-parrot hover:text-white hover:outline-white outline hover:bg-[#0f2027]"
                    : "text-black bg-parrot hover:text-white hover:outline-white outline hover:bg-[#0f2027]"
                }`}
              >
                Log in
              </button>
              </a>
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
