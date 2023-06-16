import { Link } from "react-router-dom";

const Thriving = () => {
  return (
    <div className="bg-base-200 py-16 mb-16">
      <div className="mx-auto w-11/12">
        <h2 className="text-3xl font-bold text-green-700  tracking-wide">
          START THRIVING
        </h2>
        <p className="py-7 text-base-400">
          Your business matters to us. Whether you’re a start-up venture or a
          multinational company, we’ll give you access to the buildings, people
          and solutions your business needs to thrive and succeed year after
          year.
        </p>
        <img
          src="assets/Customer-Service.jpg"
          alt="customer service"
          className="mb-5"
        />
        <Link className="text-green-700" to={"/"}>
          SEE HOW IT WORKS
        </Link>
      </div>
    </div>
  );
};

export default Thriving;
