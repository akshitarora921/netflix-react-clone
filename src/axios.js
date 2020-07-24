import axios from "axios";

// axios for base url

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
