import axios from "axios";

export default axios.create({
  baseURL: "localhost:8080", // change to 'baseURL: ""https://frc.a193.ca/api when building"
  headers: {
    "Content-type": "application/json"
  }
});