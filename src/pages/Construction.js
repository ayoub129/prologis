import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Work from "../components/Work";
import CustomerSays from "../components/CustomerSays";
import WorkWith from "../components/WorkWith";

const Construction = () => {
  const customerData = [
    {
      id: 1,
      Title:
        "ANDREW SMITH, GENERAL MANAGER, SENIOR VICE PRESIDENT, BIG BUS TOURS",
      subTitle: "SAN FRANCISCO, CA",
      src: "assets/customer1.png",
      text: "The team at Prologis has worked with Big Bus through these challenging times. I could not ask for a better partner than the Prologis team – they have been ‘A-plus’ all the way.",
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
        header="Construction"
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

export default Construction;
