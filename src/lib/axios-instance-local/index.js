import axios from "axios";

const isDevelopment = process.env.NODE_ENV === "development";
const BASE_URL = isDevelopment ? "http://localhost:3333" : process.env.BASE_URL;

const instances = axios.create({
  baseURL: BASE_URL,
});

export default instances;
