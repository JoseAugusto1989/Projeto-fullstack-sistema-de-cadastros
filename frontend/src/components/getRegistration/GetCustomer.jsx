import React, { useEffect, useState } from "react";

const GetCustomer = () => {
  const [registration, setRegistration] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8090/customer/getAllCustomer")
      .then((resp) => resp.json())
      .then((result) => {
        setRegistration(result);
      });
  }, []);

  console.log(registration)

  return (
    <div>
      <h3>Lista de Clientes</h3>
      <hr />
      <div>
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
            </tr>
            {registration.map((customer) => (
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetCustomer;
