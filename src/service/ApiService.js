import axios from "axios";
import { TokenService } from "@/store/storage.service";
import AuthService from "./auth.service";
import router from "@/router";

const ApiService = {
  // Stores the 401 interceptor position so that it can be later ejected when needed
  _401interceptor: null,
  _requestInterceptor: null,

  init(baseURL) {
    axios.defaults.baseURL = baseURL;
  },

  setHeader() {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${TokenService.getToken()}`;
  },

  removeHeader() {
    axios.defaults.headers.common = {};
  },

  get(resource) {
    return axios.get(resource);
  },

  post(resource, data) {
    return axios.post(resource, data);
  },

  postFile(resource, data) {
    return axios.post(resource, data, {
      responseType: "blop",
    });
  },

  getFile(resource, data) {
    return axios.get(resource, data, {
      responseType: "blop",
    });
  },

  formatDataFile(resource, data) {
    return axios.post(resource, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  put(resource, data) {
    return axios.put(resource, data);
  },

  delete(resource) {
    return axios.delete(resource);
  },
  /**
   * Perform a custom axios request.
   *
   * data is an object containing the following properties:
   *  - method
   *  - url
   *  - data ... request payload
   *  - auth (optional)
   *    - username
   *    - password
   **/
  customRequest(data) {
    return axios(data);
  },

  mount401Interceptor() {
    let requestCount = 0;
    const messages = [];
    this._401interceptor = axios.interceptors.response.use(async (error) => {
      if (error.request.status === 401) {
        AuthService.logout();
        router.push("/login");
      }
    });
  },

  unmount401Interceptor() {
    // Eject the interceptor
    axios.interceptors.response.eject(this._401interceptor);
    axios.interceptors.request.eject(this._requestInterceptor);
  },
};

export default ApiService;
