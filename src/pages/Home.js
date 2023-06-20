import React from "react";
import Hero from "../components/Hero";
import Cards from "../components/HomeCards";
import Blocks from "../components/Blocks";
import Slider from "../components/HowWeWork";
import Thriving from "../components/Thriving";
import Global from "../components/Global";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Hero
        isVideo={true}
        src="assets/video.mp4"
        header="CELEBRATING 40 YEARS OF PROLOGIS"
        text="EXPLORE OUR 40 YEAR HISTORY "
      />
      <Cards />
      <Blocks />
      <Slider />
      <Thriving />
      <Global />
      <Footer />
    </div>
  );
};

export default Home;
