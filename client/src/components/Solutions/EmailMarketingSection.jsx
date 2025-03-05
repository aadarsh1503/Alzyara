import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const EmailMarketingSection = () => {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');
  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
  }, [i18n.language]);

  return (
    <div className='bg-lgreen min-h-screen'>
    <div className="text-center mt-20 bg- max-w-7xl mx-auto py-16 px-4">
      <div className='bg-white py-10 rounded-xl'>
        <div className="text-center mt-20 bg-white mb-4">
          <span className="bg-[#f4f7f6] text-sm font-semibold text-black py-1 px-3 border border-[#d6dedb] rounded-full">
            {t('forever_free_account')}
          </span>
        </div>
        <h1 className="lg:text-5xl sm:text-3xl bg-white font-semibold text-black mb-4">
          {t('ready_to_step_up_email')}<br /> {t('marketing_game')}
        </h1>
        <p className="text-black lg:text-lg bg-white sm:text-base mb-8 max-w-md mx-auto">
          {t('create_free_alzyara_account')}
        </p>
        <button className="bg-lgreen font-semibold hover:bg-hgreen text-white text-sm sm:text-base py-3 px-6 rounded-lg">
          {t('create_free_account_button')}
        </button>
        <p className="text-black text-xs mt-4 mb-0 lg:mb-10">
          {t('no_credit_card_required')}
        </p>
      </div>
    </div>
  </div>
  );
};

export default EmailMarketingSection;