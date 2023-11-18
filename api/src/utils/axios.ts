import axios from 'axios';

export const getAxiosInstance = axios.create({
    baseURL: process.env.API_BASE_URL || 'http://localhost',
    socketPath: '/var/run/docker.sock'
});
