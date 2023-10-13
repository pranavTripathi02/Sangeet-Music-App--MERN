import axios from 'axios';

// const BASE_URL = 'https://podcasts-backend.onrender.com/api/v1';
const BASE_URL = 'http://localhost:5000/api/v1';

export default axios.create({
    baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
});
