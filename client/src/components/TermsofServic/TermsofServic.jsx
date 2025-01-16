import React from "react";

const TermsofServic = () => {
  return (
    <div className="flex flex-col mt-32 lg:flex-row gap-6 lg:gap-12 px-6 lg:px-16 py-8 lg:py-12">
      {/* Left Side: Static Content */}
      <div className="w-full lg:w-2/3">
      <h1 className="font-bold mb-2">Introduction</h1>
        <p className="text-gray-700 mb-6">
        
All use of the website, information, services, and content distributed through or in conjunction with or made available on the website is offered to you subject to your acceptance of these Terms & Conditions, our Privacy Policy, and Permitted and Prohibited Uses Policy. By purchasing any goods or services from this website, you agree to be bound by this site’s Service Agreement. The following terms and conditions incorporate a legal agreement between you (“You”) and GrowMeOrganic LLC (Alzyara,” “https://alzyara.io”), which sets forth the terms and conditions by which Alzyara will make the Alzyara services available to you.
        </p>
        
      
      </div>

      {/* Right Side: Unique Scrollable Content */}
      <div className="w-full bg-white rounded-xl lg:w-1/5  left-[1000px] top-[40px">
        <div className="shadow-custom p-4 rounded-xl">
          <h3 className="text-14px font-bold">Contact Us</h3>
          <div className="overflow-y-auto max-h-32 space-y-">
            <p className="text-gray-700">
              <span className="font-semibold"></span>{" "}
              <a
                href="mailto:info@alzyara.com"
                className="text-lgreen text-14px font-bold"
              >
                info@alzyara.com
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

export default TermsofServic;
