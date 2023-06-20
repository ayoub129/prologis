import { AiOutlineArrowRight } from "react-icons/ai";

const PropertiesCard = ({
  src,
  description,
  title,
  city,
  address,
  type,
  brand,
  link,
}) => {
  return (
    <div className="card mt-10 w-11/12 mx-auto bg-base-200 shadow rounded">
      <figure className="h-52">
        <img src={src} alt={title} className="h-full" />
      </figure>
      <div className="card-body gap-0">
        <h2
          className={`card-title tracking-wider text-xl md:font-semibold text-green-700 font-semibold`}
        >
          {title}
        </h2>
        <p className="w-11/12 mt-2">{address}</p>
        <p className="font-bold w-11/12 mt-4">{type}</p>
        <p className="w-11/12">{description}</p>
        <p>{brand ? brand : city}</p>

        <div className="card-actions mt-8">
          <a href={link} className="tracking-wider uppercase text-green-700 ">
            Learn More <AiOutlineArrowRight className="inline-block mb-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PropertiesCard;
