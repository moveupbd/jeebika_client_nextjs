/* eslint-disable no-useless-catch */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { login } from "../redux/features/auth/authSlice";
import { authRequest } from "@/utils/requestMethod";

const useApi = () => {
  const { authData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // console.log(authData);

  useEffect(() => {
    // Add a request interceptor
    const requestIntercept = authRequest.interceptors.request.use(
      (config) => {
        const authToken = authData?.tokens?.access;

        if (authToken) {
          config.headers.Authorization = `Bearer ${authToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Add a response interceptor
    const responseIntercept = authRequest.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        // If the error status is 403 and there is no originalRequest._retry flag,
        // it means the token has expired and we need to refresh it
        if (error?.response?.status === 401 && !originalRequest._retry) {
          //   originalRequest._retry = true;
          //   try {
          //     const refreshToken = authData?.tokens?.refreshToken;
          //     const response = await axios.post(
          //       `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/refresh-token`,
          //       { refreshToken }
          //     );
          //     const newauthData = { ...authData, token: response.data };
          //     console.log(`New authData`, newauthData);
          //     dispatch(login(newauthData));
          //     // Retry the original request with the new token
          //     originalRequest.headers.Authorization = `Bearer ${newauthData?.token?.accessToken}`;
          //     return axios(originalRequest);
          //   } catch (error) {
          //     throw error;
          //   }
        }

        return Promise.reject(error);
      }
    );
    return () => {
      authRequest.interceptors.request.eject(requestIntercept);
      authRequest.interceptors.response.eject(responseIntercept);
    };
  }, [authData, dispatch]);

  return { authRequest };
};

export default useApi;
