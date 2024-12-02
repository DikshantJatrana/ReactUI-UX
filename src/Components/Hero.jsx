import React from "react";
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <>
      <div className="w-full h-screen text-white flex flex-col items-center justify-center">
        <p className="text-[#00ed5f] p-[2px] smd:p-[3px] md:p-[4px] font-bold text-xl smd:text-[1.75rem] md:text-3xl lg:text-4xl">
          Grow with data Analytics
        </p>
        <h1 className="font-bold p-[2px] smd:p-[3px] md:p-[4px] text-3xl smd:text-[2.65rem] md:text-5xl lg:text-7xl">
          Grow with Data.
        </h1>
        <h3 className="font-bold p-[2px] smd:p-[3px] md:p-[4px] text-xl smd:text-[1.75rem] md:text-3xl lg:text-4xl">
          Fast,Flexible Finance for
          <ReactTyped
            className="pl-2"
            strings={[" BTC", " BTB", " SASS"]}
            typeSpeed={140}
            backSpeed={120}
            loop
          ></ReactTyped>
        </h3>
        <p className="text-center p-3 smd:p-[14px] md:p-4 lg:p-[18px] text-gray-400 font-semibold text-l smd:text-[1.65rem] md:text-2xl lg:text-3xl">
          Moniter your data analytics to increase revenue for BTB, BTC & SASS
          platfrom
        </p>
        <button className="font-bold rounded-xl text-black bg-[#00ed5f] lg:w-[25%] smd:w-[35%] w-[40%] py-3 text-xl sm:text-xl smd:text-2xl md:text-3xl lg:text-4xl mt-[6%]">
          Get Started
        </button>
      </div>
    </>
  );
}

export default Hero;
