import React from "react";
import PropertiesCard from "./PropertiesCard";

const Houses = () => {
  const data = [
    {
      id: 1,
      src: "assets/building/house1.jpg",
      title: "COSLADA DC2",
      city: "Tangier",
      address: "Tangier Sidi Driss",
      type: "Building",
      description: "Total Available Area: 3,180 - 8559 SQM",
      link: "prologis.com",
      price: 1254689,
      size: 450,
    },
    {
      id: 2,
      src: "assets/building/house1.jpg",
      title: "COSLADA DC2",
      city: "Tangier",
      address: "Tangier BNI MAKADA",
      type: "Building",
      description: "Total Available Area: 3,180 - 8559 SQM",
      link: "prologis.com",
      price: 1254689,
      size: 450,
    },
    {
      id: 3,
      src: "assets/building/house1.jpg",
      title: "COSLADA DC2",
      city: "Tangier",
      address: "Tangier MEDINA",
      type: "Building",
      description: "Total Available Area: 3,180 - 8559 SQM",
      link: "prologis.com",
      price: 1254689,
      size: 450,
    },
  ];
  return (
    <div id="houses" className="flex flex-col">
      <div className="mt-5 w-11/12 mx-auto btn ">Houses</div>
      {data.map((d) => (
        <PropertiesCard
          key={d.id}
          src={d.src}
          description={d.description}
          title={d.title}
          city={d.city}
          address={d.address}
          type={d.type}
          link={d.link}
        />
      ))}
    </div>
  );
};

export default Houses;
