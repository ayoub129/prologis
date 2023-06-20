import React from "react";
import PropertiesCard from "./PropertiesCard";

const Cars = () => {
  const data = [
    {
      id: 1,
      src: "assets/building/house1.jpg",
      brand: "Audi",
      title: "Audi RSQ8",
      city: "Tangier",
      address: "Tangier Sidi Driss",
      type: "Car",
      description: "This Shit is fire N*gga",
      link: "prologis.com",
      price: 1250157,
    },
    {
      id: 2,
      src: "assets/building/house1.jpg",
      brand: "MERCEDESS",
      title: "MERCEDESS BENZ",
      city: "Tangier",
      address: "Tangier BNI MAKADA",
      type: "Car",
      description: "This Shit is fire N*gga",
      link: "prologis.com",
      price: 1250157,
    },
    {
      id: 3,
      src: "assets/building/house1.jpg",
      brand: "Reanult",
      title: "Reanult Clio",
      city: "Tangier",
      address: "Tangier MEDINA",
      type: "Car",
      description: "This Shit is Ass N*gga",
      link: "prologis.com",
      price: 1250157,
    },
  ];
  return (
    <div id="cars" className="flex flex-col">
      <div className="mt-5 w-11/12 mx-auto btn ">Cars</div>
      {data.map((d) => (
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
  );
};

export default Cars;
