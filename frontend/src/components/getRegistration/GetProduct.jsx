import React, { useEffect, useState } from "react";
import "./styles.css";

const GetProduct = () => {
  const [registration, setRegistration] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8090/product/getAllProduct")
      .then((resp) => resp.json())
      .then((result) => {
        setRegistration(result)
      })
  }, []);

  const handleDelete = () => {

  }

  return (
    <div>
      <h3>Lista de Produtos</h3>
      <hr />
      <div>
        <table border="1px" cellpadding="5px" cellspacing="0" id="alter">
          <body>
            <tr>
              <th>Nome do Produto</th>
              <th>Preço de Venda</th>
              <th>Preço de Compra</th>
              <th>Lucro</th>
              <th>Quantidade em Estoque</th>
              <th>Fornecedor</th>
              <th>Deletar/Atualizar</th>
            </tr>
            {registration.map((product) => (
              <tr key={product.id} className="dif">
                <td>{product.name}</td>
                <td>R$ {product.salePrice}</td>
                <td>R$ {product.purchasePrice}</td>
                <td>R$ {product.gain}</td>
                <td>{product.quantityInStock}</td>
                <td>{product.provider}</td>
                <td>
                  {/* <Link
                    className="btn"
                    to={`/employees/edit/${product.id}`}
                  >
                    Update
                  </Link> */}
                  <button
                    className="btn"
                    onClick={(e) => {
                      handleDelete(product.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </body>
        </table>
      </div>
    </div>
  );
};

export default GetProduct;
