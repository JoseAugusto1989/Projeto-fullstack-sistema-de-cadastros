import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";

import CustomerService from "../../../services/customerService.js";

import Input from "../../input/Input";
import { Button, ButtonCheckList } from "../Button.style";
import { ButtonStyle, Content, TextRegistration, Row } from "./Customer.style";

const yupText = "O campo é obrigatório";

const schema = yup
  .object({
    name: yup.string().required(yupText),
    lastName: yup.string().required(yupText),
    email: yup.string().email(yupText).required(yupText),
    phone: yup.string().required(yupText),
    address: yup.string().required(yupText),
    cpf: yup.string().required(yupText),
    occupation: yup.string().required(yupText),
    number: yup.string().required(yupText),
    district: yup.string().required(yupText),
    city: yup.string().required(yupText),
  })
  .required();

const defaultValue = () => {
  return {
    name: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    number: "",
    district: "",
    city: "",
    cpf: "",
    occupation: "",
  };
};

const CustomerForm = () => {
  const formMethods = useForm({
    defaultValues: defaultValue(),
    resolver: yupResolver(schema),
  });

  const { handleSubmit, reset } = formMethods;
  const save = (values) => {
    CustomerService.create(values)
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
          <TextRegistration>Cadastro de Clientes</TextRegistration>
          <Row>
            <Input type="text" id="name" name="name" label="Nome" />
            <Input
              type="text"
              id="lastName"
              name="lastName"
              label="Sobrenome"
            />
          </Row>
          <Row>
            <Input type="email" id="email" name="email" label="Email" />
            <Input type="text" id="phone" name="phone" label="Telefone" />
          </Row>

          <Row>
            <Input type="text" id="address" name="address" label="Endereço" />
            <Input type="number" id="number" name="number" label="N°" />
          </Row>

          <Row>
            <Input type="text" id="district" name="district" label="Bairro" />
            <Input type="text" id="city" name="city" label="Cidade" />
          </Row>

          <Row>
            <Input type="text" id="cpf" name="cpf" label="CPF" />
            <Input
              type="text"
              id="occupation"
              name="occupation"
              label="Profissão"
            />
          </Row>

          <Row>
            <ButtonStyle>
              <Button disableElevation>Cadastrar</Button>

              <ButtonCheckList>Verificar Lista</ButtonCheckList>
            </ButtonStyle>
          </Row>
        </Content>
      </form>
    </FormProvider>
  );
};

export default CustomerForm;
