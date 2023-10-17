import axios from 'axios';

// const BASE_URL = 'https://sangeet-web-music-back.onrender.com/api/v1';
const BASE_URL = 'http://localhost:5000/api/v1';

export default axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
});
