import { useCallback, useEffect, useState } from "react";
import s from "./Sidebar.module.css";
import { Button } from "../../../ui/Button/Button";

import icon_folder from "/src/assets/icons/folder.png";
import icon_structure from "/src/assets/icons/structure.png";
import { ProjectFiles } from "./ProjectFiles/ProjectFiles";
import { ProjectStructure } from "./ProjectStructure/ProjectStructure";
export const Sidebar = () => {
  const [isSecondarySidebarOpen, setIsSecondarySidebarOpen] = useState(true);
  const [secondarySidebarWidth, setSecondarySidebarWidth] = useState(400);
  const [isResizing, setIsResizing] = useState(false);
  const [activeSidebarView, setActiveSidebarView] = useState("files");

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsResizing(true);
    document.addEventListener("mousemove", handleMouseMoveX);
    document.addEventListener("mouseup", handleMouseUp);

    e.preventDefault();
  };

  const handleMouseMoveX = (e) => {
    setSecondarySidebarWidth(e.clientX);
  };

  const handleMouseUp = () => {
    setIsResizing(false);
    document.removeEventListener("mousemove", handleMouseMoveX);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {
    const handleMouseMoving = (e) => {};

    document.addEventListener("mouseMove", handleMouseMoving);
  }, []);

  // Render the content of the sidebar based on the active sidebar view
  const renderContent = useCallback(() => {
    switch (activeSidebarView) {
      case "files":
        return <ProjectFiles />;
      case "structure":
        return <ProjectStructure />;
      default:
        return;
    }
  }, [activeSidebarView]);

  return (
    <aside
      className={s.sidebar}
      style={{
        width: isSecondarySidebarOpen ? `${secondarySidebarWidth}px` : "auto",
      }}
    >
      <div className={s.sidebar__primary}>
        <Button
          type="icon"
          className={`${
            activeSidebarView === "files" && isSecondarySidebarOpen
              ? "active"
              : ""
          }`}
          onClick={() => {
            const newView = "files";
            setActiveSidebarView(newView);
            if (newView === activeSidebarView) {
              setIsSecondarySidebarOpen((prev) => !prev);
            } else {
              setIsSecondarySidebarOpen(true);
            }
          }}
        >
          <img src={icon_folder} alt="Folder" />
        </Button>
        <Button
          type="icon"
          className={`${
            activeSidebarView === "structure" && isSecondarySidebarOpen
              ? "active"
              : ""
          }`}
          onClick={() => {
            const newView = "structure";
            setActiveSidebarView(newView);
            if (newView === activeSidebarView) {
              setIsSecondarySidebarOpen((prev) => !prev);
            } else {
              setIsSecondarySidebarOpen(true);
            }
          }}
        >
          <img src={icon_structure} alt="Structure" />
        </Button>
      </div>
      {isSecondarySidebarOpen && (
        <div className={s.sidebar__secondary}>{renderContent()}</div>
      )}
      {isSecondarySidebarOpen && (
        <div className={s.sidebar__border} onMouseDown={handleMouseDown}></div>
      )}
    </aside>
  );
};
