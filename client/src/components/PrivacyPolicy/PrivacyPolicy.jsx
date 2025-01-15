import React from "react";

const PrivacySection = () => {
  return (
    <div className="flex flex-col mt-32 lg:flex-row gap-6 lg:gap-12 px-6 lg:px-16 py-8 lg:py-12">
      {/* Left Side: Static Content */}
      <div className="w-full lg:w-2/3">
       
        <p className="text-gray-700 mb-6">
          Alzyara (“we,” “us,” “our”) operates the website{" "}
          <a
            href="https://alzyara.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            https://alzyara.io
          </a>{" "}
          (the “Service”). This Privacy Policy explains how we collect, use,
          disclose, and protect your personal information when you use our
          Service, in compliance with privacy laws and regulations.
        </p>
        <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
        <ul className="list-decimal pl-5 space-y-4">
          <li>
            <span className="font-semibold">Personal Data:</span>
            <p className="text-gray-700 mt-2">
              Personal data includes information that identifies you as an
              individual, such as:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-700">
              <li>Name</li>
              <li>Email address</li>
              <li>
                Billing information (for transactions via{" "}
                <span className="font-semibold">PayPal</span> and{" "}
                <span className="font-semibold">Stripe</span>)
              </li>
              <li>Contact information</li>
              <li>
                Payment details (via <span className="font-semibold">PayPal</span>{" "}
                and <span className="font-semibold">Stripe</span>)
              </li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Usage Data:</span>
            <p className="text-gray-700 mt-2">
              We may collect data on how you access and use the Service,
              including:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-700">
              <li>Your IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Pages you visit</li>
              <li>Time spent on each page</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Cookies and Tracking Technologies</span>
            <p className="text-gray-700 mt-2">
            We use cookies to track customer UTM parameters, website behavior, and user interactions with our services. This includes:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-700">
              <li>UTM tracking cookies to capture marketing campaign performance</li>
              <li>Cookies for tracking interactions with retargeting ads</li>
              <li>Data collection using Google Analytics and Google Search Console to monitor website performance</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Right Side: Unique Scrollable Content */}
      <div className="w-full bg-white rounded-xl lg:w-1/5  left-[1000px] top-[40px">
        <div className="shadow-custom p-4 rounded-xl">
          <h3 className="text-14px font-bold">Contact Us</h3>
          <div className="overflow-y-auto max-h-32 space-y-">
            <p className="text-gray-700">
              <span className="font-semibold"></span>{" "}
              <a
                href="mailto:support@sendmails.io"
                className="text-lgreen text-14px font-bold"
              >
                support@sendmails.io
              </a>
            </p>
            <p className="text-gray-700 text-14px">
              Please feel free to reach out if you
              <br /> have any concern or question.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacySection;
