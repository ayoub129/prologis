import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Work from "../components/Work";
import CustomerSays from "../components/CustomerSays";
import WorkWith from "../components/WorkWith";

const Development = () => {
  return (
    <div>
      <Hero
        src="assets/how-we-work-hero.jpg"
        header="Development"
        text="Our people engage with our customers and partners to grow relationships that drive success and help your business thrive."
      />
      <Work
        header={"OUR PEOPLE WORK WITH YOU"}
        text="Prologis People-smart, energetics, innovation. all dedicated to building long-lasting relationships that help us understand your needs."
        src="assets/work.jpg"
      />
      <CustomerSays />
      <WorkWith />
      <Footer />
    </div>
  );
};

export default Development;