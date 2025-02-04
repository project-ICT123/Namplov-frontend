import React, { useState } from "react";
import axios from "axios";
import pic from "../image/apple.png";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/button";
import eyeIcon from "../image/eye.png"; // Eye icon PNG
import eyeSlashIcon from "../image/eye_close.png";

function Login() {
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
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
    setError(null);
    setIsSubmitting(true); // Disable button during submission

    try {
      const payload = {
        phone: isNaN(formData.identifier) ? undefined : formData.identifier,
        username: isNaN(formData.identifier) ? formData.identifier : undefined,
        password: formData.password,
      };

      const response = await axios.post("http://localhost:8000/api/login", payload);
      console.log(response.data);

      alert("Login successful! Redirecting to your dashboard.");
      navigate("/");
    } catch (error) {
      if (error.response) {
        setError(error.response.data.errors || "Login failed. Please try again.");
      } else {
        setError("An error occurred. Please check your connection and try again.");
      }
    } finally {
      setIsSubmitting(false); // Re-enable button after submission
    }
  };

  return (
    <main className="min-h-screen">
      <div className="absolute sm573:px-[2rem] sm573:py-[1rem] px-[1rem] ">
        <Button label="Go Back" onClick={() => navigate('/')}>
          <svg className="w-5 h-5 mr-[5px] mb-[2px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
          </svg>
          Go Back
        </Button>
      </div>

      <div className="flex items-center justify-center min-h-screen">
        <div className=" flex flex-col lg:flex-row w-full overflow-hidden mt-[4rem]">
          {/* Left Column: Image Section */}
          <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
            <img src={pic} alt="Login illustration" className="max-w-[600px] object-contain" />
          </div>

          {/* Right Column: Login Form */}
          <div className="w-full lg:w-1/2 p-6 text-left">
            <div className="text-center mb-10">
              <h2 className="mt-6 text-2xl md:text-3xl font-bold text-pink dark:text-white">Login</h2>
              <h3 className="mt-6 text-xl md:text-2xl font-bold text-logocolor dark:text-white">Welcome back</h3>
              <p className="mt-2 text-neutral-500 dark:text-neutral-300 text-md">Log in to manage your account</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Identifier Input */}
              <div>
                <label htmlFor="identifier" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Username or Email/Phone Number
                </label>
                <input
                  type="text"
                  id="identifier"
                  className="w-full px-4 py-2 mt-1 border rounded-lg text-neutral-800 border-neutral-300 focus:ring-2 focus:ring-logocolor focus:outline-none focus:ring-offset-2"
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

              {/* Forgot Password Link */}
              <div className="text-left mt-6 flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    className="w-4 h-4 text-pink-600 border-neutral-300 rounded focus:ring-pink-500"
                  />
                  <label
                    htmlFor="rememberMe"
                    className="ml-2 text-sm text-neutral-700 dark:text-neutral-300"
                  >
                    Remember me
                  </label>
                </div>

                <Link to="/forgot-password" className="text-sm text-blue-500 underline">
                  Forgot password?
                </Link>
              </div>
              {/* Error Message */}
              {error && <p className="text-sm text-red-600 text-center">{error}</p>}

              {/* Submit Button */}
              <div className="flex item-center justify-center">
                <Button
                  label="Login"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={` ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                />
              </div>
            </form>


            
            {/* Register Section */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                Don't have an account ?
              </p>
              <Link
                to="/signup"
                className="text-pink font-medium underline"
                >
                Signup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
