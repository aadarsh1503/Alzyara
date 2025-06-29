import React, { useEffect, useState } from "react";
import g1 from "./g1.png";
import g2 from "./g2.png";
import { AiOutlineInstagram, AiOutlineYoutube, AiOutlineFacebook, AiOutlineTwitter, AiOutlineLinkedin } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
  }, [i18n.language]);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast.error(t('please_enter_email'));
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error(t('please_enter_valid_email'));
      return;
    }

    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append('email', email);
      formData.append('list', 'wV0U4Q6b4892wE8VkDEmG6qQ');
      formData.append('subform', 'yes');
      formData.append('hp', '');

      await fetch('https://send.alzyara.com/subscribe', {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });

      toast.success(t('Thank you For Subscribing'), {
        autoClose: 5000, // Auto close after 5 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setEmail("");
    } catch (error) {
      console.error('Error:', error);
      toast.error(t('subscription_failed'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-gray-900 z-50 text-13px text-white py-10">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={isRTL}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-32">
          {/* Alzyara Section */}
          <div className="md:col-span-2">
            <img
              src={g1}
              alt="Alzyara Logo"
              className="mb-4 w-32"
            />
            <p className={`text-gray-400 text-left relative ml-0 lg:ml-36 ${i18n.language === 'ar' ? ' relative left-[50px]' : 'text-left lg:right-36 right-0'} text-14px mb-6`}>
              {t('alzyara_description')}
            </p>

            <div className="flex items-center cursor-pointer justify-start space-x-4 ml-2">
              <a href="https://www.instagram.com/alzyarasoftwares/" target="_blank" rel="noopener noreferrer">
                <AiOutlineInstagram className={`text-gray-400 ${i18n.language === 'ar' ? 'mr-4' : ''} hover:text-parrot text-2xl`} />
              </a>

              <a href="https://www.facebook.com/Alzyarasoftwares" target="_blank" rel="noopener noreferrer">
                <AiOutlineFacebook className={`text-gray-400 ${i18n.language === 'ar' ? 'mr-4' : ''} hover:text-parrot text-2xl`} />
              </a>

              <a href="https://x.com/Alzyara_Tech" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faXTwitter} className="text-gray-400 hover:text-parrot text-2xl" />
              </a>
            </div>

            <a href="https://www.facebook.com/Alzyarasoftwares" target="_blank" rel="noopener noreferrer">
              <h1 className="ml-0 font-bold text-md hover:text-parrot mt-4">
                {t('join_facebook_community')}
              </h1>
            </a>
          </div>

          {/* Subscription Section */}
          <div className="md:col-span-3 relative bottom-0 lg:bottom-5">
            <p className="text-gray-300 mb-4">{t('subscription_message')}</p>

            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('enter_email')}
                className="flex-grow px-4 py-2 rounded-l-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none"
                required
              />

              <button 
                type="submit"
                className="bg-lgreen text-white px-6 py-2 rounded-r-md hover:bg-hgreen"
                disabled={isLoading}
              >
                {isLoading ? t('subscribing') : t('subscribe')}
              </button>
            </form>
          </div>
        </div>

        {/* Links Section */}
        <div className={`mt-4 lg:-mt-56 ml-0 relative z-50 lg:ml-64 grid grid-cols-2 ${i18n.language === 'ar' ? 'text-right relative right-0 lg:right-[300px]' : 'text-left'} md:grid-cols-4 gap-9`}>
          <div>
            <h5 className="font-semibold mb-4">{t('quick_links')}</h5>
            <ul className="space-y-2 text-gray-400 text-13px">
              <li><a href="/" className="hover:underline">{t('home')}</a></li>
              <li><a href="/signup" className="hover:underline">{t('login')}</a></li>
              <li><a href="/pricing" className="hover:underline">{t('pricing')}</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">{t('features')}</h5>
            <ul className="space-y-2 text-gray-400 text-13px">
              <li><a href="/feature1" className="hover:underline">{t('email_marketing')}</a></li>
              <li><a href="/feature2" className="hover:underline">{t('marketing_automation')}</a></li>
              <li><a href="/feature3" className="hover:underline">{t('contact_crm')}</a></li>
              <li><a href="/feature4" className="hover:underline">{t('popup_builder')}</a></li>
              <li><a href="/feature5" className="hover:underline">{t('lead_webform')}</a></li>
              <li><a href="/feature6" className="hover:underline">{t('email_verification')}</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">{t('solutions')}</h5>
            <ul className="space-y-2 text-gray-400 text-13px">
              <li><a href="/marketing" className="hover:underline">{t('marketing_agencies')}</a></li>
              <li><a href="/solution2" className="hover:underline">{t('sales_teams')}</a></li>
              <li><a href="/solution3" className="hover:underline">{t('education')}</a></li>
              <li><a href="/solution4" className="hover:underline">{t('ecommerce')}</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">{t('integrations')}</h5>
            <ul className="space-y-2 text-gray-400 text-13px">
              <li><a href="/integration" className="hover:underline">{t('zapier')}</a></li>
              <li><a href="/integration2" className="hover:underline">{t('pabbly')}</a></li>
              <li><a href="/integration3" className="hover:underline">{t('woo_commerce_addon')}</a></li>
              <li><a href="/integration4" className="hover:underline">{t('api_integration')}</a></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-13px text-gray-400 flex items-center justify-between">
          <p className="text-left">
            © {t('copyright')} {new Date().getFullYear()} Alzyara. {t('all_rights_reserved')}
          </p>

          <ul className="flex space-x-4">
            <li>
              <a href="/contact" className="hover:underline ml-2">
                {t('contact_us')}
              </a>
            </li>
            <li>
              <a href="/termsofService" className="hover:underline">
                {t('terms_conditions')}
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:underline">
                {t('privacy_policy')}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;