import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-28">
      <div className="bg-overlay text-center">
        <h3 className="pt-12 text-white text-3xl font-bold">
          LET'S GET STARTED
        </h3>
        <p className="mt-5 text-white font-bold w-10/12 mx-auto">
          Every connection starts with a conversation. Our team is here to help.
        </p>
        <ul className="mt-10">
          <li>
            <Link
              className="text-white hover:font-semibold transition duration-500"
              to={"/"}
            >
              CONTACT US
            </Link>
          </li>
          <div className="divider w-6/12 mx-auto"></div>
          <li>
            <Link
              className="text-white hover:font-semibold transition duration-500"
              to={"/"}
            >
              OFFICE LOCATIONS
            </Link>
          </li>
          <div className="divider w-6/12 mx-auto"></div>
          <li>
            <Link
              className=" text-white hover:font-semibold transition duration-500"
              to={"/"}
            >
              CUSTOMER LOGIN
            </Link>
          </li>
          <div className="divider w-6/12 mx-auto pb-20"></div>
        </ul>
      </div>
      <div className="footer-foot">
        <div className="w-40 mx-auto my-7">
          <img src="assets/logo.svg" className="w-full" alt="" />
        </div>
        <ul className="text-center">
          <li className="mt-5">
            <Link
              to={"/properties"}
              className="hover:font-semibold transition duration-500"
            >
              Properties
            </Link>
          </li>
          <li className="mt-5">
            <Link
              to={"/howwework"}
              className="hover:font-semibold transition duration-500"
            >
              How We Work
            </Link>
          </li>
          <li className="mt-5">
            <Link
              to={"/"}
              className="hover:font-semibold transition duration-500"
            >
              What We Do
            </Link>
          </li>
          <li className="mt-5">
            <Link
              to={"/"}
              className="hover:font-semibold transition duration-500"
            >
              Who We Are
            </Link>
          </li>
          <li className="mt-5">
            <Link
              to={"/"}
              className="hover:font-semibold transition duration-500"
            >
              Sustainability
            </Link>
          </li>
          <li className="mt-5">
            <Link
              to={"/"}
              className="hover:font-semibold transition duration-500"
            >
              News & Research
            </Link>
          </li>
        </ul>
        <p className="mt-20 mb-5 text-center">
          &copy; {new Date().getFullYear()} Prologis . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
