// Base da URL : https://api.themoviedb.org/3/
// URL da API: https://api.themoviedb.org/3//movie/now_playing?api_key=a244b54c7380bc04ee977446ef5d9382

import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
