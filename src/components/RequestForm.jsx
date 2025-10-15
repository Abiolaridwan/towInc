import React, { useState } from "react";

const RequestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="py-16 px-6 bg-blue-200">
      <h2 className="text-3xl font-bold text-center text-blue-950 mb-10">
        Request A Call Back
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-start gap-10 max-w-6xl mx-auto">
        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 bg-gray-50 p-8 rounded-xl shadow-md"
        >
          <div className="mb-4">
            <label className="block text-left font-medium mb-1 text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-left font-medium mb-1 text-gray-700">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-left font-medium mb-1 text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-left font-medium mb-1 text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-600 text-white py-3 rounded-md transition-all duration-300 font-semibold"
          >
            Submit
          </button>
        </form>

        <div className="hidden md:block w-px bg-gray-300 h-auto"></div>

        {/* Contact Info */}
        <div className="flex-1 bg-gray-50 p-8 rounded-xl shadow-md text-left">
          <h3 className="text-2xl font-semibold text-blue-950 mb-4">
            Towing in Glenford, Ohio
          </h3>
          <p className="text-gray-700 mb-4">
            Are you in need of emergency Local Towing? Look no further! Our
            experts are a dependable towing network based in Glenford that’s
            open <strong>24 hours a day, 7 days a week.</strong> We offer the
            best prices and competitive rates for every situation.
          </p>

          <p className="text-gray-700 mb-4">
            Our professionals specialize in <strong>emergency Local Towing</strong>.
            Call us today for a quote or immediate assistance.
          </p>

          <div className="mt-6">
            <button className="bg-red-600 hover:bg-green-700 text-white py-4 px-8 rounded-md text-lg font-semibold transition-all duration-300">
              CLICK TO CALL
            </button>
            <p className="mt-3 text-xl font-bold text-blue-950">
              (800) 555-1100
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestForm;
