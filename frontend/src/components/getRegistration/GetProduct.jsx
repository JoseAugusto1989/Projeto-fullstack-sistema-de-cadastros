import './styles.css';

import React, { useEffect, useState } from 'react';

import ProductService from '../../services/productService';
import Pagination from '../pagination/Pagination';
import GetProductsChart from '../google-charts/GetProductsChart';

const GetProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [size, setSize] = useState(10);
  const [page, setPage] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    init();
  }, [size, page]);

  const init = () => {
    const filters = { size, page };
    setIsLoading(true);
    ProductService.getAll(filters)
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  console.log(data)

  if (isLoading) {
    return (
      <div>
        <h1>Carregando Lista de produtos...</h1>
      </div>
    );
  }

  const handleDelete = () => {};

  return (
    <div>
      <h3>Lista de Produtos</h3>
      <hr />
      <div>
        <Pagination
          page={page}
          setPage={setPage}
          size={size}
          setSize={setSize}
          data={data}
        />
        <table>
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

            {data?.content && 
              data.content.length > 0 &&
              data.content.map((product) => (

              <tr key={product.id}>

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
      <GetProductsChart data={data} />
    </div>
  );
};

export default GetProduct;
