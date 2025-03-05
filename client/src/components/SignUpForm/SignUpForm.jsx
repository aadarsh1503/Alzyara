import React from "react";
import { FaLock } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const SignUpForm = () => {
  const { t } = useTranslation(); // Use the translation hook

  return (
    <div className="flex items-center mt-10 justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md relative">
        {/* Close Button */}

        {/* Header */}
        <h1 className="text-sm font-semibold text-center text-gray-500">
          {t('sign_up')}
        </h1>
        <h2 className="text-2xl font-bold text-center text-gray-800 mt-2">
          {t('get_started')}
        </h2>
        <p className="text-center text-gray-600 text-sm mt-1">
          {t('sign_up_desc')}
        </p>

        {/* Form */}
        <form className="mt-6">
  <div className="grid grid-cols-2 gap-4">
    <input
      type="text"
      placeholder={t('first_name')}
      className="border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring focus:ring-red-200"
    />
    <input
      type="text"
      placeholder={t('last_name')}
      className="border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring focus:ring-red-200"
    />
  </div>
  <div className="mt-4">
    <input
      type="email"
      placeholder={t('email_address')}
      className="border border-gray-300 rounded-md p-3 w-full text-sm focus:outline-none focus:ring focus:ring-red-200"
    />
  </div>
  <button
    type="submit"
    className="mt-6 flex items-center justify-center w-full bg-red-600 text-white text-sm font-bold py-3 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-200"
  >
    <FaLock className="mr-2 ml-2" />
    {t('create_stunning')}
  </button>
</form>


        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-4">
          {t('no_credit_card')}
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
