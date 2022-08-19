import httpClient from "./http-common";
import queryHelpers from "../helpers/queryHelpers";

const endpoint = "customer";

const CustomerService = {
  getAll: (filters) => {
    return httpClient.get(`/${endpoint}/getAllCustomer?${queryHelpers(filters)}`);
  },

  get: (id) => {
    return httpClient.get(`/${endpoint}/getCustomer/${id}`);
  },

  create: (data) => {
    return httpClient.post(`/${endpoint}/addCustomer`, data);
  },

  update: (data) => {
    return httpClient.put(`/${endpoint}/updateCustomer`, data);
  },

  remove: (id) => {
    return httpClient.delete(`/${endpoint}/${id}`);
  },
};

export default CustomerService;
