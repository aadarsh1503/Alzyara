import React, { useState, useEffect } from "react";
import { FaLock, FaCheckCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let timer;
    if (showSuccess) {
      timer = setTimeout(() => {
        navigate('/login');
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [showSuccess, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, you would call your signup API here
      // const response = await fetch('/api/signup', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData)
      // });
      
      // if (!response.ok) throw new Error('Signup failed');
      
      setShowSuccess(true);
      setFormData({ firstName: '', lastName: '', email: '' });
    } catch (err) {
      setError(t('signup_error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
          <FaCheckCircle className="mx-auto text-5xl text-green-500 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {t('signup_success_title')}
          </h2>
          <p className="text-gray-600 mb-6">
            {t('signup_success_message')}
          </p>
          <p className="text-sm text-gray-500">
            {t('redirecting_message')} 5 {t('seconds')}...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center mt-10 justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md relative">
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

        {error && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded text-sm">
            {error}
          </div>
        )}

        {/* Form */}
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder={t('first_name')}
              value={formData.firstName}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring focus:ring-red-200"
            />
            <input
              type="text"
              name="lastName"
              placeholder={t('last_name')}
              value={formData.lastName}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring focus:ring-red-200"
            />
          </div>
          <div className="mt-4">
            <input
              type="email"
              name="email"
              placeholder={t('email_address')}
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md p-3 w-full text-sm focus:outline-none focus:ring focus:ring-red-200"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 flex items-center justify-center w-full bg-red-600 text-white text-sm font-bold py-3 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-200 disabled:opacity-70"
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {t('processing')}
              </span>
            ) : (
              <>
                <FaLock className="mr-2 ml-2" />
                {t('create_stunning')}
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-4">
          {t('no_credit_card')}
        </p>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-500 mt-2">
          {t('already_have_account')}{" "}
          <Link to="/login" className="text-red-600 hover:underline">
            {t('login_here')}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;