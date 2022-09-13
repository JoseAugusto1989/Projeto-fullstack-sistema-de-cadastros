import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../home/Index";
import Customer from "../registration/customer/Customer"
import CustomerListItens from "../registration/customer/CustomerListItens";
import Product from "../registration/product/Product"
import ProductListItens from "../registration/product/ProductListIten";
import Provider from "../registration/provider/Provider";
import ProviderListItens from "../registration/provider/ProviderListItens";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="customer" element={<Customer />} />
        <Route path="product" element={<Product />} />
        <Route path="provider" element={<Provider />} />
        <Route path="customerListItens" element={<CustomerListItens />} />
        <Route path="providerListItens" element={<ProviderListItens />} />
        <Route path="productListItens" element={<ProductListItens />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
