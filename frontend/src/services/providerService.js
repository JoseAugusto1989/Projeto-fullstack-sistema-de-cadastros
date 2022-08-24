import httpClient from "./http-common";
import queryHelpers from "../helpers/queryHelpers";

const endpoint = "provider";

const ProviderService = {
  getAll: (filters) => {
    return httpClient.get(`/${endpoint}/getAllProvider?${queryHelpers(filters)}`);
  },

  get: (id) => {
    return httpClient.get(`/${endpoint}/getProvider/${id}`);
  },

  create: (data) => {
    return httpClient.post(`/${endpoint}/addProvider`, data);
  },

  update: (data) => {
    return httpClient.put(`/${endpoint}/updateProvider`, data);
  },

  remove: (id) => {
    return httpClient.delete(`/${endpoint}/${id}`);
  },
};

export default ProviderService;
