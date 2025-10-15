import React from "react";
import { PhoneCall, Target } from "lucide-react";

const MissionVision = () => {
  return (
    <section id="mission-vision" className="py-12 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <h2 className="text-3xl font-extrabold mb-4 flex justify-center items-center gap-3">
          <Target className="text-blue-400" size={30} />
          Our Mission
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-6 text-sm leading-relaxed">
          We are driven by a relentless commitment to excellence, innovation, and reliability in
          towing and roadside assistance — ensuring peace of mind for every driver in Glenford, Ohio
          and beyond.
        </p>

        {/* Call to Action */}
        <div className="flex justify-center mb-8">
          <a
            href="tel:7407298233"
            className="flex items-center gap-2 bg-red-600 hover:bg-green-700 text-white px-8 py-4 rounded-full shadow-md text-base font-bold transition transform hover:scale-105"
          >
            <PhoneCall size={20} />
            (800) 555-1100
          </a>
        </div>

        {/* Subsections Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          {[
            {
              title: "Emergency Assistance",
              desc: "24/7 towing ensures fast, safe help during breakdowns or accidents — providing peace of mind on the road.",
            },
            {
              title: "Our Mission",
              desc: "To lead Glenford’s towing industry through innovation, efficiency, and exceptional customer care.",
            },
            {
              title: "Towing Service",
              desc: "Trusted for dependability and skill, our towing experts deliver high-quality, professional service.",
            },
            {
              title: "Commitment to Excellence",
              desc: "We uphold honesty, respect, and reliability — ensuring every tow reflects our professional integrity.",
            },
            {
              title: "Unlocking Success",
              desc: "Our strategic fleet and skilled team guarantee efficient, modern towing across Glenford and beyond.",
            },
            {
              title: "Community Collaboration",
              desc: "We partner with locals to ensure safety, sustainability, and quick response for every towing need.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-lg p-5 shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-bold text-blue-400 mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-8">
          <p className="text-gray-400 text-xs">
            Available <span className="text-blue-400 font-semibold">24/7</span> — always here when
            you need us most.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
