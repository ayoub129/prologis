import PropertiesCard from "./PropertiesCard";
import PrologisContext from "../context/PrologisContext";
import { useContext } from "react";

const Houses = () => {
  const { properties } = useContext(PrologisContext);

  return (
    <div id="cars" className=" md:w-6/12">
      <div className="mt-5 w-11/12 mx-auto btn ">Houses</div>
      {properties.filter((d) => d.type !== "Car").length === 0 ? (
        <div className="w-11/12 mx-auto mt-5 text-xl text-base-400 tracking-wider">
          No House Found In This Area
        </div>
      ) : (
        <div className="md:w-11/12 grid grid-cols-1 lg:grid-cols-2">
          {properties
            .filter((d) => d.type !== "Car")
            .map((d) => (
              <PropertiesCard
                key={d.id}
                src={d.src}
                description={d.description}
                title={d.title}
                city={d.city}
                address={d.address}
                type={d.type}
                brand={d.brand}
                link={d.link}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default Houses;
