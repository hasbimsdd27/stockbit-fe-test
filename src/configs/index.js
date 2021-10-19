import axios from "axios";

const API = axios.create({
  baseURL: "https://www.omdbapi.com",
});

API.interceptors.request.use((config) => {
  config.params = { ...config.params, apikey: "faf7e5bb" };
  return config;
});

export default API;
