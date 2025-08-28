import React, { useEffect, useState } from "react";
import i1 from "./i1.webp"; // Your award/badge image
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const CustomerSupportSection = () => {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');

  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
  }, [i18n.language]);

  // Framer Motion variants for a cascading animation effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };
  
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.7, rotate: -15 },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <div className="relative overflow-hidden bg-slate-50 py-24 sm:py-32">
      {/* Background Spotlight Effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[60rem] w-[80rem] -translate-x-1/2 -translate-y-1/2 
                        bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] 
                        from-green-200/60 to-transparent blur-3xl opacity-70"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* ====== Left / Right: Content ====== */}
          <div className={`max-w-xl lg:max-w-none ${isRTL ? 'lg:order-last' : ''} ${isRTL ? 'text-right' : 'text-left'}`}>
            <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl font-black text-slate-800 tracking-tight">
              {t('get')} <span className="text-lgreen">{t('award_winning')}</span> {t('customer_support')}
            </motion.h2>

            <motion.p variants={itemVariants} className="mt-6 text-lg leading-8 text-slate-600">
              {t('support_description')}
            </motion.p>
            
            <motion.div variants={itemVariants} className={`mt-10 flex flex-col sm:flex-row gap-4 ${isRTL ? '' : ''}`}>
              <motion.button 
                className="w-full sm:w-auto bg-gradient-to-r from-lgreen to-hgreen text-white px-8 py-3.5 rounded-full font-bold text-lg shadow-lg shadow-green-500/40 transition-transform duration-300"
                whileHover={{ scale: 1.05, y: -4, boxShadow: '0 20px 25px -5px rgba(92, 184, 92, 0.4), 0 10px 10px -5px rgba(92, 184, 92, 0.2)' }}
                whileTap={{ scale: 0.98 }}
              >
                {t('start_free')}
              </motion.button>
              <a href="/pricing" className="w-full sm:w-auto">
                <motion.button 
                  className="w-full bg-white/50 backdrop-blur-sm border border-slate-300 text-slate-700 px-8 py-3.5 rounded-full font-bold text-lg transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -4, backgroundColor: '#fff', borderColor: '#aaa', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t('see_pricing')}
                </motion.button>
              </a>
            </motion.div>

            <motion.p variants={itemVariants} className="mt-8 text-sm text-slate-500">
              {t('shopify_reviews')}
            </motion.p>
          </div>
          
          {/* ====== Right / Left: The Award Image ====== */}
          <motion.div 
            className="relative flex justify-center items-center"
            variants={imageVariants}
          >
            <motion.img
              src={i1}
              alt={t('award_image_alt')}
              className="relative z-10 w-72 h-72 sm:w-96 sm:h-96 
                         drop-shadow-[0_25px_35px_rgba(0,0,0,0.15)] 
                         [transform:rotateY(15deg)_rotateX(-5deg)]"
              animate={{
                y: [-12, 12],
                x: [-5, 5]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default CustomerSupportSection;