import { AiOutlineSearch } from "react-icons/ai";
import { useState, useContext } from "react";
import PrologisContext from "../context/PrologisContext";
import { SearchProperties } from "../context/PrologisActions";
import { Propertiesdata } from "./Propertiesdata";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const HomeCards = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(PrologisContext);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const properties = SearchProperties(text, Propertiesdata);
    dispatch({
      type: "SEARCH_PROPERTIES",
      payload: properties,
    });
    navigate("/properties");
  };

  const data = [
    {
      id: 1,
      src: "assets/broadmoor.jpeg",
      Title: "Real Estate: A Foundation for Growth",
      paragraph:
        "We own and operate the premier logistics real estate portfolio in the markets that matter.",
      action: "search for properties",
    },
    {
      id: 2,
      src: "assets/automation.jpeg",
      Title: "The Essentials Platform",
      paragraph:
        "If it's essential, we have the solution. The only platform of its kind to deliver end-to-end solutions across all segments of fulfillment.",
      action: "search for properties",
    },
    {
      id: 3,
      src: "assets/GB22_Logo.jpg",
      Title: "GROUNDBREAKERS",
      paragraph:
        "Read the latest issue of GROUNDBREAKERS Magazine, and watch our thought leadership event on demand.",
      action: "search for properties",
    },
  ];
  return (
    <>
      <div className="md:w-11/12 lg:w-8/12 mx-auto mt-40 grid gap-10 grid-cols-1 md:grid-cols-3 md:gap-2 ">
        {data.map((d) => (
          <Card
            key={d.id}
            Title={d.Title}
            src={d.src}
            paragraph={d.paragraph}
            action={d.action}
          />
        ))}
      </div>
      <div className="rounded bg-base-200 mx-auto w-11/12 card mt-20 md:w-9/12 lg:7/12 mx-auto">
        <div className="card-body">
          <h2 className="card-title text-green-700">
            AVAILABLE PROPERTY SEARCH
          </h2>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text ">
                Search by Location or Postal Code
              </span>
            </label>
            <form onSubmit={handleSubmit} className="flex mt-4 md:w-full">
              <input
                type="text"
                value={text}
                onChange={handleChange}
                placeholder="Type here"
                className="input input-bordered border-r-0 w-full  md:w-11/12 rounded-r-none "
              />
              <button
                className="btn btn-square bg-green-700 rounded-l-none"
                type="submit"
              >
                <AiOutlineSearch className="font-semibold text-3xl text-white" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCards;
