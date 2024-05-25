import axios, { AxiosInstance } from 'axios';

const apiClient: AxiosInstance = axios.create({
    baseURL: 'https://api.example.com', // Replace with your API's base URL
    timeout: 1000,  // Optional: Set a timeout
    headers: { 'Content-Type': 'application/json' },
});

export default apiClient;
