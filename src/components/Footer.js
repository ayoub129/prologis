import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-28">
      <div className="bg-gradiant text-center">
        <h3 className="pt-12 text-white text-3xl font-bold">
          LET'S GET STARTED
        </h3>
        <p className="mt-5 md:text-2xl text-white md:font-light md:tracking-wider md:text-base-400 w-10/12 mx-auto">
          Every connection starts with a conversation. Our team is here to help.
        </p>
        <ul className="mt-10 md:flex md:items-center md:justify-between pb-24 md:w-10/12 md:mx-auto">
          <li className="mb-16 md:mb-0">
            <Link
              className="text-white border-b-2 border-white transition duration-500 hover:border-2 p-2 transition"
              to={"/"}
            >
              CONTACT US
            </Link>
          </li>
          <li className="mb-16 md:mb-0">
            <Link
              className="text-white border-b-2 border-white transition duration-500 hover:border-2 p-2 transition"
              to={"/"}
            >
              OFFICE LOCATIONS
            </Link>
          </li>
          <li className="mb-8 md:mb-0">
            <Link
              className=" text-white border-b-2 border-white transition duration-500 hover:border-2 p-2 transition"
              to={"/"}
            >
              CUSTOMER LOGIN
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-foot md:w-11/12 md:mx-auto md:mt-16 md:flex md:justify-between">
        <div className="w-40 md:w-4/12 mx-auto md:mx-0 my-7">
          <Link to={"/"}>
            <img
              src="assets/logo.svg"
              className="w-full md:w-7/12"
              alt="Logo"
            />
          </Link>
        </div>
        <ul className="text-center md:w-4/12 md:text-left">
          <li className="mt-5">
            <Link
              to={"/properties"}
              className="transition ease-in-out duration-500 text-green-700 font-semibold py-1 hover:border-b-2 hover:border-green-700 hover:border-solid"
            >
              Properties
            </Link>
          </li>
          <li className="mt-5">
            <Link
              to={"/howwework"}
              className="transition ease-in-out duration-500 text-green-700 font-semibold py-1 hover:border-b-2 hover:border-green-700 hover:border-solid"
            >
              How We Work
            </Link>
          </li>
          <li className="mt-5">
            <Link
              to={"/"}
              className="transition ease-in-out duration-500 text-green-700 font-semibold py-1 hover:border-b-2 hover:border-green-700 hover:border-solid"
            >
              What We Do
            </Link>
          </li>
        </ul>
        <ul className="text-center md:w-4/12 md:text-left">
          <li className="mt-5">
            <Link
              to={"/"}
              className="transition ease-in-out duration-500 text-green-700 font-semibold py-1 hover:border-b-2 hover:border-green-700 hover:border-solid"
            >
              Who We Are
            </Link>
          </li>
          <li className="mt-5">
            <Link
              to={"/"}
              className="transition ease-in-out duration-500 text-green-700 font-semibold py-1 hover:border-b-2 hover:border-green-700 hover:border-solid"
            >
              Sustainability
            </Link>
          </li>
          <li className="mt-5">
            <Link
              to={"/"}
              className="transition ease-in-out duration-500 text-green-700 font-semibold py-1 hover:border-b-2 hover:border-green-700 hover:border-solid"
            >
              News & Research
            </Link>
          </li>
        </ul>
      </div>
      <p className="mt-20 mb-5 text-center">
        &copy; {new Date().getFullYear()} Prologis . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
