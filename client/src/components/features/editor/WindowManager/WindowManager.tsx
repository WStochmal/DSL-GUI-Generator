import { Preview } from "../Preview/Preview";
import s from "./WindowManager.module.css";
export const WindowManager = () => {
  return (
    <div className={s.windowManager}>
      <Preview />
      <h1>Window Manager</h1>
      <p>Manage your windows here</p>
    </div>
  );
};
