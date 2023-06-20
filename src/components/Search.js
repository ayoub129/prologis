import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div className="mx-5 w-full relative">
      <input
        type="text"
        className="mt-5 py-3 pl-3 w-11/12 border-1 outline-0 border-green-700 "
        placeholder="Search by Location or Postal Code"
      />
      <AiOutlineSearch className="font-semibold text-3xl text-green-700 cursor-pointer absolute" />
      <div className="flex mt-5">
        <a href="#houses" className="btn">
          Houses
        </a>
        <a href="#cars" className="ml-5 btn">
          Cars
        </a>
      </div>
    </div>
  );
};

export default Search;
