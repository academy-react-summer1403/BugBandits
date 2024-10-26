import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: baseURL,
});

// const onSuccess = (response) => {
//   return response.data;
// };
// const onError = (err) => {console.error(err);};
// instance.interceptors.response.use(onSuccess, onError);

export default instance;