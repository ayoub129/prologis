import { useState } from "react";
import { Link } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import { TiTimes } from "react-icons/ti";

const Navbar = () => {
  const [navigation, setNavigation] = useState(false);

  return (
    <div>
      <div className="navbar bg-base-100 mx-5 md:container md:mx-auto md:py-8">
        <div className="flex-1 md:flex-none lg:flex-none xl:flex-none">
          <Link to="/" className="w-32">
            <img src="assets/logo.svg" alt="Logo" className="w-full" />
          </Link>
        </div>

        <div className="flex-none me-12 md:me-2 md:ms-auto md:w-8/12 lg:w-7/12">
          <button
            className="btn  md:hidden btn-square btn-ghost"
            onClick={() => setNavigation(!navigation)}
          >
            {navigation ? (
              <TiTimes className="font-semibold text-xl" />
            ) : (
              <SlMenu className="font-semibold text-xl" />
            )}
          </button>
          <ul className="hidden md:flex w-full justify-between">
            <li className="ms-6">
              <Link
                className="transition ease-in-out duration-500 text-green-700 font-semibold py-1 hover:border-b-2 hover:border-green-700 hover:border-solid"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="ms-6">
              <Link
                className="transition ease-in-out duration-500 text-green-700 font-semibold py-1 hover:border-b-2 hover:border-green-700 hover:border-solid"
                to="/properties"
              >
                Properties
              </Link>
            </li>
            <li className="ms-6">
              <Link
                className="transition ease-in-out duration-500 text-green-700 font-semibold py-1 hover:border-b-2 hover:border-green-700 hover:border-solid"
                to="/Development"
              >
                Development
              </Link>
            </li>
            <li className="ms-6">
              <Link
                className="transition ease-in-out duration-500 text-green-700 font-semibold py-1 hover:border-b-2 hover:border-green-700 hover:border-solid"
                to="/Construction"
              >
                Construction
              </Link>
            </li>
            <li className="ms-6">
              <Link
                className="transition ease-in-out duration-500 text-green-700 font-semibold py-1 hover:border-b-2 hover:border-green-700 hover:border-solid"
                to="/Cleaning"
              >
                Cleaning
              </Link>
            </li>
            <li className="ms-6">
              <Link
                className="transition ease-in-out duration-500 text-green-700 font-semibold py-1 hover:border-b-2 hover:border-green-700 hover:border-solid"
                to="/contact"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {window.innerWidth <= 768 && navigation ? (
        <ul>
          <div className="divider"></div>
          <li className="ms-6">
            <Link
              className="transition ease-in-out duration-500 text-green-700 font-semibold py-1 hover:border-b-2 hover:border-green-700 hover:border-solid"
              to="/"
            >
              Home
            </Link>
          </li>
          <div className="divider"></div>
          <li className="ms-6">
            <Link
              className="transition ease-in-out duration-500 text-green-700 font-semibold py-1 hover:border-b-2 hover:border-green-700 hover:border-solid"
              to="/properties"
            >
              Properties
            </Link>
          </li>
          <div className="divider"></div>
          <li className="ms-6">
            <Link
              className="transition ease-in-out duration-500 text-green-700 font-semibold py-1 hover:border-b-2 hover:border-green-700 hover:border-solid"
              to="/Development"
            >
              Development
            </Link>
          </li>
          <div className="divider"></div>
          <li className="ms-6">
            <Link
              className="transition ease-in-out duration-500 text-green-700 font-semibold py-1 hover:border-b-2 hover:border-green-700 hover:border-solid"
              to="/Construction"
            >
              Construction
            </Link>
          </li>
          <div className="divider"></div>
          <li className="ms-6">
            <Link
              className="transition ease-in-out duration-500 text-green-700 font-semibold py-1 hover:border-b-2 hover:border-green-700 hover:border-solid"
              to="/Cleaning"
            >
              Cleaning
            </Link>
          </li>
          <div className="divider"></div>
          <li className="ms-6 pb-6">
            <Link
              className="transition ease-in-out duration-500 text-green-700 font-semibold py-1 hover:border-b-2 hover:border-green-700 hover:border-solid"
              to="/contact"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default Navbar;

// Finish 100%
