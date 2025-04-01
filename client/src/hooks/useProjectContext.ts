import React from "react";
import { projectContext } from "../context/ProjectContext";

export const useProjectContext = () => {
  const context = React.useContext(projectContext);
  if (context === undefined) {
    throw new Error("useProjectContext must be used within a ProjectProvider");
  }
  return context;
};
