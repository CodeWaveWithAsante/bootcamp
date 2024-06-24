import React from "react";
import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="py-4 flex w-full items-center justify-center">
      <FaSpinner size={28} className="animate-spin" />
    </div>
  );
};

export default Loading;
