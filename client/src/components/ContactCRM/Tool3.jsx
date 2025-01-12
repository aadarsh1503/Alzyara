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

import ApiIcon from '@mui/icons-material/Api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot,faWandMagicSparkles,faChartBar,faBolt,faCog ,faFilter ,faInfoCircle   } from '@fortawesome/free-solid-svg-icons';
const Tool3 = () => {
  return (
    <div className="bg-white ml-0 lg:ml-10  py-16 px-8">
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-12 items-center">
        {/* Left Side: Blocks */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-2">
          {/* Subject Analyzer */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start">
            <div className="text-green-900 text-3xl mb-4">
            <FontAwesomeIcon icon={faRobot} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Subject Analyzer</h3>
            <p className="text-gray-600">
              Improve your email open rates by analyzing your subject line.
            </p>
          </div>
          {/* Drag & Drop Builder */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start">
            <div className="text-green-900 text-3xl mb-4">
            <FontAwesomeIcon icon={faInfoCircle } />
            </div>
            <h3 className="text-lg font-semibold mb-2">Drag & Drop Builder</h3>
            <p className="text-gray-600">
              Easily drag & drop the relevant blocks to create the email template.
            </p>
          </div>
          {/* Email Validation */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start">
            <div className="text-green-900 text-3xl mb-4">
            <FontAwesomeIcon icon={faChartBar} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email Validation</h3>
            <p className="text-gray-600">
              Validate your email list for the best deliverability results.
            </p>
          </div>
          {/* Handle Bounce & Unsubscribe */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start">
            <div className="text-green-900 text-3xl mb-4">
              <FaServer />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Handle Bounce & Unsubscribe
            </h3>
            <p className="text-gray-600">
              Automatically remove all the bounced and unsubscribed emails.
            </p>
          </div>
          {/* Detailed Analytics */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start">
            <div className="text-green-900 text-3xl mb-4">
            <FontAwesomeIcon icon={faBolt}  />
            </div>
            <h3 className="text-lg font-semibold mb-2">Detailed Analytics</h3>
            <p className="text-gray-600">
              In-depth tracking of the results of every campaign.
            </p>
          </div>
          {/* WYSIWYG Editor */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start">
            <div className="text-green-900 text-3xl mb-4">
            <FontAwesomeIcon icon={faCog}  />
            </div>
            <h3 className="text-lg font-semibold mb-2">WYSIWYG Editor</h3>
            <p className="text-gray-600">
              Use WYSIWYG Editor to create stunning emails without any hassle.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start">
  <div className="text-green-900 text-3xl mb-4">
<FaChartPie />
  </div>
  <h3 className="text-lg font-semibold mb-2">Marketing Automation</h3>
  <p className="text-gray-600">
    Nurture your leads with a series of automated emails based on the user's action
  </p>
</div>
{/* Drag & Drop Builder */}
<div className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start">
  <div className="text-green-900 text-3xl mb-4">
  <FaNetworkWired />
  </div>
  <h3 className="text-lg font-semibold mb-2">Email Tracking</h3>
  <p className="text-gray-600">
    Track every single engagement made by users for all your emails
  </p>
</div>

{/* Email Validation */}
<div className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start">
  <div className="text-green-900 text-3xl mb-4">
    <FaChartPie />
  </div>
  <h3 className="text-lg font-semibold mb-2">List Segmentation</h3>
  <p className="text-gray-600">
    Sending emails to targeted segments can increase email engagement & revenue by more than 25%.
  </p>
</div>
{/* Handle Bounce & Unsubscribe */}


        </div>

        {/* Right Side: Text */}
        <div className="text-left mt-0 lg:-mt-[700px]">
          <h2 className="lg:text-5xl text-3xl font-bold mb-4">All the Tools You <br />Need</h2>
          <p className="text-gray-600 text-lg">
          Start converting leads today with our top-tier CRM <br /> and sales engagement solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tool3;
