import React from "react";

function Newsletter() {
  return (
    <div className="bg-black text-white w-full px-4 py-[5rem]">
      <div className="w-full mx-auto grid md:grid-cols-3">
        <div className="md:col-span-2">
          <h1 className="font-bold text-2xl smd:text-3xl md:text-3xl lg:text-4xl">
            Want Tips & Tricks to Optimize your flow ?
          </h1>
          <p className="font-semibold text-base smd:text-base md:text-lg lg:text-xl">
            Sign up to our Newsletter and stay upto date.
          </p>
        </div>
        <div className="my-4 flex flex-col smd:flex-row items-center justify-between">
          <input
            className="py-2 px-2 flex w-full outline-none active:border-2 active:border-[#00ed5f] rounded-md text-black"
            type="text"
            placeholder="Enter Email"
          />
          <button className="font-bold text-black text-base w-[200px] smd:text-base md:text-lg lg:text-xl rounded-md bg-[#00ed5f] m-[1%] py-2 px-3">
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
