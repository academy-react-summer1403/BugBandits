import http from "../../interceptor";

export const getNewsCategory = async () => {
  try {
    const response = await http.get(`/News/GetListNewsCategory`);
    return response;
  } catch (error) {
    return [];
  }
};
