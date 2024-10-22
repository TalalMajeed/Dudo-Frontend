import React, { useState } from 'react';

const SlidingButton = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="flex justify-between p-2 bg-[#2A2A40] rounded-lg">
        {options.map((option, index) => (
          <div
            key={index}
            className={`relative w-1/4 text-center cursor-pointer text-white transition-colors`}
            onClick={() => handleClick(index)}
          >
            {option}
          </div>
        ))}
      </div>
      <div
        className="absolute top-0 left-0 h-full bg-blue-500 rounded-lg transition-transform duration-300 ease-in-out"
        style={{ width: '25%', transform: `translateX(${activeIndex * 100}%)` }}
      />
    </div>
  );
};

export default SlidingButton;
