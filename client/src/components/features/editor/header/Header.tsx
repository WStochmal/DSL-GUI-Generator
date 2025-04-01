import { useProjectContext } from "../../../../hooks/useProjectContext";
import { Button } from "../../../ui/Button/Button";
import s from "./Header.module.css";

export const Header = () => {
  const { projectData } = useProjectContext();
  const handleDisplayProjects = () => {};
  const handleToggleUserMenu = () => {};

  const getProjectInitials = (title: string): string => {
    if (!title) return "";
    const words = title.split(" ").filter((word) => word.length > 0);
    const initials = words.map((word) => word.charAt(0).toUpperCase()).join("");
    return initials.substring(0, 2);
  };

  if (!projectData) return;

  return (
    <header className={s.header}>
      {/* LOGO */}
      <div className={s.logo}></div>

      {/* Active project */}
      <Button type="transparent" onClick={handleDisplayProjects}>
        <div className={s.activeProject}>
          <div
            className={s.activeProject__icon}
            style={{ background: projectData.color }}
          >
            {getProjectInitials(projectData.title)}
          </div>
          <div className={s.activeProject__name}>{projectData.title}</div>
          <div
            className={s.activeProject__colorBg}
            style={{ background: projectData.color }}
          ></div>
        </div>
      </Button>

      {/* User avatar - user menu */}
      <Button
        type="icon"
        onClick={handleToggleUserMenu}
        className="s.userAvatarBtn"
      >
        <div className={s.userAvatar}></div>
      </Button>
    </header>
  );
};
