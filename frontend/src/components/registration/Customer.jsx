import React, { useState } from "react";
import Input from "../input/Input";
import "./style.css";

const RegistrationCustomer = () => {
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

  return (
    <div>
      <h1>Cadastro de Clientes</h1>
      <form>
        <Input
          type="text"
          id="name"
          name="name"
          label="Nome"
          defaultValue={name}
          onChange={(text) => setName(text)}
        />

        <Input
          type="email"
          id="email"
          name="email"
          label="Email"
          defaultValue={email}
          onChange={(text) => setEmail(text)}
        />

        <Input
          type="text"
          id="phone"
          name="phone"
          label="Telefone"
          defaultValue={phone}
          onChange={(text) => setPhone(text)}
        />

        <Input
          type="text"
          id="address"
          name="address"
          label="Endereço"
          defaultValue={address}
          onChange={(text) => setAddress(text)}
        />

        <Input
          type="number"
          id="number"
          name="number"
          label="N°"
          defaultValue={number}
          onChange={(text) => setNumber(text)}
        />

        <Input
          type="text"
          id="district"
          name="district"
          label="Bairro"
          defaultValue={district}
          onChange={(text) => setDistrict(text)}
        />

        <Input
          type="text"
          id="city"
          name="city"
          label="Cidade"
          defaulValue={city}
          onChange={(text) => setCity(text)}
        />
      
        <Input
          type="text"
          id="cpf"
          name="cpf"
          label="CPF"
          defaultValue={cpf}
          onChange={(text) => setCpf(text)}
        />

        <Input
          type="text"
          id="occupation"
          name="occupation"
          label="Profissão"
          defaultValue={occupation}
          onChange={(text) => setOccupation(text)}
        />

        <div>
          <button variant="contained" onClick={handleClick} disableElevation>
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationCustomer;
