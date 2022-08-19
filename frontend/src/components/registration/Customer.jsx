import React, { useState } from "react";

import Footer from "../footer/Index";
import Header from "../header/Index";
import Input from "../input/Input";

import { Button } from "./Button.style";
import {
  ButtonStyle,
  CenterDiv,
  InputLeft1,
  InputLeft2,
  InputLeft3,
  InputLeft4,
  InputLeft5,
  InputRight1,
  InputRight2,
  InputRight3,
  InputRight4,
  InputRight5,
  TextRegistration,
} from "./Customer.style";
import "./style.css";

const API = "http://localhost:8090/customer/addCustomer";

const RegistrationCustomer = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
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
      lastName,
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
    fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registration),
    }).then(() => {
      console.log("Cadastro de clientes adicionado com sucesso!");
    });
  };

  return (
    <div>
      <Header />
      <CenterDiv>
        <TextRegistration>Cadastro de Clientes</TextRegistration>
        <form>
          <InputLeft1>
            <Input
              type="text"
              id="name"
              name="name"
              label="Nome"
              defaultValue={name}
              onChange={(text) => setName(text)}
            />
          </InputLeft1>

          <InputRight1>
            <Input
              type="text"
              id="lastName"
              name="lastName"
              label="Sobrenome"
              defautValue={lastName}
              onChange={(text) => setLastName(text)}
            />
          </InputRight1>

          <InputLeft2>
            <Input
              type="email"
              id="email"
              name="email"
              label="Email"
              defaultValue={email}
              onChange={(text) => setEmail(text)}
            />
          </InputLeft2>

          <InputRight2>
            <Input
              type="text"
              id="phone"
              name="phone"
              label="Telefone"
              defaultValue={phone}
              onChange={(text) => setPhone(text)}
            />
          </InputRight2>

          <InputLeft3>
            <Input
              type="text"
              id="address"
              name="address"
              label="Endereço"
              defaultValue={address}
              onChange={(text) => setAddress(text)}
            />
          </InputLeft3>

          <InputRight3>
            <Input
              type="number"
              id="number"
              name="number"
              label="N°"
              defaultValue={number}
              onChange={(text) => setNumber(text)}
            />
          </InputRight3>

          <InputLeft4>
            <Input
              type="text"
              id="district"
              name="district"
              label="Bairro"
              defaultValue={district}
              onChange={(text) => setDistrict(text)}
            />
          </InputLeft4>

          <InputRight4>
            <Input
              type="text"
              id="city"
              name="city"
              label="Cidade"
              defaulValue={city}
              onChange={(text) => setCity(text)}
            />
          </InputRight4>
          <InputLeft5>
            <Input
              type="text"
              id="cpf"
              name="cpf"
              label="CPF"
              defaultValue={cpf}
              onChange={(text) => setCpf(text)}
            />
          </InputLeft5>
          <InputRight5>
            <Input
              type="text"
              id="occupation"
              name="occupation"
              label="Profissão"
              defaultValue={occupation}
              onChange={(text) => setOccupation(text)}
            />
          </InputRight5>

          <ButtonStyle>
            <Button onClick={handleClick} disableElevation>
              Cadastrar
            </Button>
          </ButtonStyle>
        </form>
      </CenterDiv>
      <Footer />
    </div>
  );
};

export default RegistrationCustomer;
