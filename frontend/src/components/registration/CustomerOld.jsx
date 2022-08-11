import React, { useState } from "react";
import { FloatContainer, InputFloat, LabelFloat } from "./CustomerOld.style";
import "./style.css";

const CustomerOld = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [cpf, setCpf] = useState("");
  const [occupation, setOccupation] = useState("");
  const [number, setNumber] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const registration = {
      name,
      email,
      address,
      phone,
      cpf,
      occupation,
      number,
      district,
      city,
    };
    console.log(registration);
    fetch("http://localhost:8090/customer/addCustomer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registration),
    }).then(() => {
      console.log("Cadastro de clientes adicionado com sucesso!");
    });
  };

  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState("");

  function handleTextChange(text) {
    setValue(text);

    if (text !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  return (
    <FloatContainer id="float-label">
      <InputFloat
        type="email"
        value={value}
        onChange={(e) => handleTextChange(e.target.value)}
      />

      <LabelFloat className={isActive ? "Active" : ""} htmlFor="email">
        E-mail
      </LabelFloat>
    </FloatContainer>
  );
};

export default CustomerOld;
