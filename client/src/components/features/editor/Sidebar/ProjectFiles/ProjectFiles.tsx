import { useProjectContext } from "../../../../../hooks/useProjectContext";
import s from "./ProjectFiles.module.css";

import icon_folder from "/src/assets/icons/folder.png";
import icon_file from "/src/assets/icons/file.png";
import icon_arrow_down from "/src/assets/icons/down.png";
import { Button } from "../../../../ui/Button/Button";
import { useEffect, useState } from "react";
import { useAppContext } from "../../../../../hooks/useAppContext";
import { ContextWindow } from "./ContextWindow/ContextWindow";
export const ProjectFiles = () => {
  const { projectData } = useProjectContext();
  const [isFolderOpen, setIsFolderOpen] = useState(["root"] as string[]);
  const { displayFileHandler } = useAppContext();

  const [contextMenu, setContextMenu] = useState<{
    visible: boolean;
    targetId: string | null;
  }>({ visible: false, targetId: null });

  if (!projectData) return;

  const handleFileClick = (fileId: string) => {
    displayFileHandler(fileId);
  };

  const renderHierarchyTreeFiles = (data: any) => {
    const projectFiles = data.files;
    if (!projectFiles) return;

    const files = projectFiles.map((file: any) => {
      return renderHierarchyTreeFileComponent(file);
    });

    return files;
  };
  const handleGlobalClick = () => {
    setContextMenu((prev) => ({ ...prev, visible: false }));
  };

  useEffect(() => {
    window.addEventListener("click", handleGlobalClick);
    return () => window.removeEventListener("click", handleGlobalClick);
  }, []);

  const handleContextMenu = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) => {
    console.log("Context menu opened for file with id:", id);
    e.preventDefault();
    setContextMenu({
      visible: true,
      targetId: id,
    });
  };

  const renderHierarchyTreeFileComponent = (data: any) => {
    if (data.category !== "folder") {
      return (
        <li
          className={`${s.projectFiles__element} ${
            s[`projectFiles__element--file`]
          }`}
          key={data.id}
        >
          <Button
            type="transparent"
            onClick={() => {
              handleFileClick(data.id);
            }}
            onContextMenu={(e) => {
              handleContextMenu(e, data.id);
            }}
            icon={icon_file}
            iconSize={16}
          >
            {data.name}
          </Button>
          {contextMenu.visible && contextMenu.targetId === data.id && (
            <ContextWindow type="file" id={data.id} />
          )}
        </li>
      );
    } else {
      return (
        <li className={s.projectFiles__element} key={data.id}>
          <Button
            type="transparent"
            onClick={() => {
              handleFolderClick(data.id);
            }}
            className={"projectFiles__folder"}
          >
            <img
              src={icon_arrow_down}
              alt="arrow"
              style={{
                transform: isFolderOpen.includes(data.id)
                  ? ""
                  : "rotateZ(-90deg)",
              }}
            />
            <img src={icon_folder} alt="folder" />
            {data.name}
          </Button>
          {isFolderOpen.includes(data.id) && (
            <ul className={s.projectFiles__container__sub}>
              {data.content.map((file: any) => {
                return renderHierarchyTreeFileComponent(file);
              })}
            </ul>
          )}
        </li>
      );
    }
  };

  const handleFolderClick = (folderId: string) => {
    if (isFolderOpen.includes(folderId)) {
      setIsFolderOpen((prev) => prev.filter((id) => id !== folderId));
    } else {
      setIsFolderOpen((prev) => [...prev, folderId]);
    }
  };

  return (
    <div className="projectFiles">
      <h1>Project Files</h1>
      <p>Manage your project files here</p>

      {/* <div className={s.projectFiles__container}>
        {renderHierarchyTreeFiles(projectData)}
      </div> */}

      <ul className={s.projectFiles__container}>
        <li className={s.projectFiles__element}>
          <Button
            type="transparent"
            className={"projectFiles__folder"}
            onClick={() => {
              handleFolderClick("root");
            }}
          >
            <img
              src={icon_arrow_down}
              alt="arrow"
              style={{
                transform: isFolderOpen.includes("root")
                  ? ""
                  : "rotateZ(-90deg)",
              }}
            />
            <img src={icon_folder} alt="folder" />
            Root
          </Button>
          {isFolderOpen.includes("root") && (
            <ul className={s.projectFiles__container__sub}>
              {renderHierarchyTreeFiles(projectData)}
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};
