import React, { useRef } from "react";
import Textarea from "react-expanding-textarea";

const TextArea = ({ handleChange = () => {}, value, placeholder = "" }) => {
  const textareaRef = useRef(null);

  return (
    <>
      <Textarea
        className="textarea"
        style={{ width: "100%", minHeight: "10vh", border: "none" }}
        value={value}
        onChange={handleChange}
        ref={textareaRef}
        placeholder={placeholder}
      />
    </>
  );
};

export default TextArea;
