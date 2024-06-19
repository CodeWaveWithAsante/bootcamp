import React from "react";

const TextInput = React.forwardRef(
  ({ label, type, name, placeholder, register, error, readOnly }, ref) => {
    return (
      <div className="w-full mb-4">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
          </label>
        )}
        <input
          type={type ?? "text"}
          name={name}
          placeholder={placeholder}
          ref={ref}
          readOnly={readOnly || false}
          {...register}
          className="bg-transparent appearance-none border outline-none border-gray-300 dark:border-gray-800 rounded w-full py-2.5 px-3 text-gray-700 dark:text-gray-500 focus:ring-1 ring-blue-500 dark:placeholder::text-gray-700 text-sm"
        />
        {error && <span className="text-xs text-red-600 mt-0.5">{error}</span>}
      </div>
    );
  }
);

export default TextInput;
