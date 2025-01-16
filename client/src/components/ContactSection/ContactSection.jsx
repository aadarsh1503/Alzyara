import React from "react";

const ContactSection = () => {
  return (
    <div className="flex flex-col mt-32 md:flex-row items-center justify-between w-full min-h-screen ">
      {/* Left Form Section */}
      <div className="w-full lg:max-w-xl ml-0 lg:ml-20 md:w-1/2 p-8 md:p-16 bg-white">
        <div className="mb-4">
          <span className="bg-bkg p-2 rounded-md font-bold text-sm uppercase">Contact Us</span>
          <h1 className="text-4xl font-bold mt-2 relative">
  We're here{" "}
  <span className="relative inline-block">
  for you
  <span className="absolute -bottom-3 left-0 w-full h-[8px]  bg-parrot"></span>
</span>

</h1>
          <p className="text-gray-500 mt-4">
            Have a question or feedback? Fill out the form below, and we'll get
            back to you as soon as possible.
          </p>
        </div>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lgreen"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lgreen"
            />
          </div>
          <div className="mt-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lgreen"
            />
          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lgreen"
            />
          </div>
          <div className="mt-4">
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lgreen"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-lgreen text-white font-bold py-3 px-4 mt-6 rounded hover:bg-hgreen transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Right Map Section */}
      <div className="w-full relative right-10 md:w-1/2">
      <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14435.236249565674!2d50.5237206!3d26.1868843!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49afd0213a19d3%3A0x2f892ffe9e6f0385!2sGlobal%20Vision%20Solutions!5e0!3m2!1sen!2sin!4v1731936574918!5m2!1sen!2sin"
          width="80%"
          height="400"
          className="rounded-lg shadow-lg w-full max-w-4xl"
          allowFullScreen
        ></iframe>
</div>


    </div>
  );
};

export default ContactSection;
