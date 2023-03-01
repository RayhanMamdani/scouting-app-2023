import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/api", // change to 'baseURL: "./api when building"
  headers: {
    "Content-type": "application/json"
  }
});