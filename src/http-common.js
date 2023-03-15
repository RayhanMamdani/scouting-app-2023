import axios from "axios";

export default axios.create({
  baseURL: "https://frc.a193.ca/api", // change to 'baseURL: ""https://frc.a193.ca/api when building"
  headers: {
    "Content-type": "application/json"
  }
});