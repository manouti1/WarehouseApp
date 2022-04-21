import type { AxiosInstance } from "axios";
import axios from "axios";
const apiClient: AxiosInstance = axios.create({
    baseURL: "http://localhost:6060/api",
    headers: {
        "Content-type": "application/json",
    },
});
export default apiClient;
