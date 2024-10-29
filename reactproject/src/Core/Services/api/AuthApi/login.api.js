import http from "../../interceptor";

export const Postlogin = async (user) => {
  try {
    const response = await http.post(`/Sign/Login` , user)
    return response;
  } catch (error) {
    return [];
  }
};




