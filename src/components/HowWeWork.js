// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import Card from "./Card";

const HowWeWork = () => {
  const data = [
    {
      id: 1,
      src: "assets/howwework.jpg",
      Title: "HOW WE WORK",
      paragraph:
        "To deliver the best spaces and places for customers, employees and the local community, we partner with landowners, the public sector and local community groups. Our core values embodied in IMPACT are what make us unique and are essential to building a culture of enduring excellence.",
      action: "Learn More About How We Work",
    },
    {
      id: 2,
      src: "assets/ourbusiness.jpg",
      Title: "OUR BUSINESS",
      paragraph:
        "We have a long-term interest in the properties we create. For us, it’s about so much more than creating buildings: we create spaces and places where our customers’ businesses can thrive, where their employees enjoy coming to work and where local communities and wildlife can flourish. These values influence everything we do and are a living, breathing part of our culture.",
      action: "Learn More About What We Do",
    },
    {
      id: 3,
      src: "assets/betterfuture.jpg",
      Title: "BETTER FUTURE",
      paragraph:
        "Like you, we believe sustainability is good business. We strive to be a trusted, long-term partner that maximizes return to our stakeholders while minimizing environmental impacts.",
      action: "Discover Our Impact",
    },
  ];

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper mb-10"
      >
        {data.map((d) => (
          <SwiperSlide>
            <Card
              key={d.id}
              Title={d.Title}
              paragraph={d.paragraph}
              src={d.src}
              action={d.action}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HowWeWork;
