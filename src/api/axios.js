import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_BASE_URL
      : "/api/v1",
  withCredentials: true,
});

export default api;
