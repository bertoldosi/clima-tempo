import React, { createContext, useContext, useState } from "react";

const AppContext = createContext(undefined);

export const UseAppContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider = ({ children }) => {
  const [wrapperType, setWrapperType] = useState("TODAY");

  const AppContextObject = {
    wrapperType,
    setWrapperType,
  };

  return (
    <AppContext.Provider value={AppContextObject}>
      {children}
    </AppContext.Provider>
  );
};
