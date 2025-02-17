import React from "react";
import i1 from "./i1.png"
import i2 from "./i2.webp"
const PaymentSection = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Payment Methods */}
      <div className="flex space-x-4">
        <img
          src={i1}
          alt="PayPal"
          className="h-24 w-full"
        />

      </div>

      {/* Guarantee Section */}
      <div className="flex space-x-8 text-gray-500">
        <div className="flex items-center space-x-2">
          <img
            src={i2}
            alt="Secure Checkout"
            className="h-12 w-96"
          />
        
        </div>
       
      </div>
    </div>
  );
};

export default PaymentSection;
