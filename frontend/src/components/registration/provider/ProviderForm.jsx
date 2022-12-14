import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";

import ProviderService from "../../../services/providerService";

import Input from "../../input/Input";
import { Button, ButtonCheckList } from "../Button.style";
import {
  ButtonStyle,
  Content,
  TextRegistration,
  Row,
} from "../customer/Customer.style";

const text = "O campo é obrigatório";

const schema = yup
  .object({
    name: yup.string().required(text),
    lastName: yup.string().required(text),
    phone: yup
      .string()
      .required(text)
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Número de telefone inválido!"
      ),
    email: yup.string().email("Digite um email válido").required(text),
    companyName: yup.string().required(text),
    cnpj: yup.string().required(text),
  })
  .required();

const defaultValue = () => {
  return {
    name: "",
    lastName: "",
    phone: "",
    email: "",
    companyName: "",
    cnpj: "",
  };
};

const ProviderForm = () => {
  const formMethods = useForm({
    defaultValues: defaultValue(),
    resolver: yupResolver(schema),
  });

  const { handleSubmit, reset } = formMethods;
  const save = (values) => {
    ProviderService.create(values)
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
          <TextRegistration>Cadastro de Fornecedores</TextRegistration>
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
            <Input type="text" id="phone" name="phone" label="Telefone" />
            <Input type="email" id="email" name="email" label="Email" />
          </Row>
          <Row>
            <Input
              type="text"
              id="companyName"
              name="companyName"
              label="Nome da Empresa"
            />
            <Input type="text" id="cnpj" name="cnpj" label="CNPJ" />
          </Row>
          <Row>
            <ButtonStyle>
              <Button disableElevation>Cadastrar</Button>
            </ButtonStyle>
          </Row>
          <ButtonCheckList>
            <Link to="/providerListItens">Verificar Lista</Link>
          </ButtonCheckList>
        </Content>
      </form>
    </FormProvider>
  );
};

export default ProviderForm;
