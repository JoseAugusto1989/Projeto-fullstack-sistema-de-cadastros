import React from "react";
import Footer from "../footer/Index";
import Header from "../header/Index";

import noteImage from "../../assets/notebook.jpg";
import fornecedores from "../../assets/cadastroFornecedores.jpeg";
import clientes from "../../assets/cadastroClientes.jpg";
import produtos from "../../assets/cadastroProdutos.jpg";

import {
  ContainerHome,
  InicialImage,
  ContainerName,
  ContainerText,
  ContainerLink,
  RegistProduct,
  RegistCustomer,
  RegistProvider,
  RegistImages,
  TextHome,
} from "./Styles";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <ContainerHome>
        <ContainerName>
          <h1>OptimizationSystem</h1>
          <h2>Software gerencial para pequenas empresas</h2>
        </ContainerName>
        <ContainerText>
          <p>
            Gerencie seu negócio do estoque ao financeiro, com cadastros e
            relatórios específicos das suas demandas, com nosso software
            gerencial para pequenas empresas.
          </p>
        </ContainerText>
        <InicialImage src={noteImage} alt="ImageHome" />
      </ContainerHome>
      <TextHome>
        <p>
          Atualmente, não é fácil abrir um negócio e muito menos manter tudo
          organizado em uma pequena empresa. Alto investimento, impostos e
          burocracias, tudo dificulta para que o seu negócio cresça no mercado.
          Para isso, o estamos desenvolvendo um software gerencial para pequenas
          empresas que trabalham com vendas de produtos e/ou prestações de
          serviços. Como o nosso software você pode controlar o financeiro, o
          setor de vendas, compras, estoque e todos os demais departamentos da
          sua empresa de modo simples e rápido. Além disso, Possuimos, funções
          consideradas chatas totalmente automatizadas, como emissão de notas
          fiscais (de produto, de serviço e eletrônica), boletos bancários,
          importar XML, tudo de forma intuitiva.
        </p>

        <p>
          Ademais, o nosso programa gerencial é o ideal para vários tipos de
          negócios, já que também tem a funcionalidade de vendas PDV, auxiliando
          de forma práticas aqueles estabelecimentos que lidam comcom este tipo
          de vendas. Se você presta serviços também possuímos as funcionalidades
          que lhe dão auxilio no controle da prestação de serviço, orçamento e
          contratos de locação e de serviço.
        </p>
      </TextHome>
      <h1>Soluções</h1>
      <ContainerLink>
        <RegistProduct>
          <Link to="">Produtos</Link>
          <Link to="">
            <RegistImages src={produtos} alt="produtos" />
          </Link>
          <h4>Cadastro de Produtos Completo</h4>
          <h4>Alerta de estoque insuficiente</h4>
          <h4>Controle de Cargas</h4>
          <h4>Margem do Produto</h4>
        </RegistProduct>
        <RegistCustomer>
          <Link to="">Clientes</Link>
          <Link to="">
            <RegistImages src={clientes} alt="ImageHome" />
          </Link>
          <h4>Cadastro de Clientes</h4>
          <h4>Controle de Gastos</h4>
        </RegistCustomer>
        <RegistProvider>
          <Link to="">Fornecedores</Link>
          <Link to="">
            <RegistImages src={fornecedores} alt="ImageHome" />
          </Link>
          <h4>Cadastro de Fornecedores</h4>
          <h4>Comparativo de Preços</h4>
        </RegistProvider>
      </ContainerLink>

      <ContainerHome>
        <div>
          <h2>Nosso sistema gerencial é ideal para diversas impresas: </h2>
          <h3>Supermercados e Conveniências</h3>
          <h3>Oficinas</h3>
          <h3>Lojas de Roupas e Calçados</h3>
          <h3>Atacadistas e Distribuidores</h3>
          <h3>Prestadores de Serviços</h3>
        </div>
        <div>
          <h2>Testando</h2>
          <h3>testando</h3>
        </div>
      </ContainerHome>

      <Footer />
    </>
  );
};

export default Home;
