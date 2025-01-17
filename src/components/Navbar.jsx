import React, { useState, useEffect, useRef } from "react";
import logo from "../image/logo-rbg.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow px-4">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center lg:mx-16">
          <Link to="/">
            <img
              src={logo}
              alt="Namplov Logo"
              className="w-[70px] md:w-[80px] lg:w-[100px]"
            />
          </Link>
          <span className="ml-3 text-blue-900 font-bold text-xl">Namplov</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 text-blue-900">
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center hover:text-pink-500 md:text-[14px] lg:text-[18px]"
              onClick={handleDropdownClick}
            >
              Test <span className="ml-1">▼</span>
            </button>
            {isDropdownOpen && (
          <div className="absolute mt-2 bg-white shadow rounded w-[200px] md:mt-8">
            <ul>
              <li
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer lg:text-md text-left"
                onClick={handleMenuItemClick}
              >
                <Link to="/major_test" className="block w-full h-full">Major Recommend</Link>
              </li>
              <li
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer lg:text-md text-left"
                onClick={handleMenuItemClick}
              >
                <Link to="/iq_test" className="block w-full h-full">IQ Test</Link>
              </li>
              <li
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer lg:text-md text-left"
                onClick={handleMenuItemClick}
              >
                <Link to="/personality_test" className="block w-full h-full">Personality Test</Link>
              </li>
            </ul>
          </div>
        )}

          </div>
          <Link to="/universities" className="hover:text-pink-500 md:text-[14px] lg:text-[18px]">
            Universities
          </Link>
          <Link to="/scholarships" className="hover:text-pink-500 md:text-[14px] lg:text-[18px]">
            Scholarship
          </Link>
          <Link to="/online_learning" className="hover:text-pink-500 md:text-[14px] lg:text-[18px]">
            Online Learning
          </Link>
          <Link to="/youracc">
            <button className="bg-blue-900 text-white px-4 py-2 rounded md:text-[12px] lg:text-[15px]">
              Your Profile
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-900 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Links - Sliding Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 w-4/6 h-full bg-white shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4 space-y-4 text-blue-900">
          <div className="flex justify-end">
            <button
              className="text-blue-900 focus:outline-none mb-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center text-center hover:text-pink-500"
              onClick={handleDropdownClick}
            >
              Test <span className="ml-1">▼</span>
            </button>
            {isDropdownOpen && (
              <div className="mt-2 bg-white shadow rounded">
                <ul>
                  <Link to="/major_test">
                    <li
                      className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                      onClick={handleMenuItemClick}
                    >
                      Major Recommend
                    </li>
                  </Link>
                  <Link to="/iq_test">
                    <li
                      className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                      onClick={handleMenuItemClick}
                    >
                      IQ Test
                    </li>
                  </Link>
                  <Link to="/personality_test">
                    <li
                      className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                      onClick={handleMenuItemClick}
                    >
                      Personality Test
                    </li>
                  </Link>
                </ul>
              </div>
            )}
          </div>
          <Link to="/universities" className="block hover:text-pink-500" onClick={handleMenuItemClick}>
            Universities
          </Link>
          <Link to="/scholarships" className="block hover:text-pink-500" onClick={handleMenuItemClick}>
            Scholarship
          </Link>
          <Link to="/online_learning" className="block hover:text-pink-500" onClick={handleMenuItemClick}>
            Online Learning
          </Link>
          <Link to="/youracc">
            <button
              className="bg-blue-900 text-white px-2 py-2 rounded w-full text-sm mt-3"
              onClick={handleMenuItemClick}
            >
              Your Profile
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
