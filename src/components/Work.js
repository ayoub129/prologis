import React from "react";

const Work = ({ header, text, src }) => {
  return (
    <div className="bg-base-200 w-full mt-20">
      <div className="w-11/12 mx-auto py-16">
        <h2 className="uppercase font-bold text-3xl tracking-wide text-green-700">
          {header}
        </h2>
        <p className="py-7 text-base-400">{text}</p>
        <img className="w-full" src={src} alt={header} />
      </div>
    </div>
  );
};

export default Work;
