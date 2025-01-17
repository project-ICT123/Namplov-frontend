import axios from 'axios';
import React, { useState } from "react";
import bookImg from "../image/book.png"; // Replace with the correct image path
import eyeIcon from "../image/eye.png"; // Eye icon PNG
import eyeSlashIcon from "../image/eye_close.png"; // Eye slash icon PNG
import { Link } from "react-router-dom";
import logo from "../image/logo-rbg.png";
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa"; // Import the icon

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    emailOrPhone: '',
    password: '',
  });

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
    <div>
      <Link to="/">
        <button
          type="button"
          className="m-1 md:m-2 lg:m-4 xl:m-4 text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[10px] sm:lg:text-[12px] md:text-[12px] lg:text-[12px] xl:text-md px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 py-2 flex items-center"
        >
          <FaArrowLeft className="mr-2" /> Go Back
        </button>
      </Link>
      <div className="h-auto flex items-center justify-center">
        <div className="mt-2 flex flex-col lg:flex-row w-full max-w-7xl bg-white rounded-lg overflow-hidden">
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
              <img
                src={logo}
                alt="Company logo"
                className="mx-auto w-20 md:w-24"
              />
              <h2 className="mt-6 text-2xl md:text-3xl font-bold text-pink-600 dark:text-white">
                Sign Up
              </h2>
              <h3 className="mt-4 text-xl md:text-2xl font-bold text-blue-900 dark:text-white">
                Sign Up and Start Testing/Learning
              </h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-300 text-sm">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-pink-600 font-medium hover:underline"
                >
                  Log in
                </Link>
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Full Name and Gender */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    Your Full Name*
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className="w-full px-4 py-2 mt-1 border rounded-lg text-neutral-800 border-neutral-300 focus:ring-2 focus:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:focus:ring-blue-400"
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
                    className="w-full px-2 py-1 mt-1 border rounded-lg text-neutral-800 border-neutral-300 focus:ring-2 focus:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:focus:ring-blue-400"
                    required
                    onChange={handleChange}
                  >
                    <option value="">Select Gender</option>
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
                  className="w-full px-4 py-2 mt-1 border rounded-lg text-neutral-800 border-neutral-300 focus:ring-2 focus:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:focus:ring-blue-400"
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
                    className="w-full px-4 py-2 border rounded-lg text-neutral-800 border-neutral-300 focus:ring-2 focus:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:focus:ring-blue-400"
                    required
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-2 focus:outline-none"
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
              <div>
                <button
                  type="submit"
                  className="w-full py-2.5 text-white bg-blue-900 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                >
                  Sign Up
                </button>
              </div>
            </form>

            {/* Terms of Service */}
            <p className="mt-4 text-center text-sm text-neutral-500 dark:text-neutral-300">
              By signing up, you agree to our{" "}
              <Link to="/terms" className="text-blue-500 hover:underline">
                terms of use
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-blue-500 hover:underline">
                privacy policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;