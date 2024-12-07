import http from "../../interceptor";

export const addProfileImage = async () => {
  try {
    const response = await http.post(`/SharePanel/AddProfileImage`);
    return response;
  } catch (error) {
    return [];
  }
};
