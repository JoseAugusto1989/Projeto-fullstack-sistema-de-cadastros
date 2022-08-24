import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../home/Index";
import Customer from "../registration/customer/Customer"
import Product from "../registration/product/Product"
import Provider from "../registration/provider/Provider";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="customer" element={<Customer />} />
        <Route path="product" element={<Product />} />
        <Route path="provider" element={<Provider />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
