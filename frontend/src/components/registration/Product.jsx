import React, { useState } from "react";
import Header from "../header/Index";
import Input from "../input/Input";
import { Button } from "./Button.style";
import { FloatContainer, InputFloat, LabelFloat } from "./Registration.style";

const RegistrationProduct = () => {
  const [name, setName] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [gain, setGain] = useState("");
  const [quantityInStock, setQuantityInStock] = useState("");
  const [provider, setProvider] = useState("");

  const [registration, SetRegistration] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    const registration = {
      name,
      salePrice,
      purchasePrice,
      quantityInStock,
      provider,
    };
    console.log(registration);
    fetch("http://localhost:8090/product/addProduct", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registration),
    }).then(() => {
      console.log("Cadastro de Produtos adicionado com sucesso!!!");
    });
  };

  return (
    <div>
        <Header />
      <h1>Cadastro de Produtos</h1>
      <form>
        <Input
          type="text"
          id="name"
          name="name"
          label="Nome do produto"
          defaultValue={name}
          onChange={(text) => setName(text)}
        />

        <Input
          type="number"
          id="salePrice"
          name="salePrice"
          label="Preço de Venda"
          defaultValue={salePrice}
          onChange={(text) => setSalePrice(text)}
        />

        <Input
          type="number"
          id="purchasePrice"
          name="purchasePrice"
          label="Preço de Compra"
          defaultValue={purchasePrice}
          onChange={(text) => setPurchasePrice(text)}
        />

        <Input
          type="number"
          id="quantityInStock"
          name="quantityInStock"
          label="Quantidade adicionada no estoque"
          defaultValue={quantityInStock}
          onChange={(text) => setQuantityInStock(text)}
        />

        <Input
          type="text"
          id="provider"
          name="provider"
          label="Fornecedor"
          defaultValue={provider}
          onChange={(text) => setProvider(text)}
        />

        <div>
          <Button variant="contained" onClick={handleClick} disableElevation>
            Cadastrar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationProduct;
