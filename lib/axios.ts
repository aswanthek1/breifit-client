import axios from "axios";
import { configurations } from '../config';
const { BASE_URL } = configurations;

// first create a  axios instance with base url
const Axios = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
})


export const PostWithFile = async (endpoint: string, data: any) => {
  // Axios.defaults.headers.common["authorization"] = "Bearer "+ getLocalStorage("token");
  const token = localStorage.getItem("token")
  return Axios.post(endpoint, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      "authorization": token
    },
  });
};

export const Post = async (endpoint: string, data: any) => {
  return Axios.post(endpoint, data, {
    headers: {
      "Content-Type": 'application/json'
    }
  })
}

export const Get = async (endpoint: string, data: any = {}, token?: any) => {
  console.log(endpoint, token)
  token = localStorage.getItem("token")
  return Axios.get(endpoint,
    {
      headers: {
        Authorization: token,
        "Content-Type": 'application/json'
      }
    }
  )
}

export const GetWithoutToken = async (endpoint: string, query: any) => {
  return Axios.get(endpoint,
    {
      headers: {
        "Content-Type": 'application/json'
      }
    }
  )
}

// Request interceptor
Axios.interceptors.request.use(
  (request) => {
    // request.headers["Content-Type"] = "application/json";
    // let token = localStorage.getItem("token")
    // if (token) {
    //       request.headers.token = token;
    // }
    return request;
  },
  function (error) {
    console.log(error, "error at reject")
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
  console.log(error, 'errorro33333333')
  return Promise.reject(error)
})
//End of Response interceptor

export default Axios