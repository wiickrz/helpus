import axios from "axios";

const api = axios.create({
  baseURL: "https://helpusdevelopers.herokuapp.com/",
});

export default api;
