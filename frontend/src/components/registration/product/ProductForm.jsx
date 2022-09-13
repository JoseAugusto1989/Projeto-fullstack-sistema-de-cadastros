import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import ProductService from '../../../services/productService';
import Input from '../../input/Input';
import { Button, ButtonCheckList } from '../Button.style';
import { ButtonStyle, Content, Row, TextRegistration } from '../customer/Customer.style';

const text = "O campo é obrigatório";

const schema = yup
  .object({
    name: yup.string().required(text),
    salePrice: yup
      .number()
      .required(text)
      .positive("O número deve ser positivo."),
    purchasePrice: yup
      .number()
      .required(text)
      .positive("O número deve ser positivo."),
    quantityInStock: yup
      .number()
      .required(text)
      .positive("O número deve ser positivo."),
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
          </Row>
          <ButtonCheckList>
            <Link to="/productListItens">Verificar Lista</Link>
          </ButtonCheckList>
        </Content>
      </form>
    </FormProvider>
  );
};

export default ProductForm;
