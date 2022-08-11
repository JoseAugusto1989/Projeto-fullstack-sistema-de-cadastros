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
        <hr/>
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Nome</td>
                        <td>Email</td>
                        <td>Telefone</td>
                        <td>CPF/CNPJ</td>
                        <td>Profissão</td>
                        <td>Endereço</td>
                        <td>N°</td>
                        <td>Bairro</td>
                        <td>Cidade</td>
                    </tr>
                </thead>
                <tbody>
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
