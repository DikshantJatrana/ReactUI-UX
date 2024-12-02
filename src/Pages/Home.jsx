import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Analytics from "../Components/Analytics";
import Newsletter from "../Components/Newsletter";
import Deck from "../Components/Deck";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="w-full h-screen bg-black">
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Deck />
      <Footer />
    </div>
  );
}

export default Home;
