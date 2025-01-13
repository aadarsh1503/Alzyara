import React from "react";
import {
  FaChartPie,
  FaNetworkWired,
  FaMousePointer,
  FaServer,
  FaReplyAll,
  FaPen,
  FaCheckSquare,
  FaInfoCircle,
  FaChartLine,
  FaUsers,
  FaEnvelopeOpenText
} from "react-icons/fa";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRobot,
  faWandMagicSparkles,
  faChartBar,
  faBolt,
  faCog,
  faFilter,
  faInfoCircle,
  faGripLines,
  faMousePointer,
  faMobileAlt,
  faImage
} from '@fortawesome/free-solid-svg-icons';

const Tool4 = () => {
  return (
    <div className="bg-white ml-0 lg:ml-20 py-16">
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-1 items-center">
        {/* Left Side: Blocks */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
          {/* Subject Analyzer */}
          <a href="/feature4" className="bg-gray-100 p-6 rounded-lg w-full shadow-sm flex flex-col items-start group">
          <div className="w-20 aspect-square flex items-center justify-center text-lgreen text-3xl mb-4 bg-gray-200 rounded-lg group-hover:bg-lgreen group-hover:text-white">
    <FontAwesomeIcon icon={faMousePointer} />
  </div>
  <h3 className="text-lg font-semibold mb-2">Drag & Drop Builder</h3>
  <p className="text-gray-600">
    Easily drag & drop the relevant blocks to create the email template.
  </p>
</a>
          {/* Drag & Drop Builder */}
          <a href="/feature4" className="bg-gray-100 p-6 rounded-lg w-full shadow-sm flex flex-col items-start group">
  <div className="w-20 aspect-square flex items-center justify-center text-lgreen text-3xl mb-4 bg-gray-200 rounded-lg group-hover:bg-lgreen group-hover:text-white">
    <FontAwesomeIcon icon={faMobileAlt} />
  </div>
  <h3 className="text-lg font-semibold mb-2">Mobile Responsive</h3>
  <p className="text-gray-600">
    Emails templates are fit for any device/ they are responsive to all devices
  </p>
</a>

          {/* Email Validation */}
          <a href="/feature4" className="bg-gray-100 p-6 rounded-lg w-full shadow-sm flex flex-col items-start group">
  <div className="w-20 aspect-square flex items-center justify-center text-lgreen text-3xl mb-4 bg-gray-200 rounded-lg group-hover:bg-lgreen group-hover:text-white">
              <FontAwesomeIcon icon={faChartBar} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Detailed Analytics</h3>
            <p className="text-gray-600">
              In-depth tracking of the results of every campaign.
            </p>
          </a>
          {/* Handle Bounce & Unsubscribe */}
          <a href="/feature4" className="bg-gray-100 p-6 rounded-lg w-full shadow-sm flex flex-col items-start group">
          <div className="w-20 aspect-square flex items-center justify-center text-lgreen text-3xl mb-4 bg-gray-200 rounded-lg group-hover:bg-lgreen group-hover:text-white">
              <FontAwesomeIcon icon={faImage} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Add Images/Links</h3>
            <p className="text-gray-600">
              Add images/links in the email template as per your need
            </p>
          </a>
          {/* Detailed Analytics */}
          <a href="/feature4" className="bg-gray-100 p-6 rounded-lg w-full shadow-sm flex flex-col items-start group">
  <div className="w-20 aspect-square flex items-center justify-center text-lgreen text-3xl mb-4 bg-gray-200 rounded-lg group-hover:bg-lgreen group-hover:text-white">
              <FontAwesomeIcon icon={faBolt} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Outgoing Webhooks</h3>
            <p className="text-gray-600">
              Instant webhook notification system with event details
            </p>
          </a>
          {/* WYSIWYG Editor */}
          <a href="/feature4" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
            <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
              <FontAwesomeIcon icon={faRobot} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Create Automation Workflows</h3>
            <p className="text-gray-600">
              Build automated workflow that will trigger on desired event
            </p>
          </a>
          {/* Marketing Automation */}
          <a href="/feature4" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
            <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
              <FaNetworkWired />
            </div>
            <h3 className="text-lg font-semibold mb-2">Marketing Automation</h3>
            <p className="text-gray-600">
              Nurture your leads with a series of automated emails based on the user's action
            </p>
          </a>
        </div>

        {/* Right Side: Text */}
        <div className="text-left mt-0 ml-0 lg:ml-20 lg:-mt-[700px]">
          <h2 className="lg:text-4xl text-3xl font-bold mb-4">All the Tools You <br />Need</h2>
          <p className="text-gray-600 text-lg">
            Start converting leads today with our top-tier CRM <br /> and sales engagement solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tool4;
