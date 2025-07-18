import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://tourmaline-gnome-b8c31e.netlify.app////api/users",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
