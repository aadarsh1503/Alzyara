import React, { useState } from "react";
import g1 from "./g1.png"
function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="lg:hidden bg-gray-900 text-white px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={g1}
            alt="Logo"
            className="h-8 w-8 mr-2"
          />
          <h1 className="text-lg font-bold"></h1>
        </div>
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>
      {isOpen && (
        <ul className="mt-4 space-y-4">
          <li className="hover:text-green-500 cursor-pointer">Features</li>
          <li className="hover:text-green-500 cursor-pointer">Solutions</li>
          <li className="hover:text-green-500 cursor-pointer">Pricing</li>
          <li className="hover:text-green-500 cursor-pointer">Integration</li>
          <li className="hover:text-green-500 cursor-pointer">Resources</li>
          <div className="mt-4 space-y-2">
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
