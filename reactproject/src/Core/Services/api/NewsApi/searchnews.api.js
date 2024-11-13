import http from "../../interceptor";

export const getNews = async (searchQuery) => {
  try {
    const response = await http.get(`/News?Query=${searchQuery}`);
    return response;
  } catch (error) {
    return [];
  }
};
