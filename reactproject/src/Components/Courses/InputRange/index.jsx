import React, { useState } from "react";

const InputRange = () => {
  const [value, setValue] = useState(50); // Default value

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="w-11/12 max-w-md mx-auto">
      <div className="relative">
        {/* Progress Bar */}
        <div className="w-full h-4 bg-gray-200 rounded-sm mb-2">
          <div
            className="bg-ocean_blue h-4 rounded-sm"
            style={{ width: `${value}%` }}
          />
        </div>
        {/* Input Range */}
        <input
          id="range"
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleChange}
          className="absolute -top-1 w-full h-4 bg-transparent cursor-pointer appearance-none"
          style={{
            WebkitAppearance: "none", // Remove default styling
            background: "transparent",
          }}
        />
      </div>
      <style jsx>
        {`
          input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none; /* Override default styling */
            appearance: none;
            width: 0; /* Hide the thumb */
            height: 0; /* Hide the thumb */
          }
          input[type="range"]::-moz-range-thumb {
            width: 0; /* Hide the thumb */
            height: 0; /* Hide the thumb */
          }
        `}
      </style>
    </div>
  );
};

export { InputRange };
