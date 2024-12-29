import React from "react";
import g1 from "./g1.png"
import g2 from "./g2.png"
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-13px text-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Alzyara Section */}
          <div className="md:col-span-2">
            <img
              src={g1}
              alt="Alzyara Logo"
              className="mb-4 w-32"
            />
            <p className="text-gray-400 text-center ml-0 lg:-ml-72 text-12px mb-6">
              The top-rated marketing <br />automation platform <br />for ecommerce.
            </p>
            <div className="flex items-start">
              <img
                src={g2}
                alt="Leader Fall 2024"
                className="-ml-6 w-44"
              />
            </div>
          </div>

          {/* Subscription Section */}
          <div className="md:col-span-3">
            <p className="text-gray-300 mb-4">
              Get insights about Alzyara marketing automation and Alzyara
              news. No spam, ever!
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-l-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-green-500 text-white px-6 py-2 rounded-r-md hover:bg-green-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="mt-0 lg:-mt-56 ml-0 lg:ml-56 grid grid-cols-2 md:grid-cols-5 gap-6">
          <div>
            <h5 className="font-semibold mb-4">Product</h5>
            <ul className="space-y-2 text-gray-400 text-13px">
              <li>Features</li>
              <li>Pricing</li>
              <li>Multi-store accounts</li>
              <li>Reviews</li>
              <li>Help Center</li>
              <li>App market</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Platforms</h5>
            <ul className="space-y-2 text-gray-400 text-13px">
              <li>Shopify</li>
              <li>Shopify Plus</li>
              <li>BigCommerce</li>
              <li>WordPress</li>
              <li>WooCommerce</li>
              <li>Wix</li>
              <li>Shoplazza</li>
              <li>Ecwid</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Comparisons</h5>
            <ul className="space-y-2 text-gray-400 text-13px">
              <li>Mailchimp alternatives</li>
              <li>Aweber alternatives</li>
              <li>Constant Contact alternatives</li>
              <li>Klaviyo alternatives</li>
              <li>ActiveCampaign alternatives</li>
              <li>Brevo alternatives</li>
              <li>MailerLite alternatives</li>
              <li>Best email marketing software</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Partners</h5>
            <ul className="space-y-2 text-gray-400 text-13px">
              <li>Partner programs</li>
              <li>Affiliate partners</li>
              <li>Technology partners</li>
              <li>Agency partners</li>
              <li>
                Partner portal{" "}
                <span className="text-xs bg-gray-800 py-1 px-2 ml-2 rounded">
                  LOG IN
                </span>
              </li>
              <li>Special offers</li>
              <li>Agency directory</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Alzyara</h5>
            <ul className="space-y-2 text-gray-400 text-13px">
              <li>About us</li>
              <li>Contact us</li>
              <li>
                Careers{" "}
                <span className="text-xs bg-green-600 text-white py-1 px-2 ml-2 rounded">
                  HIRING
                </span>
              </li>
              <li>Blog</li>
              <li>Developer center</li>
              <li>Customer Support</li>
              <li>Bug Bounty</li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-13px text-gray-400">
          <p>
            *The average return of $73 for every dollar spent is based on our
            internal analysis. This figure is an estimate based on ecommerce
            revenue attributed to Alzyara US merchants using paid plans for
            email, 13pxS, and push campaigns & automations between January 1 and
            December 31, 2023. Actual results may vary depending on individual
            circumstances, market conditions, region, and other factors. Past
            performance is not indicative of future results.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
