import React from "react";
import Footer from "../footer/Index";
import GetCustomer from "../getRegistration/GetCustomer";
import RegistrationCustomer from "../registration/Customer";

const Home = () => {
  return (
    <div>
      <RegistrationCustomer />
      <GetCustomer />
      <Footer />
    </div>
  );
};

export default Home;
