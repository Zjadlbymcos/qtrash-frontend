import axios from "axios";

axios.interceptors.request.use(async (config) => {
  config.baseURL = import.meta.env.VITE_API_URL;

  return config;
});
