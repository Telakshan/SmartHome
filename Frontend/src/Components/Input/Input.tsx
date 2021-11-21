import React from "react";

import "./Input.scss";

interface InputProps {
  handleChange?: any;
  name?: string;
  label: string;
  onChange?: any;
  value: string;
}

const Input: React.FC<InputProps> = ({
  handleChange,
  label,
  ...otherProps
}) => {
  return (
    <div className="group">
    <input className={`form-input`} onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`form-input-label ${
          otherProps.value.length ? "shrink" : ""
        }`}
      >
        {label}
      </label>
    ) : null}
  </div>
  );
};

export default Input;
