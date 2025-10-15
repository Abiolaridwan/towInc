import React from "react";
import TowImage from "./assets/images/tow.png"; // adjust path if needed

const Hero = () => {
  return (
    <section className="relative bg-blue-950 py-16">
      {/* 3 Flexed Images */}
      <div className="flex flex-wrap justify-center items-center gap-6 px-6">
        {[1, 2, 3].map((_, i) => (
          <div
            key={i}
            className="relative flex justify-center items-center rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={TowImage}
              alt="Tow Truck"
              className="w-80 h-56 md:w-96 md:h-64 object-cover rounded-xl opacity-85 transition-transform duration-500 hover:scale-105"
            />
            {/* Overlay for contrast */}
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div>
          </div>
        ))}
      </div>

      {/* Central Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-2 drop-shadow-lg">
          Emergency Towing?
        </h1>
        <p className="text-lg md:text-2xl mb-5 font-medium tracking-wide">
          Call Us Now!
        </p>
        <a
          href="tel:1-800-555-1100"
          className="inline-block bg-red-600 hover:bg-green-700 text-white text-2xl md:text-3xl font-extrabold px-8 py-4 rounded-full shadow-2xl transition-transform transform hover:scale-110 hover:shadow-blue-400"
        >
          1-800-555-1100
        </a>
      </div>
    </section>
  );
};

export default Hero;
