import axios from 'axios';
import { BASE_URL } from '../constant/enviroments';
import authService from '../services/authService';
import tokenMethod from './token';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 || (error.response?.status === 403 && !!!originalRequest._retry)) {
      originalRequest._retry = true;

      try {
        const res = await authService.refreshToken({
          refreshToken: tokenMethod.get()?.refreshToken,
        });

        if (res?.data?.data) {
          const { token: accessToken, refreshToken } = res.data.data;
          tokenMethod.set({ accessToken, refreshToken });
          originalRequest.headers.Authorization = 'Bearer ' + accessToken;
          return axiosInstance(originalRequest);
        }
      } catch (error) {
        console.error(error);
        tokenMethod.remove();
      }
    }

    return Promise.reject(error);
  }
);

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${tokenMethod.get()?.accessToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
