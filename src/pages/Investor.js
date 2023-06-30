import Footer from "../components/Footer";
import Hero from "../components/Hero";
import News from "../components/News";
import Financials from "../components/Financials";
import Report from "../components/Report";
import Glance from "../components/Glance";
import Research from "../components/Research";

const Investor = () => {
  const newsData = [
    {
      id: 1,
      src: "assets/ourpeople.jpg",
      Title:
        "Prologis to Acquire 14MSF Blackstone Industrial Portfolio in $3.1 Billion Deal",
      date: "Jun 26, 2023 • 8:00am EDT",
    },
    {
      id: 2,
      Title: "Prologis to Announce Second Quarter 2023 Results July 18",
      date: "Jun 22, 2023 • 4:30pm EDT",
    },
    {
      id: 3,
      Title:
        "Prologis to Participate in REITWeek 2023: NAREIT's Investor Forum",
      date: "Jun 5, 2023 • 8:30am EDT",
    },
  ];

  return (
    <div>
      <Hero
        src="assets/hero-img.jpg"
        header="Q2 2023 EARNINGS CONFERENCE CALL"
        text="JULY 18, 2023 - 11:00 AM ET"
      />
      <News data={newsData} />
      <Financials />
      <Report />
      <Glance />
      <Research />
      <Footer mt={0} />
    </div>
  );
};

export default Investor;
