import React from "react";
import { ShieldCheck, Clock, Truck, Users } from "lucide-react";

const AboutCompany = () => {
  return (
    <section id="about" className="py-20 bg-blue-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            About <span className="text-blue-600">TowingInc</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            24 hours a day, 7 days a week — your trusted local towing and roadside 
            assistance network in Glenford, Ohio.
          </p>
        </div>

        {/* Key Highlights */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
            <Clock className="mx-auto text-blue-600 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-3">Always Available</h3>
            <p className="text-gray-600">
              Emergencies don’t wait — neither do we. Our team operates 
              around the clock to get you moving again, day or night.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
            <ShieldCheck className="mx-auto text-blue-600 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-3">Trusted & Insured</h3>
            <p className="text-gray-600">
              Every service call is handled by trained, certified, and 
              fully insured professionals to guarantee damage-free towing.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
            <Truck className="mx-auto text-blue-600 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-3">Modern Fleet</h3>
            <p className="text-gray-600">
              Our state-of-the-art towing equipment ensures safe, efficient 
              transport for vehicles of every size and type.
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-10 text-center max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              Why Reliability Matters
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Choosing the right towing service is about more than just a quick fix — 
              it’s about trust, safety, and transparency. 
              At <span className="font-semibold text-blue-600">TowingInc</span>, 
              we’ve built our name on professionalism and reliability, 
              offering transparent pricing, quick response times, 
              and courteous service for every call.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              How to Find a Reliable Towing Network
            </h3>
            <ul className="text-gray-700 leading-relaxed space-y-2 text-left max-w-2xl mx-auto">
              <li>✔️ Check online reviews and customer experiences.</li>
              <li>✔️ Ask for recommendations from friends and local mechanics.</li>
              <li>✔️ Verify company licensing, insurance, and credentials.</li>
              <li>✔️ Look for upfront pricing and guaranteed response times.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              Services Tailored to Your Needs
            </h3>
            <p className="text-gray-700 mb-4">
              Not sure what kind of help you need? Just call our dispatch team and 
              describe your situation — we’ll handle the rest.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Motorhome Towing",
                "Roadside Assistance",
                "Construction Towing",
                "Box Truck Towing",
                "Jump Start Service",
                "Flat Tire Help",
              ].map((service) => (
                <span
                  key={service}
                  className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-blue-600 text-white rounded-2xl p-10 shadow-md mt-12">
            <Users className="mx-auto mb-4" size={42} />
            <h3 className="text-2xl font-semibold mb-2">Your Safety, Our Priority</h3>
            <p className="max-w-2xl mx-auto leading-relaxed">
              When reliability, speed, and trust matter most, 
              <span className="font-semibold"> TowingInc </span> 
              is Glenford’s number one choice. 
              Call us anytime — we never clock out when our community needs us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
