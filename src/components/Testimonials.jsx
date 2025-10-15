import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  const reviews = [
    {
      name: "John D.",
      text: "Amazing service! Located in the center of Glenford and in half an hour help will be anywhere in the city.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Maria L.",
      text: "They arrived within minutes and handled everything with total professionalism. Highly recommended!",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Robert K.",
      text: "5-star network! Affordable, reliable, and very courteous staff. Couldn’t ask for better assistance.",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      name: "Sophia M.",
      text: "Quick, kind, and efficient — truly the best towing company in Glenford!",
      image: "https://randomuser.me/api/portraits/women/21.jpg",
    },
    {
      name: "James H.",
      text: "Prompt and professional. They turned a stressful moment into a smooth experience!",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
    },
  ];

  return (
    <section className="py-16 px-6 bg-blue-100 text-center overflow-hidden relative">
      <h2 className="text-4xl font-bold text-blue-950 mb-12">
        REAL TESTIMONIALS FROM OUR VALUED CLIENTS
      </h2>

      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div
          className="flex animate-scroll gap-8"
          style={{
            animation: "scroll 40s linear infinite",
          }}
        >
          {reviews.concat(reviews).map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md w-80 flex-shrink-0"
            >
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-lg" />
                ))}
              </div>
              <p className="italic text-gray-700 mb-4">"{review.text}"</p>
              <h4 className="font-semibold text-blue-950">{review.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </section>
  );
};

export default Testimonials;
