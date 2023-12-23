import axios from "axios";
import { getItem } from "src/helpers/storage";
const env = import.meta.env;

function createInstance(baseURL, type) {
  const headers = {
    Accept: "application/json",
    "Content-Type": type,
  };

  const axiosInstance = axios.create({ baseURL, headers });
  axiosInstance.interceptors.request.use(
    (config) => {
      const isAuthorization = getItem("access");
      if (isAuthorization && config.headers) {
        config.headers.Authorization = `Bearer ${isAuthorization || ""}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
  axiosInstance.interceptors.response.use(
    async (res) => res,
    (error) => {
      const refreshToken = localStorage.getItem("refreshToken");
      console.log(error.response?.status);
      if (error.response?.status === 401 && refreshToken) {
        axios
          .post(
            env.VITE_APP_API_URL + "token/refresh/",
            { refresh: refreshToken },
            {
              headers: {
                ...headers,
                authorization: `Bearer ${refreshToken}`,
              },
            }
          )
          .then((res) => {
            localStorage.setItem("access", res.data.access);
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);

            localStorage.clear();
            window.location.reload();
          });
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
}
const instance = createInstance(env.VITE_APP_API_URL, "application/json");

export const useGet = ({ url, params }) => {
  return instance.get(url, { params });
};

export const usePost = ({ url, data }) => {
  return instance.post(url, data);
};

export const useUpdate = ({ url, data }) => {
  return instance.patch(url, data);
};

export const useDelete = ({ url, data }) => {
  return instance.delete(url, { data });
};
