import React from "react";
import { Clock, Users, ShieldCheck, Truck } from "lucide-react";

const WhatToExpect = () => {
  return (
    <section className="py-20 px-6 bg-blue-200 text-gray-800" id="expect">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
          What to Expect from <span className="text-blue-600">TowingInc</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-14">
          At <span className="font-semibold">TowingInc</span>, we believe every customer deserves
          more than just a tow — they deserve peace of mind. Here’s what you can expect every time
          you call our team for help.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Fast Response */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
            <Clock className="mx-auto text-blue-600 mb-4" size={42} />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Fast Response Time</h3>
            <p className="text-gray-600 leading-relaxed">
              Our dispatch team locates the nearest tow truck immediately after your call.
              Expect quick arrival times anywhere in Glenford — day or night.
            </p>
          </div>

          {/* Professional Staff */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
            <Users className="mx-auto text-blue-600 mb-4" size={42} />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Professional & Courteous Staff</h3>
            <p className="text-gray-600 leading-relaxed">
              Our drivers and operators are trained professionals who value your time, safety,
              and satisfaction. Expect friendly faces and expert handling every time.
            </p>
          </div>

          {/* Transparent Pricing */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
            <ShieldCheck className="mx-auto text-blue-600 mb-4" size={42} />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Transparent & Fair Pricing</h3>
            <p className="text-gray-600 leading-relaxed">
              No hidden costs, no inflated fees. We believe in honesty — offering clear quotes and
              fair pricing before any service begins.
            </p>
          </div>

          {/* Wide Range of Services */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
            <Truck className="mx-auto text-blue-600 mb-4" size={42} />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Comprehensive Service Options</h3>
            <p className="text-gray-600 leading-relaxed">
              From <span className="font-semibold">Motorhome Towing</span> to
              <span className="font-semibold"> Jump Starts</span> and
              <span className="font-semibold"> Flat Tire Assistance</span>, we’re equipped to handle
              every roadside situation efficiently and safely.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;
