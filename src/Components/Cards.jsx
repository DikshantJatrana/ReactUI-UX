import React from "react";

function Cards({ title, image, value, update, update2, active }) {
  return (
    <div
      className={
        active == false
          ? "w-full flex justify-center items-center flex-col border-[4px] border-[#00ed5f] rounded-b-xl border-t-0 shadow-lg hover:scale-105 duration-150"
          : "w-full flex justify-center items-center flex-col border-[4px] border-[#00ed5f] rounded-b-xl border-t-0 shadow-lg hover:scale-105 duration-150 bg-gray-300"
      }
    >
      <img
        className="w-[20%] mx-auto my-[-2.5rem] bg-white rounded-lg"
        src={image}
        alt="photo"
      />
      <h2 className="font-bold pt-[20%] text-xl smd:text-2xl">{title}</h2>
      <p className=" font-bold text-lg smd:text-xl py-2 pb-3">${value}</p>
      <div className="w-[80%]">
        <p className="p-[8px] font-semibold w-full text-base smd:text-lg text-center border-b-2 border-gray-400">
          {update}GB Storage
        </p>
        <p className="p-[8px] font-semibold w-full text-base smd:text-lg text-center border-b-2 border-gray-400">
          {title}
        </p>
        <p className="p-[8px] font-semibold w-full text-base smd:text-lg text-center border-b-2 border-gray-400">
          Upto {update2}TB Share
        </p>
      </div>
      <button
        className={
          active == false
            ? "my-8 rounded-md border-[2px] text-base smd:text-lg border-black py-2 px-3 bg-[#00ed5f] font-bold"
            : "my-8 rounded-md border-[2px] text-base smd:text-lg border-black py-2 px-3 bg-black text-[#00ed5f] font-bold"
        }
      >
        Start Trail
      </button>
    </div>
  );
}

export default Cards;
