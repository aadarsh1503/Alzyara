import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const FAQBlock = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={onToggle}
      >
        <span className="font-medium text-gray-900">{question}</span>
        <span
          className={`transition-transform transform ${isOpen ? "rotate-180" : "rotate-0"}`}
        >
          &#9660;
        </span>
      </button>
      {isOpen && <div className="mt-2 text-gray-600">{answer}</div>}
    </div>
  );
};

const FAQSection = () => {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');
  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
  }, [i18n.language]);
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const faqs = [
    { question: t("faq_1_question"), answer: t("faq_1_answer") },
    { question: t("faq_2_question"), answer: t("faq_2_answer") },
    { question: t("faq_3_question"), answer: t("faq_3_answer") },
    { question: t("faq_4_question"), answer: t("faq_4_answer") },
    { question: t("faq_5_question"), answer: t("faq_5_answer") },
    { question: t("faq_6_question"), answer: t("faq_6_answer") },
  ];

  const toggleQuestion = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-10 mt-10 px-6 md:px-16">
      <div className="text-center mb-8">
        <p className="text-lgreen font-medium">{t('faq_section_title')}</p>
        <h2 className="text-2xl md:text-4xl font-bold">
          {t('faq_section_heading')}
        </h2>
        <p className="text-gray-600 mt-2">
          {t('faq_section_description')}
        </p>
      </div>

      <div className="grid grid-cols-1 max-w-4xl mx-auto md:grid-cols-1 gap-4">
        {faqs.map((faq, index) => (
          <FAQBlock
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openQuestionIndex === index}
            onToggle={() => toggleQuestion(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
