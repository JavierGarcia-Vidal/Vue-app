import axios from "axios";

export const API_ARTICLE = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts"
});
