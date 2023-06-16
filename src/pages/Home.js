import React from "react";
import Hero from "../components/Hero";
import Cards from "../components/HomeCards";
import Blocks from "../components/Blocks";
import Slider from "../components/HowWeWork";
import Thriving from "../components/Thriving";
import Global from "../components/Global";
import Properties from "../components/Properties";

const Home = () => {
  return (
    <div>
      <Hero />
      <Cards />
      <Blocks />
      <Slider />
      <Thriving />
      <Global />
      <Properties />
    </div>
  );
};

export default Home;
