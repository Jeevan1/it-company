import React from "react";

const InputField = ({
  type,
  name,
  label,
  placeholder,
  className,
  required = false,
  isTextArea = false,
}: {
  type: string;
  label: string;
  name: string;
  placeholder: string;
  className?: string;
  required?: boolean;
  isTextArea?: boolean;
}) => {
  return (
    <div className={className}>
      <label htmlFor={name} className="text-dark font-semibold">
        {label}
        {required && " *"}
      </label>
      {!isTextArea ? (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className={`w-full border border-grey rounded-sm py-3 px-4 mt-2 focus:outline-gray-500 focus:shadow-md focus:border-white`}
          required={required}
        />
      ) : (
        <textarea
          name={name}
          className={`w-full border border-grey rounded-sm py-3 px-4 mt-2 focus:outline-gray-500 focus:shadow-md focus:border-white`}
          required={required}
          placeholder={placeholder}
          rows={4}
          cols={50}
          aria-required
        />
      )}
    </div>
  );
};

export default InputField;
