import axios from "axios";
import type { AxiosError } from "axios";
import settings from "@/config/settings";

const request = axios.create({
  baseURL: settings.baseURL,
  timeout: settings.requestTimeout,
  headers: {
    "Content-Type": "application/json",
  },
});

// request.defaults.headers["Accept-Language"] =
//   localStorage.getItem("lang") ?? settings.defaultLanguage;
// const token = localStorage.getItem("access_token");
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1pcmFobWFkIiwiaWF0IjoxNzAyNDYwMDM1LCJleHAiOjE3MDI0NzA4MzUsImp0aSI6ImYyMjAwOTRkLWZmMjQtNDNiZi04M2UyLTUxMWYwM2RmMmE2YiIsInVzZXJfaWQiOjEsIm9yaWdfaWF0IjoxNzAyNDYwMDM1fQ.lfWG0U-H-yVZ3yn8Cmst38S6_al-L5ecYhTwbil-n14";

request.interceptors.request.use((config) => {
  if (token !== null) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, errorHandler);

request.interceptors.response.use((response) => response.data, errorHandler);

export function errorHandler(error: AxiosError): void {
  // Using toJSON you get an object with more information about the HTTP error
  const errObj = error.toJSON();
  if (error.response !== null) {
    if (error.response?.status === 403) {
      // refresh the token
      window.location.href = "/auth";
    }
    console.error(error.response);
  }
  if (error.request !== null) {
    // no response received from server
    console.error(error.request);
  } else {
    // something happened in setting up the request
    console.error(errObj);
  }
}

export default request;
