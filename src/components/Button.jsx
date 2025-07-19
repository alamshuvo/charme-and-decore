import React from "react";

const Button = ({text}) => {
  return (
    <div>
      <button
        className="px-6 py-2 rounded-md text-white font-semibold bg-gradient-to-r from-[#FFC107] to-[#a894e9]
  transition-all duration-500 ease-in-out hover:scale-105 
  hover:from-[#a894e9] hover:to-[#FFC107]
  focus:outline-none focus:ring-2 focus:ring-[#FFC107] focus:ring-offset-2
  animate-[glow_2s_ease-in-out_infinite]"
      >
       {text}
      </button>
    </div>
  );
};

export default Button;
