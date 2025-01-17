import React, { useState } from "react";
import axios from "axios";
import pic from "../image/apple.png";
import logo from "../image/logo-rbg.png";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function Login() {
  const [formData, setFormData] = useState({
    identifier: "", // Can be phone or username
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors
  
    try {
      const payload = {
        phone: isNaN(formData.identifier) ? undefined : formData.identifier, // Only send phone if numeric
        username: isNaN(formData.identifier) ? formData.identifier : undefined, // Only send username otherwise
        password: formData.password,
      };
  
      const response = await axios.post("http://localhost:8000/api/login", payload);
  
      console.log(response.data);
  
      // Show success message
      alert("Login successful! Redirecting to your dashboard.");
  
      // Redirect to dashboard or desired page
      navigate("/");
    } catch (error) {
      if (error.response) {
        // API responded with an error
        setError(error.response.data.errors || "Login failed. Please try again.");
      } else {
        // Network or other errors
        setError("An error occurred. Please check your connection and try again.");
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
      <div className="mt-2 flex flex-col lg:flex-row w-full max-w-7xl bg-white rounded-lg dark:bg-neutral-900 overflow-hidden">
        {/* Left Column: Image Section */}
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center ">
          <img
            src={pic}
            alt="Login illustration"
            className="max-w-[480px] object-contain"
          />
        </div>

        {/* Right Column: Login Form */}
        <div className="w-full lg:w-1/2 p-6 sm:p-10 lg:p-16">
          <div className="text-center mb-10">
            <img
              src={logo}
              alt="Company logo"
              className="mx-auto w-20 md:w-24"
            />
            <h2 className="mt-6 text-2xl md:text-3xl font-bold text-pink-600 dark:text-white">
              Login
            </h2>
            <h3 className="mt-6 text-xl md:text-2xl font-bold text-blue-900 dark:text-white">
              Welcome back
            </h3>
            <p className="mt-2 text-neutral-500 dark:text-neutral-300 text-md">
              Log in to manage your account
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Identifier Input */}
            <div>
              <label
                htmlFor="identifier"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
              >
                Username or Email/Phone Number
              </label>
              <input
                type="text"
                id="identifier"
                className="w-full px-4 py-2 mt-1 border rounded-lg text-neutral-800 border-neutral-300 focus:ring-2 focus:ring-orange-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:focus:ring-orange-400"
                value={formData.identifier}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 mt-1 border rounded-lg text-neutral-800 border-neutral-300 focus:ring-2 focus:ring-orange-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:focus:ring-orange-400"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* Error Message */}
            {error && <p className="text-sm text-red-600">{error}</p>}

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-2.5 text-white bg-blue-900 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              >
                Log in
              </button>
            </div>
          </form>

          {/* Forgot Password Link */}
          <div className="text-center mt-6">
            <Link
              to="/forgot-password"
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Register Section */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              Don't have an account?
            </p>
            <Link to="/signup">
              <button
                type="button"
                className="px-6 py-2 text-sm text-pink-600 border-2 border-pink-600 rounded-lg transition hover:bg-blue-600 hover:text-white"
              >
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;