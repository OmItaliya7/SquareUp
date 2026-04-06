import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  console.error("VITE_API_URL is missing. Please check your environment variables.");
}

const api = axios.create({
  baseURL: API_URL,
});

export default api;