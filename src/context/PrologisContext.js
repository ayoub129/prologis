import { createContext, useReducer } from "react";
import PrologisReducers from "./PrologisReducers";
import { Propertiesdata } from "../components/Propertiesdata";

const PrologisContext = createContext();

export const PrologisProvider = ({ children }) => {
  const initialState = {
    properties: Propertiesdata,
    filterproperties: "All",
  };

  const [state, dispatch] = useReducer(PrologisReducers, initialState);

  return (
    <PrologisContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PrologisContext.Provider>
  );
};

export default PrologisContext;
