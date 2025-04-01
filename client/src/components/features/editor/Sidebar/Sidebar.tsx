import { useCallback, useEffect, useState } from "react";
import s from "./Sidebar.module.css";
import { Button } from "../../../ui/Button/Button";

import icon_folder from "/src/assets/icons/folder.png";
export const Sidebar = () => {
  const [isSecondarySidebarOpen, setIsSecondarySidebarOpen] = useState(true);
  const [secondarySidebarWidth, setSecondarySidebarWidth] = useState(400);
  const [isResizing, setIsResizing] = useState(false);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsResizing(true);
    document.addEventListener("mousemove", handleMouseMoveX);
    document.addEventListener("mouseup", handleMouseUp);

    console.log("Mouse down");
    e.preventDefault();
  };

  const handleMouseMoveX = (e) => {
    console.log(e.clientX);
    setSecondarySidebarWidth(e.clientX);
  };

  const handleMouseUp = () => {
    setIsResizing(false);
    document.removeEventListener("mousemove", handleMouseMoveX);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {
    const handleMouseMoving = (e) => {
      console.log(e.clientX, e.clientY);
    };

    document.addEventListener("mouseMove", handleMouseMoving);
  }, []);

  return (
    <aside
      className={s.sidebar}
      style={{ width: `${secondarySidebarWidth}px` }}
    >
      <div className={s.sidebar__primary}>
        <Button
          type="icon"
          className="reverseIconColor"
          onClick={() => setIsSecondarySidebarOpen((prev) => !prev)}
        >
          <img src={icon_folder} alt="Folder" />
        </Button>
      </div>
      {isSecondarySidebarOpen && <div className={s.sidebar__secondary}></div>}
      {isSecondarySidebarOpen && (
        <div className={s.sidebar__border} onMouseDown={handleMouseDown}></div>
      )}
    </aside>
  );
};
