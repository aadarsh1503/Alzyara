import React from "react";
import { FaLock } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const LoginForm = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 mt-10">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md relative">
        {/* Header */}
        <h1 className="text-sm font-semibold text-center text-gray-500">
          {t('login')}
        </h1>
        <h2 className="text-2xl font-bold text-center text-gray-800 mt-2">
          {t('welcome_back')}
        </h2>
        <p className="text-center text-gray-600 text-sm mt-1">
          {t('login_desc')}
        </p>

        {/* Form */}
        <form className="mt-6">
          <div className="mb-4">
            <input
              type="email"
              placeholder={t('email_address')}
              className="border border-gray-300 rounded-md p-3 w-full text-sm focus:outline-none focus:ring focus:ring-red-200"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder={t('password')}
              className="border border-gray-300 rounded-md p-3 w-full text-sm focus:outline-none focus:ring focus:ring-red-200"
            />
          </div>
          <button
            type="submit"
            className="mt-4 flex items-center justify-center w-full bg-red-600 text-white text-sm font-bold py-3 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-200"
          >
            <FaLock className="mr-2 ml-2" />
            {t('login_now')}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-4">
          {t('dont_have_account')}{" "}
          <a href="/signup" className="text-red-600 hover:underline">
            {t('sign_up_here')}
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
