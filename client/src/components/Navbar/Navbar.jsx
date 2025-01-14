import React, { useState, useEffect,useRef } from "react";
import { Link } from "react-router-dom"; // Import Link for React Router navigation
import { AiOutlineSearch } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu
import g1 from "./g1.png";
import i1 from "./i1.png";
import i2 from "./i2.png";
import d1 from "./d1.png";
import d2 from "./d2.png";
import d3 from "./d3.png";
import d4 from "./d4.png";
import c1 from "./c1.png";
import c2 from "./c2.png";
import c3 from "./c3.png";
import c4 from "./c4.png";
import b1 from "./b1.png";
import b2 from "./b2.png";
import b3 from "./b3.png";
import b4 from "./b4.png";
import a1 from "./a1.png";
import a2 from "./a2.png";
import a3 from "./a3.png";
import a4 from "./a4.png";
import a5 from "./a5.png";
import a6 from "./a6.png";
import { RiArrowDropDownLine } from 'react-icons/ri';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchText, setSearchText] = useState("");

  const dropdownRef = useRef(null);

  // Effect to handle scroll and close dropdown
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      closeAllDropdowns();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Effect to handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        closeAllDropdowns();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeAllDropdowns = () => {
    setIsDropdownOpen(false);
    setOpenDropdown(null);
    setIsSolutionsOpen(false);
  };
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
        className={`fixed hidden lg:flex  top-0 w-full  z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#0f2027] text-white" : "bg-[#0f2027]  text-white"
        }`}
      >
        <div className="container mx-auto flex max-w-7xl items-center justify-between px-6 py-">
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
  className="hover:text-parrot p-8 flex feature-section items-center cursor-pointer"
  onClick={toggleFeaturesDropdown}
>
  Features
  <RiArrowDropDownLine className="ml-1 text-xl text-white" />
</div>

{/* Dropdown for Features */}
{openDropdown === 'features' && (
  <div className="fixed top-24 left-0 w-full h-[456px] bg-white pt-3 text-black z-10">
    <div className="grid grid-cols-1 -ml-32  lg:grid-cols-2 gap-  h-full p-12">
  
      {/* Email Marketing */}
      <a href="/feature1">
        <div className="flex items-center w-[446px] ml-72 hover:bg-bkg space-x-2 p-4 hover:text-dgreen group rounded-lg">
          <div className="w-24 h-18 bg-transparent rounded-xl p-3 group-hover:bg-gray-50  flex items-center justify-center">
      <img
        src={i1}
        alt="Email Marketing"
        class="w-full h-full "
      />
    </div>
    <div>
      <div class="font-normal text-lg">
        Email Marketing
      </div>
      <p class="font-light text-sm">
        Create and send stunning, personalized email campaigns to engage with your audience.
      </p>
    </div>
  </div>
</a>

    {/* Marketing Automation */}
    <a href="/feature2">
      <div className="flex  items-center ml-20 w-[446px] space-x-4 p-4 hover:bg-bkg hover:text-dgreen rounded-lg">
        <img
          src={a2}
          alt="Marketing Automation"
          className="w-12 h-12"
        />
        <div>
          <div className=" font-normal text-lg ">
            Marketing Automation
          </div>
          <p className=" font-light  text-sm">
            Automate email workflows based on customer actions to nurture leads and drive sales.
          </p>
        </div>
      </div>
    </a>
    {/* Contact CRM */}
    <a href="/feature3">
  <div class="flex items-center w-[446px] ml-72 space-x-2 p-4 hover:bg-bkg hover:text-dgreen group rounded-lg">

    <div class="w-24 h-18  bg-transparent rounded-xl p-3 group-hover:bg-gray-50 flex items-center justify-center">
      <img
        src={i2}
        alt="Contact CRM"
        class="w-full h-full"
      />
    </div>
   
    <div>
      <div class="font-normal text-lg">
        Contact CRM
      </div>
      <p class="font-light text-sm">
        Manage, segment, and optimize your contact list for targeted and effective communication.
      </p>
    </div>
  </div>
</a>

    {/* Popup Builder */}
    <a href="/feature4">
      <div className="flex items-center ml-20 w-[456px] space-x-4 p-4 hover:bg-bkg hover:text-dgreen rounded-lg">
        <img
          src={a4}
          alt="Popup Builder"
          className="w-12 h-12"
        />
        <div>
          <div className="font-normal text-lg">
            Popup Builder
          </div>
          <p className="font-light  text-sm">
            Design and implement popups to capture leads directly from your website seamlessly.
          </p>
        </div>
      </div>
    </a>
    {/* Lead WebForm */}
    <a href="/feature5">
      <div className="flex items-center ml-72  space-x-2 p-4 hover:bg-bkg hover:text-dgreen rounded-lg">
        <img
          src={a5}
          alt="Lead WebForm"
          className="w-12 ml-2  h-12"
        />
        <div>
          <div className="font-normal ml-2 text-lg">
            Lead WebForm
          </div>
          <p className="font-light ml-2  text-sm">
            Create custom web forms to collect and manage leads effortlessly from various sources.
          </p>
        </div>
      </div>
    </a>
    {/* Email Verification */}
    <a href="/feature6">
      <div className="flex items-center ml-20 space-x-4 p-4 w-[456px] hover:bg-bkg hover:text-dgreen rounded-lg">
        <img
          src={a6}
          alt="Email Verification"
          className="w-12 h-12"
        />
        <div>
          <div className="font-normal text-lg">
            Email Verification
          </div>
          <p className="font-light  text-sm">
            Ensure your email list is clean and deliverable with integrated email verification tools.
          </p>
        </div>
      </div>
    </a>
  </div>
</div>

      )}
    </div>
            <div className="group relative hover:text-parrot">
            <div
  className="hover:text-parrot p-8 market-section flex items-center cursor-pointer"
  onClick={toggleSolutionsDropdown}
