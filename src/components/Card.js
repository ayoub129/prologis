import React from "react";

const Card = ({ src, Title, paragraph, action }) => {
  return (
    <div className="card w-11/12 mx-auto bg-base-200 shadow rounded">
      <figure>
        <img src={src} alt={Title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{Title}</h2>
        <p>{paragraph}</p>
        {action && (
          <div className="card-actions ">
            <button className="btn btn-primary">{action}</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
