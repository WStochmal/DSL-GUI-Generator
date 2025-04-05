import s from "./FileManager.module.css";
import React from "react";
import icon_file from "../../../../../assets/icons/file.png";
import icon_close from "../../../../../assets/icons/close.png";
import { Button } from "../../../../ui/Button/Button";

type FileManagerProps = {
  activeFile: string;
  files: any[];
  onChange: (fileId: string) => void;
  onClose: (fileId: string) => void;
};

export const FileManager: React.FC<FileManagerProps> = ({
  activeFile,
  files,
  onChange,
  onClose,
}) => {
  return (
    <div className={s.fileManager}>
      {files &&
        files.map((file: any) => (
          <div
            key={file.id}
            className={`${s.fileManager__file} +  ${
              s[`fileManager__file--${activeFile === file.id ? "active" : ""}`]
            }`}
            onClick={() => onChange(file.id)}
          >
            <img
              src={icon_file}
              alt="file"
              className={s.fileManager__file__icon}
            />
            <p>{file.name}</p>
            <Button
              type="icon"
              className="fileManager__close"
              onClick={() => onClose(file.id)}
            >
              <img src={icon_close} alt="close" />
            </Button>
          </div>
        ))}
    </div>
  );
};
