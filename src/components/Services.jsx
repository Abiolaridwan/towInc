import React from "react";
import { PhoneCall, Wrench } from "lucide-react";

const Services = () => {
  const services = [
    "18 Wheeler Towing",
    "Accident Removal",
    "Big Rig Towing",
    "Boat Towing",
    "Box Truck Towing",
    "Car Lockout",
    "Car Transportation",
    "Emergency Towing",
    "Flat Tire Service",
    "Flatbed Towing",
    "Fuel Delivery",
    "Jump Start",
    "Local Towing",
    "Long Distance Towing",
    "Motorcycle Towing",
    "Roadside Assistance",
    "Vehicle Recovery",
    "Heavy Duty Towing",
    "Winch-Out Service",
    "Equipment Transport",
  ];

  return (
    <section id="services" className="py-10 bg-blue-100 text-center">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3 flex justify-center items-center gap-2">
            <Wrench className="text-blue-500" size={28} />
            OUR SERVICES
          </h2>
          <p className="text-gray-700 max-w-xl mx-auto text-sm md:text-base">
            Proudly serving <span className="font-semibold text-blue-600">Glenford, Ohio</span> with
            reliable towing and roadside assistance <span className="font-semibold">24/7</span>.
          </p>

          {/* Click to Call Button */}
          <div className="mt-5 flex justify-center">
            <a
              href="tel:8005551100"
              className="flex items-center gap-3 bg-red-600 hover:bg-green-700 text-white px-8 py-3 rounded-full shadow-md text-base font-bold transition transform hover:scale-105"
            >
              <PhoneCall size={20} />
              (800) 555-1100
            </a>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 hover:border-blue-950 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-gray-900 font-semibold text-sm md:text-base">{service}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
