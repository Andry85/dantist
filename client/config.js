import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_REACT_APP_DOMAIN}/api/`
    
})