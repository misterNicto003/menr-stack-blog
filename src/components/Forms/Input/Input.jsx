import React from "react";
import "./input.scss";

const Input = ({
  value,
  placeholder,
  name,
  required = true,
  type = "text",
  textarea,
  onChange,
}) => {
  return (
    <div className={`field ${value ? "active" : ""}`}>
      <div className="field_label fs-14">
        {placeholder} {required && <span>*</span>}
      </div>

      <div className="field_input">
        {textarea ? (
          <textarea 
          name={name}
            value={value || ""}
            type={type}
            onChange
            required/>
        ) : (
          <input
            name={name}
            value={value || ""}
            type={type}
            onChange
            required
          />
        )}
      </div>
    </div>
  );
};

export default Input;
