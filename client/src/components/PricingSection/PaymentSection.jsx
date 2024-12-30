import React from "react";

const PaymentSection = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Payment Methods */}
      <div className="flex space-x-4">
        <img
          src="https://sendmails.io/wp-content/uploads/2024/08/cm-payment-options-optimized-1024x124.png-1.webp"
          alt="PayPal"
          className="h-20 w-auto"
        />

      </div>

      {/* Guarantee Section */}
      <div className="flex space-x-8 text-gray-500">
        <div className="flex items-center space-x-2">
          <img
            src="https://sendmails.io/wp-content/uploads/2024/08/trust2-black-opacity1.png-1.webp"
            alt="Secure Checkout"
            className="h-12 w-72"
          />
        
        </div>
       
      </div>
    </div>
  );
};

export default PaymentSection;
