import React from "react";
import Hero from "../components/Hero";
import Cards from "../components/HomeCards";
import Blocks from "../components/Blocks";
import Slider from "../components/Slider";
import Thriving from "../components/Thriving";
import Global from "../components/Global";
import Footer from "../components/Footer";

const Home = () => {
  const sliderData = [
    {
      id: 1,
      src: "assets/howwework.jpg",
      Title: "HOW WE WORK",
      paragraph:
        "To deliver the best spaces and places for customers, employees and the local community, we partner with landowners, the public sector and local community groups. Our core values embodied in IMPACT are what make us unique and are essential to building a culture of enduring excellence.",
      action: "Learn More About How We Work",
      small:
        "Our relationships with customers, employees and communities are measured in decades as we strive to always be a good neighbor.",
    },
    {
      id: 2,
      src: "assets/ourbusiness.jpg",
      Title: "OUR BUSINESS",
      paragraph:
        "We have a long-term interest in the properties we create. For us, it’s about so much more than creating buildings: we create spaces and places where our customers’ businesses can thrive, where their employees enjoy coming to work and where local communities and wildlife can flourish. These values influence everything we do and are a living, breathing part of our culture.",
      action: "Learn More About What We Do",
      small:
        "We deliver logistics solutions and services at scale so you can thrive and grow your business.",
    },
    {
      id: 3,
      src: "assets/betterfuture.jpg",
      Title: "BETTER FUTURE",
      paragraph:
        "Like you, we believe sustainability is good business. We strive to be a trusted, long-term partner that maximizes return to our stakeholders while minimizing environmental impacts.",
      action: "Discover Our Impact",
      small:
        "Like you, we believe sustainability is just good business. Over the last four decades, we've made it part of ours.",
    },
  ];
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
      <Slider data={sliderData} />
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
