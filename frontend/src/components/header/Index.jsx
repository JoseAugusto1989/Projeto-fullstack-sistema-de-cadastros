import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
  return (
    <header>
      <input type="checkbox" id="bt_menu" />
      <label for="bt_menu">&#9776;</label>

      <nav className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Teste 2</Link>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
          <li>
            <Link to="/customer">Clientes</Link>
          </li>
          <li>
            <Link to="/product">Produtos</Link>
          </li>
          <li>
            <a href="#">Fornecedores</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
