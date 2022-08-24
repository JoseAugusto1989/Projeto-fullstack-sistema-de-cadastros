import httpClient from "./http-common";
import queryHelpers from "../helpers/queryHelpers";

const endpoint = "product";

const ProductService = {
  getAll: (filters) => {
    return httpClient.get(`/${endpoint}/getAllProduct?${queryHelpers(filters)}`);
  },

  get: (id) => {
    return httpClient.get(`/${endpoint}/getProduct/${id}`);
  },

  create: (data) => {
    return httpClient.post(`/${endpoint}/addProduct`, data);
  },

  update: (data) => {
    return httpClient.put(`/${endpoint}/updateProduct`, data);
  },

  remove: (id) => {
    return httpClient.delete(`/${endpoint}/${id}`);
  },
};

export default ProductService;
