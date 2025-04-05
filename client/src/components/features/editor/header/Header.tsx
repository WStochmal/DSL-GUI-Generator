import { useProjectContext } from "../../../../hooks/useProjectContext";
import { Button } from "../../../ui/Button/Button";
import s from "./Header.module.css";

import icon_arrow_down from "/src/assets/icons/down.png";

import icon_settings from "/src/assets/icons/settings.png";
import icon_search from "/src/assets/icons/search.png";
import icon_run from "/src/assets/icons/run.png";
import { useEffect, useRef, useState } from "react";
import { useAppContext } from "../../../../hooks/useAppContext";

export const Header = () => {
  const { projectData } = useProjectContext();

  const { activeFile } = useAppContext();
  const handleDisplayProjects = () => {};
  const handleToggleUserMenu = () => {};

  const [isSearchbarOpen, setIsSearchbarOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isSearchbarOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchbarOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target as Node)
      ) {
        setIsSearchbarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getProjectInitials = (title: string): string => {
    if (!title) return "";
    const words = title.split(" ").filter((word) => word.length > 0);
    const initials = words.map((word) => word.charAt(0).toUpperCase()).join("");
    return initials.substring(0, 2);
  };

  if (!projectData) return;

  return (
    <header className={s.header}>
      <div className={s.header__content}>
        <div className={s.logo}></div>
      </div>
      <div className={s.header__content}>
        {/* Active project */}
        <Button type="transparent" onClick={handleDisplayProjects}>
          <div className={s.activeProject}>
            <div
              className={s.activeProject__icon}
              style={{ background: projectData.color }}
            >
              {getProjectInitials(projectData.title)}
            </div>
            <div
              className={s.activeProject__name}
            >{`${projectData.title}`}</div>
            <img
              src={icon_arrow_down}
              alt="Arrow Down"
              className={s.activeProject__arrow}
            />
            <div
              className={s.activeProject__colorBg}
              style={{ background: projectData.color }}
            ></div>
          </div>
        </Button>
        <div className={s.header__content__right}>
          {/* !TODO fix button type, and class */}
          <Button
            type="transparent"
            onClick={() => {}}
            className="projectFiles__folder"
          >
            {activeFile && activeFile}
            <img src={icon_run} alt="Run" className={s.header__icon} />
          </Button>

          {/* SEARCH BAR */}
          <div
            className={s.header__content__right__searchContainer}
            ref={searchContainerRef}
          >
            <input
              ref={inputRef}
              type="text"
              style={{
                width: isSearchbarOpen ? "200px" : "0px",
                paddingLeft: isSearchbarOpen ? "0.5rem" : "0px",
              }}
            ></input>
            <Button
              type="icon"
              onClick={() => {
                setIsSearchbarOpen(true);
              }}
            >
              <img src={icon_search} alt="Search" />
            </Button>
          </div>

          <Button type="icon" onClick={() => {}}>
            <img src={icon_settings} alt="Settings" />
          </Button>
          <div className={s.header__content__right__divider}></div>
          <Button
            type="icon"
            onClick={handleToggleUserMenu}
            className="userAvatarBtn"
          >
            <img src={projectData.authorAvatar} alt="User Avatar" />
          </Button>
        </div>
      </div>
    </header>
  );
};
