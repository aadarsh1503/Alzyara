import React from "react";
import i2 from "./i2.png"
import { useTranslation } from "react-i18next";
const SendMailsIntegration = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
       <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8">
      {t("one_click_ready_integrations")}
    </h1>
      <img
        src={i2}
        alt="SendMails Integration"
        className="max-w-2xl rounded-lg "
      />
    </div>
  );
};

export default SendMailsIntegration;
