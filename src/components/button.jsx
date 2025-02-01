import React from "react";

const Button = ({ label, onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={`mt-4 py-3 px-6 bg-logocolor hover:bg-pink rounded-lg bg-logocolor text-white text-sm font-bold sm:text-base md:text-lg flex items-center justify-center ${className}`}
    >
      {children || label}
    </button>
  );
};

export default Button;