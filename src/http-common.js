import axios from "axios";

export default axios.create({
  baseURL: "https://seven558server.onrender.com", // change to 'baseURL: ""https://frc.a193.ca/api when building"
  headers: {
    "Content-type": "application/json"
  }
});