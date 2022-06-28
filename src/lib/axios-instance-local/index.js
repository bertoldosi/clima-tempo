import axios from "axios";

const isDevelopment = process.env.NODE_ENV === "development";
const BASE_URL = isDevelopment
  ? "http://localhost:3333"
  : "https://screen-clima-tempo.herokuapp.com/";

const instances = axios.create({
  baseURL: "http://localhost:3333",
});

export default instances;
