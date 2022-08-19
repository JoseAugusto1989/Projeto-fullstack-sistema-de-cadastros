import React, { useEffect, useState } from "react";
import CustomerService from "../../services/customerService";
import Pagination from "../pagination/Pagination";

const GetCustomer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [size, setSize] = useState(10)
  const [page, setPage] = useState(0)
  const [data, setData] = useState(null)

  useEffect(() => {
    const filters = { size, page }
    setIsLoading(true);
    CustomerService.getAll(filters)
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [size, page]);

  const handleDelete = () => {};

  if (isLoading) {
    return (
      <div>
        <h1>Carregando Lista de clientes...</h1>
      </div>
    );
  }

  return (
    <div>
      <h3>Lista de Clientes</h3>
      <hr />
      <div>
        <Pagination page={page} setPage={setPage} size={size} setSize={setSize} data={data} />
        <table>
          <tbody>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>CPF</th>
              <th>Profissão</th>
              <th>Endereço</th>
              <th>N°</th>
              <th>Bairro</th>
              <th>Cidade</th>
              <th>Deletar/Atualizar</th>
            </tr>
            {data?.content &&
              data.content.length > 0 &&
              data.content.map((customer) => (
                <tr key={customer.id}>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.cpf}</td>
                  <td>{customer.occupation}</td>
                  <td>{customer.address}</td>
                  <td>{customer.number}</td>
                  <td>{customer.district}</td>
                  <td>{customer.city}</td>
                  <td>
                    {/* <Link className="btn btn-info ml-4" to={`/employees/edit/${customer.id}`}>Update</Link> */}
                    <button
                      className="btn btn-danger ml-4"
                      onClick={(e) => {
                        handleDelete(customer.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetCustomer;
