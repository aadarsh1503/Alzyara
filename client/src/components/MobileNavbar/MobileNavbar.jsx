import React, { useState } from "react";
import g1 from "./g1.png";

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav className="lg:hidden bg-gray-900 text-white px-6 py-4">
      <div className="flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img src={g1} alt="Logo" className="h-8 w-8 mr-2" />
          <h1 className="text-lg font-bold"></h1>
        </a>
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>
      {isOpen && (
        <ul className="mt-4 space-y-4">
          {/* First Menu Item */}
          <li>
            <div
              className="hover:text-green-500 cursor-pointer flex justify-between items-center"
              onClick={() => toggleDropdown(1)}
            >
              Features
              <span>{activeDropdown === 1 ? "▲" : "▼"}</span>
            </div>
            {activeDropdown === 1 && (
              <ul className="mt-2 pl-4 space-y-4">
              <li>
                <a href="/feature1" className="hover:text-lime-500 cursor-pointer">Email Marketing</a>
              </li>
              <li>
                <a href="/feature2" className="hover:text-lime-500 cursor-pointer">Marketing Automation</a>
              </li>
              <li>
                <a href="/feature3" className="hover:text-lime-500 cursor-pointer">Contact CRM</a>
              </li>
              <li>
                <a href="/feature4" className="hover:text-lime-500 cursor-pointer">Popup Builder</a>
              </li>
              <li>
                <a href="/feature5" className="hover:text-lime-500 cursor-pointer">Lead WebForm</a>
              </li>
              <li>
                <a href="/feature6" className="hover:text-lime-500 cursor-pointer">Email Verification</a>
              </li>
            </ul>
            
            )}
          </li>
          {/* Second Menu Item */}
          <li>
            <div
              className="hover:text-green-500 cursor-pointer flex justify-between items-center"
              onClick={() => toggleDropdown(2)}
            >
              Solutions
              <span>{activeDropdown === 2 ? "▲" : "▼"}</span>
            </div>
            {activeDropdown === 2 && (
              <ul className="mt-2 pl-4 space-y-4">
                <li>
  <a href="/solution1" className="hover:text-lime-500 cursor-pointer">Marketing Agencies</a>
</li>
<li>
  <a href="/solution2" className="hover:text-lime-500 cursor-pointer">Education</a>
</li>
<li>
  <a href="/solution3" className="hover:text-lime-500 cursor-pointer">Sales Team</a>
</li>
<li>
  <a href="/solution4" className="hover:text-lime-500 cursor-pointer">E-Commerce</a>
</li>

              </ul>
            )}
          </li>
          <a href="/pricing" className="">
          {/* Third Menu Item */}
          <li className="hover:text-green-500 mt-3 cursor-pointer">Pricing</li>
          </a>
          {/* Fourth Menu Item */}
          <li>
            <div
              className="hover:text-green-500 cursor-pointer flex justify-between items-center"
              onClick={() => toggleDropdown(4)}
            >
              Integration
              <span>{activeDropdown === 4 ? "▲" : "▼"}</span>
            </div>
            {activeDropdown === 4 && (
              <ul className="mt-2 pl-4 space-y-4">
               <li>
  <a href="/integration" className="hover:text-lime-500 cursor-pointer">Zapier Integration</a>
</li>
<li>
  <a href="/integration2" className="hover:text-lime-500 cursor-pointer">Pabbly Integration</a>
</li>
<li>
  <a href="/integration3" className="hover:text-lime-500 cursor-pointer">Woo Commerce Addon </a>
</li>
<li>
  <a href="/integration4" className="hover:text-lime-500 cursor-pointer">Api Integration </a>
</li>

              </ul>
            )}
          </li>
          {/* Fifth Menu Item */}
          <li>
            <div
              className="hover:text-green-500 cursor-pointer flex justify-between items-center"
              onClick={() => toggleDropdown(5)}
            >
              Resources
              <span>{activeDropdown === 5 ? "▲" : "▼"}</span>
            </div>
            {activeDropdown === 5 && (
              <ul className="mt-2 pl-4 space-y-4">
              <li>
  <a href="/resources" className="hover:text-lime-500 cursor-pointer">Knowledge Base </a>
</li>
<li>
  <a href="/resources" className="hover:text-lime-500 cursor-pointer">Watch Tutorials Videos</a>
</li>
<li>
  <a href="/resources" className="hover:text-lime-500 cursor-pointer">Ultimate Guide</a>
</li>
<li>
  <a href="/resources" className="hover:text-lime-500 cursor-pointer">Join The Community</a>
</li>


              </ul>
            )}
          </li>
          {/* Buttons */}
          <div className="mt-4 space-y-4">
            <button className="block w-full bg-lime-500 text-black px-4 py-2 rounded hover:bg-lime-400">
              Request Demo
            </button>
            <button className="block w-full bg-lime-500 text-black px-4 py-2 rounded hover:bg-lime-400">
              Log in
            </button>
          </div>
        </ul>
      )}
    </nav>
  );
}

export default MobileNavbar;
