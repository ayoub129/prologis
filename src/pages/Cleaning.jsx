import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Work from "../components/Work";
import CustomerSays from "../components/CustomerSays";
import WorkWith from "../components/WorkWith";

const Cleaning = () => {
  const customerData = [
    {
      id: 1,
      Title:
        "ANDREW SMITH, GENERAL MANAGER, SENIOR VICE PRESIDENT, BIG BUS TOURS",
      subTitle: "SAN FRANCISCO, CA",
      src: "assets/customer1.png",
      text: "When I saw an opening to support the Community Workforce Initiative effort, I thought it could be a perfect fit for me to really leverage the skills I had from the public sector and apply them in a new and innovative context.",
    },
    {
      id: 2,
      Title: "MARK BRAGG, CORPORATE REAL ESTATE, THE HOME DEPOT",
      subTitle: "ATLANTA, GA",
      src: "assets/customer2.png",
      text: "Prologis is extremely customer-centric. They make us feel like we are the most important customer.",
    },
  ];
  return (
    <div>
      <Hero
        src="assets/how-we-work-hero.jpg"
        header="Cleaning"
        text="Our people engage with our customers and partners to grow relationships that drive success and help your business thrive."
      />
      <Work
        header={"OUR PEOPLE WORK WITH YOU"}
        text="Prologis People-smart, energetics, innovation. all dedicated to building long-lasting relationships that help us understand your needs."
        src="assets/work.jpg"
      />
      <CustomerSays data={customerData} />
      <WorkWith />
      <Footer />
    </div>
  );
};

export default Cleaning;
