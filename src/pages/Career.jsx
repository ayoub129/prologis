import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import CustomerSays from "../components/CustomerSays";
import SliderFull from "../components/SliderFull";
import Meet from "../components/Meet";
import Fivethrait from "../components/Fivethrait";
import CareerText from "../components/CareerText";

const Career = () => {
  const sliderData = [
    {
      id: 1,
      src: "assets/ourpeople.jpg",
      Title: "We put people first",
      paragraph:
        "Our people drive our success. That’s why we’ve built a culture of personal and professional empowerment.",
      action: "Expolore open position",
      small:
        "Our people drive our success. That’s why we’ve built a culture of personal and professional...",
    },
    {
      id: 2,
      src: "assets/commited.jpg",
      Title: "We're committed to inclusion & diversity",
      paragraph:
        "Inclusion and belonging matters at Prologis. We intentionally build diverse teams with varying backgrounds, perspectives and experiences.",
      action: "Expolore open position",
      small:
        "Inclusion and belonging matters at Prologis. We intentionally build ...",
    },
    {
      id: 3,
      src: "assets/future.jpg",
      Title: "We create the future",
      paragraph:
        "We push boundaries and explore new horizons to stay ahead of what's next.",
      action: "Expolore open position",
      small:
        "We push boundaries and explore new horizons to stay ahead of what's next.",
    },
    {
      id: 4,
      src: "assets/listen.jpg",
      Title: "We listen, question, and commit",
      paragraph:
        "We challenge our own best ideas. We work together to achieve results.",
      action: "Expolore open position",
      small: "We challenge our own best ideas. We work together ...",
    },
  ];

  const customerData = [
    {
      id: 1,
      Title: "STEVEN HUSSAIN",
      subTitle: "DALLAS, TEXAS",
      src: "assets/stevan.jpg",
      text: "When I saw an opening to support the Community Workforce Initiative effort, I thought it could be a perfect fit for me to really leverage the skills I had from the public sector and apply them in a new and innovative context.",
    },
    {
      id: 2,
      Title: "NICOLA NEWLAND",
      subTitle: "SOLIHULL, UK",
      src: "assets/nicola.jpg",
      text: "I help the UK Project Management team deliver world class buildings to our customers and Prologis gives me the purpose and motivation to produce my best work. There is a real sense of collaboration and mutual respect, which gives me the courage and drive to push myself out of my comfort zone, embrace change and take on new challenges. I couldn’t imagine a better (and more fun) place to work!",
    },
  ];

  const CareerSilder = [
    {
      id: 1,
      src: "assets/diffrence1.jpg",
    },
    {
      id: 2,
      src: "assets/diffrence2.jpg",
    },
    {
      id: 3,
      src: "assets/diffrence3.jpg",
    },
    {
      id: 4,
      src: "assets/diffrence4.jpg",
    },
    {
      id: 5,
      src: "assets/diffrence5.jpg",
    },
  ];

  return (
    <div>
      <Hero
        src="assets/career.jpg"
        header="CAREERS WITH US"
        text="EXPLORE OPEN POSITIONS"
      />
      <Slider p={true} data={sliderData} />
      <Meet />
      <Fivethrait
        header={"FIVE TRAITS THAT DRIVE OUR CULTURE"}
        src={"assets/five.jpg"}
      />
      <CustomerSays bghouse={false} data={customerData} />
      <SliderFull data={CareerSilder} />
      <CareerText />
      <Footer />
    </div>
  );
};

export default Career;
