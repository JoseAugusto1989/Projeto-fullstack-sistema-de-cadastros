import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";

import ProductService from "../../../services/productService";

import Input from "../../input/Input";
import { Button, ButtonCheckList } from "../Button.style";
import {
  Content,
  TextRegistration,
  Row,
  ButtonStyle,
} from "../customer/Customer.style";

const text = "O campo é obrigatório";

const schema = yup
  .object({
    name: yup.string().required(text),
    salePrice: yup.number().required(text),
    purchasePrice: yup.number().required(text),
    quantityInStock: yup.number().required(text),
  })
  .required();

const defaultValue = () => {
  return {
    name: "",
    salePrice: "",
    purchasePrice: "",
    quantityInStock: "",
    provider: "",
  };
};

const ProductForm = () => {
  const formMethods = useForm({
    defaultValues: defaultValue(),
    resolver: yupResolver(schema),
  });

  const { handleSubmit, reset } = formMethods;
  const save = (values) => {
    ProductService.create(values)
      .then(() => {
        reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(save)}>
        <Content>
          <TextRegistration>Cadastro de Produtos</TextRegistration>
          <Row>
            <Input type="text" id="name" name="name" label="Nome do produto" />
            <Input
              type="number"
              id="salePrice"
              name="salePrice"
              label="Preço de Venda"
            />
          </Row>

          <Row>
            <Input
              type="number"
              id="purchasePrice"
              name="purchasePrice"
              label="Preço de Compra"
            />
            <Input
              type="number"
              id="quantityInStock"
              name="quantityInStock"
              label="Quantidade adicionada no estoque"
            />
          </Row>

          <Row>
            <ButtonStyle>
              <Button disableElevation>Cadastrar</Button>
            </ButtonStyle>
            <ButtonCheckList>Verificar Lista</ButtonCheckList>
          </Row>
        </Content>
      </form>
    </FormProvider>
  );
};

export default ProductForm;
