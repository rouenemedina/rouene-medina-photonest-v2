import React, { useState } from "react";
import ReactQuill from "react-quill";

interface TextEditorProps {
  onChange: (value: string) => void;
}

const TextEditor: React.FC<TextEditorProps> = ({ onChange }) => {
  const [editorValue, setEditorValue] = useState<string>("");

  const handleChange = (value: string) => {
    setEditorValue(value);
    onChange(value);
  };

  return (
    <>
      <ReactQuill value={editorValue} onChange={handleChange} />
    </>
  );
};

export default TextEditor;
