import axios from "axios";

// const baseURL = "http://165.22.109.163";
const baseURL = "https://server.jeebika.com/";

const publicRequest = axios.create({
  baseURL: baseURL,
});

export const loginRequest = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

export const authRequest = axios.create({
  baseURL: baseURL,
});

export default publicRequest;
