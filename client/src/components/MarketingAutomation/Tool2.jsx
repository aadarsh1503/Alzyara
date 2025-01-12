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
import "./m.css"
import ApiIcon from '@mui/icons-material/Api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot,faWandMagicSparkles,faChartBar,faBolt,faCog ,faFilter   } from '@fortawesome/free-solid-svg-icons';
const Tool2 = () => {
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
            <h3 className="text-lg font-semibold mb-2">Create Automation WorkFlow</h3>
            <p className="text-gray-600">
            Build automated workflow that will trigger on desired event
            </p>
          </div>
          {/* Drag & Drop Builder */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start">
            <div className="text-green-900 text-3xl mb-4">
            <FontAwesomeIcon icon={faWandMagicSparkles} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Ai Writer</h3>
            <p className="text-gray-600">
            Write subject lines and email using in-built AI email writer
            </p>
          </div>
          {/* Email Validation */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start">
            <div className="text-green-900 text-3xl mb-4">
            <FontAwesomeIcon icon={faChartBar} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Detailed Analytics</h3>
            <p className="text-gray-600">
            In-depth tracking of the results of every campaign
            </p>
          </div>
          {/* Handle Bounce & Unsubscribe */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start">
            <div className="text-green-900 text-3xl mb-4">
              <FaServer />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Api Integration
            </h3>
            <p className="text-gray-600">
            Use API endpoints to view, create or delete a subscriber/list and track campaign performance
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
            <FontAwesomeIcon icon={faCog}  />
            </div>
            <h3 className="text-lg font-semibold mb-2">Zapier Integration</h3>
            <p className="text-gray-600">
            Connect your favorite app with SendMails using Zapier
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start">
  <div className="text-green-900 text-3xl mb-4">
  <div className="p-icon">
      <span className="icon-text">P</span>
    </div>
  </div>
  <h3 className="text-lg font-semibold mb-2">Pabbly Integration</h3>
  <p className="text-gray-600">
  Connect your favorite app with SendMails using Pabbly
  </p>
</div>
{/* Drag & Drop Builder */}
<div className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start">
  <div className="text-green-900 text-3xl mb-4">
  <FontAwesomeIcon icon={faFilter}  />
  </div>
  <h3 className="text-lg font-semibold mb-2">Filter</h3>
  <p className="text-gray-600">
  Filter Email Campaigns/ Subscriber List/ Workflows according to their name & status.
  </p>
</div>

{/* Email Validation */}
<div className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start">
  <div className="text-green-900 text-3xl mb-4">
    <FaChartPie />
  </div>
  <h3 className="text-lg font-semibold mb-2"> Customer SMTP Server</h3>
  <p className="text-gray-600">
  Connect unlimited customer SMTP servers to spread your email sending load
  </p>
</div>
{/* Handle Bounce & Unsubscribe */}


        </div>

        {/* Right Side: Text */}
        <div className="text-left mt-0 lg:-mt-[700px]">
          <h2 className="lg:text-5xl text-3xl font-bold mb-4">Effortless Automation for<br /> Complex Workflows 🤖</h2>
          <p className="text-gray-600 text-lg">
          With SendMails, easily automate your entire customer<br /> journey while keeping control over every<br /> detail. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tool2;
