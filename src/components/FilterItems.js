import { useState, useContext } from "react";
import PrologisContext from "../context/PrologisContext";
import { FilterProperty } from "../context/PrologisActions";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { Propertiesdata } from "./Propertiesdata";

const FilterItems = ({ id, title, items, normal }) => {
  const { dispatch } = useContext(PrologisContext);
  const [isOpen, setIsOpen] = useState(false);
  const [checkedState, setCheckedState] = useState(new Array(3).fill(false));

  const handleChange = (position) => {
    const updateCheckedState = checkedState.map((i, index) =>
      index === position ? !i : i
    );

    setCheckedState(updateCheckedState);
    const FilterResult = FilterProperty(items[position], Propertiesdata);

    dispatch({
      type: "FILTER_PROPERTIES",
      payload: FilterResult,
    });
  };

  return (
    <div className="w-full bg-white block">
      <div className="flex justify-between mb-3">
        {title}
        {isOpen ? (
          <AiOutlineArrowUp
            onClick={() => setIsOpen(false)}
            className="ml-2 text-xl text-green-700"
          />
        ) : (
          <AiOutlineArrowDown
            onClick={() => setIsOpen(true)}
            className="ml-2 text-xl text-green-700"
          />
        )}
      </div>
      {isOpen && normal && (
        <ul
          tabIndex={id}
          className="w-full  mt-6 menu p-2 shadow bg-base-100 border-2 ml-0 text-black"
        >
          <li tabIndex={id}>
            {items.map((i, index) => (
              <div key={i} className="form-control">
                <label className="cursor-pointer label">
                  <input
                    checked={checkedState[index]}
                    onChange={() => handleChange(index)}
                    type="checkbox"
                    className="checkbox checkbox-accent me-6"
                  />
                  <span className="label-text">{i}</span>
                </label>
              </div>
            ))}
          </li>
        </ul>
      )}

      {isOpen && !normal && (
        <div className="w-11/12 flex mt-6 shadow bg-base-100 border-2">
          {items.map((i) => (
            <div className="form-control p-4">
              <label htmlFor={`${i}`} className="pb-2">
                {i}
              </label>
              <input
                type="number"
                id={`${i}`}
                min={1}
                placeholder={`${i}`}
                className="p-2 rounded shadow border-1 outline-0 border-green-700 me-6 w-40"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterItems;
