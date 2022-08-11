import React from "react";
import Footer from "./components/footer/Index";
import GetCustomer from "./components/getRegistration/GetCustomer";
import GetProduct from "./components/getRegistration/GetProduct";
import Header from "./components/header/Index";
import RegistrationCustomer from "./components/registration/Customer";
import CustomerOld from "./components/registration/CustomerOld";
import RegistrationProduct from "./components/registration/Product";

const App = () => {
  return (
    <div>
      <Header />
      <RegistrationProduct /> 
      <GetCustomer/>
      <Footer />
      
    </div>
  );
};

export default App;
