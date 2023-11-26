import axios from "axios";
import { configurations } from '../config';
const { BASE_URL } = configurations;

// first create a  axios instance with base url
const Axios = axios.create({
    baseURL: BASE_URL
})

export const PostWithFile = async (endpoint:string, data:any) => {
    // Axios.defaults.headers.common["authorization"] = "Bearer "+ getLocalStorage("token");
    console.log(endpoint, data, "at axios")
    return Axios.post(endpoint, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        // "authorization":"Bearer "+ getLocalStorage("token")
      },
    });
  };

// Request interceptor
Axios.interceptors.request.use(
    (request) => {
      // request.headers["Content-Type"] = "application/json";
      let token = localStorage.getItem("token")
      if (token) {
            request.headers.token = token;
      }
      return request;
    },
    function (error) {
      return Promise.reject(error);
    },
    { synchronous: true }
  );
// End of Request interceptor


// Response interceptor
Axios.interceptors.response.use((response: any) => {
    ///handle response here
    return response
}, (error) => {
    ///handle response error
    return Promise.reject(error)
})
//End of Response interceptor

export default Axios