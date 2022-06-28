import axios from "axios";

const isDevelopment = process.env.NODE_ENV === "development";
const BASE_URL = isDevelopment
  ? "http://localhost:3333"
  : process.env.API_SCREEN;

const instances = axios.create({
  baseURL: BASE_URL,
});

export default instances;
