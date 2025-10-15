import React from "react";
import {
  FaStar,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiVisa,
  SiMastercard,
  SiAmericanexpress,
  SiDiscover,
  SiPaypal,
} from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-2xl font-bold text-white">TowingInc</h2>
          <p>Five Star Company</p>
          <div className="flex justify-center md:justify-start space-x-1 text-yellow-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>

        {/* Middle Section */}
        <div className="text-center space-y-4">
          <p className="font-semibold">We accept major credit cards!</p>
          <div className="flex justify-center space-x-3 text-2xl">
            <SiVisa />
            <SiMastercard />
            <SiAmericanexpress />
            <SiDiscover />
            <SiPaypal />
          </div>

          <div className="flex justify-center items-center space-x-4 mt-4">
            <span className="text-sm">Follow us:</span>
            <FaFacebookF className="hover:text-blue-600 transition cursor-pointer" />
            <FaTwitter className="hover:text-blue-400 transition cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 transition cursor-pointer" />
            <FaLinkedin className="hover:text-blue-700 transition cursor-pointer" />
          </div>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div className="space-y-2">
            <h3 className="font-semibold text-white">Company</h3>
            <ul className="space-y-1 text-gray-400">
              <li>About Us</li>
              <li>Meet the Team</li>
              <li>Service Areas</li>
              <li>Careers</li>
              <li>Support</li>
              <li>Contact Us</li>
              <li>Request a Tow</li>
              <li>FAQs</li>
              <li>Service Terms</li>
            </ul>

            <h3 className="font-semibold text-white mt-4">Services</h3>
            <ul className="space-y-1 text-gray-400">
              <li>Emergency Towing</li>
              <li>Roadside Assistance</li>
              <li>Vehicle Recovery</li>
              <li>Motorcycle Towing</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-white">Resources</h3>
            <ul className="space-y-1 text-gray-400">
              <li>Blog</li>
              <li>Safety Tips</li>
              <li>Towing Guide</li>
              <li>Vehicle Checklist</li>
              <li>Locations</li>
              <li>Main Office</li>
              <li>Downtown Garage</li>
              <li>East Side Lot</li>
              <li>Partner Stations</li>
            </ul>

            <h3 className="font-semibold text-white mt-4">Legal</h3>
            <ul className="space-y-1 text-gray-400">
              <a href=""><li>Privacy Policy</li></a>
              <li>Terms of Service</li>
              <li>Insurance Info</li>
              <li>Accessibility</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} TowingInc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
