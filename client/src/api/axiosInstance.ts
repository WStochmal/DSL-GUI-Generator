import axios from "axios";
const API_URL = import.meta.env.API_URL;

export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});
