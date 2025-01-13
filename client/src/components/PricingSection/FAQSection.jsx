import React, { useState } from "react";

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
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const faqs = [
    { question: "1. Is there a free trial available?", answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free 30-minute onboarding call to get you up and running." },
    { question: "2. Can I change my plan later?", answer: "Of course you can! Our pricing scales with your company. Chat to our friendly team to find a solution that works for you as you grow." },
    { question: "3. What is your cancellation policy?", answer: "We understand that things change. You can cancel your plan at any time and we'll refund you the difference already paid." },
    { question: "4. Can info be added to an invoice?", answer: "At the moment, the only way to add additional information to invoices is to add the information to the workspace's name manually." },
    { question: "5. How does billing work?", answer: "Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces." },
    { question: "6. How do I change my account email?", answer: "You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop." },
  ];

  const toggleQuestion = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-10 mt-10 px-6 md:px-16">
      <div className="text-center mb-8">
        <p className="text-lgreen font-medium">Frequently Asked Questions</p>
        <h2 className="text-2xl md:text-4xl font-bold">
          All the answers you're looking for
        </h2>
        <p className="text-gray-600 mt-2">
          If you're new or looking for answers to your questions, this guide will
          help you learn more about our services and their features.
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
