import React from "react";
import Cards from "./Cards";

function Deck() {
  return (
    <div className="w-full bg-white py-[7rem] px-8 text-black">
      <div className="mx-auto grid smd:grid-cols-3 gap-20">
        <Cards
          title="Single User"
          image="/single.png"
          value="149"
          update="500"
          update2="2"
          active={false}
        />
        <Cards
          title="Double User"
          image="/double.png"
          value="249"
          update="1000"
          update2="4"
          active={true}
        />
        <Cards
          title="Triple User"
          image="/triple.png"
          value="300"
          update="2000"
          update2="8"
          active={false}
        />
      </div>
    </div>
  );
}

export default Deck;
