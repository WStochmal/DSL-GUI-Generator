import { useEffect, useState } from "react";
import s from "./CodeEditor.module.css";
import { Editor } from "@monaco-editor/react";
export const CodeEditor = (file: any) => {
  const [value, setValue] = useState(file.file.content || "");

  const handleEditorChange = (newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (file.file) {
      setValue(file.file.content || "");
    }
  }, [file]);

  return (
    <Editor
      height={"100%"}
      language={"javacsript"} // TODO change it to DSL
      theme={""}
      value={value}
      onChange={handleEditorChange}
      options={{
        minimap: { enabled: false },
        fontSize: 14,
        wordWrap: "on",
        lineNumbersMinChars: 2,
      }}
    />
  );
};
