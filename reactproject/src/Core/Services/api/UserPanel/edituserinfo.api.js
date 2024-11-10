import http from "../../interceptor";

export const editUserInfo = async () => {
  try {
    const response = await http.put(`/SharePanel/UpdateProfileInfo`);
    return response;
  } catch (error) {
    return [];
  }
};
