import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Work from "../components/Work";
import CustomerSays from "../components/CustomerSays";

const HowWeWork = () => {
  return (
    <div>
      <Hero
        src="assets/how-we-work-hero.jpg"
        header="HOW WE WORK"
        text="Our people engage with our customers and partners to grow relationships that drive success and help your business thrive."
      />
      <Work
        header={"OUR PEOPLE WORK WITH YOU"}
        text="Prologis People-smart, energetics, innovation. all dedicated to building long-lasting relationships that help us understand your needs."
        src="assets/work.jpg"
      />
      <CustomerSays />
      <Footer />
    </div>
  );
};

export default HowWeWork;
