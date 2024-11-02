import http from "../../interceptor";

export const getNewsDetail = async (id) => {
  try {
    const response = await http.get(`/News/${id}`);
    return response.data;
  } catch (error) {
    return [];
  }
};
