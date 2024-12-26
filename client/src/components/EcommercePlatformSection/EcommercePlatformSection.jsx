import React from 'react';
import i1 from "./i1.png"
import i2 from "./i2.png"

const EcommercePlatformSection = () => {
  return (
    <div className="flex flex-col items-center bg-white text-gray-900 py-16 px-6">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">Connect Alzyara to your<br /> ecommerce platform</h2>
        <p className="text-gray-600 text-sm">
          Alzyara integrates with hundreds of ecommerce tools in a single<br /> click. It’s so smooth, you’ll wonder why other tools feel so clunky.
        </p>
      </div>
      
      {/* Logos Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-center max-w-5xl mx-auto">
        {/* First Row Logos */}
        <img src="https://www.omnisend.com/wp-content/themes/omnisend-v2/assets/img/connect/shopify.svg" alt="Shopify" class="w-40 shadow-[0_1px_6px_0_rgba(0,0,0,0.3)] h-auto mx-auto" />

        <img src="https://www.omnisend.com/wp-content/themes/omnisend-v2/assets/img/connect/shopifyplus.svg" alt="Shopify Plus" className="w-40 shadow-[0_1px_6px_0_rgba(0,0,0,0.3)] h-auto mx-auto" />
        <img src={i1} alt="BigCommerce" className="w-40 p-5 shadow-[0_1px_6px_0_rgba(0,0,0,0.3)] h-auto mx-auto" />
        <img src="https://www.omnisend.com/wp-content/themes/omnisend-v2/assets/img/connect/big.svg" alt="WordPress" className="w-40 shadow-[0_1px_6px_0_rgba(0,0,0,0.3)] h-auto mx-auto" />

        {/* Second Row Logos */}
        <img src="	https://www.omnisend.com/wp-content/themes/omnisend-v2/assets/img/connect/woo.svg" alt="WooCommerce" className="w-40 shadow-[0_1px_6px_0_rgba(0,0,0,0.3)] h-auto mx-auto" />
        <img src="	https://www.omnisend.com/wp-content/themes/omnisend-v2/assets/img/integration/shoplazza.svg" alt="Wix" className="w-40 p-5 shadow-[0_1px_6px_0_rgba(0,0,0,0.3)] h-auto mx-auto" />
        <img src="https://www.omnisend.com/wp-content/themes/omnisend-v2/assets/img/connect/wix.svg" alt="Shopplaza" className="w-40 p-5 shadow-[0_1px_6px_0_rgba(0,0,0,0.3)] h-[70px] mx-auto" />
        <img src={i2} alt="Ecwid" className="w-40 h-auto mx-auto shadow-[0_1px_6px_0_rgba(0,0,0,0.3)]" />
      </div>

      {/* Additional Logos Section */}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
        <img src="	https://www.omnisend.com/wp-content/themes/omnisend-v2/assets/img/logos/AfterShip.svg" alt="Aftership" className="w-32 h-auto mx-auto" />
        <img src="		https://www.omnisend.com/wp-content/themes/omnisend-v2/assets/img/logos/smileio.svg" alt="Smile.io" className="w-32 h-auto mx-auto" />
        <img src="	https://www.omnisend.com/wp-content/themes/omnisend-v2/assets/img/logos/gorgias.svg" alt="Gorgias" className="w-32 h-auto mx-auto" />
        <img src="	https://www.omnisend.com/wp-content/themes/omnisend-v2/assets/img/logos/recharge.svg" alt="Recharge" className="w-32 h-auto mx-auto" />
        <img src="		https://www.omnisend.com/wp-content/themes/omnisend-v2/assets/img/logos/layaltylion.svg" alt="LoyaltyLion" className="w-32 h-auto mx-auto" />
        <img src="https://www.omnisend.com/wp-content/themes/omnisend-v2/assets/img/main-yopto.svg" alt="Yotpo" className="w-32 h-auto mx-auto" />
        <img src="	https://www.omnisend.com/wp-content/themes/omnisend-v2/assets/img/main-typeform.svg" alt="Typeform" className="w-32 h-auto mx-auto" />
        <img src="https://www.omnisend.com/wp-content/themes/omnisend-v2/assets/img/logos/okendo.svg" alt="Okendo" className="w-32 h-auto mx-auto" />
      </div>
    </div>
  );
};

export default EcommercePlatformSection;
