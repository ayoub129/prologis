import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/logo.svg";
import { SlMenu } from "react-icons/sl";
import { TiTimes } from "react-icons/ti";

const Navbar = () => {
  const [navigation, setNavigation] = useState(false);

  console.log(window.innerWidth);

  return (
    <div>
      <div className="navbar bg-base-100 mx-5 md:container md:mx-auto md:py-8">
        <div className="flex-1 md:flex-none lg:flex-none xl:flex-none">
          <Link to="/" className="w-32">
            <img src={Logo} alt="Logo" className="w-full" />
          </Link>
        </div>

        <div className="flex-none md:ms-auto md:me-12 md:w-6/12">
          {window.innerWidth <= "768px" ? (
            <button
              className="btn btn-square btn-ghost"
              onClick={() => setNavigation(!navigation)}
            >
              {navigation ? (
                <TiTimes className="font-semibold text-xl" />
              ) : (
                <SlMenu className="font-semibold text-xl" />
              )}
            </button>
          ) : (
            <ul className="flex w-full justify-between">
              <li className="ms-6">
                <Link
                  className="text-green-700 font-semibold hover:border-b-2 hover:border-green-700 hover:border-solid"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="ms-6">
                <Link
                  className="text-green-700 font-semibold hover:border-b-2 hover:border-green-700 hover:border-solid"
                  to="/properties"
                >
                  Properties
                </Link>
              </li>
              <li className="ms-6">
                <Link
                  className="text-green-700 font-semibold hover:border-b-2 hover:border-green-700 hover:border-solid"
                  to="/howwework"
                >
                  How We Work
                </Link>
              </li>
              <li className="ms-6">
                <Link
                  className="text-green-700 font-semibold hover:border-b-2 hover:border-green-700 hover:border-solid"
                  to="/careers"
                >
                  Careers
                </Link>
              </li>
              <li className="ms-6">
                <Link
                  className="text-green-700 font-semibold hover:border-b-2 hover:border-green-700 hover:border-solid"
                  to="/contact"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
      {window.innerWidth <= "768px" && navigation ? (
        <ul>
          <div className="divider"></div>
          <li className="ms-6">
            <Link className="text-green-700 font-semibold " to="/">
              Home
            </Link>
          </li>
          <div className="divider"></div>
          <li className="ms-6">
            <Link className="text-green-700 font-semibold " to="/properties">
              Properties
            </Link>
          </li>
          <div className="divider"></div>
          <li className="ms-6">
            <Link className="text-green-700 font-semibold " to="/howwework">
              How We Work
            </Link>
          </li>
          <div className="divider"></div>
          <li className="ms-6">
            <Link className="text-green-700 font-semibold " to="/careers">
              Careers
            </Link>
          </li>
          <div className="divider"></div>
          <li className="ms-6">
            <Link className="text-green-700 font-semibold " to="/contact">
              Contact Us
            </Link>
          </li>
          <div className="divider"></div>
        </ul>
      ) : null}
    </div>
  );
};

export default Navbar;
