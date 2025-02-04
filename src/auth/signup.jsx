import axios from 'axios';
import React, { useState } from "react";
import bookImg from "../image/book.png"; // Replace with the correct image path
import eyeIcon from "../image/eye.png"; // Eye icon PNG
import eyeSlashIcon from "../image/eye_close.png"; // Eye slash icon PNG
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import Button from "../components/button";


function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    emailOrPhone: '',
    password: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);


  const navigate = useNavigate(); // Use useNavigate for navigation

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable button during submission

    try {
      const response = await axios.post('http://localhost:8000/api/register', {
        username: formData.fullName,
        phone: formData.emailOrPhone,
        gender: formData.gender,
        password: formData.password,
      });
      console.log(response.data);
      navigate('/login'); // Navigate to login
      alert('Registration successful! Redirecting to login page.');
    } catch (error) {
      if (error.response) {
        console.error('Error response:', error.response.data);
      } else {
        console.error('Error:', error.message);
      }
    }
  };

  return (
    <main className="min-h-screen">
      <div className="absolute sm573:px-[2rem] sm573:py-[1rem] px-[1rem]">
        <Button label="Go Back" onClick={() => navigate('/')}>
          <svg className="w-5 h-5 mr-[5px] mb-[2px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
          </svg>
          Go Back
        </Button>
      </div>
      <div className=" flex items-center justify-center">
        <div className=" flex flex-col lg:flex-row w-full max-w-7xl overflow-hidden">
          {/* Left Column: Image Section */}
          <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
            <img
              src={bookImg}
              alt="Books illustration"
              className="max-w-[460px] object-contain"
            />
          </div>

          {/* Right Column: Sign-Up Form */}
          <div className="w-full lg:w-1/2 p-6 sm:p-10 lg:p-16">
            <div className="text-center mb-10">
              <h2 className="mt-6 text-2xl md:text-3xl font-bold text-pink dark:text-white">
                Sign Up
              </h2>
              <h3 className="mt-4 text-xl md:text-2xl font-bold text-blue-900 dark:text-white">
                Sign Up and Start Testing/Learning
              </h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-300 text-sm">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-pink font-medium underline"
                >
                  Login
                </Link>
              </p>
            </div>

            <form className="space-y-6 text-left" onSubmit={handleSubmit}>
              {/* Full Name and Gender */}
              <div className="grid grid-cols-1 sm375:grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="sm375:col-span-2">
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    Your Full Name*
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className="w-full px-4 py-2 mt-1 border rounded-lg text-neutral-800 border-neutral-300 focus:ring-2 focus:ring-logocolor focus:outline-none focus:ring-offset-2"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="gender"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    Gender*
                  </label>
                  <select
                    id="gender"
                    className="w-full px-2 py-[5.5px] mt-1 border rounded-lg text-neutral-800 border-neutral-300 focus:ring-2 focus:ring-logocolor focus:outline-none focus:ring-offset-2"
                    required
                    onChange={handleChange}
                    defaultValue=""
                  >
                    <option value="" disabled hidden>
                      Select Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    Year of birth*
                  </label>
                  <input
                    type="number"
                    id="fullName"
                    className="w-full px-4 py-2 mt-1 border rounded-lg text-neutral-800 border-neutral-300 focus:ring-2 focus:ring-logocolor focus:outline-none focus:ring-offset-2"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="gender"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    Education*
                  </label>
                  <select
                    id="gender"
                    className="w-full px-2 py-[5.5px] mt-1 border rounded-lg text-neutral-800 border-neutral-300 focus:ring-2 focus:ring-logocolor focus:outline-none focus:ring-offset-2"
                    required
                    onChange={handleChange}
                    defaultValue=""
                  >
                    <option value="" disabled hidden>
                      Select Level
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="gender"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    Province*
                  </label>
                  <select
                    id="gender"
                    className="w-full px-2 py-[5.5px] mt-1 border rounded-lg text-neutral-800 border-neutral-300 focus:ring-2 focus:ring-logocolor focus:outline-none focus:ring-offset-2"
                    required
                    onChange={handleChange}
                    defaultValue=""
                  >
                    <option value="" disabled hidden>
                      Select Province
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Phone/Email */}
              <div>
                <label
                  htmlFor="emailOrPhone"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                >
                  Your Phone Number/Email*
                </label>
                <input
                  type="text"
                  id="emailOrPhone"
                  className="w-full px-4 py-2 mt-1 border rounded-lg text-neutral-800 border-neutral-300 focus:ring-2 focus:ring-logocolor focus:outline-none focus:ring-offset-2"
                  required
                  onChange={handleChange}
                />
              </div>

              {/* Password Input */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                >
                  Password*
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="w-full px-4 py-2 mt-1 border rounded-lg text-neutral-800 border-neutral-300 focus:ring-2 focus:ring-logocolor focus:outline-none focus:ring-offset-2"
                    required
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-[15px] focus:outline-none"
                    aria-label={showPassword ? "Hide Password" : "Show Password"}
                  >
                    <img
                      src={showPassword ? eyeSlashIcon : eyeIcon}
                      alt={showPassword ? "Hide Password" : "Show Password"}
                      className="w-5 h-5"
                    />
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <div className='flex item-center justify-center'>
                <Button
                    label="Sign Up"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={` ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  />
              </div>
            </form>

            {/* Terms of Service */}
            <p className="mt-4 text-center text-sm text-neutral-500 dark:text-neutral-300">
              By signing up, you agree to our{" "}
              <Link to="/terms" className="text-blue underline">
                terms of use
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-blue underline">
                privacy policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignUp;