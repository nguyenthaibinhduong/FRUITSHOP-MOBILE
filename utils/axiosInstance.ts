import { API_URL } from "@env";
import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: API_URL, // bạn đổi lại URL ngrok ở đây
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
