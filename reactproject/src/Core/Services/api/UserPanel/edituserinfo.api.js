import http from "../../interceptor";

export const editUserInfo = async (data) => {
  try {
    const response = await http.put(`/SharePanel/UpdateProfileInfo`,data);
    return response;
  } catch (error) {
    console.error('Error updating profile:', error);
    throw error;
  }
};