>
  {/* Dropdown Icon */}
 
  Solutions
  <RiArrowDropDownLine className="ml-1 text-xl text-white" />
</div>


        {/* Dropdown for Solutions */}
        {openDropdown === 'solutions' && (
          <div className="fixed top-24 left-0 w-full h-[300px] bg-white pt-3 text-black z-10">
            <div className="grid grid-cols-2 gap-4 bg-white -ml-32 h-[300px] p-12">
              {/* Marketing Agencies */}
              <a href="/marketing">
                <div className="flex items-center ml-72 p-4 w-[456px] hover:bg-bkg hover:text-dgreen rounded-lg space-x-4">
                  <img
                    src={b4}
                    alt="Marketing Agencies"
                    className="w-12 h-12"
                  />
                  <div>
                    <div className="font-normal text-lg">
                      Marketing Agencies
                    </div>
                    <p className="font-light  text-sm">
                      Boost client campaigns with powerful email marketing and automation tools
                    </p>
                  </div>
                </div>
              </a>

              {/* Education */}
              <a href="/solution2">
                <div className="flex items-center ml-20 w-[456px] hover:bg-bkg hover:text-dgreen rounded-lg p-4 space-x-4">
                  <img
                    src={b2}
                    alt="Education"
                    className="w-12 h-12"
                  />
                  <div>
                    <div className="font-normal text-lg">
                      Education
                    </div>
                    <p className="font-light  text-sm">
                      Engage students and streamline admissions with data-driven email communication
                    </p>
                  </div>
                </div>
              </a>
               {/* Contact CIRM */}
    <a href="/solution3">
    <div className="flex items-center ml-72 p-4 w-[456px] hover:bg-bkg hover:text-dgreen rounded-lg space-x-4">
      <img src={b3} alt="Contact CIRM" className="w-12 h-12" />
      <div>
        <div className="font-normal text-lg">Sales Teams</div>
        <p className="font-light  text-sm">Drive conversions with targeted email campaigns and lead management solutions</p>
      </div>
    </div>
    </a>
    {/* Popup Builder */}
    <a href="/solution4">
    <div className="flex items-center ml-20 w-[456px] hover:bg-bkg hover:text-dgreen p-4 rounded-lg space-x-4">
      <img src={b1} alt="Popup Builder" className="w-12 h-12" />
      <div>
        <div className="font-normal text-lg">E-Commerce</div>
        <p className="font-light  text-sm">Enhance online store sales with personalized and automated email marketing</p>
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
            <div className="hover:text-parrot p-8">
              Pricing
            </div>
            </a>
            </div>
 

<div className="relative">
  <div
    className="hover:text-parrot p-8 integration-section flex items-center cursor-pointer"
    onClick={toggleIntegrationDropdown}
  >
    Integration
    <RiArrowDropDownLine className="ml-1 text-xl text-white" />
  </div>
  {openDropdown === 'integration' && (
    <div className="fixed top-24 left-0 w-full h-[200px] bg-white pt-3 text-black z-10">
      <div className="grid grid-cols-2 gap-4 bg-white -ml-32 h-[300px] p-12">
        {/* Email Marketing */}
        <a href="/integration">
          <div className="flex items-center ml-72 w-[456px] hover:bg-bkg hover:text-dgreen rounded-lg p-4 space-x-4">
            <img
              src={c3}
              alt="Email Marketing"
              className="w-12 h-12"
            />
            <div>
              <div className="font-normal text-lg">
                Zapier Integration
              </div>
              <p className="font-light  text-sm">
                Connect Send Mails with thousands of apps via Zapier for seamless data automation
              </p>
            </div>
          </div>
        </a>

        {/* Marketing Automation */}
        <a href="/integration2">
          <div className="flex items-center ml-20 w-[456px] hover:bg-bkg hover:text-dgreen rounded-lg p-4 space-x-4">
            <img
              src={c4}
              alt="Marketing Automation"
              className="w-12 h-12"
            />
            <div>
              <div className="font-normal text-lg">
                Pabbly Integration
              </div>
              <p className="font-light  text-sm">
                Integrate Pabbly to streamline your workflows and enhance email marketing efficiency
              </p>
            </div>
          </div>
        </a>

        {/* Contact CIRM */}
        <a href="/integration3">
          <div className="flex items-center ml-72 w-[456px] hover:bg-bkg hover:text-dgreen rounded-lg p-4 space-x-4">
            <img
              src={c2}
              alt="Contact CIRM"
              className="w-12 h-12"
            />
            <div>
              <div className="font-normal text-lg">
                Woo Commerce Addon
              </div>
              <p className="font-light  text-sm">
                Sync WooCommerce data to target customers with tailored email campaigns effortlessly.
              </p>
            </div>
          </div>
        </a>

        {/* Popup Builder */}
        <a href="/integration4">
          <div className="flex items-center ml-20 w-[456px] hover:bg-bkg hover:text-dgreen rounded-lg p-4 space-x-4">
            <img 
              src={c1}
              alt="Popup Builder"
              className="w-12 h-12"
            />
            <div>
              <div className="font-normal text-lg">
                Api Integration
              </div>
              <p className="font-light  text-sm">
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
    className="hover:text-parrot p-8 resource-section flex items-center cursor-pointer"
    onClick={toggleresourcesDropdown}
  >
    Resources
    <RiArrowDropDownLine className="ml-1 text-xl text-white" />
  </div>

  {/* Dropdown for Resources */}
  {openDropdown === 'resources' && (
    <div className="fixed top-24 left-0 w-full h-[200px] bg-white pt-3 text-black z-10">
      <div className="grid grid-cols-2 gap-4 bg-white -ml-32 h-[300px] p-12">
        {/* Knowledge Base */}
        <a href="/tutorials">
          <div className="flex items-center ml-72 w-[456px] hover:bg-bkg hover:text-dgreen rounded-lg p-6 space-x-4">
            <img
              src={d4}
              alt="Email Marketing"
              className="w-12 h-12"
            />
            <div>
              <div className="font-normal text-lg">Knowledge Base</div>
              <p className="font-light  text-sm">Find guides for all our features.</p>
            </div>
          </div>
        </a>

        {/* Watch Tutorials */}
        <a href="/tutorials">
          <div className="flex items-center ml-20 w-[456px] hover:bg-bkg hover:text-dgreen rounded-lg p-6 space-x-4">
            <img
              src={d2}
              alt="Marketing Automation"
              className="w-12 h-12"
            />
            <div>
              <div className="font-normal text-lg">Watch Tutorial Videos</div>
              <p className="font-light  text-sm">Launch your first campaign with SendMails.</p>
            </div>
          </div>
        </a>

        {/* Ultimate Guide */}
        <a href="/tutorials">
          <div className="flex items-center ml-72 w-[524px] hover:bg-bkg hover:text-dgreen rounded-lg p-6 space-x-4">
            <img
              src={d3}
              alt="Contact CIRM"
              className="w-12 h-12"
            />
            <div>
              <div className="font-normal text-lg">
                Ultimate Guide to Launch Your First Campaign
              </div>
              <p className="font-light  text-sm">See Sendmails in action</p>
            </div>
          </div>
        </a>

        {/* Join the Community */}
        <a href="/tutorials">
          <div className="flex items-center ml-20 w-[456px] hover:bg-bkg hover:text-dgreen rounded-lg p-6 space-x-4">
            <img
              src={d1}
              alt="Popup Builder"
              className="w-12 h-12"
            />
            <div>
              <div className="font-normal text-lg">Join The Community</div>
              <p className="font-light  text-sm">Unlock SOPs, blueprints, and email marketing hacks</p>
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
