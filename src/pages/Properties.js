import Filter from "../components/Filter";
import HeroProperties from "../components/HeroProperties";
import Search from "../components/Search";
import Footer from "../components/Footer";
import Houses from "../components/Houses";
import Cars from "../components/Cars";

const Properties = () => {
  return (
    <div>
      <HeroProperties />
      <Search />
      <Filter />
      <Houses />
      <Cars />
      <Footer />
    </div>
  );
};

export default Properties;
