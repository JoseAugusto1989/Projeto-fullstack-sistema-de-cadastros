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

  return (
    <div>
      <h3>Lista de Clientes</h3>
      <hr />
      <div>
        <table>
          <tbody>
            {registration.map((customer) => (
              <tr key={customer.id}>
                <td>Nome: {customer.name}</td>
                <td>Email: {customer.email}</td>
                <td>Telefone: {customer.phone}</td>
                <td>CPF: {customer.cpf}</td>
                <td>Profissão: {customer.occupation}</td>
                <td>Endereço: {customer.address}</td>
                <td>N°: {customer.number}</td>
                <td>Bairro: {customer.district}</td>
                <td>Cidade: {customer.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetCustomer;
