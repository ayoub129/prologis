import React from "react";
import Hero from "../components/Hero";
import Cards from "../components/HomeCards";
import Blocks from "../components/Blocks";
import Slider from "../components/Slider";
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
      <Thriving
        link="/"
        src="assets/Customer-Service.jpg"
        Text="Your business matters to us. Whether you’re a start-up venture or a
            multinational company, we’ll give you access to the buildings,
            people and solutions your business needs to thrive and succeed year
            after year."
        Title={"START THRIVING"}
      />
      <Global />
      <Footer />
    </div>
  );
};

export default Home;
