import React, { createContext, useReducer } from "react";
import { ApplicationReducer } from "./ApplicationReducer";

export const ApplicationContext = createContext(null);

const initialState = {
  isShowing: false,
  dropDownActive: false
};

const ApplicationContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(ApplicationReducer, initialState);

  const toggleHeader = () => {
    dispatch({ type: "toggleHeader" });
  };

  const toggleDropDown = () => {
    dispatch({ type: "toggleDropDown" });
  };

  const ContextValues = {
    toggleHeader,
    toggleDropDown,
    ...state,
  };

  return (
    <ApplicationContext.Provider value={ContextValues}>
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationContextProvider;
