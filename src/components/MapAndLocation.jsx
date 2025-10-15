import React from "react";
import { MapPin } from "lucide-react";
import yellow_tow from "../components/assets/images/yellow_tow.jpg";


const MapAndLocation = () => {
  return (
    <section
      id="location"
      className="relative flex flex-col md:flex-row items-center justify-center py-20 px-6 bg-cover bg-center"
      style={{
        backgroundImage: `url(${yellow_tow})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 w-full md:w-1/2 text-white mb-10 md:mb-0 md:pr-8">
        <h2 className="text-4xl font-extrabold mb-4 flex items-center justify-center md:justify-start">
          <MapPin className="text-blue-400 mr-3" size={40} />
          <span>Find Us</span>
        </h2>
        <p className="text-gray-200 text-lg mb-4">
          We are conveniently located to serve Glenford and surrounding regions promptly and
          professionally. Whether it’s an emergency or scheduled service, our team is always ready
          to respond.
        </p>
        <p className="text-xl font-bold text-blue-400">
          📍 123 Towline Street, United States of America, Illinios
        </p>
        <p className="text-gray-300 mt-2">Open 24 hours a day, 7 days a week</p>
      </div>

      {/* Map */}
      <div className="relative z-10 w-full md:w-1/2">
        <iframe
          title="Company Location"
          className="w-full h-80 md:h-96 rounded-2xl shadow-2xl border-4 border-white"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.704340763119!2d-82.31923702345406!3d39.90062357152806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8837b2f547bd3f2b%3A0xc47afc4c234b4b76!2sGlenford%2C%20Ohio!5e0!3m2!1sen!2sus!4v1697839999999!5m2!1sen!2sus"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default MapAndLocation;
