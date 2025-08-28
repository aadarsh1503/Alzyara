import React, { useEffect, useState } from "react";
import g1 from "./g1.png"; // Your logo
import g2 from "./g2.png"; // Corrected: Added g2 import
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
    const isArabic = i18n.language === 'ar';
    setIsRTL(isArabic);
    document.body.dir = isArabic ? 'rtl' : 'ltr';
  }, [i18n.language]);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error(t('please_enter_valid_email'));
      return;
    }
    setIsLoading(true);
    try {
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

      toast.success(t('Thank you For Subscribing'));
      setEmail("");
    } catch (error) {
      console.error('Error:', error);
      toast.error(t('subscription_failed'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-white z-50 relative overflow-hidden">
      
      {/* MONOCHROMATIC ON-BRAND ANIMATION */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-lgreen rounded-full filter blur-3xl animate-aurora"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gray-700 rounded-full filter blur-3xl animate-aurora animation-delay-4000"></div>
      </div>
      
      {/* Content wrapper with generous padding */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="flex flex-col gap-16 lg:gap-24">

          {/* === TOP TIER: HERO CTA === */}
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">
              {t('subscription_message')}
            </h2>
            <p className="text-gray-400 mb-8">{t('alzyara_description')}</p>
            <form onSubmit={handleSubscribe} className="flex max-w-md mx-auto">
              <input
                type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder={t('enter_email')}
                className="flex-grow px-4 py-3 rounded-l-md bg-white/5 backdrop-blur-sm border border-white/10 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lgreen transition-all duration-300 rtl:rounded-r-md rtl:rounded-l-none"
                required
              />
              <button 
                type="submit"
                className="bg-lgreen text-black font-bold px-6 py-3 rounded-r-md hover:bg-hgreen transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-lgreen transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed rtl:rounded-l-md rtl:rounded-r-none"
                disabled={isLoading}
              >
                {isLoading ? t('subscribing') : t('subscribe')}
              </button>
            </form>
          </div>

          {/* === MIDDLE TIER: INFO HUB === */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 border-t border-white/10 pt-16">
            {/* Brand Info */}
            <div className="lg:col-span-1">
              <img src={g1} alt="Alzyara Logo" className="w-32 mb-4" />
              <p className={`text-gray-400 text-sm mb-6`}>
                {t('alzyara_description')}
              </p>
              <div className="flex items-center space-x-5 rtl:space-x-reverse mt-6">
                <a href="https://www.instagram.com/alzyarasoftwares/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-lgreen transform hover:scale-125 transition-all duration-300"><AiOutlineInstagram size={24} /></a>
                <a href="https://www.facebook.com/Alzyarasoftwares" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-lgreen transform hover:scale-125 transition-all duration-300"><AiOutlineFacebook size={24} /></a>
                <a href="https://x.com/Alzyara_Tech" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-lgreen transform hover:scale-125 transition-all duration-300"><FontAwesomeIcon icon={faXTwitter} className="h-[22px]" /></a>
              </div>
              <a href="https://www.facebook.com/Alzyarasoftwares" target="_blank" rel="noopener noreferrer">
                <h1 className="font-bold text-md hover:text-lgreen mt-4">
                  {t('join_facebook_community')}
                </h1>
              </a>
            </div>
            
            {/* Links Grid */}
            <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h5 className="font-bold uppercase tracking-wider text-sm mb-5 transition-all duration-300 hover:text-lgreen hover:tracking-widest">{t('quick_links')}</h5>
                <ul className="space-y-3">
                  <li><a href="/" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">{t('home')}</a></li>
                  <li><a href="/signup" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">{t('login')}</a></li>
                  <li><a href="/pricing" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">{t('pricing')}</a></li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold uppercase tracking-wider text-sm mb-5 transition-all duration-300 hover:text-lgreen hover:tracking-widest">{t('features')}</h5>
                <ul className="space-y-3">
                  <li><a href="/feature1" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">{t('email_marketing')}</a></li>
                  <li><a href="/feature2" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">{t('marketing_automation')}</a></li>
                  <li><a href="/feature3" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">{t('contact_crm')}</a></li>
                  <li><a href="/feature4" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">{t('popup_builder')}</a></li>
                  <li><a href="/feature5" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">{t('lead_webform')}</a></li>
                  <li><a href="/feature6" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">{t('email_verification')}</a></li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold uppercase tracking-wider text-sm mb-5 transition-all duration-300 hover:text-lgreen hover:tracking-widest">{t('solutions')}</h5>
                <ul className="space-y-3">
                  <li><a href="/marketing" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">{t('marketing_agencies')}</a></li>
                  <li><a href="/solution2" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">{t('sales_teams')}</a></li>
                  <li><a href="/solution3" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">{t('education')}</a></li>
                  <li><a href="/solution4" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">{t('ecommerce')}</a></li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold uppercase tracking-wider text-sm mb-5 transition-all duration-300 hover:text-lgreen hover:tracking-widest">{t('integrations')}</h5>
                <ul className="space-y-3">
                  <li><a href="/integration" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">{t('zapier')}</a></li>
                  <li><a href="/integration2" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">{t('pabbly')}</a></li>
                  <li><a href="/integration3" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">{t('woo_commerce_addon')}</a></li>
                  <li><a href="/integration4" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">{t('api_integration')}</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* === BOTTOM TIER: FOUNDATION === */}
          <div className="border-t border-white/10 pt-8 text-sm text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-center sm:text-left">© {new Date().getFullYear()} Alzyara. {t('all_rights_reserved')}</p>
            <ul className="flex items-center space-x-6 rtl:space-x-reverse">
              <li><a href="/contact" className="hover:text-white transition-colors duration-300">{t('contact_us')}</a></li>
              <li><a href="/termsofService" className="hover:text-white transition-colors duration-300">{t('terms_conditions')}</a></li>
              <li><a href="/privacy" className="hover:text-white transition-colors duration-300">{t('privacy_policy')}</a></li>
            </ul>
          </div>

        </div>
      </div>
      <ToastContainer position="bottom-right" theme="dark" />
    </footer>
  );
};

export default Footer;