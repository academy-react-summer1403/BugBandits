import http from "../../interceptor";

export const SendVerifyMessage = async (user) => {
  const response = await http.post(`/Sign/SendVerifyMessage`, user);
  return response;
};

export const VerifyMessage = async (user) => {
  const response = await http.post(`/Sign/VerifyMessage`, user);
  return response;
};

export const PostRegister = async (user) => {
  const response = await http.post(`/Sign/Register`, user);
  return response;
};
