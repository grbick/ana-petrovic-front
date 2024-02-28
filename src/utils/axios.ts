import Axios, { AxiosError, AxiosRequestConfig } from "axios";
import { useCallback, useRef } from "react";
import { observer } from "mobx-react-lite";

const getHeaders = (config: AxiosRequestConfig) => {
  if (!config.headers) {
    return new Error("Missing config.headers");
  }

  config.headers.Accept = "*/*";
  // Login call requires xxx/urlencoded content type
  // we set them in repo file, so here we check if we need to set them again
  if (!config.headers["Content-Type"]) {
    config.headers["Content-Type"] = "application/json";
  }
  return config;
};

export const axios = Axios.create({
  baseURL: "/api",
});

export type ApiResponse<T> = Promise<T>;

export const WithAxios = observer(({ children }: any) => {
  const resInterceptorId = useRef<number | null>(null);
  const reqInterceptorId = useRef<number | null>(null);

  //   const handleError = (error: IErrors) => {
  //     errorHandling(error);
  //   };

  const authRequestInterceptor = (config: AxiosRequestConfig) => {
    // modalStore.startLoader();
    return getHeaders(config);
  };

  const getResponseData = (response: { data: string }) => {
    // modalStore.endLoader();

    return response.data || response;
  };

  const handleResponseErrors = (error: AxiosError) => {
    // modalStore.endLoader();
    // handleError(error as IErrors);
    return Promise.reject(error);
  };

  const setInterceptor = useCallback(() => {
    //@ts-ignore
    if (axios.interceptors.request.handlers.length === 1) return;
    resInterceptorId.current = axios.interceptors.response.use(
      getResponseData as any,
      handleResponseErrors
    );
    reqInterceptorId.current = axios.interceptors.request.use(
      authRequestInterceptor as any
    );
  }, [resInterceptorId, reqInterceptorId]);

  setInterceptor();

  return children;
});

export const setHeaders = (token: string) => {
  if (token) axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  else axios.defaults.headers.common.Authorization = null;
};
