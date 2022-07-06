import axios from "axios";

const BASE_URL_PROD = process.env.API_SCREEN;
const BASE_URL_DEV = "http://localhost:3333";

const BASE_URL = BASE_URL_PROD || BASE_URL_DEV;

const instances = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

export default instances;
