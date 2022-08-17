import React from "react";
import Footer from "../footer/Index";
import GetCustomer from "../getRegistration/GetCustomer";
import GetProduct from "../getRegistration/GetProduct";
import Header from "../header/Index";

const Home = () => {
  return (
    <div>
      <Header />
      <GetProduct />
      <GetCustomer />
      <Footer />
    </div>
  );
};

export default Home;
