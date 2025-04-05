import React from "react";
import { appContext } from "../context/AppContext";

export const useAppContext = () => {
  const context = React.useContext(appContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
};
