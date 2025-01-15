import React from "react";
import g1 from "./g1.png"
import g2 from "./g2.png"
import { AiOutlineInstagram, AiOutlineYoutube, AiOutlineFacebook, AiOutlineTwitter, AiOutlineLinkedin } from 'react-icons/ai'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <footer className="bg-gray-900 z-50 text-13px  text-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Alzyara Section */}
          <div className="md:col-span-2">
  <img
    src={g1}
    alt="Alzyara Logo"
    className="mb-4 w-32"
  />
  <p className="text-gray-400 text-left relative ml-0 right-0 lg:ml-36 lg:right-36 text-14px mb-6">
  Alzyara makes email<br /> marketing and marketing<br /> automation easy for<br /> businesses of all sizes.
</p>

<div className="flex items-center cursor-pointer justify-start space-x-4 -ml-6">
  <a href="https://www.instagram.com/alzyarasoftwares/" target="_blank" rel="noopener noreferrer">
    <AiOutlineInstagram className="text-gray-400 hover:text-parrot text-2xl" />
  </a>
  <AiOutlineYoutube className="text-gray-400 hover:text-parrot text-2xl" />
  <a href="https://www.facebook.com/Alzyarasoftwares" target="_blank" rel="noopener noreferrer">
    <AiOutlineFacebook className="text-gray-400 hover:text-parrot text-2xl" />
  </a>
  <a href="https://x.com/Alzyara_Tech" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faXTwitter} className="text-gray-400  hover:text-parrot text-2xl" />
  </a>
  <AiOutlineLinkedin className="text-gray-400 hover:text-parrot text-2xl" />
</div>
<a href="https://www.facebook.com/Alzyarasoftwares" target="_blank" rel="noopener noreferrer">
  <h1 className=" ml-0 lg:-ml-5 font-bold text-md hover:text-parrot mt-4">Join Our Facebook Community</h1>
  </a>
</div>

          {/* Subscription Section */}
          <div className="md:col-span-3 ">
            <p className="text-gray-300 mb-4">
              Get insights about Alzyara marketing automation and Alzyara
              news. No spam, ever!
            </p>
            <div className="flex mb-">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-l-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none  "
              />
              <button className="bg-lgreen text-white px-6 py-2 rounded-r-md hover:bg-hgreen">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="mt-4 lg:-mt-56 ml-0 lg:ml-64 grid grid-cols-2 md:grid-cols-6 gap-6">
          <div>
            <h5 className="font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2 text-gray-400 text-13px">
              <li>Getting Started</li>
              <li>Login</li>
              <li> <a href="/pricing" class="hover:underline">Pricing</a></li>
              <li>Features</li>
              <li>Affiliates</li>
              
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Resources</h5>
            <ul className="space-y-2 text-gray-400 text-13px">
              <li>Support Centre</li>
              <li>Documentation</li>
              <li>Community</li>
              <li>FAQs</li>

            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Features</h5>
            <ul className="space-y-2 text-gray-400 text-13px">
           
  <li><a href="/feature1" class="hover:underline">Email Marketing</a></li>
  <li><a href="/feature2" class=" hover:underline">Marketing Automation</a></li>
  <li><a href="/feature3" class=" hover:underline">Contact CRM</a></li>
  <li><a href="/feature4" class=" hover:underline">Popup Builder</a></li>
  <li><a href="/feature5" class=" hover:underline">Lead WebForm</a></li>
  <li><a href="/feature6" class=" hover:underline">Email Verification</a></li>


      

            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Solutions</h5>
            <ul className="space-y-2 text-gray-400 text-13px">
            <li> <a href="/marketing" class="hover:underline">Marketing Agencies</a></li>
              <li> <a href="/solution2" class="hover:underline">Sales Teams</a></li>
              <li> <a href="/solution3" class="hover:underline">Education</a></li>
              <li> <a href="/solution4" class="hover:underline">Ecommerce</a></li>
              
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Integrations</h5>
            <ul className="space-y-2 text-gray-400 text-13px">
            <li><a href="/integration" class="hover:underline">Zapier</a></li>
              <li><a href="/integration2" class="hover:underline">Pabbly</a></li>
              <li><a href="/integration3" class="hover:underline">Woo Commerce Addon</a></li>
              <li><a href="/integration4" class="hover:underline">Api Integration</a></li>
            </ul>
            
          </div>
          <div>
            <h5 className="font-semibold mb-4">Integrations</h5>
            <ul className="space-y-2 text-gray-400 text-13px">
              <li>Refund Policy</li>
              <li>GDPR</li>
              <li>Affiliate Terms</li>

            </ul>
            
          </div>
        </div>

       {/* Disclaimer Section */}
<div className="mt-10 border-t border-gray-700 pt-6 text-13px text-gray-400 flex items-center justify-between">
  {/* Left-aligned paragraph */}
  <p className="text-left">
    © Copyright 2019-2025 Alzyara. All rights reserved.
  </p>
  {/* Right-aligned links */}
  <ul className="flex space-x-4">
    <li>
      <a href="/contact" className="hover:underline">
        Contact Us
      </a>
    </li>
    <li>
      <a href="/termsofService" className="hover:underline">
        Terms & Conditions
      </a>
    </li>
    <li>
      <a href="/privacy" className="hover:underline">
        Privacy Policy
      </a>
    </li>
  </ul>
</div>

      </div>
    </footer>
  );
};

export default Footer;
