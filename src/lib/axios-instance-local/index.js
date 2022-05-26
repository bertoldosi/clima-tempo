import axios from "axios";

const instances = axios.create({
  baseURL: "http://localhost:3333",
});

export default instances;
