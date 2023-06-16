// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const Global = () => {
  const data = [
    {
      id: 1,
      Number: "6,600",
      description: "CUSTOMERS",
    },
    {
      id: 2,
      Number: "$2.7",
      description:
        "TRILLION ECONOMIC VALUE OF GOODS MOVE THROUGH OUR FACILITIES EACH YEAR",
    },
    {
      id: 3,
      Number: "2.8%",
      description:
        "OF THE WORLD'S GDP FLOWS THROUGH OUR DISTRIBUTION CENTERS ANNUALLY",
    },
    {
      id: 4,
      Number: "1.1 MILLION",
      description: "PEOPLE WORK UNDER OUR ROOFS EVERYDAY",
    },
    {
      id: 5,
      Number: "25,000",
      description:
        "INDIVIDUALS TO BE TRAINED BY THROUGH OUR COMMUNITY WORKFORCE INITIATIVE",
    },
  ];

  return (
    <div className="bg-video bg-overlay cursor-auto">
      <div className="mx-auto w-11/12 text-white py-12">
        <h2 className="text-4xl font-bold w-11/12 leading-large">
          GLOBAL SCALE WITH LOCAL IMPACT
        </h2>
        <p className="leading-7">
          SEE HOW OUR PARTNERSHIPS HELP MAKE A REAL DIFFERENCE BOTH IN OUR LOCAL
          COMMUNITIES AND AROUND THE WORLD.
        </p>
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper mb-10"
        >
          {data.map((d) => (
            <SwiperSlide key={d.id}>
              <div className="ml-12 mr-10 mt-12">
                <h3 className="font-bold text-3xl">{d.Number}</h3>
                <p className="text-base-400 text-xl">{d.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Global;
