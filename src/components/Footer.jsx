import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";
import logo from "../image/logo-rbg.png"

const Footer = () => {
  return (
    <footer className="bg-white border-t border-blue-200">
      <div className="container mx-auto px-4 py-8">
        {/* Footer Content */}
        <div className="flex flex-wrap justify-between items-start">
          {/* Logo Section */}
          <div className="mb-6 sm:mb-0">
            <img
              src={logo}
              alt="Namplov"
              className="w-24 mb-4"
            />
            <p className="text-blue-700 font-semibold">Find Us in Social:</p>
            <div className="flex space-x-4 mt-2 text-blue-700">
              <FaFacebookF className="hover:text-blue-900 cursor-pointer" />
              <FaInstagram className="hover:text-blue-900 cursor-pointer" />
              <FaYoutube className="hover:text-blue-900 cursor-pointer" />
              <FaEnvelope className="hover:text-blue-900 cursor-pointer" />
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-3 gap-8 text-blue-700">
            {/* Test Section */}
            <div>
              <h3 className="font-bold text-blue-900 mb-4">Test</h3>
              <ul className="space-y-2">
                <li className="hover:text-blue-900 cursor-pointer">Major Recommend</li>
                <li className="hover:text-blue-900 cursor-pointer">IQ Test</li>
                <li className="hover:text-blue-900 cursor-pointer">Personality Test</li>
              </ul>
            </div>

            {/* News Section */}
            <div>
              <h3 className="font-bold text-blue-900 mb-4">News</h3>
              <ul className="space-y-2">
                <li className="hover:text-blue-900 cursor-pointer">Universities</li>
                <li className="hover:text-blue-900 cursor-pointer">Scholarship</li>
              </ul>
            </div>

            {/* Company Section */}
            <div>
              <h3 className="font-bold text-blue-900 mb-4">Company</h3>
              <ul className="space-y-2">
                <li className="hover:text-blue-900 cursor-pointer">About Us</li>
                <li className="hover:text-blue-900 cursor-pointer">Online Learning</li>
              </ul>
            </div>
          </div>

          {/* Online Learning Button */}
          <div className="mt-6 sm:mt-0">
            <button className="bg-blue-900 text-white py-2 px-6 rounded-lg shadow-lg md:mt-4 hover:bg-blue-700">
              Online Learning
            </button>
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="border-t border-blue-200 mt-8 pt-4 text-center">
          <p className="text-blue-700 font-semibold">Turning Ambition into Action</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
