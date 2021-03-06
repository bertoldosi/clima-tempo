import React, { createContext, useContext, useState } from "react";

const AppContext = createContext(undefined);

export const UseAppContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider = ({ children }) => {
  const [wrapperType, setWrapperType] = useState("TODAY");
  const [city, setCity] = useState();

  const AppContextObject = {
    wrapperType,
    setWrapperType,
    city,
    setCity,
  };

  return (
    <AppContext.Provider value={AppContextObject}>
      {children}
    </AppContext.Provider>
  );
};
