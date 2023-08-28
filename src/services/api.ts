import axios, { InternalAxiosRequestConfig } from "axios"


const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
})

api.interceptors.request.use((req :InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    if(token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req
})

export default api;