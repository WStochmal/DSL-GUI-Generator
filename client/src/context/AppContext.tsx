import React, { createContext } from "react";

export const appContext = createContext<undefined>(undefined);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeFile, setActiveFile] = React.useState<string | null>(null);
  const [displayFile, setDisplayFile] = React.useState<string | null>(null);

  const displayFileHandler = (file: string) => {
    setDisplayFile(file);
  };
  const activeFileHandler = (file: string) => {
    setActiveFile(file);
  };

  return (
    <appContext.Provider
      value={{ displayFile, displayFileHandler, activeFile, activeFileHandler }}
    >
      {children}
    </appContext.Provider>
  );
};
