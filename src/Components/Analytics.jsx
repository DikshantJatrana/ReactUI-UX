import React from "react";

function Analytics() {
  return (
    <div className="w-full bg-white grid smd:grid-cols-2 mx-auto px-6 pb-4">
      <img src="/laptop.jpg" alt="laptop" className="w-[85%] mx-auto" />
      <div className="smd:text-left text-center mx-auto">
        <h2 className="text-[#00ed5f] mb-[1.25%] font-bold text-l sm:text-xl smd:text-2xl md:text-[1.65rem] lg:text-3xl">
          Data analytics dashboard
        </h2>
        <h1 className="font-bold text-xl mb-[4%] sm:text-2xl smd:text-3xl md:text-4xl lg:text-[2.35rem]">
          Manage Data Analytics Centrally
        </h1>
        <p className="font-medium text-base smd:text-base md:text-lg lg:text-[1.30rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nulla
          sit corporis dolor quod dolorem impedit in? Natus obcaecati fugit
          provident illo at. Ullam nam perspiciatis placeat unde sed est? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Obcaecati est
          repellat quia assumenda reiciendis! Expedita, dolores rem dolore
          tenetur quae nostrum. Quaerat possimus labore, ipsum alias qui
          exercitationem voluptatem odit!
        </p>
        <button className="rounded-md font-bold mt-[4%] text-white bg-black p-4 text-lg sm:text-lg smd:text-xl md:text-2xl lg:text-3xl">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Analytics;
