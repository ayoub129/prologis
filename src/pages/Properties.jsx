import PrologisContext from "../context/PrologisContext";
import Filter from "../components/Filter";
import HeroProperties from "../components/HeroProperties";
import Search from "../components/Search";
import Footer from "../components/Footer";
import Houses from "../components/Houses";
import Cars from "../components/Cars";
import Thriving from "../components/Thriving";
import { useContext } from "react";

const Properties = () => {
  const { filterproperties } = useContext(PrologisContext);

  return (
    <div>
      <HeroProperties />
      <div className="block lg:flex lg:w-11/12 lg:mx-auto">
        <Search />
        <Filter />
      </div>
      {filterproperties === "All" ? (
        <div className="md:flex justify-between w-11/12 mx-auto mb-20">
          <Houses />
          <Cars />
        </div>
      ) : (
        <div className="mb-20">
          {filterproperties === "Cars" ? (
            <Cars grid={true} />
          ) : (
            <Houses grid={true} />
          )}
        </div>
      )}

      <Thriving
        src="assets/constructers.jpg"
        Text="Prologis Essentials makes it easier for our customers to do business. you can easily manage your property, find warehouse solution, contact support and more .. all in one convenient online location."
        Title={"DISCOVER PROLOGIS ESSENTIALS"}
      />
      <Footer />
    </div>
  );
};

export default Properties;
