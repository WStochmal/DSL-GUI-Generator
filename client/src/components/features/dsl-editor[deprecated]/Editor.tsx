import { useEffect, useRef } from "react";
import * as monaco from "monaco-editor";

import s from "./Editor.module.css";

export const DSLEditor = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current === null) return;
    const editor = monaco.editor.create(editorRef.current, {
      value: "Twój kod DSL",
      language: "javascript", // Możesz zmienić na własny język DSL
      theme: "vs-light", // Możesz dostosować temat
    });
    return () => editor.dispose();
  }, []);

  return (
    <div className={s.editorContainer}>
      <div ref={editorRef} style={{ height: "500px", width: "100%" }} />
    </div>
  );
};
