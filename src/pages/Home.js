import React from "react";
import Hero from "../components/Hero";
import Cards from "../components/HomeCards";
import Blocks from "../components/Blocks";
import Slider from "../components/HowWeWork";

const Home = () => {
  return (
    <div>
      <Hero />
      <Cards />
      <Blocks />
      <Slider />
    </div>
  );
};

export default Home;
