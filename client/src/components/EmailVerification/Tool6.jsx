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
import MouseIcon from '@mui/icons-material/Mouse';

import ApiIcon from '@mui/icons-material/Api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot,faWandMagicSparkles,faChartBar,faBolt,faCog,faFileSignature,faEnvelope ,faEdit  ,faFilter ,faInfoCircle,faGripLines,faMousePointer ,faMobileAlt,faImage, faUser, faKey, faBullseye, faReply      } from '@fortawesome/free-solid-svg-icons';

const Tool6 = () => {
  return (
    <div className="bg-white ml-20 lg:ml-20  py-16">
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-1 items-center">
        {/* Left Side: Blocks */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
          {/* Subject Analyzer */}
          <a href="/feature6" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
          <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
            <FontAwesomeIcon icon={faEnvelope } />
            </div>
            <h3 className="text-lg font-semibold mb-2">Embedded Form</h3>
            <p className="text-gray-600">
            Design custom forms and embed them in your website to capture the leads
            </p>
          </a>
          {/* Drag & Drop Builder */}
          <a href="/feature6" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
          <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
            <FaChartPie />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email Validation</h3>
            <p className="text-gray-600">
            Validate your email list for the best deliverability results
            </p>
          </a>
          {/* Email Validation */}
          <a href="/feature6" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
  <div className="w-20 aspect-square flex items-center justify-center text-lgreen text-3xl mb-4 bg-gray-200 rounded-lg group-hover:bg-lgreen group-hover:text-white">
    <FontAwesomeIcon icon={faMousePointer} />
  </div>
  <h3 className="text-lg font-semibold mb-2">Subject Analyzer</h3>
  <p className="text-gray-600">
    Improve your email open rates by analyzing your subject line.
  </p>
</a>

          {/* Handle Bounce & Unsubscribe */}
          <a href="/feature6" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
          <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
            <FontAwesomeIcon icon={faInfoCircle} />
            </div>
            <h3 className="text-lg font-semibold mb-2">
            Drag & Drop Builder
            </h3>
            <p className="text-gray-600">
            Easily drag & drop the relevant blocks to create the email template
            </p>
          </a>
          {/* Detailed Analytics */}
          <a href="/feature6" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
          <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
            <FontAwesomeIcon icon={faChartBar}  />
            </div>
            <h3 className="text-lg font-semibold mb-2">Handle Bounce & Unsubscribe</h3>
            <p className="text-gray-600">
            Automatically remove all the bounced and unsubscribed emails 
            </p>
          </a>
          {/* WYSIWYG Editor */}
          <a href="/feature6" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
          <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
            <FontAwesomeIcon icon={faEdit }  />
            </div>
            <h3 className="text-lg font-semibold mb-2">WYSIWYG Editor</h3>
            <p className="text-gray-600">
            Use WYSIWYG Editor to create stunning emails without any hassle.
            </p>
          </a>
          <a href="/feature6" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
          <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
  <FaNetworkWired />
  </div>
  <h3 className="text-lg font-semibold mb-2">Marketing Automation</h3>
  <p className="text-gray-600">
  Nurture your leads with a series of automated emails based on the user's action
  </p>
</a>
{/* Drag & Drop Builder */}
<a href="/feature6" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
          <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
  <FontAwesomeIcon icon={faEnvelope } />
  </div>
  <h3 className="text-lg font-semibold mb-2">Email Tracking</h3>
  <p className="text-gray-600">
  Track every single engagement made by users for all your emails
  </p>
</a>
<a href="/feature6" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
          <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
  <FaChartPie />
  </div>
  <h3 className="text-lg font-semibold mb-2"> List Segmentation</h3>
  <p className="text-gray-600">
  Sending emails to targeted segments can increase email engagement & revenue by more than 25%.
  </p>
</a>
<a href="/feature6" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
          <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
  <FaServer />
  </div>
  <h3 className="text-lg font-semibold mb-2">Custom SMTP Server</h3>
  <p className="text-gray-600">
  Connect unlimited customer SMTP servers to spread your email sending load .
  </p>
</a>
<a href="/feature6" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
          <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
  <FaUsers/>
  </div>
  <h3 className="text-lg font-semibold mb-2">Manage Lists and Subscribers</h3>
  <p className="text-gray-600">
  Manage and segment lists & subscribers easily with Alzyara
  </p>
</a>
<a href="/feature6" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
          <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
  <FontAwesomeIcon icon={faKey} />
  </div>
  <h3 className="text-lg font-semibold mb-2">Add DKIM Signature</h3>
  <p className="text-gray-600">
  Sign your emails with your sending domain and improve deliverability
  </p>
</a>
<a href="/feature6" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
          <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
  <FontAwesomeIcon icon={faBullseye} />
  </div>
  <h3 className="text-lg font-semibold mb-2">Custom Tracking Domains</h3>
  <p className="text-gray-600">
  Use your custom tracking domains for better deliverability
  </p>
</a>
<a href="/feature6" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
          <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
  <FontAwesomeIcon icon={faReply} />
  </div>
  <h3 className="text-lg font-semibold mb-2">Auto Responder</h3>
  <p className="text-gray-600">
  Automatically send a welcome email when a new subscriber joins your email list
  </p>
</a>
{/* Email Validation */}

{/* Handle Bounce & Unsubscribe */}


        </div>

        {/* Right Side: Text */}
        <div className="text-left mt-0 ml-0 lg:ml-20 lg:-mt-[1500px]">
          <h2 className="lg:text-4xl text-3xl font-bold mb-4">All the Tools You <br />Need</h2>
          <p className="text-gray-600 text-lg">
          Enhance your marketing strategy with <br />Alzyara' powerful lead webforms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tool6;
