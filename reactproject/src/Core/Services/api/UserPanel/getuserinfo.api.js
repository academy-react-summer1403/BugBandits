import http from "../../interceptor";

export const getUserInfo = async () => {
  try {
    const response = await http.get(`/SharePanel/GetProfileInfo`);
    return response;
  } catch (error) {
    return [];
  }
};
