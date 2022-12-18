import React from "react";
import "./Input.css";
function Input({
  title,
  inputType,
  defaultValue,
  mandatory,
  placeholder,
  required,
  value,
  name,
  onChangeHandler,
}) {
  return (
    <div className="input__box">
      <p>
        {title} <span>{mandatory && `*`}</span>
      </p>
      <input
        placeholder={placeholder}
        type={inputType}
        value={value}
        name={name}
        defaultValue={defaultValue}
        required={required}
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default Input;
