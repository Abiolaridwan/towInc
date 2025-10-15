import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqItems = [
  {
    question: "What areas do you offer towing services in?",
    answer:
      "We provide towing and roadside assistance across the city and surrounding regions, with quick response times wherever you are.",
  },
  {
    question: "Are your towing services available 24/7?",
    answer: "Yes, our towing services are available 24/7 to handle emergencies at any time.",
  },
  {
    question: "How long does it take for a tow truck to arrive?",
    answer:
      "Our specialists typically arrive within 30 minutes depending on traffic and location.",
  },
  {
    question: "What type of vehicles can you tow?",
    answer:
      "We tow cars, motorcycles, trucks, and other light vehicles safely and efficiently.",
  },
  {
    question: "What if I’m out of gas or have a flat tire?",
    answer:
      "We provide roadside assistance including fuel delivery, tire changes, and battery jump-starts.",
  },
  {
    question: "Do you offer long-distance towing services?",
    answer:
      "Yes, we provide secure long-distance towing for vehicles that need to be transported between cities or regions.",
  },
  {
    question: "How much does a towing service cost?",
    answer:
      "The cost depends on distance, vehicle type, and service required. Contact us for a detailed quote.",
  },
  {
    question: "Can you help after a car accident?",
    answer:
      "Yes, our trained specialists can safely recover and tow your vehicle after an accident.",
  },
  {
    question: "Is motorcycle towing available?",
    answer:
      "Yes, we offer specialized towing for motorcycles with proper equipment.",
  },
  {
    question: "How do I request a service or emergency tow?",
    answer:
      "You can call our hotline or request service online for immediate assistance.",
  },
];

const FAQ = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFAQ = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center text-blue-950 mb-10">
        Frequently Asked Questions
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column */}
        <div className="flex-1 space-y-4">
          {faqItems.slice(0, 5).map((faq, idx) => (
            <div
              key={idx}
              className="border border-gray-300 rounded-md overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex justify-between items-center px-4 py-3 bg-blue-950 hover:bg-blue-900 text-white font-medium transition duration-300"
              >
                <span className="text-left">{faq.question}</span>
                {openIndexes.includes(idx) ? <FaMinus /> : <FaPlus />}
              </button>
              {openIndexes.includes(idx) && (
                <div className="px-4 py-3 bg-white text-gray-700 transition-all duration-300 ease-in-out">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex-1 space-y-4">
          {faqItems.slice(5).map((faq, idx) => {
            const actualIdx = idx + 5;
            return (
              <div
                key={actualIdx}
                className="border border-gray-300 rounded-md overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(actualIdx)}
                  className="w-full flex justify-between items-center px-4 py-3 bg-blue-950 hover:bg-blue-900 text-white font-medium transition duration-300"
                >
                  <span className="text-left">{faq.question}</span>
                  {openIndexes.includes(actualIdx) ? <FaMinus /> : <FaPlus />}
                </button>
                {openIndexes.includes(actualIdx) && (
                  <div className="px-4 py-3 bg-white text-gray-700 transition-all duration-300 ease-in-out">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
