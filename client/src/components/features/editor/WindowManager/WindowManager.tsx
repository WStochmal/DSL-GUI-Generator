import { useEffect, useState } from "react";
import { CodeEditor } from "../CodeEditor/CodeEditor";
import { Preview } from "../Preview/Preview";
import s from "./WindowManager.module.css";
import { useAppContext } from "../../../../hooks/useAppContext";
import { useProjectContext } from "../../../../hooks/useProjectContext";
import { FileManager } from "./FileManager/FileManager";
import icon_w from "../../../../assets/icons/w.png";

type WindowProps = {
  id: number;
  activeFile: string;
  files: any[];
};

export const WindowManager: React.FC = () => {
  const [windows, setWindows] = useState<WindowProps[]>([]);

  const { displayFile, activeFileHandler } = useAppContext();
  const { projectData } = useProjectContext();

  const findFileById = (files: any[], id: string) => {
    for (const file of files) {
      if (file.id === id) return file;
      if (file.category === "folder" && file.content) {
        const found = findFileById(file.content, id);
        if (found) return found;
      }
    }
    return null;
  };

  const changeActiveFile = (fileId: string) => {
    const fileName = windows[0].files.find((file) => file.id === fileId)?.name;
    if (fileName) {
      activeFileHandler(fileName);
    }
    // Update the active file in the first window
    setWindows((prev) => {
      const newWindows = [...prev];
      const window = newWindows[0];
      window.activeFile = fileId;
      return newWindows;
    });
  };

  const closeFile = (fileId: string) => {
    setWindows((prev) => {
      const newWindows = [...prev];
      const window = newWindows[0];
      const fileIndex = window.files.findIndex((file) => file.id === fileId);
      if (fileIndex !== -1) {
        window.files.splice(fileIndex, 1);
        if (window.activeFile === fileId) {
          window.activeFile = window.files[0]?.id || null;
        }
      }

      if (window.files.length === 0) {
        newWindows.splice(0, 1);
      }
      return newWindows;
    });
  };

  useEffect(() => {
    if (displayFile) {
      // Check if the file is already opened
      const isFileAlreadyOpened = windows.some((window) =>
        window.files.some((file) => file.id === displayFile)
      );
      if (isFileAlreadyOpened) return;
      // Find the file in the project data
      const file = findFileById(projectData.files, displayFile);
      if (file) {
        activeFileHandler(file.name);
        setWindows((prev) => {
          if (prev.length === 0) {
            return [
              ...prev,
              { id: Date.now(), activeFile: file.id, files: [file] },
            ];
          } else {
            const updatedWindow = {
              ...prev[0],
              activeFile: file.id,
              files: [...prev[0].files, file],
            };
            return [{ ...updatedWindow }];
          }
        });
      }
    }
  }, [displayFile, projectData.files]);

  if (windows.length === 0)
    return (
      <div className={s.emptyWindow}>
        <img src={icon_w} alt="w" style={{ filter: "invert(0.8)" }} />
      </div>
    );

  return (
    <div className={s.windowManager}>
      {windows.map((window) => {
        const activeFile = window.files.find(
          (file) => file.id === window.activeFile
        );
        return (
          <div key={window.id} className={s.windowManager__window}>
            <FileManager
              activeFile={window.activeFile}
              files={window.files}
              onChange={changeActiveFile}
              onClose={closeFile}
            />
            {activeFile && (
              <div style={{ flex: 1 }}>
                <CodeEditor file={activeFile} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
