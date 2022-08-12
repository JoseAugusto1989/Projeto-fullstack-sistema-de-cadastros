import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../home/Index";
import Customer from "../registration/Customer"
import Product from "../registration/Product"

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="customer" element={<Customer />} />
        <Route path="product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
