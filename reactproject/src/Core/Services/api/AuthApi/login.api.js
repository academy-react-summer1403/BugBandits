import http from "../../interceptor";

export const Postlogin = async (user) => {
  try {
    const response = await http.get(`/Sign/Login` , user)
    return response.data;
  } catch (error) {
    return [];
  }
};




