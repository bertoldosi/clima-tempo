import axios from "axios";

const BASE_URL = process.env.API_SCREEN || "http://localhost:3333";

const instances = axios.create({
  baseURL: BASE_URL,
});

export default instances;
