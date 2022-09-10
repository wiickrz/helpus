import axios from "axios";

export const api = axios.create({
  baseURL: "https://helpusdevelopers.herokuapp.com/",
});
