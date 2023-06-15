import { Link } from "react-router-dom";

const Thriving = () => {
  return (
    <div>
      <h2>START THRIVING</h2>
      <p>
        Your business matters to us. Whether you’re a start-up venture or a
        multinational company, we’ll give you access to the buildings, people
        and solutions your business needs to thrive and succeed year after year.
      </p>
      <img src="assets/customer-service.jpeg" alt="customer service" />
      <Link to={"/"}>SEE HOW IT WORKS</Link>
    </div>
  );
};

export default Thriving;
