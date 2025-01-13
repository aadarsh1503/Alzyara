import React from "react";
import {
  FaChartPie,
  FaServer,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRobot,
  faWandMagicSparkles,
  faChartBar,
  faBolt,
  faCog,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import "./m.css";

const Tool2 = () => {
  return (
    <div className="bg-white ml-0 lg:ml-20 py-16 ">
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-1 items-center">
        {/* Left Side: Blocks */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
          {/* Subject Analyzer */}
          <a href="/feature2" className="bg-gray-100 p-6 rounded-lg w-full shadow-sm flex flex-col items-start group">
          <div className="w-20 aspect-square flex items-center justify-center text-lgreen text-3xl mb-4 bg-gray-200 rounded-lg group-hover:bg-lgreen group-hover:text-white">

              <FontAwesomeIcon icon={faRobot} />
            </div>
            <h3 className="text-base font-semibold mb-2">Create Automation WorkFlow</h3>
            <p className="text-gray-600">
              Build automated workflow that will trigger on desired event
            </p>
          </a>

          {/* Drag & Drop Builder */}
          <a href="/feature2" className="bg-gray-100 p-6 rounded-lg w-full shadow-sm flex flex-col items-start group">
          <div className="w-20 aspect-square flex items-center justify-center text-lgreen text-3xl mb-4 bg-gray-200 rounded-lg group-hover:bg-lgreen group-hover:text-white">

              <FontAwesomeIcon icon={faWandMagicSparkles} />
            </div>
            <h3 className="text-lg font-semibold mb-2">AI Writer</h3>
            <p className="text-gray-600">
              Write subject lines and email using in-built AI email writer
            </p>
          </a>

          {/* Email Validation */}
          <a href="/feature2" className="bg-gray-100 p-6 rounded-lg w-full shadow-sm flex flex-col items-start group">
          <div className="w-20 aspect-square flex items-center justify-center text-lgreen text-3xl mb-4 bg-gray-200 rounded-lg group-hover:bg-lgreen group-hover:text-white">

              <FontAwesomeIcon icon={faChartBar} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Detailed Analytics</h3>
            <p className="text-gray-600">
              In-depth tracking of the results of every campaign
            </p>
          </a>

          {/* Handle Bounce & Unsubscribe */}
          <a href="/feature2" className="bg-gray-100 p-6 rounded-lg w-full shadow-sm flex flex-col items-start group">
          <div className="w-20 aspect-square flex items-center justify-center text-lgreen text-3xl mb-4 bg-gray-200 rounded-lg group-hover:bg-lgreen group-hover:text-white">

              <FaServer />
            </div>
            <h3 className="text-lg font-semibold mb-2">API Integration</h3>
            <p className="text-gray-600">
              Use API endpoints to view, create or delete a subscriber/list and track campaign performance
            </p>
          </a>

          {/* Detailed Analytics */}
          <a href="/feature2" className="bg-gray-100 p-6 rounded-lg w-full shadow-sm flex flex-col items-start group">
          <div className="w-20 aspect-square flex items-center justify-center text-lgreen text-3xl mb-4 bg-gray-200 rounded-lg group-hover:bg-lgreen group-hover:text-white">

              <FontAwesomeIcon icon={faBolt} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Outgoing Webhooks</h3>
            <p className="text-gray-600">
              Instant webhook notification system with event details
            </p>
          </a>

          {/* WYSIWYG Editor */}
          <a href="/feature2" className="bg-gray-100 p-6 rounded-lg w-full shadow-sm flex flex-col items-start group">
          <div className="w-20 aspect-square flex items-center justify-center text-lgreen text-3xl mb-4 bg-gray-200 rounded-lg group-hover:bg-lgreen group-hover:text-white">

              <FontAwesomeIcon icon={faCog} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Zapier Integration</h3>
            <p className="text-gray-600">
              Connect your favorite app with Alzyara using Zapier
            </p>
          </a>

          {/* Pabbly Integration */}
          <a href="/feature2" className="bg-gray-100 p-6 rounded-lg w-full shadow-sm flex flex-col items-start group">
          <div className="w-20 aspect-square flex items-center justify-center text-lgreen text-3xl mb-4 bg-gray-200 rounded-lg group-hover:bg-lgreen group-hover:text-white">

              <div className="p-icon">
                <span className="icon-text">P</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Pabbly Integration</h3>
            <p className="text-gray-600">
              Connect your favorite app with Alzyara using Pabbly
            </p>
          </a>

          {/* Filter */}
          <a href="/feature2" className="bg-gray-100 p-6 rounded-lg w-full shadow-sm flex flex-col items-start group">
          <div className="w-20 aspect-square flex items-center justify-center text-lgreen text-3xl mb-4 bg-gray-200 rounded-lg group-hover:bg-lgreen group-hover:text-white">

              <FontAwesomeIcon icon={faFilter} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Filter</h3>
            <p className="text-gray-600">
              Filter Email Campaigns/ Subscriber List/ Workflows according to their name & status.
            </p>
          </a>

          {/* Customer SMTP Server */}
          <a href="/feature2" className="bg-gray-100 p-6 rounded-lg w-full shadow-sm flex flex-col items-start group">
          <div className="w-20 aspect-square flex items-center justify-center text-lgreen text-3xl mb-4 bg-gray-200 rounded-lg group-hover:bg-lgreen group-hover:text-white">

              <FaChartPie />
            </div>
            <h3 className="text-lg font-semibold mb-2">Customer SMTP Server</h3>
            <p className="text-gray-600">
              Connect unlimited customer SMTP servers to spread your email sending load
            </p>
          </a>
        </div>

        {/* Right Side: Text */}
        <div className="text-left ml-0 lg:ml-20 mt-0 lg:-mt-[700px]">
          <h2 className="lg:text-4xl  text-3xl font-semibold mb-4">
            Effortless Automation for<br /> Complex Workflows 🤖
          </h2>
          <p className="text-gray-600 text-lg">
            With Alzyara, easily automate your entire customer<br /> journey while keeping control over every<br /> detail.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tool2;
