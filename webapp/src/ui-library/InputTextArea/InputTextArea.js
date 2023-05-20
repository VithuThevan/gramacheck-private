/* ----- InputText.js ----- */
import React from "react";
import "./InputTextArea.scss";

function InputTextArea({ value, setValue }) {
  return (
    <div className="inputTextArea">
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></textarea>
    </div>
  );
}

export default InputTextArea;
