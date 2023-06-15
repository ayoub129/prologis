import { AiOutlineSearch } from "react-icons/ai";
import Card from "./Card";

const HomeCards = () => {
  const data = [
    {
      id: 1,
      src: "assets/broadmoor.jpeg",
      Title: "Real Estate: A Foundation for Growth",
      paragraph:
        "We own and operate the premier logistics real estate portfolio in the markets that matter.",
      action: "Buy Now",
    },
    {
      id: 2,
      src: "assets/automation.jpeg",
      Title: "The Essentials Platform",
      paragraph:
        "If it's essential, we have the solution. The only platform of its kind to deliver end-to-end solutions across all segments of fulfillment.",
      action: "Buy Now",
    },
    {
      id: 3,
      src: "assets/GB22_Logo.jpg",
      Title: "GROUNDBREAKERS",
      paragraph:
        "Read the latest issue of GROUNDBREAKERS Magazine, and watch our thought leadership event on demand.",
      action: "Buy Now",
    },
  ];
  return (
    <>
      <div className="mt-20 grid gap-10 grid-cols-1 ">
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
      <div className="rounded bg-base-200 mx-auto w-11/12 card mt-20">
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
            <div className="flex">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered border-r-0 w-full max-w-xs rounded-r-none"
              />
              <button className="btn btn-square bg-green-700 rounded-l-none">
                <AiOutlineSearch className="font-semibold text-3xl text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCards;
