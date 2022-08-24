import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import { FloatContainer, InputFloat, LabelFloat, MessageError } from "./Input.style";
import "../registration/style.css";

const Input = ({ type, name = "", id, label }) => {
  const [isActive, setIsActive] = useState(false);
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  console.log(errors);

  return (
    <>
      <FloatContainer id="float-label">
        <InputFloat
          name={name}
          type={type}
          id={id}
          {...register(name, {
            required: true,
            onChange: (e) => {
              setValue(name, e.target.value);
              setIsActive(true);
            },
          })}
        />
        <LabelFloat className={isActive ? "Active" : ""} htmlfor={name}>
          {label}
        </LabelFloat>
      </FloatContainer>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <MessageError>{message}</MessageError>}
      />
    </>
  );
};

export default Input;
