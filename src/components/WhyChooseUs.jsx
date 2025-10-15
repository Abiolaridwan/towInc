import React from "react";
import { PhoneCall, CheckCircle, Clock, Star } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    { title: "Licensed & Insured Drivers", icon: <CheckCircle className="text-blue-500" size={26} /> },
    { title: "Fast Response Times", icon: <Clock className="text-blue-500" size={26} /> },
    { title: "Competitive Pricing", icon: <Star className="text-blue-500" size={26} /> },
    { title: "Customer-Focused Service", icon: <CheckCircle className="text-blue-500" size={26} /> },
  ];

  return (
    <section id="why-choose-us" className="py-12 bg-blue-200 text-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <h2 className="text-3xl font-extrabold mb-6">Why Choose Us</h2>

        {/* Reason Cards */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="bg-white p-5 w-56 rounded-xl shadow-md border border-gray-100 hover:border-blue-400 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex justify-center mb-2">{reason.icon}</div>
              <h3 className="text-base font-semibold">{reason.title}</h3>
            </div>
          ))}
        </div>

        {/* How to Choose Section */}
        <div className="max-w-4xl mx-auto text-left bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <h3 className="text-xl font-bold text-center mb-4 text-blue-600">
            How to Choose the Best Network for Local Towing in Illinois
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed text-center text-sm">
            Reliable towing is essential in Glenford for emergencies like breakdowns or running out of gas.  
            Follow these quick steps to select the right towing network:
          </p>

          {/* Steps */}
          <div className="space-y-4 text-sm">
            <div>
              <h4 className="font-semibold text-gray-900">Step 1: Explore Online Reviews</h4>
              <p className="text-gray-700">
                Check verified reviews to find trusted towing services. Positive feedback signals strong reliability.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900">Step 2: Choose Experience and Expertise</h4>
              <p className="text-gray-700">
                Pick services with seasoned professionals and suitable equipment for all vehicle types.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900">Step 3: Check Availability</h4>
              <p className="text-gray-700">
                Go for a company offering <span className="font-semibold text-blue-600">24/7 coverage</span> and long-distance towing to ensure help anytime.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900">Step 4: Call Us Anytime</h4>
              <p className="text-gray-700">
                Our trusted network ensures dependable, professional towing — always ready when you need it.
              </p>
            </div>
          </div>

          {/* Call Button */}
          <div className="mt-8 text-center">
            <a
              href="tel:8005551100"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-green-700 text-white px-8 py-4 rounded-full shadow-lg text-base font-bold transition transform hover:scale-105"
            >
              <PhoneCall size={20} />
              (800) 555-1100
            </a>
            <p className="mt-2 text-gray-600 text-xs">
              Available <span className="text-blue-600 font-semibold">24 Hours a Day, 7 Days a Week</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
