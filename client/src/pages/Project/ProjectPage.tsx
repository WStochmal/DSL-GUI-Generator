import { useParams } from "react-router-dom";
import { Header } from "../../components/features/editor/Header/Header";
import { Sidebar } from "../../components/features/editor/Sidebar/Sidebar";
import { WindowManager } from "../../components/features/editor/WindowManager/WindowManager";

// styles
import s from "./ProjectPage.module.css";
import { useProjectContext } from "../../hooks/useProjectContext";
import { useEffect } from "react";
import { AppContextProvider } from "../../context/AppContext";

export const ProjectPage = () => {
  const { projectId } = useParams();

  const { loading, fetchProjectData } = useProjectContext();

  useEffect(() => {
    if (projectId) {
      fetchProjectData(projectId);
    }
  }, []);

  return (
    <AppContextProvider>
      <div className={s.projectPage}>
        <Header />
        <div className={s.projectPage__content}>
          <Sidebar />
          <WindowManager />
        </div>
      </div>
    </AppContextProvider>
  );
};
