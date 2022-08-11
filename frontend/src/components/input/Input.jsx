import React, { useState } from "react";
import { FloatContainer, InputFloat, LabelFloat } from "./Input.style";
import "../registration/style.css"

const Input = ({ type, name, defaultValue, id, onChange = () => {}, label }) => {
  const [isActive, setIsActive] = useState(false);

  function handleChange(text) {
    onChange(text);

    if (text !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  return (
    <FloatContainer id="float-label">
      <InputFloat
        name={name}
        type={type}
        id={id}
        value={defaultValue}
        onChange={(e) => handleChange(e.target.value)}
      />
      <LabelFloat className={isActive ? "Active" : ""} htmlFor={name}>
        {label}
      </LabelFloat>
    </FloatContainer>
  );
};

export default Input;
