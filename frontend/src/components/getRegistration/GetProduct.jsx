import React, { useEffect, useState } from "react";

const GetProduct = () => {
  const [registration, setRegistration] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8090/product/getAllProduct")
      .then((resp) => resp.json())
      .then((result) => {
        setRegistration(result);
      });
  }, []);

  return (
    <div>
      <h3>Lista de Produtos</h3>
      <hr />
      <div>
        <table>
          <body>
            {registration.map((product) => (
              <tr key={product.id}>
                <td>Nome do Produto: {product.name}</td>
                <td>Preço de Venda: R$ {product.salePrice}</td>
                <td>Preço de Compra: R$ {product.purchasePrice}</td>
                <td>Lucro: R$ {product.gain}</td>
                <td>Quantidade em estoque: {product.quantityInStock}</td>
                <td>Fornecedor: {product.provider}</td>
              </tr>
            ))}
          </body>
        </table>
      </div>
    </div>
  );
};

export default GetProduct;
