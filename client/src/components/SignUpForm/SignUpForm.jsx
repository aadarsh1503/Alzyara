import React from "react";
import { FaLock } from "react-icons/fa";

const SignUpForm = () => {
  return (
    <div className="flex items-center mt-10 justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md relative">
        {/* Close Button */}
   

        {/* Header */}
        <h1 className="text-sm font-semibold text-center text-gray-500">
          Alzyara SIGN UP
        </h1>
        <h2 className="text-2xl font-bold text-center text-gray-800 mt-2">
          Get Started for Free!
        </h2>
        <p className="text-center text-gray-600 text-sm mt-1">
          Sign up in seconds and unlock powerful email marketing features
        </p>

        {/* Form */}
        <form className="mt-6">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring focus:ring-red-200"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring focus:ring-red-200"
            />
          </div>
          <div className="mt-4">
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded-md p-3 w-full text-sm focus:outline-none focus:ring focus:ring-red-200"
            />
          </div>
          <button
            type="submit"
            className="mt-6 flex items-center justify-center w-full bg-red-600 text-white text-sm font-bold py-3 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-200"
          >
            <FaLock className="mr-2" />
            Create My FREE Account
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-4">
          No Credit Card Required | Get Instant Access
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
