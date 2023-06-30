import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import Card from "./Card";

const SliderFull = ({ data }) => {
  return (
    <div className="bg-base-200 ">
      <div className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto">
        <h2 className="uppercase pt-10 font-bold text-3xl tracking-wide text-green-700">
          WE MAKE A DIFFERENCE
        </h2>
        <p className="py-7 text-xl font-light tracking-wider text-base-400">
          When you join Prologis you’ll be able to make a meaningful difference
          in the communities you serve. We offer a variety of ways to give
          back—like company paid time to volunteer and IMPACT Day, our global
          day of service.
        </p>
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
            <SwiperSlide key={d.id}>
              <Card src={d.src} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderFull;
