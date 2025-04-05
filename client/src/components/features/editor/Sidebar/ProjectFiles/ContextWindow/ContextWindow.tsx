import s from "./ContextWindow.module.css";

type ContextWindowProps = {
  type: string;
  id: string;
};

import icon_move from "../../../../../../assets/icons/move.png";
import icon_rename from "../../../../../../assets/icons/rename.png";
import icon_delete from "../../../../../../assets/icons/delete.png";

export const ContextWindow = ({ type, id }: ContextWindowProps) => {
  const handleOpenEditor = () => {};
  const handleOpenPreview = () => {};
  const handleRename = () => {};
  const handleDelete = () => {};
  const renderContextWindow = () => {
    switch (type) {
      case "file":
        return (
          <ul className={s.contextWindow}>
            <li className={s.contextWindow__element}>
              <button onClick={handleOpenEditor}>
                <img src={icon_move} alt="Move" /> <p>Open editor</p>
              </button>
            </li>
            <li className={s.contextWindow__element}>
              {" "}
              <button onClick={handleOpenPreview}>
                <img src={icon_move} alt="Move" /> <p>Open preview</p>
              </button>
            </li>
            <li className={s.contextWindow__element}>
              {" "}
              <button onClick={handleRename}>
                <img src={icon_rename} alt="Move" /> <p>Rename</p>
              </button>
            </li>
            <li className={s.contextWindow__element}>
              {" "}
              <button onClick={handleDelete}>
                <img src={icon_delete} alt="Move" /> <p>Delete</p>
              </button>
            </li>
          </ul>
        );

      default:
        return null;
    }
  };

  return renderContextWindow();
};
