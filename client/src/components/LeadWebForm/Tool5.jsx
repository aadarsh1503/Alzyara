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
  FaEnvelopeOpenText,
  FaFilter
} from "react-icons/fa";

import ApiIcon from '@mui/icons-material/Api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot,faWandMagicSparkles,faChartBar,faBolt,faCog,faFileSignature  ,faFilter ,faInfoCircle,faGripLines,faMousePointer ,faMobileAlt,faImage      } from '@fortawesome/free-solid-svg-icons';

const Tool5 = () => {
  return (
    <div className="bg-white ml-0 lg:ml-10  py-16 px-8">
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-12 items-center">
        {/* Left Side: Blocks */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-2">
          {/* Subject Analyzer */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start">
            <div className="text-green-900 text-3xl mb-4">
            <FontAwesomeIcon icon={faFileSignature } />
            </div>
            <h3 className="text-lg font-semibold mb-2">Embedded Form</h3>
            <p className="text-gray-600">
            Design custom forms and embed them in your website to capture the leads
            </p>
          </div>
          {/* Drag & Drop Builder */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start">
            <div className="text-green-900 text-3xl mb-4">
            <FontAwesomeIcon icon={faMousePointer  } />
            </div>
            <h3 className="text-lg font-semibold mb-2">Drag & Drop Builder</h3>
            <p className="text-gray-600">
              Easily drag & drop the relevant blocks to create the email template.
            </p>
          </div>
          {/* Email Validation */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start">
            <div className="text-green-900 text-3xl mb-4">
            <FontAwesomeIcon icon={faImage} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Detailed Analytics</h3>
            <p className="text-gray-600">
            In-depth tracking of the results of every campaign.
       
            </p>
          </div>
          {/* Handle Bounce & Unsubscribe */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start">
            <div className="text-green-900 text-3xl mb-4">
            <FontAwesomeIcon icon={faMobileAlt} />
            </div>
            <h3 className="text-lg font-semibold mb-2">
             Mobile Responsive
            </h3>
            <p className="text-gray-600">
            Emails templates are fit for any device/ they are responsive to all devices
            </p>
          </div>
          {/* Detailed Analytics */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start">
            <div className="text-green-900 text-3xl mb-4">
            <FontAwesomeIcon icon={faBolt}  />
            </div>
            <h3 className="text-lg font-semibold mb-2">Outgoing Webhooks</h3>
            <p className="text-gray-600">
            Instant webhook notification system with event details
            </p>
          </div>
          {/* WYSIWYG Editor */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start">
            <div className="text-green-900 text-3xl mb-4">
            <FontAwesomeIcon icon={faImage}  />
            </div>
            <h3 className="text-lg font-semibold mb-2">Add Images/Links</h3>
            <p className="text-gray-600">
            Add images/links in the email template as per your need
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start">
  <div className="text-green-900 text-3xl mb-4">
  <FaChartPie />
  </div>
  <h3 className="text-lg font-semibold mb-2">List Segmentation</h3>
  <p className="text-gray-600">
  Sending emails to targeted segments can increase email engagement & revenue by more than 25%.
  </p>
</div>
{/* Drag & Drop Builder */}
<div className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start">
  <div className="text-green-900 text-3xl mb-4">
  <FaNetworkWired />
  </div>
  <h3 className="text-lg font-semibold mb-2">Marketing Automation</h3>
  <p className="text-gray-600">
  Nurture your leads with a series of automated emails based on the user's action
  </p>
</div>
<div className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start">
  <div className="text-green-900 text-3xl mb-4">
  <FaFilter />
  </div>
  <h3 className="text-lg font-semibold mb-2">Filters</h3>
  <p className="text-gray-600">
  Filter Email Campaigns/ Subscriber List/ Workflows according to their name & status.
  </p>
</div>

{/* Email Validation */}

{/* Handle Bounce & Unsubscribe */}


        </div>

        {/* Right Side: Text */}
        <div className="text-left mt-0 lg:-mt-[600px]">
          <h2 className="lg:text-5xl text-3xl font-bold mb-4">All the Tools You <br />Need</h2>
          <p className="text-gray-600 text-lg">
          Enhance your marketing strategy with <br />SendMails' powerful lead webforms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tool5;
