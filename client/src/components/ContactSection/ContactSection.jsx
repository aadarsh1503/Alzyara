import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
  }, [i18n.language]);

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
      // Format the message body to include all fields
      const emailBody = `
        First Name: ${formData.firstName}
        Last Name: ${formData.lastName}
        Email: ${formData.email}
        Subject: ${formData.subject}
        Message: ${formData.message}
      `;

      const response = await fetch('https://alzyara.com/send_to_a_mail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: emailBody,
          to: 'info@alzyara.com',
          subject: `New Contact Form Submission from ${formData.email}`
        })
      });

      if (response.ok) {
        setFormData({ 
          firstName: '', 
          lastName: '', 
          email: '', 
          subject: '', 
          message: '' 
        });
        setShowThankYou(true);
        setTimeout(() => setShowThankYou(false), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      setError(err.message || t('something_went_wrong'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col mt-32 md:flex-row items-center justify-between w-full min-h-screen">
      {/* Left Form Section */}
      <div className="w-full lg:max-w-xl ml-0 lg:ml-20 lg:mr-20 md:w-1/2 p-8 md:p-16 bg-white">
        <div className="mb-4">
          <span className="bg-bkg p-2 rounded-md font-bold text-sm uppercase">{t('contact_us')}</span>
          <h1 className="text-4xl font-bold mt-2 relative">
            {t('for_you')}
            <span className={`relative ${i18n.language === 'ar' ? 'text-white' : ''} inline-block`}>
              for you
              <span className={`absolute -bottom-3 ${i18n.language === 'ar' ? 'bg-white' : ''} left-0 w-full h-[8px] bg-parrot`}></span>
            </span>
          </h1>
          <p className="text-gray-500 mt-4">
            {t('message')}
          </p>
          <p className="text-gray-500 mt-2">
            {t('or_email_us_at')}: <a href="mailto:info@alzyara.com" className="text-lgreen hover:underline">info@alzyara.com</a>
          </p>
        </div>
        
        {error && <p className="text-red-500 mb-4">{error}</p>}
        
        {showThankYou && (
          <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
            <p>{t('thank_you_message')}</p>
            <p>{t('we_will_contact_you_soon')}</p>
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder={t('first_name')}
              value={formData.firstName}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lgreen"
            />
            <input
              type="text"
              name="lastName"
              placeholder={t('last_name')}
              value={formData.lastName}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lgreen"
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
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lgreen"
            />
          </div>
          <div className="mt-4">
            <input
              type="text"
              name="subject"
              placeholder={t('subject')}
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lgreen"
            />
          </div>
          <div className="mt-4">
            <textarea
              name="message"
              placeholder={t('your_message')}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lgreen"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-lgreen text-white font-bold py-3 px-4 mt-6 rounded hover:bg-hgreen transition disabled:opacity-50"
          >
            {isSubmitting ? t('sending') : t('send_message')}
          </button>
        </form>
      </div>

      {/* Right Map Section */}
      <div className={`w-full relative ${i18n.language === 'ar' ? 'lg:ml-0 relative lg:left-12 left-0' : 'right-10'} md:w-1/2`}>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14435.236249565674!2d50.5237206!3d26.1868843!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49afd0213a19d3%3A0x2f892ffe9e6f0385!2sGlobal%20Vision%20Solutions!5e0!3m2!1sen!2sin!4v1731936574918!5m2!1sen!2sin"
          width="80%"
          height="400"
          className="rounded-lg shadow-lg w-full max-w-4xl"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ContactSection;