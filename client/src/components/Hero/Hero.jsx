import React, { useEffect, useState } from "react";
import MarketingSection from "../MarketingSection/MarketingSection";
import Slide from "../Slide/Slide";
import CustomerSupportSection from "../CustomerSupportSection/CustomerSupportSection";
import Automation from "../Automation/Automation";
import Thirdsegment from "../thirdsegment/thirdsegment";
import EcommercePlatformSection from "../EcommercePlatformSection/EcommercePlatformSection";
import WhySwitch from "../WhySwitch/WhySwitch";
import Join from "../Join/Join";
import EmailMarketingSection from "../Solutions/EmailMarketingSection";
import FourthHome from "../Fouthhome/FourthHome";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import AnimatedEmailIcon from "./AnimatedEmailIcon";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');

  useEffect(() => {
    const lang = i18n.language;
    const isRtlLang = lang === 'ar';
    setIsRTL(isRtlLang);
    document.documentElement.dir = isRtlLang ? 'rtl' : 'ltr';
  }, [i18n.language]);

  // Framer Motion Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#0f2027] to-[#203a43]">
        {/* Animated Aurora Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[100%] max-w-[1200px] -z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900 via-transparent to-transparent opacity-30 animate-[spin_20s_linear_infinite_reverse]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-teal-800 via-transparent to-transparent opacity-40 animate-[spin_25s_linear_infinite]"></div>
          <div className="absolute w-1/2 h-1/2 top-1/4 left-1/4 bg-parrot/10 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center px-6 lg:px-8 pt-28 pb-16 lg:pt-20">
          {/* Left Section - Text Content */}
          <motion.div
            className={`flex flex-col items-center lg:items-start mt-0 lg:mt-20 space-y-8 ${isRTL ? 'lg:text-right' : 'lg:text-left'} text-center`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
  className="text-4xl lg:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400"
  variants={itemVariants}
  dangerouslySetInnerHTML={{ __html: t('hero.title') }}
/>


<motion.p
  className="text-lg text-gray-300 max-w-lg leading-relaxed"
  variants={itemVariants}
  dangerouslySetInnerHTML={{ __html: t('hero.description') }}
/>

            
            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
              variants={itemVariants}
            >
              <button className="bg-parrot text-black w-full sm:w-52 py-3 rounded-lg font-bold text-base transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-parrot/40">
                {t('hero.createAccount')}
              </button>
              <a href="/pricing" className="w-full sm:w-auto">
                <button className="bg-transparent border-2 border-gray-500 text-gray-200 w-full sm:w-52 py-3 rounded-lg font-bold text-base transition-all duration-300 hover:bg-white/10 hover:border-white hover:scale-105">
                  {t('hero.seePricing')}
                </button>
              </a>
            </motion.div>

            <motion.div 
              className="text-gray-400 font-semibold text-sm "
              variants={itemVariants}
            >
              {t('hero.noCreditCard')}
            </motion.div>
          </motion.div>

          {/* Right Section - Animated Visual */}
          <div className="relative w-full h-96 lg:h-full  flex items-center justify-center  lg:-mt-32">
            <motion.div
              className="absolute w-full h-full"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
            >
              {/* Central Glowing Core */}
              <div className="absolute w-48 h-48  lg:w-72 lg:h-72 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-parrot/10 rounded-full filter blur-2xl"></div>

              {/* Orbiting Shape 1 */}
              <motion.div
                className="absolute w-32 h-32 lg:w-72 lg:h-72 top-[190px] left-[165px]"
              
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full border-2  border-cyan-500/30"></div>
              </motion.div>

              {/* Orbiting Shape 2 */}
              <motion.div
                className="absolute w-40 h-40 lg:w-80 lg:h-80 top-1/2 left-1/2"
                style={{ transformOrigin: "-80px -80px" }}
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-3xl border-2 border-teal-500/30"></div>
              </motion.div>
              
            
              <motion.div
                className="absolute top-1/2  left-1/3 -translate-x-1/2 -translate-y-1/2 w-48 h-32 lg:w-64 lg:h-40 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl"
                initial={{ y: -10 }}
                animate={{ y: 10 }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
              >
                <div className="p-4">
                  <div className="w-1/3 h-3 bg-parrot/50 rounded-full mb-3"></div>
                  <div className="w-full h-2 bg-gray-500/50 rounded-full mb-2"></div>
                  <div className="w-5/6 h-2 bg-gray-500/50 rounded-full"></div>
                </div>
                <AnimatedEmailIcon />
              </motion.div>

            </motion.div>
          </div>
        </div>
      </div>

      {/* The rest of your page content */}
      <MarketingSection />
      <Slide />
      <CustomerSupportSection />
      <Automation />
      <Thirdsegment />
      <FourthHome />
      <EmailMarketingSection />
    </>
  );
};

export default Hero;