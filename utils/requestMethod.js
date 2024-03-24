import axios from "axios";

const baseURL = "https://stingray-app-9qkes.ondigitalocean.app";

const publicRequest = axios.create({
  baseURL: baseURL,
});

export const authRequest = axios.create({
  baseURL: baseURL,
});

export default publicRequest;
