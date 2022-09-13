import axios from "axios";

const Api = axios.create({
  baseURL: "https://helpusdevelopers.herokuapp.com/",
});

export default Api;
