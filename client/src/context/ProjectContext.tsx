// TODO: Remember this is just test implementation, you will need to change it to match your needs
import React, { createContext, useCallback } from "react";
import test from "../data/testProject";

export const projectContext = createContext<undefined>(undefined);

export const ProjectContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [projectData, setProjectData] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(null);

  const fetchProjectData = async (projectId: string) => {
    setIsLoading(true);
    setIsError(null);
    try {
      setProjectData(test.testProjectData);
    } catch (err) {
      setIsError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <projectContext.Provider
      value={{ projectData, isLoading, isError, fetchProjectData }}
    >
      {children}
    </projectContext.Provider>
  );
};
