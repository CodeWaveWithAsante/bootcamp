import React from "react";

const Button = ({ label, type, className }) => {
  return (
    <button
      type={type || "button"}
      className={`flex items-center justify-center py-2 pc-4 rounded outline-none  ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
