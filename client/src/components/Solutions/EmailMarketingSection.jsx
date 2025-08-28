import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// This is a new SVG component for the illustration.
// You can keep it in the same file or move it to its own file.
const EmailIllustration = ({ primaryColor, secondaryColor }) => (
  <div className="relative w-full max-w-md mx-auto">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      {/* Background Shapes */}
      <circle cx="100" cy="100" r="100" fill={primaryColor} fillOpacity="0.1" />
      <circle cx="150" cy="50" r="40" fill={primaryColor} fillOpacity="0.15" />

      {/* Main Envelope with shadow */}
      <defs>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="4" dy="4" stdDeviation="5" floodColor="#000000" floodOpacity="0.1"/>
        </filter>
      </defs>
      <g filter="url(#shadow)">
        <path d="M 30,70 L 100,120 L 170,70 L 170,140 L 30,140 Z" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2"/>
        <path d="M 30,70 L 100,120 L 170,70" fill="none" stroke="#E5E7EB" strokeWidth="2"/>
        <path d="M 32,72 L 100,50 L 168,72" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2"/>
      </g>
      
      {/* Chart bars coming out of envelope */}
      <rect x="55" y="30" width="15" height="40" rx="4" fill={secondaryColor} transform="rotate(-15 62.5 50)"/>
      <rect x="85" y="15" width="15" height="55" rx="4" fill={primaryColor}/>
      <rect x="115" y="35" width="15" height="35" rx="4" fill={secondaryColor} transform="rotate(15 122.5 52.5)"/>

      {/* Success Checkmark */}
      <circle cx="150" cy="60" r="18" fill={primaryColor} />
      <path d="M 142 60 L 148 66 L 158 54" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);


const EmailMarketingSection = () => {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');

  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
  }, [i18n.language]);

  // Using your original color theme
  const colors = {
    lgreen: '#5cb85c', // Light green
    hgreen: '#4cae4c', // Hover green
    lightGrayBg: '#f4f7f6', // Background
    darkText: '#1f2937', // Switched to a slightly darker gray for better contrast
    white: '#ffffff',
  };

  return (
    <div 
      className='min-h-screen w-full flex items-center justify-center p-4 sm:p-8' 
      style={{ backgroundColor: colors.lightGrayBg }}
    >
      <div 
        className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-3xl"
        // A subtle background gradient to add depth
        style={{
          background: `radial-gradient(circle at top left, ${colors.lgreen}0A, transparent 40%), 
                       radial-gradient(circle at bottom right, ${colors.lgreen}1A, transparent 50%)`,
          backgroundColor: colors.white
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 md:p-16">
          
          {/* ====== Left Column: Text & CTA ====== */}
          <div className={isRTL ? 'lg:order-last' : ''}>
            <span 
              className="inline-block font-semibold py-1 px-4 rounded-full text-sm"
              style={{ 
                backgroundColor: `${colors.lgreen}20`, // Light green background
                color: colors.hgreen, // Darker green text
              }}
            >
              {t('forever_free_account')}
            </span>

            <h1 
              className="text-4xl lg:text-5xl font-extrabold mt-4 leading-tight tracking-tight"
              style={{ color: colors.darkText }}
            >
              {t('ready_to_step_up_email')}{' '}
              <span style={{ color: colors.lgreen }}>{t('marketing_game')}</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              {t('create_free_alzyara_account')}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
              {/* <input
                type="email"
                placeholder={t('enter_your_email')}
                className="w-full sm:w-auto flex-grow px-5 py-3 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-full shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{'--tw-ring-color': colors.lgreen}} // Custom focus ring color
              /> */}
              <button 
                className="w-full sm:w-auto font-bold text-white text-md py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                style={{ 
                  backgroundColor: colors.lgreen,
                  boxShadow: `0 8px 25px -6px ${colors.lgreen}80`,
                }}
                onMouseOver={e => e.currentTarget.style.backgroundColor = colors.hgreen}
                onMouseOut={e => e.currentTarget.style.backgroundColor = colors.lgreen}
              >
                {t('create_free_account_button')}
              </button>
            </div>
            <p className="text-xs mt-4 text-center sm:text-left text-gray-500">
              {t('no_credit_card_required')}
            </p>
          </div>

          {/* ====== Right Column: Illustration ====== */}
          <div className="flex items-center justify-center mt-10 lg:mt-0">
             <EmailIllustration primaryColor={colors.lgreen} secondaryColor={colors.hgreen} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default EmailMarketingSection;